<script>
    const getUserInfo = async () => {
        let res = await fetch(
            "http://jsonplaceholder.typicode.com/posts/1/comments"
        );
        let data = await res.json();
        if (res.ok) {
            return data;
        } else {
            throw new Error(data);
        }
    };

    let promise = getUserInfo();
    const handleClick = () => {
        promise = getUserInfo();
    };
</script>

{#await promise}
    <p>Wating......</p>
{:then data}
    <ul>
        {#each data as item}
            <li>{item.id} {item.email} {item.name}</li>
        {/each}
    </ul>
{:catch error}
    <p style="color:red">{error.message}</p>
{/await}
