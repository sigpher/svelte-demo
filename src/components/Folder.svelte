<script>
  import App from "../App.svelte";
    import Article from "./Article.svelte";
    import Box from "./Box.svelte";
import File from "./File.svelte";
  export let expanded = false;
  export let name;
  export let files;

  const toggle = () => (expanded = !expanded);
</script>

<span class:expanded on:click={toggle}> {name}</span>
{#if expanded}
  <ul>
    {#each files as file}
      <svelte:self {...file}>
    {/each}
  </ul>
{/if}