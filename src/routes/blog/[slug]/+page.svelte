<h1>{data.blog?.title}</h1>
<div>
    <p>{data.blog?.content}</p>
</div>


<style>
    p {
        white-space: pre-line;
    }
</style>
<script>
    export let data;
</script>