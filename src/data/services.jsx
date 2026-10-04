import {
  Laptop,
  Wifi,
  ShieldAlert,
  Database,
  Printer,
  Settings,
  Briefcase,
  BookOpen,
} from 'lucide-react';

export const SERVICES = [
  {
    id: "computer-repair",
    title: "Computer Repair & Upgrades",
    desc: "Fast hardware diagnostics, laptop screen replacements, keyboard repairs, and SSD/RAM upgrades to speed up sluggish devices.",
    shortDesc: "Hardware diagnostics, screen replacements, SSD/RAM upgrades, and component repairs for PCs and Macs.",
    icon: <Laptop size={28} />,
    color: "#c084fc",
  },
  {
    id: "wifi-network",
    title: "Wi-Fi & Network Setup",
    desc: "Setting up routers, Wi-Fi mesh systems, range extenders, and troubleshooting connectivity issues or internet dropouts.",
    shortDesc: "Mesh Wi-Fi installation, dead-zone elimination, router configuration, and network troubleshooting.",
    icon: <Wifi size={28} />,
    color: "#f472b6",
  },
  {
    id: "virus-removal",
    title: "Virus & Malware Removal",
    desc: "Comprehensive system scans to safely remove spyware, adware, viruses, and ransomware, and installing reliable antivirus protection.",
    shortDesc: "Deep system cleanup, adware/spyware removal, ransomware protection, and security hardening.",
    icon: <ShieldAlert size={28} />,
    color: "#c084fc",
  },
  {
    id: "data-backup",
    title: "Data Backup & Recovery",
    desc: "Recovering lost files from failing or crashed drives, and setting up automatic cloud or physical backup systems for peace of mind.",
    shortDesc: "File recovery from failing drives, automatic cloud backup setup, and secure data migration.",
    icon: <Database size={28} />,
    color: "#f472b6",
  },
  {
    id: "printer-setup",
    title: "Printer & Device Setup",
    desc: "Configuring home and office printers, scanner setups, smart TVs, security cameras, and other smart home accessories.",
    shortDesc: "Wireless printer configuration, scanner connections, smart TVs, and IoT peripheral integration.",
    icon: <Printer size={28} />,
    color: "#c084fc",
  },
  {
    id: "os-troubleshooting",
    title: "OS & Software Troubleshooting",
    desc: "Resolving Windows/Mac operating system errors, email client configurations, software installation errors, and app updates.",
    shortDesc: "Windows and macOS troubleshooting, email client setup, boot errors, and software updates.",
    icon: <Settings size={28} />,
    color: "#f472b6",
  },
  {
    id: "business-it",
    title: "Small Business IT Support",
    desc: "Setting up office computers, shared network storage (NAS), email domains, user accounts, and local network security solutions.",
    shortDesc: "Workstation provisioning, shared storage (NAS), secure networking, and ongoing office IT care.",
    icon: <Briefcase size={28} />,
    color: "#c084fc",
  },
  {
    id: "tech-training",
    title: "Tech Training & Guidance",
    desc: "Patient, jargon-free tutoring to help you or your team learn how to use new devices, operating systems, or specific apps at your own pace.",
    shortDesc: "Patient, one-on-one technology coaching and jargon-free guidance tailored to your learning pace.",
    icon: <BookOpen size={28} />,
    color: "#f472b6",
  },
];

/**
 * Top services highlighted on the Home page services overview.
 */
export const FEATURED_HOME_SERVICES = [
  SERVICES[0], // Computer Repair & Upgrades
  SERVICES[1], // Wi-Fi & Network Setup
  SERVICES[3], // Data Backup & Recovery
];

/**
 * Standardized service options for inquiry forms (e.g. Contacts.jsx).
 */
export const SERVICE_OPTIONS = SERVICES.map((service) => service.title);

export const DEFAULT_CONTACT_SERVICE = SERVICES[0].title; // "Computer Repair & Upgrades"

export const MAINTENANCE_PLANS = [
  {
    id: "residential-guardian",
    name: "Residential Tech Guardian",
    cadence: "Monthly Retainer",
    price: "$49 / month",
    billingDetails: "Billed monthly on the 1st. Continuous service auto-renews until cancelled.",
    features: [
      "Quarterly remote speed tune-up & virus audit",
      "Priority queue for emergency computer repairs",
      "15% discount on all on-site labor & diagnostic visits",
      "Unlimited remote quick-question guidance",
    ],
  },
  {
    id: "business-retainer",
    name: "Small Business Pro Retainer",
    cadence: "Monthly Retainer",
    price: "$199 / month",
    billingDetails: "Billed monthly. Continuous service auto-renews until cancelled.",
    popular: true,
    features: [
      "Up to 5 business workstations & network router monitored",
      "Automated encrypted cloud backup verification",
      "Guaranteed 2-hour priority emergency response",
      "Monthly security patch management & Wi-Fi audit",
    ],
  },
];
