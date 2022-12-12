<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const sayHello = () => {
        dispatch("message", {
            test: "hell0",
        });
    };
</script>

<button on:click={sayHello}> Click to say hello </button>
