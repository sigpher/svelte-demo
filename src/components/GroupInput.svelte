<script>
    let quantity = 1;
    let order = [];
    let menu = ["fish", "egg", "vegetable", "beef", "pork", "chiken"];
    const join = (order) => {
        if (order.length === 1) return order[0];
        return `${order.slice(0, -1).join(", ")} and ${
            order[order.length - 1]
        }`;
    };
</script>

<main>
    <label>
        <input type="radio" name="quantity"  bind:group={quantity} value={1} >
        1 dish
    </label>

    <label>
        <input type="radio" name="quantity"  bind:group={quantity} value={2} >
        2 dishies
    </label>

    <label>
        <input type="radio" name="quantity"  bind:group={quantity} value={3} >
        3 dishies
    </label>

    <label>
        <input type="radio" name="quantity"  bind:group={quantity} value={4} >
        4 dishies
    </label>

    <label>
        <input type="radio" name="quantity"  bind:group={quantity} value={5} >
        5 dishies
    </label>

    <label>
        <input type="radio" name="quantity"  bind:group={quantity} value={6} >
        6 dishies
    </label>
    
    {#each menu as item}
        <label>
            <input
                type="checkbox"
                name="order"
                value={item}
                bind:group={order}
            />
            {item}
        </label>
    {/each}
</main>

{#if order.length < 1}
    <p>You must at least make 1 order</p>
{:else if order.length > quantity}
    <p>You can't order more than the quantity</p>
{:else}
    <p>You ordered {join(order)}</p>
{/if}
