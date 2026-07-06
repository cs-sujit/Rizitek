export interface Product {
  slug: string;
  name: string;
  category: string;
  heroTagline: string;
  shortDescription: string;
  description: string[];
  features: { title: string; body: string }[];
  why?: { heading: string; body: string };
}

export const products: Product[] = [
  {
    slug: 'hauleye',
    name: 'HaulEye',
    category: 'Rear Vision Camera System',
    heroTagline: 'See What Danger Hides. HaulEye Eliminates the Blind Spot.',
    shortDescription:
      'Rugged rear-vision camera system that gives operators a live, high-definition view behind the machine.',
    description: [
      "HaulEye is Rizitek's advanced rear vision camera system, purpose-built to eliminate the dangerous blind spots behind heavy earth moving machinery. When a 100-tonne dump truck reverses, the driver's natural field of vision is almost zero — HaulEye changes that completely. By delivering a live, high-definition video feed directly to the operator's display, HaulEye gives drivers the situational awareness they need to manoeuvre safely in the busy, unpredictable environments of mines and construction sites.",
      'Engineered to withstand the harshest Indian mining conditions — extreme dust, vibration, rain, and mud — HaulEye is a rugged, dependable system that just works, shift after shift.',
    ],
    features: [
      { title: 'HD Rear-View Camera', body: 'Crystal-clear, wide-angle view of the area directly behind the vehicle.' },
      { title: 'Infrared Night Vision', body: 'Full visibility even in low-light or night-shift operations.' },
      { title: 'Rugged IP-Rated Design', body: 'Dust and water resistant — built for Indian mining environments.' },
      { title: 'Wide-Angle Coverage', body: 'Maximum field of view to capture the full blind zone.' },
      { title: 'Real-Time Display', body: "Live feed on the operator's dashboard monitor with no perceptible lag." },
      { title: 'Universal Compatibility', body: 'Suitable for all HEMM and construction equipment categories.' },
    ],
    why: {
      heading: 'Why HaulEye',
      body: 'Rearward collisions are among the most common and deadly accidents in open-cast mining. DGMS guidelines specifically mandate rear vision systems for HEMM. HaulEye ensures your fleet is compliant, your operators are protected, and your assets are safer.',
    },
  },
  {
    slug: 'hauleye-x360',
    name: 'HaulEye X360',
    category: '360° Surround Vision System',
    heroTagline: 'Complete Awareness. Every Direction. All the Time.',
    shortDescription:
      'Full 360-degree surround vision stitched from multiple cameras into a single bird\u2019s-eye view.',
    description: [
      "HaulEye X360 takes operator visibility to the next level with full 360-degree surround vision. Using multiple strategically positioned cameras integrated into a single monitoring platform, the system stitches together a bird's-eye composite view of the entire area around the machine. No blind spots. No surprises.",
      'Ideal for large mining equipment operating in congested loading zones, haul roads, and crusher areas where personnel, light vehicles, and other machines frequently converge, HaulEye X360 is the ultimate visibility upgrade for any HEMM fleet.',
    ],
    features: [
      { title: '360° Panoramic View', body: "Bird's-eye composite image from multiple cameras around the machine." },
      { title: 'Multi-Camera Integration', body: 'All feeds unified into one seamless display.' },
      { title: 'HD Image Processing', body: 'High-resolution video for precise situational awareness.' },
      { title: 'Recording Capability', body: 'Incident footage storage for review and investigation.' },
      { title: 'Real-Time Monitoring', body: "No processing delay — operators see what's happening now." },
      { title: 'Large Equipment Ready', body: 'Optimized for Dump Trucks, Excavators, Surface Miners & more.' },
    ],
  },
  {
    slug: 'edgesense',
    name: 'EdgeSense',
    category: 'Proximity Warning Device',
    heroTagline: 'Sense the Unseen. Stop Before the Impact.',
    shortDescription:
      'Dual front-sensing proximity detection with speed-adaptive alert zones for operators and personnel.',
    description: [
      'EdgeSense is an intelligent proximity detection system that identifies obstacles, other equipment, and personnel before dangerous closures can occur. Using dual front-sensing technology that dynamically adapts detection zones based on vehicle speed, EdgeSense provides layered audible and visual alerts that give operators time to react — and time is what saves lives.',
      'Whether working at a crusher edge, operating in a tight loading area, or navigating a congested haul road, EdgeSense keeps operators ahead of the hazard curve.',
    ],
    features: [
      { title: 'Dual Front Sensing', body: 'Redundant sensors for reliable detection in all conditions.' },
      { title: 'Speed-Based Detection Zones', body: 'Adjustable alert range scales automatically with vehicle speed.' },
      { title: 'Audio & Visual Alerts', body: 'Multi-tier warning system — escalating alerts as risk increases.' },
      { title: 'Adjustable Detection Zones', body: 'Configurable for different site conditions and equipment types.' },
      { title: 'Robust Industrial Design', body: 'Built for vibration, dust, and impact resistance.' },
    ],
  },
  {
    slug: 'sentineleye',
    name: 'SentinelEye',
    category: 'Fatigue Monitoring System',
    heroTagline: 'Fatigue Is the Hidden Killer. SentinelEye Never Sleeps.',
    shortDescription:
      'Real-time facial monitoring that catches drowsiness and distraction before they become accidents.',
    description: [
      'Operator fatigue is responsible for a disproportionate share of serious mining accidents. Long shift hours, night operations, and physical strain create dangerous conditions where even experienced drivers can nod off for a fraction of a second — with catastrophic results.',
      'SentinelEye uses real-time facial monitoring technology to continuously track operator alertness. The moment it detects drooping eyelids, head nodding, distraction, or inattentiveness, it triggers immediate audio and visual alarms — alerting both the operator and, optionally, the fleet supervisor. Data logging means every event is recorded for analysis and compliance.',
    ],
    features: [
      { title: 'Real-Time Facial Monitoring', body: "Continuous AI-driven analysis of operator's eyes, head position, and face." },
      { title: 'Drowsiness Detection', body: 'Triggers an alarm at the first sign of eye closure or head drop.' },
      { title: 'Distraction Detection', body: 'Identifies when operators look away from the road or work zone.' },
      { title: 'Audio & Visual Alarms', body: 'Immediate, escalating in-cab alerts to wake and re-alert the driver.' },
      { title: 'Data Logging', body: 'Full event record for compliance, investigation, and pattern analysis.' },
    ],
  },
  {
    slug: 'securelatch',
    name: 'SecureLatch',
    category: 'Seat Belt Alert System',
    heroTagline: 'One Click Could Save a Life. SecureLatch Makes Sure It Happens.',
    shortDescription:
      'Real-time seat belt monitoring with optional interlock — the machine won\u2019t run until the belt is on.',
    description: [
      "Despite being a basic safety requirement, seat belt non-compliance remains a persistent problem in heavy equipment operations. SecureLatch solves this with real-time seat belt monitoring that triggers visual and audible alerts the moment a machine is in operation without the operator belted in. With optional interlock functionality, the machine simply won't operate until the seat belt is fastened.",
    ],
    features: [
      { title: 'Real-Time Monitoring', body: 'Instant detection of seat belt engagement or disengagement.' },
      { title: 'Visual Warning Indicators', body: 'Dashboard alerts visible to operator and site supervisors.' },
      { title: 'Audible Alarms', body: "In-cab alerts that can't be ignored or silenced without compliance." },
      { title: 'Interlock Option', body: 'Prevents machine startup or operation if the belt is not fastened.' },
      { title: 'Multi-OEM Compatible', body: 'Easy integration with existing equipment, any brand or model.' },
    ],
  },
  {
    slug: 'beamsense',
    name: 'BeamSense',
    category: 'Auto Dipper (Auto High/Low Beam) System',
    heroTagline: 'Smarter Lights. Safer Nights.',
    shortDescription:
      'Automatically switches between high and low beam based on oncoming traffic and conditions.',
    description: [
      'On busy haul roads at night, vehicles approaching each other with full headlight beams create dangerous glare. BeamSense eliminates this hazard entirely by automatically switching between high and low beam based on oncoming traffic and operating conditions. Fast response, intelligent sensing, and all-weather operation make BeamSense an essential upgrade for any night-shift heavy equipment fleet.',
    ],
    features: [
      { title: 'Automatic Beam Control', body: 'Seamless, intelligent switching between high and low beam.' },
      { title: 'Intelligent Light Sensing', body: 'Detects oncoming vehicles and ambient conditions.' },
      { title: 'Fast Response Time', body: 'Near-instant switching to prevent glare exposure.' },
      { title: 'Weather-Resistant Design', body: 'Operates reliably in rain, dust, and fog.' },
      { title: 'Maintenance-Free', body: 'Robust solid-state design with no moving parts to replace.' },
    ],
  },
  {
    slug: 'startshield',
    name: 'StartShield',
    category: 'Delayed Startup Warning System',
    heroTagline: 'Warn First. Move Second. Zero Surprises.',
    shortDescription:
      'A programmable warning period before equipment starts, giving nearby personnel time to move clear.',
    description: [
      'StartShield provides a programmable warning period before heavy equipment starts up, giving nearby workers, personnel, and other vehicles time to move clear. This simple but critical safety step prevents the all-too-common accidents that happen when machinery starts suddenly in areas where people are working. With clear audible and visual warnings, StartShield ensures no one is ever caught off-guard by moving equipment.',
    ],
    features: [
      { title: 'Programmable Delay Timer', body: 'Configurable warning window from a few seconds to a custom duration.' },
      { title: 'Audible Warning Alarms', body: 'High-decibel alerts audible above site noise.' },
      { title: 'Visual Warning Indicators', body: 'Flashing beacons to alert personnel in all directions.' },
      { title: 'Wireless Operation', body: 'No complex wiring — quick and clean installation.' },
      { title: 'Easy Installation', body: 'Minimal integration time and equipment downtime.' },
    ],
  },
  {
    slug: 'drivesafe',
    name: 'DriveSafe',
    category: 'Alcohol Detection Engine Interlock System',
    heroTagline: 'Sober Operators. Safer Sites. No Compromises.',
    shortDescription:
      'Breath-test engine interlock that stops equipment from starting if alcohol is detected.',
    description: [
      "DriveSafe prevents equipment operation when alcohol is detected in an operator's breath sample. Before the engine can start, the operator must complete a breath test. If alcohol above the threshold is detected, the engine interlock prevents startup — protecting the operator, colleagues, and assets. All events are logged, creating a reliable compliance and audit trail for safety managers and DGMS inspectors.",
    ],
    features: [
      { title: 'Integrated Breath Analyzer', body: 'Calibrated alcohol detection built directly into the startup sequence.' },
      { title: 'Engine Interlock', body: 'Machine physically cannot start if the alcohol threshold is exceeded.' },
      { title: 'Fast Detection', body: "Quick test process that doesn't delay operations unnecessarily." },
      { title: 'Data Logging', body: 'All test results recorded with timestamp for compliance reporting.' },
      { title: 'Rugged Industrial Design', body: 'Built for daily use in harsh mining environments.' },
    ],
  },
  {
    slug: 'backalert',
    name: 'BackAlert',
    category: 'Reverse Audio-Visual Alarm System',
    heroTagline: "If It's Moving Backward, Everyone Needs to Know.",
    shortDescription:
      'Synchronized audible and visual warnings every time reverse gear is engaged.',
    description: [
      'BackAlert delivers synchronized, high-intensity audible and visual warnings every time reverse gear is engaged. Designed to alert nearby workers and other vehicles to reversing equipment, BackAlert is one of the simplest and most cost-effective safety upgrades available — and one of the most impactful. Built tough for construction and mining sites, it works reliably in extreme conditions.',
    ],
    features: [
      { title: 'High-Intensity Warning Beacon', body: '360-degree flashing light visible in all weather and light conditions.' },
      { title: 'Reverse Alarm System', body: 'High-decibel, distinctive reverse warning tone.' },
      { title: 'Durable Industrial Build', body: 'Impact and vibration resistant for rough terrain operation.' },
      { title: 'Easy Installation', body: 'Simple integration with standard reverse gear circuitry.' },
      { title: 'Universal Compatibility', body: 'Suitable for all equipment categories across mining and construction.' },
    ],
  },
  {
    slug: 'embershield',
    name: 'EmberShield',
    category: 'Automatic Fire Suppression System',
    heroTagline: 'When Fire Strikes, Every Second Counts. EmberShield Acts Instantly.',
    shortDescription:
      'Heat-sensitive detection and rapid suppression across engine and compartment fire-risk zones.',
    description: [
      'A fire on a heavy earth moving machinery (HEMM) is catastrophic — for the operator, the fleet, and operations. EmberShield is Rizitek\'s automatic fire detection and suppression system, designed to detect heat and fire signatures the moment they appear and deploy suppression agent before a small flame becomes a full-scale equipment fire.',
      'With heat-sensitive detection across critical engine and compartment zones, heavy-duty suppression cylinders, and multi-point nozzle coverage, EmberShield provides comprehensive fire protection that acts before the operator even knows there\u2019s a problem.',
    ],
    features: [
      { title: 'Automatic Fire Detection', body: 'Heat-sensitive network across engine bay, hydraulics, and fuel areas.' },
      { title: 'Rapid Suppression Activation', body: 'Deploys agent in seconds — no manual intervention required.' },
      { title: 'Multi-Nozzle Coverage', body: 'Suppression delivered precisely to high-risk zones.' },
      { title: 'Heavy-Duty Cylinders', body: 'Industrial-grade suppression agent storage for reliable activation.' },
      { title: 'Suitable for All HEMM', body: 'Compatible with Dump Trucks, Excavators, Dozers, Surface Miners & more.' },
    ],
    why: {
      heading: 'Why EmberShield',
      body: "A single fire incident can write off equipment worth crores, injure operators, and halt operations for weeks. EmberShield is not an optional upgrade — it's an essential asset protection investment for every mining fleet.",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
