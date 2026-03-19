# Price Comparison Tab - Implementation Plan

## SerpApi Google Lens Response Analysis

### What the API returns (`visual_matches` array)
Each match object contains:
- `position` (int) — rank/order of the result (1, 2, 3...)
- `title` (string) — product name
- `link` (string) — URL to the product page
- `source` (string) — retailer name (e.g., "Nike", "eBay")
- `source_icon` (string) — retailer logo URL
- `thumbnail` (string) — image URL
- `price` — object with `value` (string, e.g., "$260*"), `extracted_value` (float, e.g., 260), `currency` (string, e.g., "$")
- `in_stock` (boolean)
- `rating` (float), `reviews` (int)
- `condition` (string)

### Does it return a similarity/match confidence score?
**No.** SerpApi's Google Lens `visual_matches` does NOT return an explicit similarity or confidence score. The `position` field is the implicit relevance ranking from Google — position 1 is the best match, position 2 is second-best, etc. We'll use `position` as our relevance proxy.

### Sorting Strategy
Since we want to weigh both price AND relevance:
- Default sort: **weighted score** = `price + (position * weight_factor)`
  - Lower position = more relevant, lower price = cheaper → lowest score wins
  - The weight factor is tunable (e.g., $5 per position rank)
- User can toggle between: "Best Match + Price" (weighted), "Price: Low to High", "Price: High to Low"

---

## Implementation Steps

### Step 1: Add SerpApi server-side endpoint
**File:** `src/routes/api/lens/+server.js` (new)

- Create a SvelteKit API route (`GET /api/lens?url=<image_url>`)
- Server-side fetch to SerpApi: `https://serpapi.com/search.json?engine=google_lens&url={url}&type=visual_matches&api_key={key}`
- API key stored in environment variable `SERPAPI_KEY` (via `.env` or SvelteKit's `$env/static/private`)
- Filter results to only those with a `price` field (many visual matches won't have prices)
- Return filtered + normalized JSON to the client

### Step 2: Create the Price Comparison page
**File:** `src/routes/prices/+page.svelte` (new)

UI components:
1. **Image input** — text field for image URL + "Search" button (and optionally file upload later)
2. **Loading state** — spinner/message while API call is in flight
3. **Results grid/list** — card-based layout showing:
   - Product thumbnail image
   - Product title (linked to source)
   - Retailer name + icon
   - Price (prominently displayed)
   - In-stock badge
   - Position/relevance indicator (subtle, e.g., "Match #1")
4. **Sort controls** — dropdown or toggle buttons:
   - "Smart Sort" (weighted price + relevance) — **default**
   - "Price: Low → High"
   - "Price: High → Low"
   - "Best Match"
5. **Empty/error states**

### Step 3: Add navigation tab
**File:** `src/routes/+layout.svelte` (edit)

- Add `<a href="/prices">price compare</a>` to the nav bar

### Step 4: Environment variable setup
**File:** `.env` (new, gitignored)

- `SERPAPI_KEY=your_api_key_here`
- Add `.env` to `.gitignore` if not already there

---

## File Summary

| Action | File |
|--------|------|
| Create | `src/routes/api/lens/+server.js` — API proxy endpoint |
| Create | `src/routes/prices/+page.svelte` — Price comparison page |
| Edit   | `src/routes/+layout.svelte` — Add nav link |
| Create | `.env` — API key (gitignored) |
| Edit   | `.gitignore` — Ensure `.env` is ignored |

## Architecture Notes

- **API key stays server-side only** — the `/api/lens` endpoint proxies requests so the SerpApi key is never exposed to the browser
- **No new dependencies needed** — SvelteKit's built-in `fetch` handles the API call; Svelte's reactivity handles sorting/filtering
- **Position as relevance** — since Google Lens doesn't expose a similarity score, we use `position` (lower = more relevant) as the relevance weight in our smart sort algorithm
