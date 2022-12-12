<script>
    const postReq = async () => {
        let resp = await fetch("http://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1,
            }),
        });
        let json_obj = await resp.json();
        if (resp.ok) {
            return json_obj;
        } else {
            return new Error(json_obj);
        }
    };

    let promise = postReq();
    let handleClick = () => {
        promise = postReq();
    };
</script>

<main>
    <button on:click={handleClick}>Post Data</button>
    {#await promise}
        <p>Waiting</p>
    {:then data}
        <p>{data.id}</p>
        <p>{data.title}</p>
        <p>{data.body}</p>
        <p>{data.userId}</p>
    {:catch error}
        <p>{error.message}</p>
    {/await}
</main>
