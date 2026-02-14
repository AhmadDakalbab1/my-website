<?php
/**
 * Simple Admin Panel to View Resource Submissions
 * Access: http://localhost/media-toolkit/api/view-submissions.php
 */

// Database configuration - must match submit-resource.php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'media_toolkit');

// Connect to database
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Check connection
if ($conn->connect_error) {
    die("<h1>Connection Failed</h1><p>Error: " . $conn->connect_error . "</p><p>Make sure WAMP is running and database is created.</p>");
}

// Get filter parameters
$status_filter = isset($_GET['status']) ? $_GET['status'] : 'all';
$search = isset($_GET['search']) ? $_GET['search'] : '';

// Build query
$query = "SELECT * FROM resource_submissions WHERE 1=1";

if ($status_filter !== 'all') {
    $query .= " AND status = '" . $conn->real_escape_string($status_filter) . "'";
}

if ($search !== '') {
    $search_term = $conn->real_escape_string($search);
    $query .= " AND (name LIKE '%$search_term%' OR email LIKE '%$search_term%' OR resource_name LIKE '%$search_term%')";
}

$query .= " ORDER BY submission_date DESC";

$result = $conn->query($query);

// Get statistics
$stats = $conn->query("SELECT 
    COUNT(*) as total,
    SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
    SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) as approved,
    SUM(CASE WHEN status = 'rejected' THEN 1 ELSE 0 END) as rejected
    FROM resource_submissions")->fetch_assoc();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resource Submissions - Admin Panel</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            padding: 20px;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 30px;
        }
        
        h1 {
            color: #0c0c09;
            margin-bottom: 10px;
            font-size: 2em;
        }
        
        .subtitle {
            color: #666;
            margin-bottom: 30px;
        }
        
        /* Statistics Cards */
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .stat-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .stat-card.pending { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .stat-card.approved { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
        .stat-card.rejected { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
        
        .stat-card h3 {
            font-size: 0.9em;
            opacity: 0.9;
            margin-bottom: 10px;
        }
        
        .stat-card .number {
            font-size: 2.5em;
            font-weight: bold;
        }
        
        /* Filters */
        .filters {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            align-items: center;
        }
        
        .filters label {
            font-weight: 600;
            color: #333;
        }
        
        .filters select,
        .filters input[type="text"] {
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        
        .filters button {
            padding: 10px 20px;
            background: #f65d5d;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s;
        }
        
        .filters button:hover {
            background: #e54d4d;
        }
        
        /* Table */
        .table-container {
            overflow-x: auto;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        
        th, td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #eee;
        }
        
        th {
            background-color: #f65d5d;
            color: white;
            font-weight: 600;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        
        tr:hover {
            background-color: #f9f9f9;
        }
        
        td {
            color: #333;
        }
        
        .status-badge {
            display: inline-block;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.85em;
            font-weight: 600;
            text-transform: uppercase;
        }
        
        .status-pending {
            background-color: #fff3cd;
            color: #856404;
        }
        
        .status-approved {
            background-color: #d4edda;
            color: #155724;
        }
        
        .status-rejected {
            background-color: #f8d7da;
            color: #721c24;
        }
        
        .email-link {
            color: #f65d5d;
            text-decoration: none;
        }
        
        .email-link:hover {
            text-decoration: underline;
        }
        
        .url-link {
            color: #667eea;
            text-decoration: none;
            word-break: break-all;
        }
        
        .url-link:hover {
            text-decoration: underline;
        }
        
        .no-results {
            text-align: center;
            padding: 40px;
            color: #999;
            font-size: 1.2em;
        }
        
        .view-details {
            background: #667eea;
            color: white;
            padding: 8px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.85em;
        }
        
        .view-details:hover {
            background: #5568d3;
        }
        
        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
            overflow-y: auto;
        }
        
        .modal-content {
            background: white;
            max-width: 800px;
            margin: 50px auto;
            padding: 30px;
            border-radius: 8px;
            position: relative;
        }
        
        .close-modal {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 30px;
            cursor: pointer;
            color: #999;
        }
        
        .close-modal:hover {
            color: #333;
        }
        
        .detail-row {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        
        .detail-row:last-child {
            border-bottom: none;
        }
        
        .detail-label {
            font-weight: 600;
            color: #666;
            margin-bottom: 5px;
        }
        
        .detail-value {
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📊 Resource Submissions</h1>
        <p class="subtitle">Media Toolkit for Disaster Reporting - Admin Panel</p>
        
        <!-- Statistics -->
        <div class="stats">
            <div class="stat-card">
                <h3>Total Submissions</h3>
                <div class="number"><?php echo $stats['total']; ?></div>
            </div>
            <div class="stat-card pending">
                <h3>Pending Review</h3>
                <div class="number"><?php echo $stats['pending']; ?></div>
            </div>
            <div class="stat-card approved">
                <h3>Approved</h3>
                <div class="number"><?php echo $stats['approved']; ?></div>
            </div>
            <div class="stat-card rejected">
                <h3>Rejected</h3>
                <div class="number"><?php echo $stats['rejected']; ?></div>
            </div>
        </div>
        
        <!-- Filters -->
        <form class="filters" method="GET">
            <div>
                <label for="status">Status:</label>
                <select name="status" id="status">
                    <option value="all" <?php echo $status_filter === 'all' ? 'selected' : ''; ?>>All</option>
                    <option value="pending" <?php echo $status_filter === 'pending' ? 'selected' : ''; ?>>Pending</option>
                    <option value="approved" <?php echo $status_filter === 'approved' ? 'selected' : ''; ?>>Approved</option>
                    <option value="rejected" <?php echo $status_filter === 'rejected' ? 'selected' : ''; ?>>Rejected</option>
                </select>
            </div>
            
            <div>
                <label for="search">Search:</label>
                <input type="text" name="search" id="search" placeholder="Name, email, or resource..." value="<?php echo htmlspecialchars($search); ?>">
            </div>
            
            <button type="submit">Apply Filters</button>
            <a href="view-submissions.php" style="margin-left: 10px; color: #666; text-decoration: none;">Clear</a>
        </form>
        
        <!-- Table -->
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Resource</th>
                        <th>Type</th>
                        <th>Country</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if ($result && $result->num_rows > 0): ?>
                        <?php while($row = $result->fetch_assoc()): ?>
                        <tr>
                            <td><?php echo $row['id']; ?></td>
                            <td><?php echo date('M j, Y', strtotime($row['submission_date'])); ?></td>
                            <td><?php echo htmlspecialchars($row['name']); ?></td>
                            <td><a href="mailto:<?php echo htmlspecialchars($row['email']); ?>" class="email-link"><?php echo htmlspecialchars($row['email']); ?></a></td>
                            <td><?php echo htmlspecialchars($row['resource_name']); ?></td>
                            <td><?php echo ucfirst(htmlspecialchars($row['resource_type'])); ?></td>
                            <td><?php echo htmlspecialchars($row['country']); ?></td>
                            <td>
                                <span class="status-badge status-<?php echo $row['status']; ?>">
                                    <?php echo $row['status']; ?>
                                </span>
                            </td>
                            <td>
                                <button class="view-details" onclick='showDetails(<?php echo json_encode($row); ?>)'>
                                    View Details
                                </button>
                            </td>
                        </tr>
                        <?php endwhile; ?>
                    <?php else: ?>
                        <tr>
                            <td colspan="9" class="no-results">
                                No submissions found. <?php echo $search ? 'Try different search terms.' : 'Submit your first resource!'; ?>
                            </td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
    
    <!-- Modal for Details -->
    <div id="detailsModal" class="modal">
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <h2 style="margin-bottom: 20px;">Submission Details</h2>
            <div id="modalContent"></div>
        </div>
    </div>
    
    <script>
        function showDetails(data) {
            const modal = document.getElementById('detailsModal');
            const content = document.getElementById('modalContent');
            
            content.innerHTML = `
                <div class="detail-row">
                    <div class="detail-label">Submission ID</div>
                    <div class="detail-value">#${data.id}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Submission Date</div>
                    <div class="detail-value">${new Date(data.submission_date).toLocaleString()}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Submitter Name</div>
                    <div class="detail-value">${escapeHtml(data.name)}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Email</div>
                    <div class="detail-value"><a href="mailto:${escapeHtml(data.email)}" class="email-link">${escapeHtml(data.email)}</a></div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Organization</div>
                    <div class="detail-value">${escapeHtml(data.organization) || 'Not provided'}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Country</div>
                    <div class="detail-value">${escapeHtml(data.country)}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Resource Name</div>
                    <div class="detail-value">${escapeHtml(data.resource_name)}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Resource Type</div>
                    <div class="detail-value">${escapeHtml(data.resource_type)}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Resource URL</div>
                    <div class="detail-value"><a href="${escapeHtml(data.resource_url)}" target="_blank" class="url-link">${escapeHtml(data.resource_url)}</a></div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Description</div>
                    <div class="detail-value">${escapeHtml(data.description)}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Tags</div>
                    <div class="detail-value">${escapeHtml(data.tags) || 'None'}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Consent to Attribution</div>
                    <div class="detail-value">${data.consent == 1 ? 'Yes' : 'No'}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Status</div>
                    <div class="detail-value"><span class="status-badge status-${data.status}">${data.status}</span></div>
                </div>
            `;
            
            modal.style.display = 'block';
        }
        
        function closeModal() {
            document.getElementById('detailsModal').style.display = 'none';
        }
        
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('detailsModal');
            if (event.target == modal) {
                closeModal();
            }
        }
    </script>
</body>
</html>
<?php $conn->close(); ?>
