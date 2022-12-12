<script>
    let m = { x: 0, y: 0 };
</script>

<main on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
    <p>{m.x} {m.y}</p>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
    }
</style>
