<script>
    let m = { x: 0, y: 0 };

    const handleClick = (event) => {
        m.x = event.clientX;
        m.y = event.clientY;
    };
</script>

<main on:mousemove={handleClick}>
    {m.x} {m.y}
</main>

<style>
    main {
        width: 100%;
        height: 100%;
    }
</style>
