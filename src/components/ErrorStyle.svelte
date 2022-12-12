<script>
    let number = 0;
</script>

<main>
    <form action="">
        <label for="number_input">
            <input type="text" name="number_input" bind:value={number} class:error={isNaN(Number(number))} />
        </label>
     
    </form>
</main>

<style>
    .error {
        border: 1px solid red;
    }
    input {
        outline: 0 none;
    }
</style>
