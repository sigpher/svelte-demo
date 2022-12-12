<script>
    let hovering = false;
    const enter = () => {
        hovering = true;
    };
    const leave = () => {
        hovering = false;
    };
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
    <slot hovering={hovering} />
</div>
