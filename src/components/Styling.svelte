<script>
	let current = "green";
	const colors = ["green", "red", "blue", "purple", "silver"];
</script>

<main>
	{#each colors as color}
		<button
			class:selected={current === color}
			on:click={() => (current = color)}>{color}</button
		>
	{/each}
	<p>
		You seleced {current}
	</p>
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
		<rect
			width="50"
			height="50"
			style="fill:{current};stroke:pink;stroke-width:0"
		/>
	</svg>
</main>

<style>
	.selected {
		background-color: #ff3e00;
		color: white;
	}
</style>
