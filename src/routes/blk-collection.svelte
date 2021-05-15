<script context="module">
	const files = import.meta.glob('../../static/images/collection/*.jpg.webp');
	import { getAllPosts } from '$lib/util';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load() {
		const allPosts = await getAllPosts(files);
		return {
			props: {
				allPosts
			}
		};
	}
</script>

<script>
	import CardItem from '$lib/CardItem.svelte'
	export let allPosts;
    import OpenGraph from '$lib/OpenGraph.svelte';
</script>

<OpenGraph
  data={{
    description:
      "Showreel video of BLK Jeans & Denim",
    title: "Showreel - BLK JEANS",
  }}
/>
  
  <CardItem images={allPosts}/>