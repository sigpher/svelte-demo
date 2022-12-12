<script>
    export let title = "";
</script>

<article>
    <h2>{title}</h2>
    <hr />
    <div>
        <slot name="content" />
    </div>
    {#if $$slots.comments}
        <div style="margin-top:30px;">
            评论：
            <slot name="comments" />
        </div>
    {/if}
</article>
