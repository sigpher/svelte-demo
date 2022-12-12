<script>
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let method = "POST";
    let headers = { "Content-type": "application/json;charset=UTF-8" };
    let body = JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
    });

    const getPostData = async () => {
        let resp = await fetch(url, {
    
            headers,
            method,
            body,
        });
        let json = await resp.json();
        if (resp.ok) {
            return json;
        } else {
            return new Error(json);
        }
    };

    let handleClick = getPostData();
</script>

<main>
    {#await  getPostData()}
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
