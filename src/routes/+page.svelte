<h1>Hey, my name is Andrew Seo! Welcome to my website!</h1>
<h2>I was originally a pre-med student at <span class='vandy'>Vanderbilt University</span>, <br/>
    but then I went to <span class='asu'>Arizona State University</span> to get a CS bachelor's,<br/>
    and now I'm getting my CS master's from <span class='uiuc'>University of Illinois at Urbana-Champaign</span>.
</h2>

<p>Right now this website is just my playground for learning Svelte, but thanks for visiting!</p>
<p>It has buttons! And a counter! {counter}</p>
<button on:click={increment}>Press me!</button>
<p>The counter can even go down!</p>
<button on:click={decrement}>Decrement!</button>

<script>
    let counter = 0;

    function increment() {
        counter++;
    }
    function decrement() {
        counter--;
    }
</script>

<style>
    .vandy {
        color: rgb(218,165,32);
    }
    .asu {
        color: rgb(128,0,0);
    }
    .uiuc {
        color: rgb(0,0,128);
    }
</style>