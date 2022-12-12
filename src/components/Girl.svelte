<script>
    import { getContext } from "svelte";
    let boy = getContext("boy");
</script>

<pre>
    Girl 看男生：
    -> 房 ({boy.house}套)
    -> 车 ({boy.car}辆)
    -> 钱 (￥{boy.money})
</pre>
