<script>
    import { marked } from "marked";
    let value = `some words are *italic*, some are **bold**, some are ***underline***`;
</script>

<textarea bind:value></textarea>

{@html marked(value)}
<style>
	textarea { width: 100%; height: 200px; }
</style>