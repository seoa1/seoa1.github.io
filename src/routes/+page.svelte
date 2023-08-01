<script>
	let counter = 0;

	function increment() {
		counter++;
	}
	function decrement() {
		counter--;
	}
</script>

<h1>Hey, my name is Andrew Seo! Welcome to my website!</h1>
<h2>
	I was originally a pre-med student at <span class="vandy">Vanderbilt University</span>, <br />
	but then I went to <span class="asu">Arizona State University</span> to get a CS bachelor's,<br />
	and now I'm getting my CS master's from
	<span class="uiuc">University of Illinois at Urbana-Champaign</span>.
</h2>

<p>Right now this website is just my playground for learning Svelte, but thanks for visiting!</p>
<p>
	Here's some links to some links to some of the coding projects I made back at Vanderbilt when I
	was starting my coding journey:
</p>
<div>
	<a href="https://seoa1.github.io/AlgoVisualizer/" target="_blank">
		<span class="bold">Algorithm Visualizer: </span>
	</a>
</div>
<p>some sorting and path finding algorithms! very cool!</p>
<br />
<div>
	<a href="https://seoa1.github.io/Minesweeper-Solver/" target="_blank">
		<span class="bold">Minesweeper Solver: </span>
	</a>
</div>
<p>play minesweeper, or let the AI play it for you! awesome!</p>
<br />
<div>
	<p>We've got buttons! And a counter! {counter}</p>
	<button on:click={increment}>Press me!</button>
	<p>The counter can even go down!</p>
	<button on:click={decrement}>Decrement!</button>
</div>

<style>
	.vandy {
		color: rgb(218, 165, 32);
	}
	.asu {
		color: rgb(128, 0, 0);
	}
	.uiuc {
		color: rgb(0, 0, 128);
	}
	.bold {
		font-weight: bold;
	}
	* {
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}
</style>
