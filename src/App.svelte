<script>
	import Red from "./components/Red.svelte";
	import Green from "./components/Green.svelte";
	import Blue from "./components/Blue.svelte";
	let selected;
	$: component = [Red, Green, Blue][selected];
</script>
<select bind:value={selected}>
	<option value="0">Red</option>
	<option value="1">Green</option>
	<option value="2">Blue</option>
</select>
<svelte:component this={component} />

