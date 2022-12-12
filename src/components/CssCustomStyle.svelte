<script>
    import Btn from "./Btn.svelte";
    let color = "white";
    let bgcolor = "#ff3e00"
</script>

<form>
    <label>
        color:<input type="text" bind:value={color}>
    </label>
    <label>
        bgcolor:<input type="text" bind:value={bgcolor}>
    </label>
</form>
<Btn --color={color} --bgcolor={bgcolor}/>