<script context="module">
	const modules = import.meta.glob('../../static/images/collection/*.jpg');
	export const imageList = [];
	let i = 0;
	const slugRegex = /([\w-]+)\.(jpg|png)/i;
	for (const path in modules) {
 		modules[path]().then((mod) => {
    	// console.log(path.match(slugRegex)[0])	
		imageList.push(path.match(slugRegex)[0]);
  		});

	}
	console.log("imageList:", imageList);
</script>

<script>
	imageList;
	import Gallery from '$lib/Gallery.svelte';

	// console.log('modules are: ' , imageList)




	function handleClick(e) {
		console.log(e.detail.url)
	}
    let items = Array.from(Array(40).keys())
    // console.log(items);
</script>


<Gallery on:click={handleClick}>
    {#each imageList as item, i}
    	<img src="/images/collection/{item}" alt="{item}" />
	{/each}
</Gallery>