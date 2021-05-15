<script>
    import OpenGraph from '$lib/OpenGraph.svelte';
</script>

<OpenGraph
  data={{
    description:
      "Company Güç Tekstil San. ve Tic. Ltd. Şti.Çobançeşme Mah. Altay Cad. Sülün Sok. No: 8Yenibosna-Bahçelievler / Istanbul – TurkeyTel: +90 212 639 24 22",
    title: "Contact - BLK JEANS",
  }}
/>

<div class="container flex-col mx-auto p-3 md:p-10">
    <div class="flex flex-col md:flex-row mx-auto justify-between py-8">
        <div>
            <h3>COMPANY</h3>
            <address class="not-italic">
                Güç Tekstil San. ve Tic. Ltd. Şti. <br>
                Çobançeşme Mah. Altay Cad. Sülün Sok. No: 8 <br>
                Yenibosna-Bahçelievler / Istanbul – Turkey
            </address>
            <p>Tel: +90 212 639 24 22</p>
            <p>Fax: +90 212 639 24 84</p>
            <p>Email: info@blkjeans.com</p>
        </div>
        <div>
            <h3>SHOWROOM</h3>
            <address class="not-italic">
                Nişanca Mah. Soğanağa Camii Sok. <br>
                Turquise Center No: 4-19/20 <br>
                Beyazıt / Istanbul – Turkey
            </address>
            <p>Tel: +90 212 516 33 80</p>
            <p>Fax: +90 212 458 80 62</p>
            <p>Gsm: +90 533 581 77 37</p>
        </div>
        <div>
            <h3>SHOWROOM #2</h3>
            <address class="not-italic">
                Mehmet Nezih Özmen Mah. Gülsever Sok. <br>
                Star Arena Çarşısı Kat: 1 No:74 <br>
                Merter - İstanbul - Turkey
            </address>
            <p>Tel: +90 212 555 98 67</p>
            <p>Fax: +90 212 555 98 68</p>
            <p>Gsm: +90 533 580 99 79</p>
        </div>
    </div>
    <div class="mx-auto">
        <iframe class="border-0 w-full" title="BLK Jeans Google Map " src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48174.573187326256!2d28.825297!3d41.005325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6818b9fe452b6d04!2sGuc%20Tekstil!5e0!3m2!1sen!2str!4v1620674779978!5m2!1sen!2str" height="260" loading="lazy"></iframe>
    </div>
</div>

<style>
    @screen md {
        .container {
            height: calc(100vh - 160px);
        }
    }
    h3 {
        @apply font-bold text-xl
    }
    
    input[type=text],input[type=email],input[type=submit], textarea {
        @apply border-2 border-gray-100 m-2 p-2 w-full
    }
</style>