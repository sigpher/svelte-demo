<script>
    import { xlink_attr } from "svelte/internal";

    let todos = [
        { done: false, text: "finish Svelte tutorial", lock: true },
        { done: false, text: "build ann app", lock: true },
        { done: false, text: "universe domination", lock: true },
    ];

    $: remaining = todos.filter((t) => !t.done).length;
    const clear = () => (todos = todos.filter((t) => !t.done));
    const add = () =>
        (todos = todos.concat({ done: false, text: "", lock: false }));
</script>

<main>
    <h1>Todos</h1>
    <button on:click={add}>Add New</button>
    <button on:click={clear}>Clear Finished</button>
    <button on:click={lock}>Edit Item</button>
    {#each todos as todo}
        <div class:finish={todo.done}>
            <input type="checkbox" bind:checked={todo.done} />
            {#if todo.lock}
                <input
                    bind:value={todo.text}
                    placeholder="what to do"
                    disabled
                />
            {:else}
                <input bind:value={todo.text} placeholder="what to do" />
            {/if}
            <input type="checkbox" bind:checked={todo.lock} />
        </div>
    {/each}
    <p>{remaining} remaining</p>
    {#if todos.length < 5}
        <p style="color:red">Not Todos enough to full fill your life</p>
    {/if}
</main>

<style>
    .finish {
        opacity: 0.3;
    }
    input:disabled {
        color: black;
    }
</style>
