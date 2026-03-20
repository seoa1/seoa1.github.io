<script>
	let imageUrl = '';
	let results = [];
	let loading = false;
	let error = '';
	let sortMode = 'smart';

	const RELEVANCE_WEIGHT = 5; // dollars per position rank

	async function search() {
		if (!imageUrl.trim()) return;

		loading = true;
		error = '';
		results = [];

		try {
			const res = await fetch(`/api/lens?url=${encodeURIComponent(imageUrl)}`);
			const data = await res.json();

			if (!res.ok) {
				error = data.error || 'Something went wrong';
				return;
			}

			results = data.results;
		} catch (e) {
			error = 'Failed to fetch results. Please try again.';
		} finally {
			loading = false;
		}
	}

	function smartScore(item) {
		return item.price + item.position * RELEVANCE_WEIGHT;
	}

	$: sortedResults = [...results].sort((a, b) => {
		switch (sortMode) {
			case 'smart':
				return smartScore(a) - smartScore(b);
			case 'price-asc':
				return a.price - b.price;
			case 'price-desc':
				return b.price - a.price;
			case 'relevance':
				return a.position - b.position;
			default:
				return 0;
		}
	});
</script>

<div class="container">
	<h1>Price Compare</h1>
	<p class="subtitle">Find the best price for clothing items using Google Lens image search</p>

	<div class="search-bar">
		<input
			type="text"
			bind:value={imageUrl}
			placeholder="Paste an image URL..."
			on:keydown={(e) => e.key === 'Enter' && search()}
		/>
		<button on:click={search} disabled={loading || !imageUrl.trim()}>
			{loading ? 'Searching...' : 'Search'}
		</button>
	</div>

	{#if error}
		<p class="error">{error}</p>
	{/if}

	{#if loading}
		<div class="loading">
			<div class="spinner"></div>
			<p>Searching for matching products...</p>
		</div>
	{/if}

	{#if sortedResults.length > 0}
		<div class="controls">
			<label for="sort">Sort by:</label>
			<select id="sort" bind:value={sortMode}>
				<option value="smart">Smart (Price + Relevance)</option>
				<option value="price-asc">Price: Low → High</option>
				<option value="price-desc">Price: High → Low</option>
				<option value="relevance">Best Match</option>
			</select>
			<span class="result-count">{sortedResults.length} results with prices</span>
		</div>

		<div class="grid">
			{#each sortedResults as item, i}
				<a href={item.link} target="_blank" rel="noopener noreferrer" class="card">
					<div class="card-img">
						{#if item.thumbnail}
							<img src={item.thumbnail} alt={item.title} />
						{:else}
							<div class="no-img">No image</div>
						{/if}
					</div>
					<div class="card-body">
						<p class="price">{item.currency}{item.price.toFixed(2)}</p>
						<p class="title">{item.title || 'Untitled'}</p>
						<div class="meta">
							{#if item.source_icon}
								<img class="source-icon" src={item.source_icon} alt="" />
							{/if}
							<span class="source">{item.source || 'Unknown'}</span>
						</div>
						{#if item.inStock === true}
							<span class="badge in-stock">In Stock</span>
						{:else if item.inStock === false}
							<span class="badge out-of-stock">Out of Stock</span>
						{/if}
						<span class="match-rank">Match #{item.position}</span>
					</div>
				</a>
			{/each}
		</div>
	{:else if !loading && !error && results.length === 0 && imageUrl}
		<!-- Only show after a search has been attempted -->
	{/if}
</div>

<style>
	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 1rem 1rem 3rem;
	}

	h1 {
		text-align: center;
		margin-bottom: 0.25rem;
	}

	.subtitle {
		text-align: center;
		color: #666;
		margin-bottom: 1.5rem;
	}

	.search-bar {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.search-bar input {
		flex: 1;
		padding: 0.6rem 0.8rem;
		font-size: 1rem;
		border: 2px solid #ccc;
		border-radius: 6px;
		font-family: inherit;
	}

	.search-bar input:focus {
		outline: none;
		border-color: #4a90d9;
	}

	.search-bar button {
		padding: 0.6rem 1.4rem;
		font-size: 1rem;
		background: #4a90d9;
		color: white;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		font-family: inherit;
	}

	.search-bar button:hover:not(:disabled) {
		background: #357abd;
	}

	.search-bar button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.error {
		color: #d32f2f;
		text-align: center;
	}

	.loading {
		text-align: center;
		padding: 2rem;
	}

	.spinner {
		width: 32px;
		height: 32px;
		border: 3px solid #eee;
		border-top-color: #4a90d9;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
		margin: 0 auto 0.5rem;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	.controls label {
		font-weight: bold;
	}

	.controls select {
		padding: 0.4rem;
		border-radius: 4px;
		border: 1px solid #ccc;
		font-family: inherit;
	}

	.result-count {
		margin-left: auto;
		color: #888;
		font-size: 0.9rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1rem;
	}

	.card {
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition: box-shadow 0.15s;
		display: flex;
		flex-direction: column;
	}

	.card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
	}

	.card-img {
		width: 100%;
		aspect-ratio: 1;
		overflow: hidden;
		background: #f5f5f5;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.no-img {
		color: #aaa;
	}

	.card-body {
		padding: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.price {
		font-size: 1.3rem;
		font-weight: bold;
		color: #1a8917;
		margin: 0;
	}

	.title {
		font-size: 0.85rem;
		margin: 0;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}

	.source-icon {
		width: 16px;
		height: 16px;
		border-radius: 2px;
	}

	.source {
		font-size: 0.8rem;
		color: #888;
	}

	.badge {
		font-size: 0.7rem;
		padding: 0.15rem 0.4rem;
		border-radius: 3px;
		width: fit-content;
	}

	.in-stock {
		background: #e8f5e9;
		color: #2e7d32;
	}

	.out-of-stock {
		background: #fbe9e7;
		color: #c62828;
	}

	.match-rank {
		font-size: 0.7rem;
		color: #aaa;
	}
</style>
