<?php
/**
 * Media Toolkit - Resource Submission API
 * This file handles form submissions and saves them to MySQL database
 */

// Enable error reporting but don't display errors (to ensure clean JSON output)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Allow CORS for React app (adjust the origin to match your frontend URL)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Database configuration
// IMPORTANT: Update these values to match your WAMP configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');           // Default WAMP username
define('DB_PASS', '');                // Default WAMP password is empty
define('DB_NAME', 'media_toolkit');   // Database name

// Email configuration
define('ADMIN_EMAIL', 'u18103921@sharjah.ac.ae');

try {
    // Get JSON data from request
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    if (!$data) {
        throw new Exception('Invalid JSON data');
    }
    
    // Validate required fields
    $required = ['name', 'email', 'resourceType', 'resourceName', 'resourceUrl', 'description', 'country'];
    foreach ($required as $field) {
        if (empty($data[$field])) {
            throw new Exception("Missing required field: $field");
        }
    }
    
    // Sanitize inputs
    $name = htmlspecialchars(trim($data['name']));
    $email = filter_var(trim($data['email']), FILTER_VALIDATE_EMAIL);
    $organization = htmlspecialchars(trim($data['organization'] ?? ''));
    $country = htmlspecialchars(trim($data['country']));
    $resourceType = htmlspecialchars(trim($data['resourceType']));
    $resourceName = htmlspecialchars(trim($data['resourceName']));
    $resourceUrl = filter_var(trim($data['resourceUrl']), FILTER_VALIDATE_URL);
    $description = htmlspecialchars(trim($data['description']));
    $tags = htmlspecialchars(trim($data['tags'] ?? ''));
    $consent = isset($data['consent']) && $data['consent'] ? 1 : 0;
    
    // Validate email
    if (!$email) {
        throw new Exception('Invalid email address');
    }
    
    // Validate URL
    if (!$resourceUrl) {
        throw new Exception('Invalid resource URL');
    }
    
    // Connect to database
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    // Check connection
    if ($conn->connect_error) {
        throw new Exception('Database connection failed: ' . $conn->connect_error);
    }
    
    // Prepare SQL statement
    $stmt = $conn->prepare("
        INSERT INTO resource_submissions 
        (name, email, organization, country, resource_type, resource_name, resource_url, description, tags, consent, submission_date, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), 'pending')
    ");
    
    if (!$stmt) {
        throw new Exception('Prepare failed: ' . $conn->error);
    }
    
    // Bind parameters
    $stmt->bind_param(
        "sssssssssi",
        $name,
        $email,
        $organization,
        $country,
        $resourceType,
        $resourceName,
        $resourceUrl,
        $description,
        $tags,
        $consent
    );
    
    // Execute statement
    if (!$stmt->execute()) {
        throw new Exception('Execute failed: ' . $stmt->error);
    }
    
    $submissionId = $conn->insert_id;
    
    // Close database connection
    $stmt->close();
    $conn->close();
    
    // Send email notification to admin
    $emailSubject = "New Resource Submission: $resourceName";
    $emailBody = "
New Resource Submission - Media Toolkit for Disaster Reporting

Submission ID: $submissionId

CONTACT INFORMATION:
Name: $name
Email: $email
Organization: " . ($organization ?: 'Not provided') . "
Country: $country

RESOURCE DETAILS:
Type: $resourceType
Name: $resourceName
URL: $resourceUrl
Tags: " . ($tags ?: 'None') . "

DESCRIPTION:
$description

CONSENT:
User has consented to being listed as a contributor: " . ($consent ? 'Yes' : 'No') . "

---
Submitted on: " . date('Y-m-d H:i:s') . "

To review this submission, log in to your admin panel.
    ";
    
    // Send email
    $headers = "From: noreply@mediatoolkit.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    mail(ADMIN_EMAIL, $emailSubject, $emailBody, $headers);
    
    // Return success response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Resource submitted successfully! We will review it and get back to you within 5-7 business days.',
        'submissionId' => $submissionId
    ]);
    
} catch (Exception $e) {
    // Return error response
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>
