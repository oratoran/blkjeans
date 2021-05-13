<script>
    import SocialIcons from './SocialIcons.svelte'
</script>

<header class=" text-turquiseDark font-bold h-20 m-auto p-6 flex w-full justify-between items-center">
	<a href="/">
        <img src="/images/blk-logo-s.png" alt="BLK Jeans Logo">
    </a>
	<nav class="flex ml-9">
		<a href="/">HOME</a>
		<a href="/about/">ABOUT</a>
		<a href="/blk-collection/">BLK COLLECTION</a>
		<a href="/showreel/">SHOWREEL</a>
		<a href="/contact/">CONTACT</a>
	</nav>
	<a href="tel:+902126392422">+90 212 639 24 22</a>
    <SocialIcons/>
</header>

<style>
    nav a {
        @apply p-4 hover:text-red-600;
    }
</style>