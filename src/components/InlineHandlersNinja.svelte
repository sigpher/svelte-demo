<script>
    let point = { x: 0, y: 0 };
</script>

<div on:mousemove={(e) => (point = { x: e.clientX, y: e.clientY })}>
    {point.x}
    {point.y}
</div>

<style>
    div {
        width: 100%;
        height: 100%;
    }
</style>
