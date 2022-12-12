<script>
    import Box from "./Box.svelte";
</script>

<Box>
    <h2>Hello there</h2>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        accusantium alias exercitationem ipsa maiores aliquid dicta! In delectus
        fugiat ab itaque omnis iusto impedit voluptatibus animi non!
        Necessitatibus, magnam nesciunt.
    </p>
</Box>

<style>
    p{
        line-height: 1.5em;
    }
    p::first-letter {
        font-size: 1.5em;
    }
    p::first-line {
        color: blueviolet;
    }
</style>
