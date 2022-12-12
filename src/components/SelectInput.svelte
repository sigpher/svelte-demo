<script>
    let questions = [
        { id: 1, text: "what's your name?" },
        { id: 2, text: "what's your name?" },
        { id: 3, text: "what's your name?" },
    ];
    let answer = "";
    let selected;
    const handleSubmit = () => {
        alert(
            `answered question ${selected.id} (${selected.text}) with "${answer}"`
        );
    };
</script>

<main>
    <form on:submit|preventDefault={handleSubmit}>
        <select bind:value={selected} on:change={() => (answer = "")}>
            {#each questions as question}
                <option value={question}>{question.text}</option>
            {/each}
        </select>
        <input bind:value={answer} />
        <button type="submit"> Submit </button>
    </form>
    <p>Selected question {selected ? selected.id:'[waiting...]'}</p>
</main>

<style>
    input {
        display: block;
        width: 500px;
        max-width: 100%;
    }
</style>
