import { useEffect, useState, useRef, useMemo } from "react";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

interface NewsItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category: string;
  imageUrl?: string;
  titleAr?: string;
  descriptionAr?: string;
  categoryAr?: string;
}

interface DynamicNewsFeedProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  sources?: string[];
}

export function DynamicNewsFeed({
  title = "Latest Disaster & Humanitarian News",
  subtitle = "Real-time updates from trusted sources: UN OCHA, WHO, IFRC, UNICEF, UNHCR, WFP, MSF, CDC, and leading journalism organizations.",
  maxItems = 6,
  sources = ["all"],
}: DynamicNewsFeedProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [translating, setTranslating] = useState(false);
  const usedImages = useRef<Set<string>>(new Set());
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  // Create a stable string representation of sources to prevent infinite loops
  const sourcesKey = useMemo(
    () => JSON.stringify(sources),
    [JSON.stringify(sources)]
  );

  // Categorized professional images matched to disaster and humanitarian news topics
  // Images are intelligently selected based on article content for contextual relevance
  // EXPANDED: 8-10 unique images per major category to prevent duplicates
  const imageCategories = {
    // Natural Disasters - Water (10 images)
    flood: [
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&q=80", // Flooding emergency
      "https://images.unsplash.com/photo-1627894483386-99aca8586473?w=800&q=80", // Heavy rainfall
      "https://images.unsplash.com/photo-1651578198938-7fe6561108c8?w=800&q=80", // Flood rescue boat
      "https://images.unsplash.com/photo-1567946174667-988665467d53?w=800&q=80", // Flooding city streets
      "https://images.unsplash.com/photo-1759052084198-ef5931be81bc?w=800&q=80", // Monsoon heavy rain
      "https://images.unsplash.com/photo-1629858013157-3ca1ba2fdea6?w=800&q=80", // Flood damage homes
      "https://images.unsplash.com/photo-1760500959972-27f751e094b1?w=800&q=80", // Water disaster emergency
      "https://images.unsplash.com/photo-1692249180427-dbb0bec1952c?w=800&q=80", // River flooding overflow
      "https://images.unsplash.com/photo-1717397326299-21e383f8999b?w=800&q=80", // Storm flooding urban
    ],
    tsunami: [
      "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&q=80", // Coastal damage
      "https://images.unsplash.com/photo-1669465618662-63666c5ab7ba?w=800&q=80", // Tsunami wave damage
    ],

    // Natural Disasters - Seismic (10 images)
    earthquake: [
      "https://images.unsplash.com/photo-1607004664037-d252e9a5f161?w=800&q=80", // Building collapse
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", // Structural damage
      "https://images.unsplash.com/photo-1710022115470-9a6c05ce5a28?w=800&q=80", // Earthquake building collapse
      "https://images.unsplash.com/photo-1597371629705-ea7520b8ab31?w=800&q=80", // Earthquake damage rubble
      "https://images.unsplash.com/photo-1708681097926-2505401227e8?w=800&q=80", // Seismic disaster aftermath
      "https://images.unsplash.com/photo-1610774149656-f4d74dafa99b?w=800&q=80", // Earthquake rescue operations
      "https://images.unsplash.com/photo-1695605347127-37830bbd7ffc?w=800&q=80", // Building destruction disaster
      "https://images.unsplash.com/photo-1758545854576-bb8a194bd164?w=800&q=80", // Structural damage earthquake
      "https://images.unsplash.com/photo-1608039866347-3c1afa2bb6e3?w=800&q=80", // Earthquake survivors help
    ],

    // Natural Disasters - Weather (8 images each)
    hurricane: [
      "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80", // Hurricane/storm
      "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&q=80", // Storm damage
      "https://images.unsplash.com/photo-1675092940979-285b794553d4?w=800&q=80", // Hurricane storm damage
      "https://images.unsplash.com/photo-1667591034910-2fc052438a76?w=800&q=80", // Cyclone destruction wind
      "https://images.unsplash.com/photo-1726312497465-8b5c6d0bc7b0?w=800&q=80", // Typhoon storm system
      "https://images.unsplash.com/photo-1581059729226-c493d3086748?w=800&q=80", // Severe weather tornado
      "https://images.unsplash.com/photo-1760500959977-c3d310ee876c?w=800&q=80", // Tropical storm emergency
    ],
    wildfire: [
      "https://images.unsplash.com/photo-1628685742081-b2da62219b3e?w=800&q=80", // Forest fire
      "https://images.unsplash.com/photo-1603324384982-1e33e1e62f45?w=800&q=80", // Wildfire
      "https://images.unsplash.com/photo-1599325572764-77f6be5adeac?w=800&q=80", // Wildfire forest burning
      "https://images.unsplash.com/photo-1639369488374-561b5486177d?w=800&q=80", // Fire emergency smoke
      "https://images.unsplash.com/photo-1759699631373-b8103eddef4b?w=800&q=80", // Bushfire flames destruction
      "https://images.unsplash.com/photo-1508255217-db3e84049cc8?w=800&q=80", // Forest fire aerial
      "https://images.unsplash.com/photo-1703688848280-b4da6d386f66?w=800&q=80", // Firefighters wildfire battle
    ],
    drought: [
      "https://images.unsplash.com/photo-1534598441515-f1e94e2f5713?w=800&q=80", // Drought conditions
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80", // Water scarcity
      "https://images.unsplash.com/photo-1603446750917-ccfd69742be3?w=800&q=80", // Drought dry land
      "https://images.unsplash.com/photo-1708199533582-8aa0c396142c?w=800&q=80", // Arid desert crisis
      "https://images.unsplash.com/photo-1505281147415-f688150c9b9b?w=800&q=80", // Water scarcity shortage
      "https://images.unsplash.com/photo-1674137083829-2202c0c029ab?w=800&q=80", // Dry earth cracked
    ],

    // Health & Medical (10 images each)
    health: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", // Medical emergency
      "https://images.unsplash.com/photo-1596339502177-8de71f7cacfd?w=800&q=80", // WHO medical response
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80", // Hospital
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80", // Medical care
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800&q=80", // Healthcare workers
      "https://images.unsplash.com/photo-1758404958502-44f156617bae?w=800&q=80", // Medical emergency hospital
      "https://images.unsplash.com/photo-1758691462638-c60c83bd7310?w=800&q=80", // Healthcare workers crisis
      "https://images.unsplash.com/photo-1580795478949-1b81005b91ba?w=800&q=80", // Disease outbreak response
      "https://images.unsplash.com/photo-1758206523685-6e69f80a11ba?w=800&q=80", // Medical aid supplies
      "https://images.unsplash.com/photo-1584582868981-38dbd5d1a86e?w=800&q=80", // Epidemic health crisis
      "https://images.unsplash.com/photo-1758653500437-26660f405fe4?w=800&q=80", // Medical team emergency
      "https://images.unsplash.com/photo-1759693834549-ff197ef70bc3?w=800&q=80", // Pandemic health response
    ],
    vaccine: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80", // Vaccination
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80", // Medical supplies
      "https://images.unsplash.com/photo-1608243499710-5ebece89a37d?w=800&q=80", // Vaccination campaign health
      "https://images.unsplash.com/photo-1758653500124-e916873a84cf?w=800&q=80", // Immunization medical injection
    ],

    // Humanitarian Aid (10 images each)
    humanitarian: [
      "https://images.unsplash.com/photo-1533545587081-bbdccaab0c33?w=800&q=80", // Red Cross aid
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80", // Humanitarian assistance
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80", // Community support
      "https://images.unsplash.com/photo-1637034318492-c5d36e4f6d99?w=800&q=80", // Humanitarian aid workers
      "https://images.unsplash.com/photo-1758206523680-efdd259f9ffb?w=800&q=80", // Red cross relief
    ],
    refugee: [
      "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800&q=80", // Refugee camp
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80", // Displaced persons
      "https://images.unsplash.com/photo-1727858127811-6f47619889a4?w=800&q=80", // Refugee crisis migration
      "https://images.unsplash.com/photo-1759686128693-5c0a4457e99f?w=800&q=80", // Displaced people humanitarian
      "https://images.unsplash.com/photo-1727553957829-e429a578f848?w=800&q=80", // Asylum seekers support
      "https://images.unsplash.com/photo-1593807606077-54f8455a95cb?w=800&q=80", // Migration emergency border
      "https://images.unsplash.com/photo-1727698947585-3e6703525958?w=800&q=80", // Refugee family assistance
    ],
    refugeeCamps: [
      "https://images.unsplash.com/photo-1657701748761-390049907d8d?w=800&q=80", // Refugee camp humanitarian
      "https://images.unsplash.com/photo-1596742910522-4e3f36ebb393?w=800&q=80", // IDP camp shelters
      "https://images.unsplash.com/photo-1727698947614-fe284fd1eb7c?w=800&q=80", // Humanitarian shelter tents
    ],
    empowerment: [
      "https://images.unsplash.com/photo-1759922378187-11a435837df8?w=800&q=80", // Community empowerment education
      "https://images.unsplash.com/photo-1646048340484-6c1a68c8e1e5?w=800&q=80", // Refugee integration support
      "https://images.unsplash.com/photo-1758304480420-5b0f11280115?w=800&q=80", // Community development project
    ],
    food: [
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80", // Food aid
      "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&q=80", // Food distribution
      "https://images.unsplash.com/photo-1759411354058-9e429834f92f?w=800&q=80", // Food aid distribution
      "https://images.unsplash.com/photo-1561673879-297ac83cafc7?w=800&q=80", // Hunger relief program
      "https://images.unsplash.com/photo-1723643328588-6015c2ea8b11?w=800&q=80", // Famine emergency nutrition
      "https://images.unsplash.com/photo-1584568694489-f71bdbac55e2?w=800&q=80", // Food security crisis
      "https://images.unsplash.com/photo-1543868954-7601fecd8845?w=800&q=80", // Malnutrition children emergency
      "https://images.unsplash.com/photo-1757940059959-662478f87b72?w=800&q=80", // Food relief supplies
    ],

    // Conflict & Security (8 images)
    conflict: [
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80", // Conflict response
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80", // Security operations
      "https://images.unsplash.com/photo-1727475807025-f3a9d723b491?w=800&q=80", // Conflict war zone
      "https://images.unsplash.com/photo-1520531174911-9850a1b15efc?w=800&q=80", // Security crisis violence
    ],

    // Climate & Environment (8 images)
    climate: [
      "https://images.unsplash.com/photo-1569163139394-de4798aa62b5?w=800&q=80", // Climate change
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80", // Environmental landscape
      "https://images.unsplash.com/photo-1517065214538-bf49dffab677?w=800&q=80", // Climate change impact
      "https://images.unsplash.com/photo-1610004723499-11b7bc872ffe?w=800&q=80", // Environmental crisis pollution
    ],

    // Media & Journalism
    journalism: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80", // Field journalist
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=800&q=80", // Press conference
      "https://images.unsplash.com/photo-1758665910380-58d5afe9345c?w=800&q=80", // News broadcast
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80", // News coverage
    ],

    // International Organizations
    un: [
      "https://images.unsplash.com/photo-1633095975779-fd354aa0dc95?w=800&q=80", // UN flags
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80", // International cooperation
    ],
    who: [
      "https://images.unsplash.com/photo-1596339502177-8de71f7cacfd?w=800&q=80", // WHO medical
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80", // Health organization
    ],
    redcross: [
      "https://images.unsplash.com/photo-1533545587081-bbdccaab0c33?w=800&q=80", // Red Cross aid
    ],

    // Emergency Response & Coordination (8 images)
    emergency: [
      "https://images.unsplash.com/photo-1708681097926-2505401227e8?w=800&q=80", // Emergency response
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", // Emergency coordination
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80", // Crisis management
      "https://images.unsplash.com/photo-1584690237767-9b063e0c6392?w=800&q=80", // Emergency coordination response
      "https://images.unsplash.com/photo-1660066522109-82af50d99488?w=800&q=80", // Disaster management operations
      "https://images.unsplash.com/photo-1758206524196-838bdb43ab20?w=800&q=80", // Crisis response team
    ],
    coordination: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", // Team coordination
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", // Strategic planning
    ],

    // Data & Technology (expanded to prevent duplicates)
    data: [
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80", // Satellite mapping
      "https://images.unsplash.com/photo-1584291527905-f930791fb1ce?w=800&q=80", // Data visualization
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80", // Data analysis
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // Charts and graphs
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // Business analytics
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80", // Data monitoring
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // Market data
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", // Economic reports
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", // Statistical analysis
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80", // Financial data
    ],
    technology: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80", // Technology monitoring
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", // Global network
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", // AI brain technology
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80", // Digital innovation
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", // Tech programming
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80", // Coding development
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", // Digital tech workspace
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80", // Cybersecurity technology
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // Modern tech systems
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", // Innovation lab
    ],

    // General disaster/crisis
    disaster: [
      "https://images.unsplash.com/photo-1708681097926-2505401227e8?w=800&q=80", // Emergency response
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", // Crisis response
    ],
  };

  // Check if text contains Arabic characters or other non-English scripts
  const isEnglish = (text: string): boolean => {
    if (!text || text.trim() === "") return false;

    // Arabic Unicode range: \u0600-\u06FF
    // Also check for other common non-Latin scripts
    const nonEnglishPattern =
      /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/;

    return !nonEnglishPattern.test(text);
  };

  // Clean and validate text data
  const cleanText = (text: any): string => {
    if (!text || text === "undefined" || text === undefined || text === null) {
      return "";
    }
    return String(text).trim();
  };

  // Intelligent image selection based on article content WITH DUPLICATE PREVENTION
  const selectRelevantImage = (
    title: string,
    description: string,
    category: string
  ): string => {
    const searchText = `${title} ${description} ${category}`.toLowerCase();

    // Helper function to get unique image from category (STRICT duplicate prevention)
    const getRandomFromCategory = (cat: string[]) => {
      // Filter out already used images
      const availableImages = cat.filter((img) => !usedImages.current.has(img));

      // If NO images available in this category, try fallback categories
      if (availableImages.length === 0) {
        // Try humanitarian as first fallback
        const humanitarianAvailable = imageCategories.humanitarian.filter(
          (img) => !usedImages.current.has(img)
        );
        if (humanitarianAvailable.length > 0) {
          const selectedImage =
            humanitarianAvailable[
              Math.floor(Math.random() * humanitarianAvailable.length)
            ];
          usedImages.current.add(selectedImage);
          return selectedImage;
        }

        // Try disaster as second fallback
        const disasterAvailable = imageCategories.disaster.filter(
          (img) => !usedImages.current.has(img)
        );
        if (disasterAvailable.length > 0) {
          const selectedImage =
            disasterAvailable[
              Math.floor(Math.random() * disasterAvailable.length)
            ];
          usedImages.current.add(selectedImage);
          return selectedImage;
        }

        // Last resort: pick ANY unused image from all categories
        const allImages = Object.values(imageCategories).flat();
        const anyAvailable = allImages.filter(
          (img) => !usedImages.current.has(img)
        );
        if (anyAvailable.length > 0) {
          const selectedImage =
            anyAvailable[Math.floor(Math.random() * anyAvailable.length)];
          usedImages.current.add(selectedImage);
          return selectedImage;
        }

        // Absolute last resort: reset and use first image from category
        usedImages.current.clear();
        const selectedImage = cat[0];
        usedImages.current.add(selectedImage);
        return selectedImage;
      }

      // Select random image from available images
      const selectedImage =
        availableImages[Math.floor(Math.random() * availableImages.length)];

      // Mark as used
      usedImages.current.add(selectedImage);

      return selectedImage;
    };

    // PRIORITY 1: SPECIFIC CONTEXT MATCHING (most specific first to avoid generic matches)

    // Economic/Market/Price content (WFP market bulletins, economic reports)
    if (
      searchText.match(
        /\b(market|markets|price|prices|bulletin|economic|economy|trade|trading|commodity|commodities|inflation)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.data);
    }

    // Technology/Innovation/Digital/Rights content
    if (
      searchText.match(
        /\b(technology|technologies|digital|tech|innovation|neurotechnology|neurotechnologies|artificial intelligence|ai|rights|law|legal|model law|protect|protection)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.technology);
    }

    // Natural Disasters - Water-related
    if (
      searchText.match(
        /\b(flood|flooding|floods|deluge|inundation|overflow)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.flood);
    }
    if (searchText.match(/\b(tsunami|tidal wave)\b/i)) {
      return getRandomFromCategory(imageCategories.tsunami);
    }

    // Natural Disasters - Seismic
    if (
      searchText.match(
        /\b(earthquake|earthquakes|seismic|tremor|quake|aftershock)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.earthquake);
    }

    // Natural Disasters - Weather
    if (
      searchText.match(
        /\b(hurricane|hurricanes|cyclone|cyclones|typhoon|typhoons|storm|storms|tornado|tornadoes)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.hurricane);
    }
    if (
      searchText.match(
        /\b(wildfire|wildfires|forest fire|bushfire|blaze|burning)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.wildfire);
    }
    if (
      searchText.match(
        /\b(drought|droughts|arid|dry|water scarcity|water shortage)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.drought);
    }

    // Health & Medical (check vaccine first before general health)
    if (
      searchText.match(
        /\b(vaccine|vaccines|vaccination|vaccinations|immunization|immunizations|inoculation)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.vaccine);
    }
    if (
      searchText.match(
        /\b(health|disease|diseases|epidemic|epidemics|pandemic|pandemics|outbreak|outbreaks|medical|medicine|hospital|hospitals|covid|coronavirus|ebola|cholera|malaria|influenza|virus|viral|infection|patient|patients|doctor|doctors|nurse|nurses)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.health);
    }

    // PRIORITY 2: HUMANITARIAN AID & CRISIS (check specific scenarios first)

    // Food/Nutrition/Hunger (BEFORE general WFP match)
    if (
      searchText.match(
        /\b(food|hunger|famine|malnutrition|starvation|nutrition|feeding|wfp|world food programme)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.food);
    }

    // Refugee/IDP camps (fleeing to camps, living in camps, camp conditions)
    if (
      searchText.match(
        /\b(camp|camps|fleeing|flee|idp|shelter|shelters|tents|hudur|bakool)\b/i
      ) &&
      searchText.match(
        /\b(refugee|refugees|displaced|displacement|drought|insecurity)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.refugeeCamps);
    }
    // Empowerment, integration, and development projects
    if (
      searchText.match(
        /\b(empower|empowering|empowerment|shine|project|decent lives|integration|host communities|impact evaluation|development)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.empowerment);
    }
    // General refugee/displacement
    if (
      searchText.match(
        /\b(refugee|refugees|displaced|displacement|asylum|asylee|migrant|migrants|migration|unhcr)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.refugee);
    }

    if (
      searchText.match(
        /\b(humanitarian|aid|relief|assistance|support|help|rescue|ifrc|red cross|red crescent)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.humanitarian);
    }

    // Conflict & Security
    if (
      searchText.match(
        /\b(conflict|conflicts|war|wars|violence|violent|attack|attacks|crisis|security|armed|weapon|weapons|battle|combat)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.conflict);
    }

    // Climate & Environment
    if (
      searchText.match(
        /\b(climate|climatic|environmental|environment|warming|pollution|polluted|carbon|emissions|greenhouse)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.climate);
    }

    // Media & Journalism
    if (
      searchText.match(
        /\b(journalist|journalists|press|media|reporter|reporters|news|journalism|broadcasting|broadcast)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.journalism);
    }

    // PRIORITY 3: ORGANIZATION-BASED (only if no specific context matches)

    // WHO specific
    if (searchText.match(/\b(who|world health organization)\b/i)) {
      return getRandomFromCategory(imageCategories.who);
    }
    // IFRC/Red Cross specific
    if (searchText.match(/\b(ifrc|red cross|red crescent)\b/i)) {
      return getRandomFromCategory(imageCategories.redcross);
    }
    // Data/Analysis content
    if (
      searchText.match(
        /\b(data|dataset|database|map|maps|mapping|satellite|satellites|gis|geospatial|analytics|analysis|monitor|monitoring)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.data);
    }

    // UN/OCHA/UNICEF (LAST RESORT for organization match)
    if (searchText.match(/\b(un|united nations|ocha|unicef)\b/i)) {
      return getRandomFromCategory(imageCategories.un);
    }

    // Emergency Response & Coordination
    if (
      searchText.match(
        /\b(coordination|coordinate|coordinating|response|operation|operations|planning|plan|strategy|strategic)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.coordination);
    }
    if (
      searchText.match(
        /\b(emergency|emergencies|urgent|critical|alert|alerts|warning|warnings)\b/i
      )
    ) {
      return getRandomFromCategory(imageCategories.emergency);
    }

    // Default fallback - general disaster imagery
    return getRandomFromCategory(imageCategories.disaster);
  };

  // Helper function to fetch with multiple CORS proxy fallbacks
  const fetchWithProxy = async (
    url: string,
    isJson: boolean = false
  ): Promise<any> => {
    const proxies = [
      (url: string) =>
        `https://api.allorigins.win/${
          isJson ? "get" : "raw"
        }?url=${encodeURIComponent(url)}`,
      (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
      (url: string) =>
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
    ];

    for (let i = 0; i < proxies.length; i++) {
      try {
        const proxyUrl = proxies[i](url);
        const response = await fetch(proxyUrl, {
          signal: AbortSignal.timeout(10000), // 10 second timeout
        });

        if (!response.ok) continue;

        if (isJson) {
          const data = await response.json();
          // Handle allorigins wrapper format
          if (data.contents) {
            return JSON.parse(data.contents);
          }
          return data;
        } else {
          return await response.text();
        }
      } catch (err) {
        if (i === proxies.length - 1) throw err;
        continue;
      }
    }
    throw new Error("All CORS proxies failed");
  };

  // Translation function using MyMemory Translation API (free, accurate, no API key needed)
  const translateText = async (
    text: string,
    fromLang: string = "en",
    toLang: string = "ar"
  ): Promise<string> => {
    if (!text || text.trim() === "") return text;

    try {
      // MyMemory Translation API - free and reliable
      const encodedText = encodeURIComponent(text);
      const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${fromLang}|${toLang}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.responseStatus === 200 && data.responseData?.translatedText) {
        return data.responseData.translatedText;
      }

      // Fallback: return original text if translation fails
      return text;
    } catch (err) {
      console.error("Translation error:", err);
      return text;
    }
  };

  // Translate news items when language changes to Arabic
  useEffect(() => {
    if (isArabic && news.length > 0 && !translating) {
      translateNewsItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isArabic, news.length]);

  const translateNewsItems = async () => {
    // Check if already translated
    if (news[0]?.titleAr) return;

    setTranslating(true);

    try {
      const translatedNews = await Promise.all(
        news.map(async (item) => {
          // Add small delay between requests to avoid rate limiting
          await new Promise((resolve) => setTimeout(resolve, 100));

          const [titleAr, descriptionAr, categoryAr] = await Promise.all([
            translateText(item.title),
            translateText(item.description),
            translateText(item.category),
          ]);

          return {
            ...item,
            titleAr,
            descriptionAr,
            categoryAr,
          };
        })
      );

      setNews(translatedNews);
    } catch (err) {
      console.error("Translation batch error:", err);
    } finally {
      setTranslating(false);
    }
  };

  useEffect(() => {
    fetchNews();
    // Refresh every 30 minutes for real-time updates
    const interval = setInterval(fetchNews, 30 * 60 * 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourcesKey]);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    // Reset used images for fresh selection on each fetch
    usedImages.current.clear();

    try {
      // Aggregate news from multiple reliable sources
      const newsItems: NewsItem[] = [];

      // 1. ReliefWeb (UN OCHA) - Disasters & Emergencies
      if (sources.includes("all") || sources.includes("reliefweb")) {
        try {
          const reliefwebUrl =
            "https://api.reliefweb.int/v1/reports?appname=apidoc&profile=list&preset=latest&slim=1&limit=15";
          const reliefwebData = await fetchWithProxy(reliefwebUrl, true);

          reliefwebData.data?.forEach((item: any) => {
            const title = cleanText(item.fields.title);
            const description = cleanText(item.fields.body?.substring(0, 200));
            const category =
              cleanText(item.fields.primary_country?.name) || "Global";

            // Filter: English-only content
            if (!isEnglish(title)) return;

            // Ensure clean data
            if (!title || title === "") return;

            newsItems.push({
              title,
              description:
                description ||
                "Click to read the full report from UN OCHA ReliefWeb",
              link:
                cleanText(item.fields.url) ||
                `https://reliefweb.int/node/${item.id}`,
              pubDate:
                cleanText(item.fields.date?.created) ||
                new Date().toISOString(),
              source: "UN OCHA ReliefWeb",
              category,
              imageUrl: selectRelevantImage(title, description, category),
            });
          });
        } catch (err) {
          console.error("ReliefWeb fetch error:", err);
        }
      }

      // 2. World Health Organization (WHO) Emergency News
      if (sources.includes("all") || sources.includes("who")) {
        try {
          const whoUrl =
            "https://www.who.int/feeds/entity/emergencies/news/rss.xml";
          const whoText = await fetchWithProxy(whoUrl, false);
          const whoItems = parseRSSFeed(
            whoText,
            "WHO Emergency News",
            "Health Emergency"
          );
          newsItems.push(...whoItems);
        } catch (err) {
          console.error("WHO fetch error:", err);
        }
      }

      // 3. IFRC (Red Cross) GO API - Emergency Operations
      if (sources.includes("all") || sources.includes("ifrc")) {
        try {
          const ifrcUrl =
            "https://goadmin.ifrc.org/api/v2/event/?limit=10&ordering=-disaster_start_date";
          const ifrcData = await fetchWithProxy(ifrcUrl, true);

          ifrcData.results?.forEach((item: any) => {
            const title = cleanText(item.name);
            const description = cleanText(item.summary);
            const category = cleanText(item.dtype?.name) || "Disaster Response";

            // Filter: English-only
            if (!isEnglish(title)) return;
            if (!title || title === "") return;

            newsItems.push({
              title,
              description:
                description ||
                "IFRC emergency response operation. Click to read more",
              link: `https://go.ifrc.org/emergencies/${item.id}`,
              pubDate:
                cleanText(item.disaster_start_date) || new Date().toISOString(),
              source: "IFRC (Red Cross)",
              category,
              imageUrl: selectRelevantImage(title, description, category),
            });
          });
        } catch (err) {
          console.error("IFRC fetch error:", err);
        }
      }

      // 4. UNICEF Press Centre
      if (sources.includes("all") || sources.includes("unicef")) {
        try {
          const unicefUrl = "https://www.unicef.org/feeds/press-releases.xml";
          const unicefText = await fetchWithProxy(unicefUrl, false);
          const unicefItems = parseRSSFeed(
            unicefText,
            "UNICEF",
            "Children in Crisis"
          );
          newsItems.push(...unicefItems);
        } catch (err) {
          console.error("UNICEF fetch error:", err);
        }
      }

      // 5. UNHCR (UN Refugee Agency) News
      if (sources.includes("all") || sources.includes("unhcr")) {
        try {
          const unhcrUrl = "https://www.unhcr.org/news/feed";
          const unhcrText = await fetchWithProxy(unhcrUrl, false);
          const unhcrItems = parseRSSFeed(unhcrText, "UNHCR", "Refugee Crisis");
          newsItems.push(...unhcrItems);
        } catch (err) {
          console.error("UNHCR fetch error:", err);
        }
      }

      // 6. WFP (World Food Programme) Stories
      if (sources.includes("all") || sources.includes("wfp")) {
        try {
          const wfpUrl = "https://www.wfp.org/news/feed";
          const wfpText = await fetchWithProxy(wfpUrl, false);
          const wfpItems = parseRSSFeed(wfpText, "WFP", "Food Security");
          newsItems.push(...wfpItems);
        } catch (err) {
          console.error("WFP fetch error:", err);
          // Silently continue - other sources still work
        }
      }

      // 7. Doctors Without Borders (MSF) Emergency News
      if (sources.includes("all") || sources.includes("msf")) {
        try {
          const msfUrl = "https://www.msf.org/rss.xml";
          const msfText = await fetchWithProxy(msfUrl, false);
          const msfItems = parseRSSFeed(
            msfText,
            "MSF (Doctors Without Borders)",
            "Medical Humanitarian"
          );
          newsItems.push(...msfItems);
        } catch (err) {
          console.error("MSF fetch error:", err);
          // Silently continue - other sources still work
        }
      }

      // Filter out any remaining non-English items and ensure no duplicates
      const englishNewsItems = newsItems.filter((item) =>
        isEnglish(item.title)
      );

      // Remove duplicates based on title similarity
      const uniqueNews = englishNewsItems.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.title === item.title)
      );

      // Sort by date (newest first) and limit to maxItems
      const sortedNews = uniqueNews
        .sort(
          (a, b) =>
            new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        )
        .slice(0, maxItems);

      setNews(sortedNews);
    } catch (err) {
      console.error("News fetch error:", err);
      setError("Unable to load live news. Displaying trusted source links.");

      // Fallback to curated reliable source links
      setNews(getFallbackNews());
    } finally {
      setLoading(false);
    }
  };

  const parseRSSFeed = (
    xmlText: string,
    sourceName: string,
    category: string
  ): NewsItem[] => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    const items = xmlDoc.getElementsByTagName("item");
    const newsItems: NewsItem[] = [];

    for (let i = 0; i < Math.min(items.length, 8); i++) {
      const item = items[i];
      const title = cleanText(
        item.getElementsByTagName("title")[0]?.textContent
      );
      let description = cleanText(
        item.getElementsByTagName("description")[0]?.textContent
      );

      // Filter: English-only
      if (!isEnglish(title)) continue;
      if (!title || title === "") continue;

      // Clean description and truncate
      if (description && description.length > 200) {
        description = description.substring(0, 200) + "...";
      }

      newsItems.push({
        title,
        description:
          description || `Click to read the full article from ${sourceName}`,
        link:
          cleanText(item.getElementsByTagName("link")[0]?.textContent) || "",
        pubDate:
          cleanText(item.getElementsByTagName("pubDate")[0]?.textContent) ||
          new Date().toISOString(),
        source: sourceName,
        category: category,
        imageUrl: selectRelevantImage(title, description, category),
      });
    }

    return newsItems;
  };

  const getFallbackNews = (): NewsItem[] => {
    const fallbackItems = [
      {
        title: "ReliefWeb: Humanitarian Situation Reports",
        description:
          "Access real-time situation reports, disaster updates, and humanitarian response information from UN OCHA's global crisis monitoring system.",
        link: "https://reliefweb.int/updates",
        pubDate: new Date().toISOString(),
        source: "UN OCHA ReliefWeb",
        category: "Global Emergencies",
      },
      {
        title: "IFRC: Latest Emergency Operations",
        description:
          "International Federation of Red Cross and Red Crescent Societies' current disaster response operations and emergency appeals worldwide.",
        link: "https://www.ifrc.org/emergencies",
        pubDate: new Date().toISOString(),
        source: "IFRC",
        category: "Disaster Response",
      },
      {
        title: "WHO Emergency Health Updates",
        description:
          "World Health Organization's disease outbreaks, health emergencies, and crisis response updates from their Emergency Response Framework.",
        link: "https://www.who.int/emergencies/overview",
        pubDate: new Date().toISOString(),
        source: "WHO",
        category: "Health Emergencies",
      },
      {
        title: "UNICEF: Children in Crisis Situations",
        description:
          "UNICEF's emergency programs providing life-saving support to children affected by disasters, conflicts, and humanitarian crises.",
        link: "https://www.unicef.org/emergencies",
        pubDate: new Date().toISOString(),
        source: "UNICEF",
        category: "Children Protection",
      },
      {
        title: "UNHCR: Refugee Emergency Response",
        description:
          "UN Refugee Agency's latest operations supporting refugees, internally displaced persons, and asylum seekers in crisis situations.",
        link: "https://www.unhcr.org/emergencies",
        pubDate: new Date().toISOString(),
        source: "UNHCR",
        category: "Refugee Crisis",
      },
      {
        title: "WFP: Food Security Emergency Operations",
        description:
          "World Food Programme's emergency food assistance and nutrition support in disaster-affected and conflict zones worldwide.",
        link: "https://www.wfp.org/emergencies",
        pubDate: new Date().toISOString(),
        source: "WFP",
        category: "Food Security",
      },
    ];

    // Apply intelligent image selection to fallback items
    return fallbackItems.map((item) => ({
      ...item,
      imageUrl: selectRelevantImage(
        item.title,
        item.description,
        item.category
      ),
    }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (isArabic) {
      if (diffDays === 0) return "اليوم";
      if (diffDays === 1) return "أمس";
      if (diffDays < 7) return `منذ ${diffDays} أيام`;
      return date.toLocaleDateString("ar-SA", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } else {
      if (diffDays === 0) return "Today";
      if (diffDays === 1) return "Yesterday";
      if (diffDays < 7) return `${diffDays} days ago`;
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
  };

  if (loading && news.length === 0) {
    return (
      <section className="bg-white px-16 py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <p className="font-['Cabin'] text-[#0c0c09] text-lg mb-8">
              {t("common.loadingNews")}
            </p>
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-16 py-16">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-12 text-left rtl:text-right">
          <h2 className="font-['Aleo'] text-[#0c0c09] text-4xl mb-4">
            {title}
          </h2>
          <p className="font-['Cabin'] text-[#0c0c09] text-lg max-w-3xl">
            {subtitle}
          </p>
          {error && (
            <div className="mt-4 bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-2 rounded">
              {isArabic ? t("common.errorLoadingNews") : error}
            </div>
          )}
          {translating && isArabic && (
            <div className="mt-4 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-2 rounded">
              جاري ترجمة الأخبار إلى العربية...
            </div>
          )}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border border-[rgba(12,12,9,0.15)] overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={
                    item.imageUrl ||
                    "https://images.unsplash.com/photo-1708681097926-2505401227e8?w=800&q=80"
                  }
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left rtl:text-right">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-['Cabin'] text-xs text-[#0c0c09] bg-[#f2f2f2] px-3 py-1 rounded">
                    {isArabic && item.categoryAr
                      ? item.categoryAr
                      : item.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#0c0c09] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-['Aleo'] text-[#0c0c09] text-xl mb-3 group-hover:text-[#f65d5d] transition-colors line-clamp-2">
                  {isArabic && item.titleAr ? item.titleAr : item.title}
                </h3>

                <p className="font-['Cabin'] text-[#0c0c09] text-sm mb-4 line-clamp-3">
                  {isArabic && item.descriptionAr
                    ? item.descriptionAr
                    : item.description ||
                      "Click to read the full article from the source."}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[rgba(12,12,9,0.1)]">
                  <div className="flex items-center gap-2">
                    <Tag className="w-3 h-3 text-[#0c0c09] opacity-50" />
                    <span className="font-['Cabin'] text-xs text-[#0c0c09] font-semibold">
                      {item.source}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#0c0c09] opacity-50" />
                    <span className="font-['Cabin'] text-xs text-[#0c0c09] opacity-70">
                      {formatDate(item.pubDate)}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Source Attribution */}
        <div className="bg-[#f2f2f2] px-6 py-3 rounded-lg border border-[rgba(12,12,9,0.15)]">
          <p className="font-['Cabin'] text-[#0c0c09] text-sm text-center md:text-left rtl:md:text-right">
            <strong>{t("verification.news.trustedLabel")}</strong>{" "}
            {t("verification.news.disclaimerBody")}
          </p>
        </div>
      </div>
    </section>
  );
}
