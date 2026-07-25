import {
	brandName,
	companyName,
	contactEmail,
	contactPhone,
	contactWhatsAppUrl,
	officeLocations,
	siteTagline,
	siteUrl,
	socialProfiles,
} from '../data/site';

export function absoluteUrl(path: string, base: string | URL = siteUrl) {
	return new URL(path, base).toString();
}

export function buildBreadcrumbSchema(
	items: { name: string; path: string }[],
	fragment: string,
) {
	return {
		'@type': 'BreadcrumbList',
		'@id': absoluteUrl(fragment),
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path),
		})),
	};
}

export function buildFaqSchema(faqs: { question: string; answer: string }[], fragment: string) {
	return {
		'@type': 'FAQPage',
		'@id': absoluteUrl(fragment),
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};
}

export function buildOrganizationSchema(options: {
	description: string;
	logoUrl: string;
	imageUrl: string;
}) {
	return {
		'@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
		'@id': absoluteUrl('#organization'),
		name: brandName,
		legalName: companyName,
		url: absoluteUrl('/'),
		logo: {
			'@type': 'ImageObject',
			url: options.logoUrl,
			caption: `${brandName} logo`,
		},
		image: options.imageUrl,
		description: options.description,
		email: contactEmail,
		telephone: contactPhone,
		areaServed: {
			'@type': 'Country',
			name: 'Indonesia',
		},
		address: {
			'@type': 'PostalAddress',
			addressLocality: officeLocations[0].city,
			addressRegion: officeLocations[0].region,
			addressCountry: officeLocations[0].country,
		},
		location: officeLocations.map((office) => ({
			'@type': 'Place',
			'@id': absoluteUrl(`#office-${office.city.toLowerCase()}`),
			name: `${brandName} ${office.city}`,
			address: {
				'@type': 'PostalAddress',
				addressLocality: office.city,
				addressRegion: office.region,
				addressCountry: office.country,
			},
			geo: {
				'@type': 'GeoCoordinates',
				latitude: office.latitude,
				longitude: office.longitude,
			},
		})),
		geo: {
			'@type': 'GeoCoordinates',
			latitude: officeLocations[0].latitude,
			longitude: officeLocations[0].longitude,
		},
		contactPoint: [
			{
				'@type': 'ContactPoint',
				contactType: 'customer support',
				telephone: contactPhone,
				email: contactEmail,
				availableLanguage: ['Indonesian', 'English'],
				areaServed: 'ID',
			},
			{
				'@type': 'ContactPoint',
				contactType: 'sales',
				url: contactWhatsAppUrl,
				availableLanguage: ['Indonesian'],
			},
		],
		knowsAbout: [
			'Software Development',
			'Custom Application Development',
			'Business Intelligence',
			'API Integration',
			'Hardware Procurement',
			'Network Infrastructure',
			'IT Consulting',
			'Digital Transformation',
			'Artificial Intelligence',
			'Data Analytics',
			'IT Security',
		],
		hasOfferCatalog: {
			'@id': absoluteUrl('#offer-catalog'),
		},
		slogan: siteTagline,
		priceRange: '$$',
		...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
	};
}

export function buildWebsiteSchema(lang: string) {
	return {
		'@type': 'WebSite',
		'@id': absoluteUrl('#website'),
		url: absoluteUrl('/'),
		name: brandName,
		alternateName: companyName,
		description: `${brandName} — ${siteTagline} untuk bisnis di Indonesia.`,
		inLanguage: lang,
		publisher: {
			'@id': absoluteUrl('#organization'),
		},
	};
}

export function buildWebPageSchema(options: {
	title: string;
	description: string;
	canonicalUrl: string;
	imageUrl: string;
	imageAlt: string;
	lang: string;
	pageType?: string;
}) {
	return {
		'@type': options.pageType ?? 'WebPage',
		'@id': `${options.canonicalUrl}#webpage`,
		url: options.canonicalUrl,
		name: options.title,
		description: options.description,
		isPartOf: {
			'@id': absoluteUrl('#website'),
		},
		about: {
			'@id': absoluteUrl('#organization'),
		},
		primaryImageOfPage: {
			'@type': 'ImageObject',
			url: options.imageUrl,
			caption: options.imageAlt,
		},
		inLanguage: options.lang,
	};
}
