<script context="module">
	const modules = import.meta.glob('../../static/images/collection/*.jpg');
	export const images = [];
	const slugRegex = /([\w-]+)\.(jpg|png)/i;

	for (const path in modules) {
 		modules[path]().then((mod) => {	
		images.push(path.match(slugRegex)[0]);
  		});
	}
</script>

<script>
	import CardItem from '$lib/CardItemNew.svelte'
</script>
  
<CardItem images={images}/>