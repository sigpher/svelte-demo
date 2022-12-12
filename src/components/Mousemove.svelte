<script>
    let m = { x: 0, y: 0 };
    const handleMousemove = (event) => {
        m.x = event.clientX;
        m.y = event.clientY;
    };
</script>

<main on:mousemove={handleMousemove}>
    The mouse position is {m.x} X {m.y}
</main>

<style>
    main{
        width: 100%;
        height: 100%;
    }
</style>