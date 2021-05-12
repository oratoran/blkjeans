<script context="module">
	export const prerender = true;
</script>

<div class="container mx-auto">
    <div class="flex w-4/5 mx-auto justify-between py-8">
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
    <div class="flex w-4/5 mx-auto">
        <div class="w-1/2 mr-5">
            <h2>CONTACT WITH US</h2>
            <form name="test" method="post" netlify>
                <input type="hidden" name="form-name" value="test" />
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message" /></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
        <iframe title="BLK Jeans Google Map " src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48174.573187326256!2d28.825297!3d41.005325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6818b9fe452b6d04!2sGuc%20Tekstil!5e0!3m2!1sen!2str!4v1620674779978!5m2!1sen!2str" width="600" height="330" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</div>

<style>
    h3 {
        @apply font-bold text-xl
    }
    .container {
        height: calc(100vh - 160px);
    }
    input[type=text],input[type=email],input[type=submit], textarea {
        @apply border-2 border-gray-100 m-2 p-2 w-full
    }
</style>