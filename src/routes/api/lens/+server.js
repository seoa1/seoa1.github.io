import { SERPAPI_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const imageUrl = url.searchParams.get('url');

	if (!imageUrl) {
		return json({ error: 'Missing "url" query parameter' }, { status: 400 });
	}

	const serpApiUrl = new URL('https://serpapi.com/search.json');
	serpApiUrl.searchParams.set('engine', 'google_lens');
	serpApiUrl.searchParams.set('url', imageUrl);
	serpApiUrl.searchParams.set('type', 'visual_matches');
	serpApiUrl.searchParams.set('api_key', SERPAPI_KEY);

	const response = await fetch(serpApiUrl.toString());

	if (!response.ok) {
		const text = await response.text();
		return json({ error: `SerpApi error: ${response.status}`, details: text }, { status: 502 });
	}

	const data = await response.json();
	const visualMatches = data.visual_matches ?? [];

	// Filter to only results that have price data
	const withPrices = visualMatches
		.filter((match) => match.price?.extracted_value != null)
		.map((match) => ({
			position: match.position,
			title: match.title,
			link: match.link,
			source: match.source,
			source_icon: match.source_icon,
			thumbnail: match.thumbnail,
			price: match.price.extracted_value,
			currency: match.price.currency ?? '$',
			priceLabel: match.price.value,
			inStock: match.in_stock ?? null,
			rating: match.rating ?? null,
			reviews: match.reviews ?? null
		}));

	return json({ results: withPrices });
}
