export const companyName = 'CV. Technodigi Mandiri Solusi';
export const brandName = 'Technodigi';
export const siteUrl = 'https://technodigi.id';
export const siteTagline = 'Software, Hardware, dan Konsultan IT';
export const contactEmail = 'support@technodigi.co.id';
export const contactPhone = '+62 853 5361 5220';
export const contactWhatsAppUrl =
	'https://wa.me/6285353615220?text=Halo%20Technodigi%2C%20saya%20ingin%20konsultasi%20solusi%20digital.';

export interface OfficeLocation {
	city: string;
	region: string;
	country: string;
	label: string;
	geoRegion: string;
	latitude: number;
	longitude: number;
}

export const officeLocations: OfficeLocation[] = [
	{
		city: 'Lubuklinggau',
		region: 'Sumatera Selatan',
		country: 'ID',
		label: 'Lubuklinggau, Indonesia',
		geoRegion: 'ID-SL',
		latitude: -3.2945,
		longitude: 102.8612,
	},
	{
		city: 'Bogor',
		region: 'Jawa Barat',
		country: 'ID',
		label: 'Bogor, Indonesia',
		geoRegion: 'ID-JB',
		latitude: -6.5971,
		longitude: 106.806,
	},
];

/** @deprecated Use officeLocations */
export const contactLocation = officeLocations.map((office) => office.label).join(' · ');

/** @deprecated Use officeLocations */
export const geo = {
	region: officeLocations.map((office) => office.geoRegion).join(', '),
	placename: officeLocations.map((office) => office.city).join(', '),
	latitude: officeLocations[0].latitude,
	longitude: officeLocations[0].longitude,
};

export const socialProfiles: string[] = [];

export const defaultKeywords = [
	'technodigi',
	'jasa software indonesia',
	'jasa hardware it',
	'konsultan it',
	'transformasi digital',
	'pengembangan aplikasi custom',
	'integrasi api',
	'data analytics',
	'solusi ai bisnis',
	'jaringan kantor',
	'audit sistem it',
	'it consulting lubuklinggau',
	'it consulting bogor',
	'software house sumatera selatan',
	'software house bogor',
];

export interface FaqItem {
	question: string;
	answer: string;
}

export const faqItems: FaqItem[] = [
	{
		question: 'Layanan apa saja yang tersedia di Technodigi?',
		answer:
			'Technodigi memiliki 4 pilar layanan utama: (1) Software Development & Digital Solutions — pengembangan website, aplikasi web, mobile, dan sistem informasi kustom; (2) Business Automation & AI Solutions — otomatisasi alur kerja, AI Agent, AI Chatbot, dan integrasi sistem; (3) Data Analytics & Reporting — dashboard, business intelligence, visualisasi data, dan data pipeline; serta (4) IT Infrastructure, Procurement & Technical Support — pengadaan hardware, setup server, jaringan kantor, dan maintenance berkala.',
	},
	{
		question: 'Apakah Technodigi bisa membantu bisnis yang baru mau memulai transformasi digital?',
		answer:
			'Ya, justru kami sangat fokus pada bisnis yang sedang memulai atau memodernisasi sistem lama. Tim Technodigi akan membantu memetakan proses bisnis, menentukan prioritas teknologi, dan merancang roadmap implementasi yang bertahap dan sesuai kapasitas tim Anda.',
	},
	{
		question: 'Bagaimana cara memulai konsultasi dengan Technodigi?',
		answer:
			'Cukup hubungi kami via WhatsApp di nomor +62 853 5361 5220. Tim kami akan merespons dan menjadwalkan sesi discovery untuk memahami kebutuhan, kendala operasional, dan target bisnis Anda sebelum merekomendasikan solusi yang paling relevan.',
	},
	{
		question: 'Apakah Technodigi melayani klien dari seluruh Indonesia?',
		answer:
			'Ya, Technodigi berkantor di Lubuklinggau (Sumatera Selatan) dan Bogor (Jawa Barat), namun melayani klien dari seluruh Indonesia — baik untuk proyek software, otomatisasi AI, data analytics, maupun pengadaan dan setup infrastruktur IT.',
	},
	{
		question: 'Apakah solusi yang dibangun bisa disesuaikan dan dikembangkan ke depannya?',
		answer:
			'Tentu. Setiap sistem yang kami bangun dirancang dengan arsitektur modular dan scalable agar mudah dikembangkan seiring pertumbuhan bisnis. Kami juga menyediakan layanan maintenance, dukungan teknis, dan pengembangan fitur lanjutan pasca-implementasi.',
	},
];


export type NavKey = 'home' | 'about' | 'services' | 'contact';

export interface NavItem {
	key: NavKey;
	label: string;
	href: string;
}

export const navItems: NavItem[] = [
	{ key: 'home', label: 'Beranda', href: '/' },
	{ key: 'services', label: 'Layanan', href: '/layanan' },
	{ key: 'about', label: 'Tentang Kami', href: '/tentang-kami' },
	{ key: 'contact', label: 'Kontak', href: '/kontak' },
];

export interface SubServiceItem {
	id: string;
	title: string;
	description: string;
	tag: string;
}

export interface ServiceCategory {
	id: string;
	slug: string;
	title: string;
	shortTitle: string;
	badge: string;
	description: string;
	heroSummary: string;
	subServices: SubServiceItem[];
	highlights: string[];
	icon: string;
}

export interface ValueItem {
	number: string;
	title: string;
	summary: string;
}

export interface WorkStep {
	title: string;
	summary: string;
}

export const valueItems: ValueItem[] = [
	{
		number: '01',
		title: 'Berorientasi Bisnis',
		summary: 'Teknologi dipilih berdasarkan dampaknya pada efisiensi, kontrol, dan skala.',
	},
	{
		number: '02',
		title: 'Eksekusi Terukur',
		summary: 'Ruang lingkup, prioritas, dan milestone dibuat jelas sebelum implementasi.',
	},
	{
		number: '03',
		title: 'Siap Operasional',
		summary: 'Solusi disiapkan dengan dokumentasi, pelatihan, dan dukungan pasca rilis.',
	},
];

export const workSteps: WorkStep[] = [
	{
		title: 'Discovery',
		summary: 'Memetakan target bisnis, alur kerja, resiko, dan prioritas teknis sejak awal.',
	},
	{
		title: 'Rancang',
		summary: 'Menyusun solusi, arsitektur, timeline, dan estimasi yang transparan untuk dieksekusi.',
	},
	{
		title: 'Implementasi',
		summary: 'Membangun, menginstal, menguji, dan menyiapkan dokumentasi untuk proses handover.',
	},
	{
		title: 'Support',
		summary: 'Memberi dukungan pasca implementasi agar sistem tetap stabil dan mudah dikembangkan.',
	},
];

export const serviceCategories: ServiceCategory[] = [
	{
		id: 'software-development',
		slug: 'software-development',
		title: 'Software Development & Digital Solutions',
		shortTitle: 'Software & Digital Solutions',
		badge: 'Software & App',
		description:
			'Membangun solusi digital yang disesuaikan dengan kebutuhan bisnis untuk meningkatkan efisiensi dan produktivitas.',
		heroSummary:
			'Dari aplikasi web skala besar hingga aplikasi mobile cerdas, kami merancang dan mengembangkan perangkat lunak kustom yang presisi, scalable, dan aman untuk akselerasi pertumbuhan bisnis Anda.',
		icon: 'software',
		highlights: [
			'Arsitektur Scalable & Modern',
			'Desain UI/UX Intuitif',
			'Keamanan Data & Hak Akses',
			'Dokumentasi & Handover Lengkap',
		],
		subServices: [
			{
				id: 'website-development',
				title: 'Website Development',
				tag: 'Branding & Presence',
				description:
					'Membangun website perusahaan yang modern, responsif, cepat, dan teroptimasi SEO untuk meningkatkan kredibilitas dan jangkauan pasar.',
			},
			{
				id: 'web-application',
				title: 'Web Application',
				tag: 'System & Portal',
				description:
					'Mengembangkan aplikasi berbasis web interaktif dengan arsitektur modular, scalable, dan dapat diakses aman dari berbagai perangkat.',
			},
			{
				id: 'mobile-application',
				title: 'Mobile Application',
				tag: 'iOS & Android',
				description:
					'Solusi aplikasi mobile iOS dan Android (native / cross-platform) dengan UI/UX yang intuitif serta performa tinggi untuk pelanggan maupun internal.',
			},
			{
				id: 'sistem-informasi',
				title: 'Sistem Informasi',
				tag: 'Enterprise System',
				description:
					'Digitalisasi alur operasional, manajemen SDM, inventori, transaksi, dan pelaporan internal perusahaan ke dalam satu sistem terpadu.',
			},
			{
				id: 'custom-software-development',
				title: 'Custom Software Development',
				tag: 'Tailored Solution',
				description:
					'Pengembangan perangkat lunak khusus dari awal yang disesuaikan secara presisi dengan alur kerja unik dan skala bisnis Anda.',
			},
		],
	},
	{
		id: 'business-automation-ai',
		slug: 'business-automation-ai',
		title: 'Business Automation & AI Solutions',
		shortTitle: 'Business Automation & AI',
		badge: 'Otomatisasi & AI',
		description:
			'Mengotomatisasi proses bisnis dan memanfaatkan teknologi AI untuk meningkatkan efektivitas operasional.',
		heroSummary:
			'Pangkas pekerjaan manual berulang dan tingkatkan kecepatan operasional dengan otomatisasi alur kerja digital serta agen AI interaktif.',
		icon: 'automation',
		highlights: [
			'Efisiensi Operasional Berlipat',
			'Integrasi Sistem Lintas Platform',
			'Layanan Otomatis 24/7',
			'Teknologi AI Adaptif',
		],
		subServices: [
			{
				id: 'workflow-automation',
				title: 'Workflow Automation',
				tag: 'Flow Optimization',
				description:
					'Otomatisasi alur kerja digital untuk mempercepat alur persetujuan, notifikasi otomatis, dan disposisi tugas antar departemen.',
			},
			{
				id: 'business-process-automation',
				title: 'Business Process Automation',
				tag: 'End-to-End BPA',
				description:
					'Penyederhanaan dan otomatisasi siklus operasional bisnis secara menyeluruh untuk mengurangi resiko kesalahan manusia.',
			},
			{
				id: 'ai-agent',
				title: 'AI Agent',
				tag: 'Autonomous AI',
				description:
					'Pengembangan agen kecerdasan buatan mandiri yang mampu menganalisis data, memberikan rekomendasi, dan membantu eksekusi operasional.',
			},
			{
				id: 'ai-chatbot',
				title: 'AI Chatbot',
				tag: 'Virtual Assistant',
				description:
					'Asisten virtual cerdas berbasis AI untuk melayani pertanyaan pelanggan 24/7 secara responsif, akurat, dan ramah.',
			},
			{
				id: 'system-integration',
				title: 'System Integration',
				tag: 'API & Sync',
				description:
					'Menghubungkan berbagai aplikasi, database, dan platform pihak ketiga melalui REST API agar data tersinkronisasi otomatis.',
			},
		],
	},
	{
		id: 'data-analytics-reporting',
		slug: 'data-analytics-reporting',
		title: 'Data Analytics & Reporting',
		shortTitle: 'Data Analytics & Reporting',
		badge: 'Analytics & Data',
		description:
			'Mengubah data menjadi informasi yang bernilai untuk mendukung pengambilan keputusan yang lebih cepat dan akurat.',
		heroSummary:
			'Integrasikan seluruh sumber data perusahaan ke dalam panel interaktif real-time dan sistem pelaporan terstruktur untuk wawasan bisnis yang tajam.',
		icon: 'analytics',
		highlights: [
			'Visualisasi Real-time & KPI',
			'Laporan Otomatis Terjadwal',
			'Konsolidasi Multi-Sumber Data',
			'Akses Wawasan Berbasis Data',
		],
		subServices: [
			{
				id: 'dashboard-development',
				title: 'Dashboard Development',
				tag: 'Executive View',
				description:
					'Pembuatan dashboard eksekutif real-time untuk memantau indikator kinerja utama (KPI) dan performa operasional dalam satu layar.',
			},
			{
				id: 'business-intelligence',
				title: 'Business Intelligence',
				tag: 'Strategic Insight',
				description:
					'Pengolahan data bisnis mentah menjadi wawasan strategis (business insights) untuk memprediksi tren dan peluang pertumbuhan.',
			},
			{
				id: 'reporting-system',
				title: 'Reporting System',
				tag: 'Auto Reports',
				description:
					'Sistem pelaporan otomatis berkala yang terstruktur, akurat, dan dapat disesuaikan formatnya untuk manajemen maupun stakeholder.',
			},
			{
				id: 'data-visualization',
				title: 'Data Visualization',
				tag: 'Visual Charts',
				description:
					'Penyajian data kompleks ke dalam bentuk grafik, diagram, dan peta interaktif yang mudah dipahami oleh seluruh tim.',
			},
			{
				id: 'data-integration',
				title: 'Data Integration',
				tag: 'Data Pipeline',
				description:
					'Penggabungan dan konsolidasi data dari berbagai database, file spreadsheet, dan API ke dalam satu Data Warehouse terpusat.',
			},
		],
	},
	{
		id: 'it-infrastructure-support',
		slug: 'it-infrastructure-support',
		title: 'IT Infrastructure, Procurement & Technical Support',
		shortTitle: 'IT Infrastructure & Support',
		badge: 'Infrastruktur & Maintenance',
		description:
			'Menyediakan kebutuhan infrastruktur teknologi, pengadaan perangkat, serta dukungan teknis untuk memastikan operasional bisnis berjalan optimal.',
		heroSummary:
			'Jaga keandalan infrastruktur IT, perangkat kerja kantor, server, dan jaringan dengan layanan pengadaan profesional serta bantuan teknis terencana.',
		icon: 'infrastructure',
		highlights: [
			'Perangkat & Hardware Resmi',
			'Jaringan Kantor Stabil & Safe',
			'Backup & Pemulihan Sistem',
			'Support Teknis Responsif',
		],
		subServices: [
			{
				id: 'it-hardware-procurement',
				title: 'IT Hardware Procurement',
				tag: 'Procurement',
				description:
					'Pengadaan perangkat kerja seperti Laptop, PC Desktop, Printer, Scanner, dan Server berkualitas tinggi sesuai kebutuhan operasional.',
			},
			{
				id: 'server-setup-configuration',
				title: 'Server Setup & Configuration',
				tag: 'Server & Storage',
				description:
					'Instalasi, konfigurasi, penataan storage, dan manajemen backup server fisik maupun cloud agar sistem berjalan stabil tanpa hambatan.',
			},
			{
				id: 'network-configuration',
				title: 'Network Configuration',
				tag: 'LAN/WAN Security',
				description:
					'Desain topologi jaringan kantor (LAN/WAN), instalasi router, firewall, dan segmentasi jaringan untuk keamanan maksimal.',
			},
			{
				id: 'wifi-router-installation',
				title: 'Wi-Fi & Router Installation',
				tag: 'High-Speed Wi-Fi',
				description:
					'Pemasangan router bisnis dan sistem Access Point Wi-Fi berkecepatan tinggi dengan coverage luas tanpa blind spot.',
			},
			{
				id: 'hardware-deployment',
				title: 'Hardware Deployment',
				tag: 'Ready-to-Use',
				description:
					'Distribusi, perakitan, dan pengkonfigurasian perangkat kerja siap pakai lengkap dengan lisensi software dasar untuk karyawan.',
			},
			{
				id: 'asset-device-management',
				title: 'Asset & Device Management',
				tag: 'Asset Control',
				description:
					'Pengelolaan inventaris perangkat IT, pemantauan masa garansi, lisensi perangkat lunak, dan pemeliharaan kesehatan aset.',
			},
			{
				id: 'maintenance-technical-support',
				title: 'Maintenance & Technical Support',
				tag: '24/7 Support',
				description:
					'Layanan pemeliharaan sistem secara berkala dan bantuan teknis responsif saat terjadi gangguan operasional IT.',
			},
		],
	},
];

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
	return serviceCategories.find((item) => item.slug === slug || item.id === slug);
}

/** Legacy aliases for backwards compatibility */
export type ProductCategory = 'software' | 'hardware' | 'consulting';
export interface ProductCategoryMeta {
	value: ProductCategory;
	label: string;
	description: string;
}
export interface ProductItem {
	id: string;
	title: string;
	category: ProductCategory;
	summary: string;
	description: string;
	features: string[];
	tags: string[];
}
export const productCategories: ProductCategoryMeta[] = [
	{ value: 'software', label: 'Software & AI', description: 'Solusi perangkat lunak custom, automasi, dan sistem AI.' },
	{ value: 'hardware', label: 'Infrastruktur', description: 'Pengadaan hardware, jaringan kantor, dan server.' },
	{ value: 'consulting', label: 'Data & Support', description: 'Dashboard data analytics dan dukungan teknis IT.' },
];
export const products: ProductItem[] = serviceCategories.flatMap((cat) =>
	cat.subServices.map((sub) => ({
		id: sub.id,
		title: sub.title,
		category: (cat.id === 'software-development' || cat.id === 'business-automation-ai'
			? 'software'
			: cat.id === 'it-infrastructure-support'
			? 'hardware'
			: 'consulting') as ProductCategory,
		summary: sub.description,
		description: sub.description,
		features: [cat.title, sub.tag],
		tags: [sub.tag, cat.shortTitle],
	})),
);
export const featuredProducts = products.slice(0, 3);

