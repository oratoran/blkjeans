<script>
    import {onMount} from 'svelte';
    let ScrollIt;

    onMount(() => {
		ScrollIt = document.querySelector('#myScroll');
    
	});
    let scrollMe = function (x,y){
        ScrollIt.scrollBy(x,y);
	}
    
</script>
<div id="myScroll" class="flex flex-col justify-start p-1 md:overflow-hidden md:flex-row">
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-5-691x910.jpg" alt="slide 1" />
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-9-606x910.jpg" alt="slide 1" />
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-6-1364x910.jpg" alt="slide 1" />
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-7-1292x910.jpg" alt="slide 1" />
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-12-606x910.jpg" alt="slide 1" />
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-13-1510x910.jpg" alt="slide 1" />
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-21-606x910.jpg" alt="slide 1" />
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-26-1364x910.jpg" alt="slide 1" />
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-33-705x910.jpg" alt="slide 1" />
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-36-1200x910.jpg" alt="slide 1" />
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-39-633x910.jpg" alt="slide 1" />
    <img src="https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-38-665x910.jpg" alt="slide 1" />
</div>
<div class="scrollButtons">
    <button on:click="{()=>scrollMe(-400,0)}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    </button>
    <button on:click="{()=>scrollMe(400,0)}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    </button>
</div>

<style>
    .scrollButtons{
        position:relative;
    }
    @screen md {
        div#myScroll {
            height: calc(100vh - 160px);
        }
    }
    img {
        @apply p-2
    }
</style>