<script context="module">
	const files = import.meta.glob('../../static/images/collection/*.jpg');
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
</script>
  
  <CardItem images={allPosts}/>