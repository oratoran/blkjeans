<script>
    export let src
    export let title
</script>

<div class="relative cursor-pointer">
    <img class="rounded" src="{src}" alt="{title}" />

    <div class="overlay absolute bottom-0 w-full h-24 px-4 pt-6">
      <div class="text-white text-lg">{title}</div>
      <div class="text-gray-400 text-sm">Photographer</div>
    </div>
  </div>

<style>
    .overlay {
      background: linear-gradient(0deg, black, transparent);
    }
</style>