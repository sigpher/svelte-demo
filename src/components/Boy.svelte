<script>
    import { getContext } from "svelte";
    let girl = getContext("girl");
</script>

<pre>
    Boy看女生：
    ->女生是否摔门？({girl.slam})
    ->女生是否漂亮？({girl.pretty})
</pre>
