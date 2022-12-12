<script>
    import { onMount } from "svelte";
    let photos = [];
    onMount(async () => {
        let res = await fetch(
            "http://jsonplaceholder.typicode.com/albums/1/photos"
        );
        photos = await res.json();
    });
    //以下代码在svelte不见效，原因未知
    // const images = document.querySelectorAll("img");
    // const callback = (entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             const image = entry.target;
    //             const data_src = image.getAttribute("data-src");
    //             image.setAttribute("src", data_src);
    //             observer.unobserve(image);
    //             console.log("触发");
    //         }
    //     });
    // };
    // const observer = new IntersectionObserver(callback);

    // images.forEach((image) => {
    //     observer.observe(image);
    // });
</script>

<main>
    <h1>Photos</h1>
    <div class="photos">
        {#each photos as photo}
            <figure>
                <img data-src={photo.thumbnailUrl} alt={photo.title} />
                <figcaption>{photo.title}</figcaption>
            </figure>
        {:else}
            <p>loading data from remote server</p>
        {/each}
    </div>
</main>

<style>
    .photos {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 8px;
    }
    figure,
    img {
        width: 100%;
        margin: 0;
    }
</style>
