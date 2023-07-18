<h1>This is my blog!</h1>
<h2>I write random thoughts here!</h2>

{#each data.summaries as {slug, title}}
    <a href="/blog/{slug}">{title}</a><br/>
{/each}

<script>
    export let data;
    let numPages = 3;
</script>