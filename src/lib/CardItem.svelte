<script>
    export let images
    $: activeImage = 0;
	let active;
	function showImg(e) {
		activeImage = e;
		active = 1;
	}
	function changeImg(e) {
		let i = images.length;
		if (e == 1) {
			if (activeImage == 0) activeImage = i - 1;
			else activeImage -= 1;
		} else {
			if (i == activeImage + 1) activeImage = 0;
			else activeImage += 1;
		}
	}
</script>

{#if images}

	{#if active}
		<div id="overlay" class="grid cell">
			<div id="overlayImage" class="rel">
				<img class="bgw" src={images[activeImage].img} alt={images[activeImage].alt}/>
				<button class="abs arrow arrowLeft white noBor" on:click={() => changeImg(1)}>&lsaquo;</button>
				<button class="abs arrow arrowRight white noBor" on:click={() => changeImg(2)}>&rsaquo;</button>
				<button id="close" class="abs bold bgw" on:click={() => (active = '')}>X</button>
			</div>
		</div>
	{/if}

	<div id="img">
		
		{#if images[1]}
      <div class="masonry px-16 py-8">
        {#each images as item, i}
          <div class=" overflow-hidden mb-8">
            <div class="relative cursor-pointer">
              <img class="" src="{item.img}" alt="{item.title}" on:click={() => showImg(i)} />
            </div>
          </div>
        {/each}
        </div>
		{/if}
	</div>

{/if}



<style>
  .masonry {
    column-count: 2;
  }

    @screen md {
      .masonry {
       column-count: 3;
      }
    }
    @screen lg {
    .masonry {
      column-count: 4;
    }
    }

    #overlay {
		display: grid;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1350;
    @apply bg-turquiseDark bg-opacity-80

	}

	#overlay img,
	#overlay #close { @apply bg-turquiseLight border-2 }
	#overlay img { @apply max-h-screen p-2 m-auto }

	#overlay #close {
    @apply w-8 h-8 top-0 right-4 
	}
	#overlay .arrow {
    @apply top-0 w-16 h-full text-4xl
	}
	#overlay .arrowLeft { @apply left-0 }
	#overlay .arrowRight { @apply right-0 }
	button,
	#product img { @apply cursor-pointer }
	.rel {
		position: relative
	}
	.abs {
		position: absolute
	}
	.bgw {
		background-color: #fff
	}
	.white {
		color: #fff
	}
	.noBor {
		background-color: transparent
	}

</style>
