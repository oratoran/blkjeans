<script>
    import OpenGraph from '$lib/OpenGraph.svelte';
</script>

<OpenGraph
  data={{
    description:
      "Blk, G&uuml;&ccedil; Textile, has been doing business for the last 18 years. Its main principle is to be fashion-conscious and manufacture trendy clothes. The company is experienced in casual clothes.",
    title: "About - BLK JEANS",
  }}
/>

<div class="container p-3 md:w-4/5 flex flex-col mx-auto content-center items-center">
    <div>
        <p>
            Blk, Güç Textile, has been doing business for the last 18 years. Its main principle is to be fashion-conscious and manufacture trendy clothes.
        </p>
        <p>
            The company is experienced in casual clothes. In 1999, the company has gone through internal changes and as a result the system and the machines were renovated with the newest technology making the company one of the leaders in the sector. Our products are made of denim, woven and knitted fabrics.
        </p>
        <p>
            Our quality concept is the reason we are preferred by our clients. Our professional team and workers are ready for last-minute orders and to satisfy the clients’ requirements.
        </p>
    </div>
    <div class="w-full p-3 border-b-2 border-gray-100 "></div>
    <div class="w-full bg-gray-200 flex justify-between p-6 border-l-8 border-turquiseLight md:mt-20">
        <div>
            <h2 class="font-bold text-2xl">WE ARE HERE TO ANSWER FOR YOUR NEEDS</h2>
            <p class="text-gray-500">Contact with us for your needs, we will offer best possible offers back immediately</p>
        </div>
        <button class="bg-gray-800 p-4 rounded-md" style="color: white;"><a href="/contact/">CONTACT US!</a></button>
    </div>
</div>

<style>
    @screen md {
        .container {
            height: calc(100vh - 160px);
        }
    }
</style>