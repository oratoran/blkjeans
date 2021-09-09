<script>
    import SocialIcons from './SocialIcons.svelte';
	let active = false;
</script>

<header class="flex flex-wrap text-turquiseDark font-bold sm:h-20 m-auto p-6 w-full justify-between items-center content-center">
	<a href="/">
        <img src="/images/blk-logo-s.png" alt="BLK Jeans Logo">
    </a>
	<button class="md:hidden" on:click={() => {active = !active}}>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		  </svg>
	</button>
	<nav class="flex flex-col  ml-9  {active ? 'w-full md:w-auto md:flex-row' : 'hidden md:inline-block'}">
		<a href="/">HOME</a>
		<a href="/about/">ABOUT</a>
		<a href="/blk-collection/">BLK COLLECTION</a>
		<a href="/showreel/">SHOWREEL</a>
		<a href="/contact/">CONTACT</a>
	</nav>
	<a class="hidden md:hidden lg:block" href="tel:+902126392422">+90 212 639 24 22</a>
    <SocialIcons/>
</header>

<style>
    nav a {
        @apply p-4 hover:text-red-600;
    }
	img {
		@apply h-full w-full;
	}
</style>