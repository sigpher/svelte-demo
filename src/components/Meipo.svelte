<script>
    import { setContext } from "svelte";
    import Boy from "./Boy.svelte";
    import Girl from "./Girl.svelte";

    setContext("boy", { car: 1, house: 0, money: 500000 });
    setContext("girl", { slam: true, pretty: true });
</script>

<Boy />
<hr />
<Girl />
