<script lang="ts">
    import { page } from "$app/stores";
    import type { OpenGraph } from "../types/open-graph.type";
    export let data: OpenGraph;
    const {
      description,
      image = "images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-6.jpg",
      title,
      type = "website",
      imageTwitter = "images/collection/BLK-JEANS_DENIM_DNM_2015_COLLECTION-6.jpg",
    } = data || {};
    const url = `https://${$page.host}${$page.path}`;
    const siteUrl = `https://${$page.host}/`;
  </script>
  
  <svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
  
    <!-- https://ogp.me -->
    <meta property="og:image" content="{siteUrl}{image}" />
    <meta property="og:description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
  
    <!-- https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@BLKJeansWear" />
    <meta name="twitter:creator" content="@BLKJeansWear" />
    <meta name="twitter:image" content="{siteUrl}{imageTwitter}" />
  </svelte:head>