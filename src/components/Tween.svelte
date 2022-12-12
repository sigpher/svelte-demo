<script>
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut,
        // delay: 1000,
    });
    let nums = [0, 0.25, 0.5, 0.75, 1];
</script>

<main>
    <progress value={$progress} />
    {#each nums as p}
        <button on:click={() => ($progress = p)}>
            {p * 100}%
        </button>
    {/each}

</main>

<style>
    progress {
        display: block;
        width: 100px;
    }

    svg {
        width: 100%;
        height: 100%;
        margin: -8px;
    }
    circle {
        fill: #ff3e00;
    }
</style>
