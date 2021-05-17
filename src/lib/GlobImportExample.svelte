<script context="module">
	export const load = () => {
		const files = import.meta.glob('../../static/images/collection/*.jpg.webp');
		const images = Object.keys(files).map((x) => x.slice(12));

		return { props: { images } };
	};
</script>

<script>
	import OpenGraph from '$lib/OpenGraph.svelte';
	let ScrollIt;
	export let images;
	
	function scrollMe(x, y) {
		ScrollIt.scrollBy(x, y);
	};
</script>

<OpenGraph
	data={{
		description:
			'BLK JEANS menswear is experienced in casual clothes and manufacture trendy clothes for men. BLK Collection are made of denim, woven and knitted fabrics.',
		title: 'BLK JEANS - Menswear collection of denim and jeanswear'
	}}
/>

<div id="myScroll" bind:this={ScrollIt} class="flex flex-col justify-start p-1 md:overflow-hidden md:flex-row">
	{#each images as src}
		<img {src} alt="BLK Jeans Menswear Slide" loading="lazy" />
	{/each}
</div>
<div class="scrollBar hidden md:inline-block">
	<button on:click={() => scrollMe(-400, 0)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>
	<button on:click={() => scrollMe(400, 0)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>
</div>

<style>
	@screen md {
		div#myScroll {
			height: calc(100vh - 160px);
		}
		.scrollBar {
			@apply absolute bottom-2 left-2;
		}
		.scrollBar button {
			@apply p-3 bg-turquiseLight bg-opacity-50 text-green-800;
		}
	}
	img {
		@apply p-2;
	}
</style>