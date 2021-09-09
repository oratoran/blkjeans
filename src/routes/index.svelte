<script>
    import OpenGraph from '$lib/OpenGraph.svelte';
 
   let ScrollIt;

    function scrollMe(x,y) {
        ScrollIt.scrollBy(x,y);
	}
</script>

<OpenGraph
  data={{
    description:
      "BLK JEANS menswear is experienced in casual clothes and manufacture trendy clothes for men. BLK Collection are made of denim, woven and knitted fabrics.",
    title: "BLK JEANS - Menswear collection of denim and jeanswear",
  }}
/>

<div id="myScroll" bind:this={ScrollIt} class="flex flex-col justify-start p-1 md:overflow-hidden md:flex-row">
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-5.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy" />
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-9.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy" />
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-6.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy" />
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-7.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy"/>
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-12.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy" />
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-13.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy" />
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-21.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy" />
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-26.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy" />
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-33.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy" />
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-36.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy" />
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-39.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy" />
    <img src="/images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-38.jpg.webp" alt="BLK Jeans Menswear Slide" loading="lazy" />
</div>
<div class="scrollBar hidden md:inline-block">
    <button on:click="{()=>scrollMe(-400,0)}" aria-label="Go Next">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    </button>
    <button on:click="{()=>scrollMe(400,0)}" aria-label="Go Previous">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        @apply absolute bottom-2 left-2
    }
    .scrollBar button {
        @apply p-3 bg-turquiseLight bg-opacity-50 text-green-800
    }
    }
    img {
        @apply p-2 h-full w-full
    }
</style>