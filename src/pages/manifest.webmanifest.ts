import type { APIRoute } from 'astro';
import { brandName, companyName, siteTagline } from '../data/site';
import { absoluteUrl } from '../lib/seo';

export const GET: APIRoute = () => {
	const manifest = {
		name: `${brandName} — ${companyName}`,
		short_name: brandName,
		description: `${brandName} — ${siteTagline} untuk bisnis di Indonesia.`,
		start_url: absoluteUrl('/'),
		display: 'standalone',
		background_color: '#f7fbfb',
		theme_color: '#1B2F61',
		lang: 'id-ID',
		icons: [
			{
				src: absoluteUrl('/images/technodigi_logo.svg'),
				sizes: 'any',
				type: 'image/svg+xml',
				purpose: 'any',
			},
		],
	};

	return new Response(JSON.stringify(manifest), {
		headers: {
			'Content-Type': 'application/manifest+json; charset=utf-8',
			'Cache-Control': 'public, max-age=86400',
		},
	});
};
