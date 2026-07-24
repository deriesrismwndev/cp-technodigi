export const companyName = 'CV. Technodigi Mandiri Solusi';
export const brandName = 'Technodigi';
export const contactEmail = 'support@technodigi.co.id';
export const contactPhone = '+62 853 5361 5220';
export const contactWhatsAppUrl =
	'https://wa.me/6285353615220?text=Halo%20Technodigi%2C%20saya%20ingin%20konsultasi%20solusi%20digital.';
export const contactLocation = 'Lubuklinggau, Indonesia';

export type NavKey = 'home' | 'about' | 'products' | 'contact';

export interface NavItem {
	key: NavKey;
	label: string;
	href: string;
}

export const navItems: NavItem[] = [
	{ key: 'home', label: 'Beranda', href: '/' },
	{ key: 'about', label: 'Tentang Kami', href: '/tentang-kami' },
	{ key: 'products', label: 'Produk', href: '/produk' },
	{ key: 'contact', label: 'Kontak', href: '/kontak' },
];

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

export const productCategories: ProductCategoryMeta[] = [
	{
		value: 'software',
		label: 'Software',
		description: 'Sistem digital, aplikasi bisnis, dashboard, dan integrasi data.',
	},
	{
		value: 'hardware',
		label: 'Hardware',
		description: 'Perangkat kerja, server, jaringan, dan infrastruktur pendukung.',
	},
	{
		value: 'consulting',
		label: 'Konsultan IT',
		description: 'Audit, roadmap, keamanan, dan tata kelola teknologi perusahaan.',
	},
];

export const products: ProductItem[] = [
	{
		id: 'software-operasional-custom',
		title: 'Aplikasi Operasional Custom',
		category: 'software',
		summary: 'Aplikasi web atau mobile untuk menata proses kerja internal secara lebih rapi.',
		description:
			'Dirancang untuk alur approval, pencatatan transaksi, manajemen pelanggan, inventori, dan kebutuhan operasional lain yang unik untuk bisnis Anda.',
		features: ['Analisis proses bisnis', 'UI/UX dan prototyping', 'Role dan hak akses'],
		tags: ['Web app', 'Mobile app', 'Workflow'],
	},
	{
		id: 'software-dashboard-bi',
		title: 'Dashboard dan Business Intelligence',
		category: 'software',
		summary: 'Panel monitoring untuk membaca performa bisnis dari data yang sudah tersedia.',
		description:
			'Menyatukan data operasional menjadi dashboard eksekutif, laporan berkala, dan indikator kinerja yang mudah dipahami.',
		features: ['Visualisasi KPI', 'Laporan otomatis', 'Koneksi database'],
		tags: ['Dashboard', 'Reporting', 'Data'],
	},
	{
		id: 'software-integrasi-api',
		title: 'Integrasi API dan Automasi',
		category: 'software',
		summary: 'Menghubungkan aplikasi lama dan baru agar data tidak lagi dikerjakan manual.',
		description:
			'Membangun integrasi antar sistem, sinkronisasi data, notifikasi, dan automasi proses untuk mengurangi pekerjaan berulang.',
		features: ['REST API', 'Webhook', 'Automasi proses'],
		tags: ['API', 'Automation', 'Integration'],
	},
	{
		id: 'hardware-endpoint',
		title: 'Endpoint dan Perangkat Kerja',
		category: 'hardware',
		summary: 'Pengadaan laptop, PC, printer, scanner, dan perangkat kerja siap pakai.',
		description:
			'Membantu memilih spesifikasi perangkat, instalasi dasar, konfigurasi keamanan, dan kesiapan perangkat untuk pengguna.',
		features: ['Rekomendasi spesifikasi', 'Instalasi software dasar', 'Asset tagging'],
		tags: ['Laptop', 'PC', 'Printer'],
	},
	{
		id: 'hardware-server-storage',
		title: 'Server, Storage, dan Backup',
		category: 'hardware',
		summary: 'Infrastruktur server dan penyimpanan untuk aplikasi, file, dan backup bisnis.',
		description:
			'Merancang kebutuhan server, storage, backup, dan pemulihan data agar layanan internal lebih stabil dan aman.',
		features: ['Sizing server', 'Backup policy', 'Monitoring kapasitas'],
		tags: ['Server', 'NAS', 'Backup'],
	},
	{
		id: 'hardware-jaringan-keamanan',
		title: 'Jaringan dan Keamanan Kantor',
		category: 'hardware',
		summary: 'Desain jaringan kantor, Wi-Fi, firewall, router, dan segmentasi akses.',
		description:
			'Merapikan koneksi internal, akses internet, jaringan tamu, dan kontrol keamanan agar operasional lebih lancar.',
		features: ['Topologi jaringan', 'Firewall dan router', 'Wi-Fi coverage'],
		tags: ['Network', 'Firewall', 'Wi-Fi'],
	},
	{
		id: 'consulting-audit-it',
		title: 'Audit Sistem dan Infrastruktur',
		category: 'consulting',
		summary: 'Pemeriksaan kondisi teknologi saat ini untuk menemukan celah dan prioritas perbaikan.',
		description:
			'Menganalisis aplikasi, infrastruktur, keamanan, dan proses operasional IT untuk menghasilkan rekomendasi yang bisa dieksekusi.',
		features: ['Assessment teknis', 'Risk register', 'Rekomendasi prioritas'],
		tags: ['Audit', 'Assessment', 'Risk'],
	},
	{
		id: 'consulting-roadmap-digital',
		title: 'Roadmap Transformasi Digital',
		category: 'consulting',
		summary: 'Rencana pengembangan teknologi bertahap sesuai target bisnis dan kapasitas tim.',
		description:
			'Menyusun prioritas proyek, estimasi fase implementasi, kebutuhan sumber daya, dan ukuran keberhasilan transformasi.',
		features: ['Pemetaan kebutuhan', 'Prioritas proyek', 'Timeline implementasi'],
		tags: ['Roadmap', 'Strategy', 'Planning'],
	},
	{
		id: 'consulting-security-governance',
		title: 'Tata Kelola dan Keamanan IT',
		category: 'consulting',
		summary: 'Pendampingan kebijakan akses, keamanan data, dokumentasi, dan SOP IT.',
		description:
			'Membantu perusahaan menyiapkan standar operasional, kontrol akses, kebijakan backup, dan praktik keamanan yang realistis.',
		features: ['SOP IT', 'Kontrol akses', 'Kebijakan backup'],
		tags: ['Governance', 'Security', 'SOP'],
	},
];

export const featuredProducts = products.filter((product) =>
	['software-operasional-custom', 'hardware-server-storage', 'consulting-roadmap-digital'].includes(
		product.id,
	),
);
