<script>

	import Nav from '../components/nav.svelte';

</script>

<Nav />
<slot />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
