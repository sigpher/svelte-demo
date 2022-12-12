<script>
    import { data } from "./ObjectStore";
</script>

<main>
    <p>{$data.person.name} {$data.id}</p>
    <ul>
        {#each $data.person.address as addr}
            <li>{addr}</li>
        {/each}
    </ul>
</main>
