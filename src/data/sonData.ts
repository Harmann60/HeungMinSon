export interface NavItem {
  id: string
  label: string
  target: string
  sectionId: 'home' | 'on-pitch' | 'archive' | 'off-pitch' | 'gallery'
}

export interface SocialItem {
  id: string
  label: string
  url: string
}

export interface PitchMoment {
  id: string
  title: string
  trophyType: 'europa' | 'goldenboot' | 'puskas' | 'ucl' | 'asiangames' | 'lafc'
  dateHighlight: string
  paragraphs: string[]
  when: string
  result: string
  resultSup?: string
  metricLabel: string
  metricValue: string
}

export interface ArchiveItem {
  id: string
  category: 'Clubs' | 'Korea NT' | 'Signature Boots'
  season: string
  club: string
  title: string
  number: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  pattern: 'stripes' | 'sash' | 'solid' | 'gradient' | 'boot'
  momentTitle: string
  statsLine: string
  description: string
}

export interface CareerChapter {
  id: string
  period: string
  club: string
  league: string
  number: string
  apps: string
  goals: string
  assists: string
  highlight: string
  summary: string
}

export interface GalleryCard {
  id: string
  tag: string
  title: string
  subtitle: string
  year: string
  rotation: string
  palette: 'lime' | 'obsidian' | 'gold' | 'navy' | 'crimson'
  stat: string
  caption: string
  image: string
}

export interface PhotoGalleryItem {
  id: string
  src: string
  alt: string
  title: string
  era: 'Tottenham Hotspur' | 'LAFC' | 'Korea & Awards'
  year: string
  location: string
  caption: string
  aspect: 'portrait' | 'landscape'
}

export const menuList: NavItem[] = [
  { id: 'home', label: 'Home', target: '#hero', sectionId: 'home' },
  { id: 'on-pitch', label: 'On Pitch', target: '#on-pitch', sectionId: 'on-pitch' },
  { id: 'archive', label: 'Kits & Boots', target: '#archive', sectionId: 'archive' },
  { id: 'off-pitch', label: 'Off Pitch', target: '#off-pitch', sectionId: 'off-pitch' },
  { id: 'gallery', label: 'Gallery', target: '#gallery', sectionId: 'gallery' },
]

export const socialMediaList: SocialItem[] = [
  { id: 'ig', label: 'Instagram', url: 'https://www.instagram.com/hm_son7/' },
  { id: 'nos7', label: 'NOS7', url: 'https://nos7.com/' },
  { id: 'lafc', label: 'LAFC #7', url: 'https://www.lafc.com/' },
  { id: 'korea', label: 'Korea NT', url: 'https://www.kfa.or.kr/' },
]

export const onPitchMoments: PitchMoment[] = [
  {
    id: 'bilbao-2025',
    title: 'Bilbao · Europa',
    trophyType: 'europa',
    dateHighlight: 'On May 21, 2025,',
    paragraphs: [
      'Heung-Min Son etched his name into eternal Tottenham Hotspur folklore by lifting the UEFA Europa League trophy as club captain at San Mamés in Bilbao. After a decade of devotion, near-misses, and carrying the badge through every storm, Sonny ended the club’s 17-year wait for silverware.',
      'Leading by example with relentless pressing, selfless leadership, and calm command in the decisive moments of the 1–0 final victory over Manchester United, Son became the first Asian captain to lift a major European club trophy for an English side.',
      'When the final whistle blew, the iconic smile gave way to tears of pure relief and pride — fulfilling the promise he made when he stayed in North London: to become a legend by winning a trophy in Lilywhite.',
    ],
    when: '21 May 25',
    result: '1',
    resultSup: 'st',
    metricLabel: 'Final Score',
    metricValue: '1 – 0 vs MUN',
  },
  {
    id: 'golden-boot-2022',
    title: 'Norwich · Golden Boot',
    trophyType: 'goldenboot',
    dateHighlight: 'On May 22, 2022,',
    paragraphs: [
      'At Carrow Road on the final day of the Premier League season, Heung-Min Son scored twice in five minutes — including a signature whipped curler into the top corner — to reach 23 league goals and claim the 2021–22 Premier League Golden Boot.',
      'Even more astonishing: all 23 goals came from open play with zero penalties, showcasing deadly two-footed finishing from both left and right wings across 35 appearances.',
      'In doing so, Sonny made football history as the first Asian player ever to win the Premier League Golden Boot, uniting fans across North London and South Korea in celebration.',
    ],
    when: '22 May 22',
    result: '23',
    resultSup: 'GLS',
    metricLabel: 'Penalties',
    metricValue: '00 (Pure Open Play)',
  },
  {
    id: 'puskas-burnley-2019',
    title: 'London · Puskás',
    trophyType: 'puskas',
    dateHighlight: 'On December 7, 2019,',
    paragraphs: [
      'Picking up the ball on the edge of his own penalty area against Burnley, Heung-Min Son ignited one of the greatest solo goals in Premier League history. In just 12 seconds, he accelerated 73 meters across the entire pitch, outrunning and weaving past six defenders.',
      'Coolly slotting the finish past Nick Pope inside the box, the strike earned global acclaim and won the 2020 FIFA Puskás Award for the best goal scored anywhere in world football.',
      'It remains the definitive snapshot of Son at full throttle: explosive pace, balance at maximum velocity, and clinical composure at the finish.',
    ],
    when: '07 Dec 19',
    result: '73',
    resultSup: 'M',
    metricLabel: 'Sprint Time',
    metricValue: '12.0 Seconds',
  },
  {
    id: 'etihad-ucl-2019',
    title: 'Etihad · UCL Night',
    trophyType: 'ucl',
    dateHighlight: 'On April 17, 2019,',
    paragraphs: [
      'Inside a roaring Etihad Stadium in the UEFA Champions League Quarter-Final second leg, Heung-Min Son stunned Manchester City with two razor-sharp goals inside three minutes (7’ and 10’) to swing the tie in Tottenham’s favor.',
      'Across both legs, Son scored three of Tottenham’s four goals in one of the most dramatic knockout ties in Champions League history, propelling Spurs into their first-ever European Cup semi-final and final.',
    ],
    when: '17 Apr 19',
    result: '03',
    resultSup: 'GLS',
    metricLabel: 'Tie Aggregate',
    metricValue: '4 – 4 (Away Goals)',
  },
  {
    id: 'asian-games-2018',
    title: 'Bogor · Gold Medal',
    trophyType: 'asiangames',
    dateHighlight: 'On September 1, 2018,',
    paragraphs: [
      'Wearing the captain’s armband for South Korea at the 2018 Asian Games in Indonesia, Son carried the weight of a nation into extra time of the gold-medal final against Japan.',
      'Delivering two decisive plays in extra time to seal a 2–1 triumph, Sonny secured gold for Korea and earned his squad exemption from mandatory military service — a turning point that unlocked the peak years of his world-class career.',
    ],
    when: '01 Sep 18',
    result: '1',
    resultSup: 'st',
    metricLabel: 'Extra Time',
    metricValue: '2 – 1 vs Japan',
  },
  {
    id: 'lafc-2025',
    title: 'Los Angeles · LAFC',
    trophyType: 'lafc',
    dateHighlight: 'In Summer 2025,',
    paragraphs: [
      'After completing a legendary ten-year chapter in North London with 454 appearances and 173 goals, Heung-Min Son embarked on an electrifying new chapter in Major League Soccer with Los Angeles FC.',
      'Pulling on the iconic Black & Gold #7 jersey at BMO Stadium, Son brought Premier League-winning pedigree, trademark camera celebrations, and global star power to Los Angeles — inspiring a new generation across North America.',
    ],
    when: 'Aug 2025',
    result: '07',
    resultSup: 'MLS',
    metricLabel: 'New Home',
    metricValue: 'BMO Stadium, LA',
  },
]

export const archiveItems: ArchiveItem[] = [
  {
    id: 'kit-spurs-2025',
    category: 'Clubs',
    season: '2024–25',
    club: 'Tottenham Hotspur',
    title: 'Bilbao Captain Edition',
    number: '07',
    primaryColor: '#F3F5F7',
    secondaryColor: '#132257',
    accentColor: '#38bdf8',
    pattern: 'solid',
    momentTitle: 'UEFA Europa League Winner',
    statsLine: '173 Total Club Goals · Captain',
    description: 'The Lilywhite shirt worn when Sonny lifted Tottenham’s first trophy in 17 years.',
  },
  {
    id: 'kit-lafc-2025',
    category: 'Clubs',
    season: '2025–26',
    club: 'LAFC',
    title: 'Black & Gold #7',
    number: '07',
    primaryColor: '#111111',
    secondaryColor: '#C39E5C',
    accentColor: '#38bdf8',
    pattern: 'sash',
    momentTitle: 'MLS Arrival Era',
    statsLine: 'BMO Stadium · Los Angeles',
    description: 'Sleek obsidian and metallic gold crest marking Son’s move to Major League Soccer.',
  },
  {
    id: 'kit-spurs-2022',
    category: 'Clubs',
    season: '2021–22',
    club: 'Tottenham Hotspur',
    title: 'Golden Boot Home',
    number: '07',
    primaryColor: '#FFFFFF',
    secondaryColor: '#111836',
    accentColor: '#38bdf8',
    pattern: 'solid',
    momentTitle: '23 Premier League Goals',
    statsLine: '0 Penalties · Historic Golden Boot',
    description: 'Minimalist white classic from the historic season Son became the first Asian Golden Boot winner.',
  },
  {
    id: 'kit-korea-2022',
    category: 'Korea NT',
    season: '2022',
    club: 'Korea Republic',
    title: 'World Cup Red Mask',
    number: '07',
    primaryColor: '#C8102E',
    secondaryColor: '#0C0C0C',
    accentColor: '#38bdf8',
    pattern: 'gradient',
    momentTitle: 'Doha Last-16 Miracle',
    statsLine: '90+1’ Assist vs Portugal',
    description: 'Playing with a fractured eye socket and protective mask, Son slipped Hwang Hee-chan through to send Korea to the Round of 16.',
  },
  {
    id: 'kit-spurs-2019',
    category: 'Clubs',
    season: '2018–19',
    club: 'Tottenham Hotspur',
    title: 'UCL Semi-Final Away',
    number: '07',
    primaryColor: '#009E94',
    secondaryColor: '#132257',
    accentColor: '#38bdf8',
    pattern: 'gradient',
    momentTitle: 'Etihad & Amsterdam Nights',
    statsLine: '3 Goals in UCL Quarter-Final',
    description: 'The unforgettable turquoise away kit from Tottenham’s fairytale march to Madrid.',
  },
  {
    id: 'kit-korea-2018',
    category: 'Korea NT',
    season: '2018',
    club: 'Korea Republic',
    title: 'Taegeuk Warriors Gold',
    number: '07',
    primaryColor: '#E4002B',
    secondaryColor: '#003478',
    accentColor: '#38bdf8',
    pattern: 'stripes',
    momentTitle: 'Asian Games Champion',
    statsLine: 'Gold Medal · Captain',
    description: 'Taegeuk red jersey worn during the emotional 2018 Asian Games gold medal triumph.',
  },
  {
    id: 'kit-leverkusen-2014',
    category: 'Clubs',
    season: '2013–15',
    club: 'Bayer Leverkusen',
    title: 'Werkself Striker',
    number: '07',
    primaryColor: '#141414',
    secondaryColor: '#E32221',
    accentColor: '#38bdf8',
    pattern: 'sash',
    momentTitle: 'Bundesliga & UCL Breakout',
    statsLine: '87 Apps · 29 Goals',
    description: 'Two-footed thunderbolts in Germany that caught Europe’s biggest clubs watching.',
  },
  {
    id: 'kit-hsv-2010',
    category: 'Clubs',
    season: '2010–13',
    club: 'Hamburger SV',
    title: '18-Year-Old Debut',
    number: '40',
    primaryColor: '#FFFFFF',
    secondaryColor: '#0A5BA4',
    accentColor: '#38bdf8',
    pattern: 'stripes',
    momentTitle: 'First Bundesliga Goal vs Köln',
    statsLine: '78 Apps · 20 Goals',
    description: 'Where the European dream began — scoring on his Bundesliga debut at just 18.',
  },
  {
    id: 'boot-son-x',
    category: 'Signature Boots',
    season: '2023',
    club: 'Adidas X Crazyfast',
    title: '“SON” Signature Pack',
    number: '07',
    primaryColor: '#070b19',
    secondaryColor: '#38bdf8',
    accentColor: '#f8fafc',
    pattern: 'boot',
    momentTitle: 'First Asian Signature Boot',
    statsLine: 'Neon Lime / Seoul Seoulite',
    description: 'Adidas’s landmark signature boot celebrating Son’s 10-year partnership and Seoul’s electric night energy.',
  },
]

export const careerChapters: CareerChapter[] = [
  {
    id: 'hsv',
    period: '2010 – 2013',
    club: 'Hamburger SV',
    league: 'Bundesliga',
    number: '#40 / #15',
    apps: '78',
    goals: '20',
    assists: '3',
    highlight: 'Youngest HSV Bundesliga scorer (18y 3m)',
    summary: 'Moved to Germany at 16 without speaking the language; earned his senior breakthrough and stunned Köln on debut.',
  },
  {
    id: 'bayer',
    period: '2013 – 2015',
    club: 'Bayer 04 Leverkusen',
    league: 'Bundesliga & UCL',
    number: '#7',
    apps: '87',
    goals: '29',
    assists: '11',
    highlight: 'First hat-trick vs former club HSV',
    summary: 'Claimed the #7 shirt, developed lethal counter-attacking speed, and proved himself on Champions League nights.',
  },
  {
    id: 'spurs',
    period: '2015 – 2025',
    club: 'Tottenham Hotspur',
    league: 'Premier League',
    number: '#7 (Captain)',
    apps: '454',
    goals: '173',
    assists: '101',
    highlight: 'Golden Boot · Puskás · Europa League Trophy',
    summary: 'Ten unforgettable seasons. 5th highest scorer in club history, Premier League Centurion, and Trophy-lifting Captain.',
  },
  {
    id: 'korea',
    period: '2010 – Present',
    club: 'South Korea NT',
    league: 'International',
    number: '#7 (Captain)',
    apps: '130+',
    goals: '50+',
    assists: '22',
    highlight: '2018 Asian Games Gold · 3× World Cups',
    summary: 'A cultural icon uniting millions, carrying the Taegeuk Warriors through World Cups, Asian Cups, and Olympic glory.',
  },
  {
    id: 'lafc',
    period: '2025 – Present',
    club: 'Los Angeles FC',
    league: 'Major League Soccer',
    number: '#7',
    apps: 'Active',
    goals: 'Ongoing',
    assists: 'Ongoing',
    highlight: 'New chapter in Black & Gold',
    summary: 'Bringing world-class finishing, leadership, and the signature camera celebration to Los Angeles.',
  },
]

export const galleryCards: GalleryCard[] = [
  {
    id: 'card-1',
    tag: 'SPURS LEGEND',
    title: 'North London Mural',
    subtitle: 'Camera Celebration & Trophy',
    year: '2025',
    rotation: '-rotate-6',
    palette: 'lime',
    stat: '173 Goals',
    caption: 'The iconic Tottenham High Road mural celebrating Sonny’s camera celebration and Europa League trophy lift.',
    image: '/images/son/son-mural.jpg',
  },
  {
    id: 'card-2',
    tag: 'LAFC #7',
    title: 'In Full Flight',
    subtitle: 'Black & Gold Era',
    year: '2026',
    rotation: 'rotate-2',
    palette: 'obsidian',
    stat: 'MLS #7',
    caption: 'Heung-Min Son surging forward on the dribble in LAFC Black & Gold.',
    image: '/images/son/son-lafc-174.jpg',
  },
  {
    id: 'card-3',
    tag: 'ASIA’S FINEST',
    title: 'The Iconic Smile',
    subtitle: 'Best Footballer in Asia',
    year: '2023',
    rotation: 'rotate-6',
    palette: 'gold',
    stat: '9× Winner',
    caption: 'Sonny beaming in Tottenham training gear alongside his Best Footballer in Asia trophy.',
    image: '/images/son/son-bfa-2023.jpg',
  },
  {
    id: 'card-4',
    tag: 'CAPTAIN #7',
    title: 'Leading Lilywhite',
    subtitle: 'Carabao Cup vs Man Utd',
    year: '2024',
    rotation: '-rotate-3',
    palette: 'navy',
    stat: 'Captain',
    caption: 'Wearing the Tottenham captain’s armband and number 7 under the lights in North London.',
    image: '/images/son/son-spurs-2024.jpg',
  },
  {
    id: 'card-5',
    tag: 'LOS ANGELES',
    title: 'Under MLS Lights',
    subtitle: 'NYCFC vs LAFC',
    year: '2026',
    rotation: 'rotate-3',
    palette: 'crimson',
    stat: 'BMO #7',
    caption: 'Heung-Min Son turning on the pitch in the Black & Gold #7 jersey.',
    image: '/images/son/son-lafc-152.jpg',
  },
  {
    id: 'card-6',
    tag: 'GERMANY ERA',
    title: 'Bayer Leverkusen',
    subtitle: 'First BFA Trophy',
    year: '2014',
    rotation: '-rotate-2',
    palette: 'lime',
    stat: '29 Goals',
    caption: 'A young Sonny at Bayer Leverkusen lifting his very first Best Footballer in Asia award.',
    image: '/images/son/son-leverkusen-2014.jpg',
  },
]

export const photoGalleryList: PhotoGalleryItem[] = [
  {
    id: 'pg-mural',
    src: '/images/son/son-mural.jpg',
    alt: 'Heung-Min Son Tottenham High Road Mural',
    title: 'Tottenham High Road Mural',
    era: 'Tottenham Hotspur',
    year: '2025',
    location: 'North London, UK',
    caption: 'Monumental mural in Tottenham honoring Sonny’s camera celebration and Europa League trophy lift.',
    aspect: 'landscape',
  },
  {
    id: 'pg-lafc-174',
    src: '/images/son/son-lafc-174.jpg',
    alt: 'Heung-Min Son dribbling for LAFC',
    title: 'Full Throttle in Black & Gold',
    era: 'LAFC',
    year: '2026',
    location: 'NYCFC v LAFC',
    caption: 'Explosive pace and trademark focus driving at defenders in MLS.',
    aspect: 'portrait',
  },
  {
    id: 'pg-bfa-2023',
    src: '/images/son/son-bfa-2023.jpg',
    alt: 'Heung-Min Son Best Footballer in Asia 2023',
    title: 'Best Footballer in Asia',
    era: 'Korea & Awards',
    year: '2023',
    location: 'London, UK',
    caption: 'Sonny with his trademark smile accepting the Best Footballer in Asia award.',
    aspect: 'portrait',
  },
  {
    id: 'pg-spurs-2024',
    src: '/images/son/son-spurs-2024.jpg',
    alt: 'Heung-Min Son Spurs Captain vs Manchester United',
    title: 'Captain #7 vs Man United',
    era: 'Tottenham Hotspur',
    year: '2024',
    location: 'Tottenham Hotspur Stadium',
    caption: 'Leading the line in Lilywhite with the captain’s armband.',
    aspect: 'landscape',
  },
  {
    id: 'pg-lafc-106',
    src: '/images/son/son-lafc-106.jpg',
    alt: 'Heung-Min Son in LAFC jersey',
    title: 'LAFC Matchday Focus',
    era: 'LAFC',
    year: '2026',
    location: 'Major League Soccer',
    caption: 'Locked in during LAFC’s road clash against New York City FC.',
    aspect: 'landscape',
  },
  {
    id: 'pg-lafc-057',
    src: '/images/son/son-lafc-057.jpg',
    alt: 'Heung-Min Son close-up portrait in LAFC kit',
    title: 'Portrait in Black & Gold',
    era: 'LAFC',
    year: '2026',
    location: 'Major League Soccer',
    caption: 'Close-up matchday portrait before kickoff in LAFC’s geometric gold kit.',
    aspect: 'portrait',
  },
  {
    id: 'pg-spurs-2017',
    src: '/images/son/son-spurs-2017.jpg',
    alt: 'Heung-Min Son playing for Tottenham in 2017',
    title: 'Early Spurs Wing Play',
    era: 'Tottenham Hotspur',
    year: '2017',
    location: 'Premier League',
    caption: 'Skipping down the touchline in his early Tottenham seasons.',
    aspect: 'landscape',
  },
  {
    id: 'pg-leverkusen-2014',
    src: '/images/son/son-leverkusen-2014.jpg',
    alt: 'Heung-Min Son Bayer Leverkusen 2014',
    title: 'The Breakthrough in Germany',
    era: 'Korea & Awards',
    year: '2014',
    location: 'BayArena, Leverkusen',
    caption: 'Holding his first Best Footballer in Asia trophy during his Leverkusen breakout.',
    aspect: 'portrait',
  },
  {
    id: 'pg-lafc-138',
    src: '/images/son/son-lafc-138.jpg',
    alt: 'Heung-Min Son wearing number 7 shorts for LAFC',
    title: 'Always Number 7',
    era: 'LAFC',
    year: '2026',
    location: 'Major League Soccer',
    caption: 'Commanding the pitch in LAFC’s #7.',
    aspect: 'landscape',
  },
  {
    id: 'pg-lafc-152',
    src: '/images/son/son-lafc-152.jpg',
    alt: 'Heung-Min Son back number 7 LAFC jersey',
    title: 'SON 7 — Back Print',
    era: 'LAFC',
    year: '2026',
    location: 'Major League Soccer',
    caption: 'The iconic SON #7 lettering in metallic LAFC gold.',
    aspect: 'landscape',
  },
  {
    id: 'pg-korea-2018',
    src: '/images/son/son-korea-wc2018.png',
    alt: 'Heung-Min Son South Korea World Cup 2018 squad send-off',
    title: 'Taegeuk Warriors Send-Off',
    era: 'Korea & Awards',
    year: '2018',
    location: 'Seoul, South Korea',
    caption: 'Representing South Korea ahead of the 2018 FIFA World Cup campaign.',
    aspect: 'portrait',
  },
  {
    id: 'pg-korea-2022',
    src: '/images/son/son-korea-2022.jpg',
    alt: 'Heung-Min Son South Korea Presidential Reception 2022',
    title: 'National Hero · 2022',
    era: 'Korea & Awards',
    year: '2022',
    location: 'Seoul, South Korea',
    caption: 'Returning home after captaining South Korea to the World Cup Round of 16.',
    aspect: 'portrait',
  },
]

export const marqueeBrands = [
  'TOTTENHAM HOTSPUR',
  'LAFC #7',
  'KOREA REPUBLIC',
  'BAYER LEVERKUSEN',
  'HAMBURGER SV',
  'ADIDAS',
  'NOS7',
  'BURBERRY',
  'PUSKÁS 2020',
  'GOLDEN BOOT 2022',
  'EUROPA LEAGUE 2025',
  'EFFORT NEVER BETRAYS YOU',
]
