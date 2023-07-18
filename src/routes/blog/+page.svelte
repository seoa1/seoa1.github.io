<h1>This is my blog!</h1>
<h2>I write some random thoughts here in raw html so they can get lost into the abyss!</h2>
<p>My plan is to come back to these posts in a few years and laugh at how cringe I was when I was younger. But I guess YOU get the chance to laugh at me now!</p>

{#each data.summaries as {slug, title}}
    <a href="/blog/{slug}">{title}</a><br/>
{/each}

<script>
    export let data;
    let numPages = 3;
</script>