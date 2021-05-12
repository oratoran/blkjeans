<script>
import Card from '$lib/Card.svelte'

const images = [
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-5.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-9.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-4.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-6.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-7.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-10.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-15.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-12.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-20.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-22.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-24.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-26.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-23.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-32.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-33.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-40.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-38.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-36.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-14.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-18.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-21.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-25.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-30.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-34.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-37.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-13.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-16.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-17.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-19.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-28.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-35.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-31.jpg"
  },
  {
    title: "Photo title",
    img:
      "https://blkjeans.com/wp-content/uploads/2015/04/BLK-JEANS_DENIM_DNM_2015_COLLECTION-39.jpg"
  }
];
</script>

<div class="masonry px-16 py-8">
    {#each images as item}
      <div class="rounded-lg overflow-hidden mb-8">
        <Card src={item.img} title={item.title} />
      </div>
    {/each}
  </div>

<style>
    .masonry {
        column-count: 3;
        column-gap: 2rem;
      }
      @screen lg {
        .masonry {
          column-count: 4;
        }
      }
</style>