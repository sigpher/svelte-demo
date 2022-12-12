<script>
    let url = "https://jsonplaceholder.typicode.com/posts";
    let method = "POST";
    let headers = { "Content-type": "application/json;charset=UTF-8" };
    let body = JSON.stringify({ title: "foo", body: "bar", userId: 1 });
    const post_data = async () => {
        let response = await fetch(url, { method, headers, body });
        let json_obj = await response.json();
        if (response.ok) {
            return json_obj;
        } else {
            return new Error(json_obj);
        }
    };

    let promise = post_data();
    const handleClick = () => {
        promise = post_data();
    };
</script>

<main>
    <button on:click={handleClick}>PostData</button>
    {#await promise}
        <p>Waiting</p>
    {:then data}
        <p>{data.id}</p>
        <p>{data.title}</p>
        <p>{data.body}</p>
        <p>{data.userId}</p>
    {:catch error}
        <p style="color:red">error.message</p>
    {/await}
</main>
