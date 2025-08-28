const footer = document.getElementById('footer')
footer.innerHTML = `
    <div class="relative bg-blue-950">
        <img src="/docs/assets/images/tech.png"
            class="absolute inset-0 w-full h-full object-cover opacity-20 brightness-0" alt="">
        <footer
            class="w-full pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-12 md:gap-10 p-5 md:pt-14 mx-auto max-w-7xl p-5">
            <div data-aos="fade-up" class="md:col-span-2 md:pr-16">
                <h2 class="md:text-4xl text-3xl text-zinc-100 font-semibold">Vernut</h2>
                <p class="md:mt-5 mt-3 text-zinc-300">
                    Venurt’s goal is to make mobile recharges, bill payments, and digital services fast, secure, and
                    available anytime, anywhere
                </p>
                <div class="mt-7">
                    <a href="/contact.html"
                        class="w-full md:w-auto tracking-wider py-2 px-7 bg-[#145bcd] text-center text-white rounded-sm border border-[#145bcd] hover:opacity-70 transition-all duration-500">
                        Contact Us
                    </a>
                </div>
            </div>

            <div class="md:block hidden"></div>
            <div data-aos="fade-up" data-aos-delay="100" class="second">
                <h2 class="text-2xl text-zinc-100 font-semibold">Quick Link</h2>
                <ul class="mt-5 space-y-3 text-zinc-300 font-medium">
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/faq.html">FAQ</a></li>
                    <li><a href="/blog.html">Blog</a></li>
                    <li><a href="/contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="second">
                <h2 class="text-2xl text-zinc-100 font-semibold">Social Media</h2>
                <ul class="mt-5 space-y-3 text-zinc-300 font-medium">
                    <li class="flex items-center gap-2">
                        <i class="fa-brands fa-linkedin text-xl"></i>
                        LinkedIn
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="fa-brands fa-twitter text-xl"></i>
                        Twitter
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="fa-brands fa-instagram text-xl"></i>
                        Instagram
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="fa-brands fa-facebook text-xl"></i>
                        Facebook
                    </li>
                </ul>
            </div>
        </footer>

        <p class="text-center p-4 text-zinc-300 mt-5">
            Copyright © <span id="copyright"></span> Vernut. All rights reserved.
        </p>
    </div>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year