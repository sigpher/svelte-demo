<div class="box">
    <slot>No content was provided</slot>
    <h2>
		<slot name="name">
			<span class="missing">Unknown name</span>
		</slot>
	</h2>
    <div class="address">
		<slot name="address">
			<span class="missing">Unknown address</span>
		</slot>
	</div>
    <div class="email">
		<slot name="email">
			<span class="missing">Unknown email</span>
		</slot>
	</div>
</div>

<style>
	.box {
		width: 300px;
		border: 1px rgba(0,0,0,0.4) #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
		padding: 1em;
		margin: 0 0 1em 0;
	}
</style>