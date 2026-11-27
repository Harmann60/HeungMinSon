export interface NavItem {
  id: string
  label: string
  hangul: string
  target: string
  sectionId: 'home' | 'goals' | 'on-pitch' | 'archive' | 'off-pitch' | 'gallery'
}

export interface SocialItem {
  id: string
  label: string
  url: string
}

export interface SignatureGoal {
  id: string
  title: string
  opponent: string
  competition: string
  date: string
  minute: string
  foot: 'Right Foot' | 'Left Foot'
  distance: string
  speedOrCurve: string
  description: string
  /** SVG coordinates inside 0..600 x 0..360 tactical pitch */
  pathD: string
  startX: number
  startY: number
  shotX: number
  shotY: number
  goalY: number
}

export interface PitchMoment {
  id: string
  title: string
  hangul: string
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
  hangulClub: string
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
  cityHangul: string
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
  frameCode: string
  tag: string
  title: string
  subtitle: string
  year: string
  rotation: string
  palette: 'gold' | 'obsidian' | 'crimson' | 'navy' | 'taegeuk'
  stat: string
  caption: string
}

export const menuList: NavItem[] = [
  { id: 'home', label: 'Viewfinder', hangul: '홈', target: '#hero', sectionId: 'home' },
  { id: 'goals', label: 'Goal Radar', hangul: '득점 레이더', target: '#goals', sectionId: 'goals' },
  { id: 'on-pitch', label: 'Legacy Nights', hangul: '명경기', target: '#on-pitch', sectionId: 'on-pitch' },
  { id: 'archive', label: 'Matchworn Vault', hangul: '유니폼', target: '#archive', sectionId: 'archive' },
  { id: 'off-pitch', label: 'Passport', hangul: '커리어', target: '#off-pitch', sectionId: 'off-pitch' },
  { id: 'gallery', label: 'Contact Sheet', hangul: '팬 월', target: '#gallery', sectionId: 'gallery' },
]

export const socialMediaList: SocialItem[] = [
  { id: 'ig', label: 'Instagram', url: 'https://www.instagram.com/hm_son7/' },
  { id: 'nos7', label: 'NOS7', url: 'https://nos7.com/' },
  { id: 'lafc', label: 'LAFC #7', url: 'https://www.lafc.com/' },
  { id: 'korea', label: 'Korea NT', url: 'https://www.kfa.or.kr/' },
]

export const signatureGoals: SignatureGoal[] = [
  {
    id: 'burnley-puskas',
    title: '73m Solo Coast-to-Coast',
    opponent: 'vs Burnley (H)',
    competition: 'Premier League · FIFA Puskás Winner',
    date: '07 Dec 2019',
    minute: '32’',
    foot: 'Right Foot',
    distance: '73 Meters Run',
    speedOrCurve: '12.0s · 34.4 km/h',
    description:
      'Collected the ball outside his own box, burned past six Burnley defenders in 12 seconds flat, and slotted coolly past Nick Pope.',
    pathD: 'M 90 215 Q 240 245 360 190 T 505 170',
    startX: 90,
    startY: 215,
    shotX: 505,
    shotY: 170,
    goalY: 184,
  },
  {
    id: 'arsenal-curler',
    title: 'North London Derby Whip',
    opponent: 'vs Arsenal (H)',
    competition: 'Premier League',
    date: '06 Dec 2020',
    minute: '13’',
    foot: 'Right Foot',
    distance: '24 Yards',
    speedOrCurve: 'Top-Right Corner',
    description:
      'Cut inside from the left channel, opened his body, and bent an unstoppable curling rocket straight into the far top corner past Leno.',
    pathD: 'M 330 78 Q 375 100 412 118',
    startX: 330,
    startY: 78,
    shotX: 412,
    shotY: 118,
    goalY: 158,
  },
  {
    id: 'norwich-left-curler',
    title: 'Golden Boot Left-Foot Screamer',
    opponent: 'vs Norwich (A)',
    competition: 'Premier League · Goal #23',
    date: '22 May 2022',
    minute: '75’',
    foot: 'Left Foot',
    distance: '22 Yards',
    speedOrCurve: '104 km/h Curl',
    description:
      'Shifted onto his supposedly “weaker” left foot at Carrow Road and bent a venomous strike into the side netting to seal the Golden Boot.',
    pathD: 'M 385 270 Q 418 242 448 228',
    startX: 385,
    startY: 270,
    shotX: 448,
    shotY: 228,
    goalY: 202,
  },
  {
    id: 'etihad-ucl',
    title: 'Etihad UCL Lightning Strike',
    opponent: 'vs Man City (A)',
    competition: 'UEFA Champions League QF',
    date: '17 Apr 2019',
    minute: '10’',
    foot: 'Right Foot',
    distance: '20 Yards',
    speedOrCurve: 'Top-Bins Bend',
    description:
      'Just three minutes after his equalizer, Son curled an audacious strike into the top corner from the left edge of the box to silence the Etihad.',
    pathD: 'M 380 95 Q 415 112 452 126',
    startX: 380,
    startY: 95,
    shotX: 452,
    shotY: 126,
    goalY: 156,
  },
  {
    id: 'korea-germany',
    title: 'Kazan Counter Sprint',
    opponent: 'vs Germany (N)',
    competition: 'FIFA World Cup 2018',
    date: '27 Jun 2018',
    minute: '90+6’',
    foot: 'Left Foot',
    distance: '58m Sprint',
    speedOrCurve: 'Empty Net Finish',
    description:
      'Sprinted the length of Kazan Arena in stoppage time onto Ju Se-jong’s long ball and tapped home with his left foot to knock out the reigning champions.',
    pathD: 'M 190 130 Q 340 120 530 165',
    startX: 190,
    startY: 130,
    shotX: 530,
    shotY: 165,
    goalY: 178,
  },
]

export const onPitchMoments: PitchMoment[] = [
  {
    id: 'bilbao-2025',
    title: 'Bilbao · Europa',
    hangul: '유로파 리그 우승',
    trophyType: 'europa',
    dateHighlight: 'On May 21, 2025,',
    paragraphs: [
      'Heung-Min Son etched his name into eternal Tottenham Hotspur folklore by lifting the UEFA Europa League trophy as club captain at San Mamés in Bilbao — ending the club’s 17-year wait for silverware.',
      'Leading by example with relentless pressing and selfless leadership in the 1–0 victory over Manchester United, Son became the first Asian captain to lift a major European club trophy for an English side.',
      'When the final whistle blew, the iconic smile gave way to tears of pure pride — fulfilling his promise to stay in North London until he lifted a cup in Lilywhite.',
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
    hangul: '프리미어리그 득점왕',
    trophyType: 'goldenboot',
    dateHighlight: 'On May 22, 2022,',
    paragraphs: [
      'At Carrow Road on the final day of the season, Heung-Min Son scored twice in five minutes — sealed by a trademark left-footed curler — to reach 23 league goals and win the Premier League Golden Boot.',
      'All 23 goals came from open play with zero penalties, showcasing razor-sharp two-footed finishing across 35 appearances.',
      'Sonny made football history as the first Asian player ever to win the Premier League Golden Boot.',
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
    hangul: '푸스카스상 73m 원더골',
    trophyType: 'puskas',
    dateHighlight: 'On December 7, 2019,',
    paragraphs: [
      'Picking up the ball on the edge of his own penalty area against Burnley, Son ignited one of the greatest solo goals in football history — sprinting 73 meters past six defenders in 12 seconds.',
      'Winning the 2020 FIFA Puskás Award, it remains the ultimate snapshot of Sonny at full throttle: explosive acceleration, balance at top speed, and ice-cold finishing.',
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
    hangul: '챔피언스리그 8강 멀티골',
    trophyType: 'ucl',
    dateHighlight: 'On April 17, 2019,',
    paragraphs: [
      'Inside a roaring Etihad Stadium in the UEFA Champions League Quarter-Final second leg, Heung-Min Son stunned Manchester City with two clinical goals inside three minutes (7’ and 10’).',
      'Scoring three of Tottenham’s four goals across the tie, Sonny propelled Spurs into their first-ever Champions League semi-final and final.',
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
    hangul: '아시안게임 금메달',
    trophyType: 'asiangames',
    dateHighlight: 'On September 1, 2018,',
    paragraphs: [
      'Wearing the captain’s armband for South Korea at the 2018 Asian Games, Son carried the weight of a nation into extra time of the final against Japan.',
      'Creating both decisive goals in extra time for a 2–1 triumph, Sonny secured gold for Korea and unlocked the peak years of his world-class career.',
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
    hangul: '로스앤젤레스 FC #7',
    trophyType: 'lafc',
    dateHighlight: 'In Summer 2025,',
    paragraphs: [
      'After completing a legendary ten-year chapter in North London with 454 appearances and 173 goals, Heung-Min Son launched a thrilling new chapter in Major League Soccer with Los Angeles FC.',
      'Pulling on the Black & Gold #7 shirt at BMO Stadium, Sonny brings championship pedigree, trademark camera celebrations, and electric pace to Los Angeles.',
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
    hangulClub: '토트넘 홋스퍼',
    title: 'Bilbao Captain Edition',
    number: '07',
    primaryColor: '#F3F5F7',
    secondaryColor: '#132257',
    accentColor: '#f5c518',
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
    hangulClub: '로스앤젤레스 FC',
    title: 'Black & Gold #7',
    number: '07',
    primaryColor: '#111111',
    secondaryColor: '#C39E5C',
    accentColor: '#f5c518',
    pattern: 'sash',
    momentTitle: 'MLS Arrival Era',
    statsLine: 'BMO Stadium · Los Angeles',
    description: 'Sleek obsidian and metallic gold sash marking Son’s move to Major League Soccer.',
  },
  {
    id: 'kit-spurs-2022',
    category: 'Clubs',
    season: '2021–22',
    club: 'Tottenham Hotspur',
    hangulClub: '토트넘 홋스퍼',
    title: 'Golden Boot Home',
    number: '07',
    primaryColor: '#FFFFFF',
    secondaryColor: '#111836',
    accentColor: '#f5c518',
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
    hangulClub: '대한민국 대표팀',
    title: 'World Cup Red Mask',
    number: '07',
    primaryColor: '#C8102E',
    secondaryColor: '#0C0C0C',
    accentColor: '#f5c518',
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
    hangulClub: '토트넘 홋스퍼',
    title: 'UCL Semi-Final Away',
    number: '07',
    primaryColor: '#009E94',
    secondaryColor: '#132257',
    accentColor: '#f5c518',
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
    hangulClub: '대한민국 대표팀',
    title: 'Taegeuk Warriors Gold',
    number: '07',
    primaryColor: '#CD2E3A',
    secondaryColor: '#0047A0',
    accentColor: '#f5c518',
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
    hangulClub: '바이어 레버쿠젠',
    title: 'Werkself Striker',
    number: '07',
    primaryColor: '#141414',
    secondaryColor: '#CD2E3A',
    accentColor: '#f5c518',
    pattern: 'sash',
    momentTitle: 'Bundesliga & UCL Breakout',
    statsLine: '87 Apps · 29 Goals',
    description: 'Two-footed thunderbolts in Germany that put Europe’s biggest clubs on alert.',
  },
  {
    id: 'kit-hsv-2010',
    category: 'Clubs',
    season: '2010–13',
    club: 'Hamburger SV',
    hangulClub: '함부르크 SV',
    title: '18-Year-Old Debut',
    number: '40',
    primaryColor: '#FFFFFF',
    secondaryColor: '#0A5BA4',
    accentColor: '#f5c518',
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
    hangulClub: '아디다스 시그니처',
    title: '“SON” Signature Pack',
    number: '07',
    primaryColor: '#07090e',
    secondaryColor: '#f5c518',
    accentColor: '#cd2e3a',
    pattern: 'boot',
    momentTitle: 'First Asian Signature Boot',
    statsLine: 'Seoulite Pack · Custom #7',
    description: 'Adidas’s landmark signature boot celebrating Son’s 10-year partnership and Korean football pride.',
  },
]

export const careerChapters: CareerChapter[] = [
  {
    id: 'hsv',
    period: '2010 – 2013',
    cityHangul: '함부르크',
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
    cityHangul: '레버쿠젠',
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
    cityHangul: '북런던',
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
    cityHangul: '서울',
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
    cityHangul: '로스앤젤레스',
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
    frameCode: 'ROLL 07 · EXP 01',
    tag: 'SIGNATURE',
    title: 'The Camera Celebration',
    subtitle: 'Framing every goal in memory',
    year: '2020–2026',
    rotation: '-rotate-6',
    palette: 'gold',
    stat: '173+ Clicks',
    caption: 'Started so every goal is framed forever — now one of the most iconic celebrations in world football.',
  },
  {
    id: 'card-2',
    frameCode: 'ROLL 07 · EXP 02',
    tag: 'CHUNCHEON ROOTS',
    title: '4 Hours of Keepy-Uppies',
    subtitle: 'Trained by Son Woong-jung',
    year: '2002–2008',
    rotation: 'rotate-2',
    palette: 'obsidian',
    stat: '500 Shots/Day',
    caption: 'Before playing an official youth match, Sonny spent years mastering ball control equally with both feet.',
  },
  {
    id: 'card-3',
    frameCode: 'ROLL 07 · EXP 03',
    tag: 'BILBAO NIGHT',
    title: 'Captain Lifts the Cup',
    subtitle: 'Tottenham’s 17-year wait ends',
    year: '21 May 2025',
    rotation: 'rotate-6',
    palette: 'navy',
    stat: '1–0 Final',
    caption: 'San Mamés erupted as Heung-Min Son raised the UEFA Europa League trophy high above North London’s faithful.',
  },
  {
    id: 'card-4',
    frameCode: 'ROLL 07 · EXP 04',
    tag: 'BOTH FEET',
    title: 'Zero Weak Foot',
    subtitle: 'Deadly from left or right',
    year: 'Career',
    rotation: '-rotate-3',
    palette: 'taegeuk',
    stat: '45% Left Foot',
    caption: 'One of the most genuinely ambidextrous finishers in Premier League history — defenders cannot show him either side.',
  },
  {
    id: 'card-5',
    frameCode: 'ROLL 07 · EXP 05',
    tag: 'OFF PITCH',
    title: 'NOS7 & Global Style',
    subtitle: 'Burberry · Calvin Klein · Adidas',
    year: 'Seoul / London / LA',
    rotation: 'rotate-3',
    palette: 'crimson',
    stat: 'Global #7',
    caption: 'From launching his own lifestyle brand NOS7 (“Nothing, Ordinary Sunday”) to fronting global fashion campaigns.',
  },
  {
    id: 'card-6',
    frameCode: 'ROLL 07 · EXP 06',
    tag: 'GOLDEN BOOT',
    title: '23 Goals · 0 Penalties',
    subtitle: 'First Asian PL Top Scorer',
    year: '2021–22',
    rotation: '-rotate-2',
    palette: 'gold',
    stat: '23 Goals',
    caption: 'Pure open-play brilliance sealed with a five-minute brace on Championship Sunday at Carrow Road.',
  },
]

export const marqueeBrands = [
  '손흥민 HEUNG-MIN SON',
  'TOTTENHAM HOTSPUR CAPTAIN',
  'LAFC #7',
  'KOREA REPUBLIC',
  'GOLDEN BOOT 2022',
  'FIFA PUSKÁS 2020',
  'EUROPA LEAGUE 2025',
  '9× BEST FOOTBALLER IN ASIA',
  'NOS7',
  'EFFORT NEVER BETRAYS YOU',
]
