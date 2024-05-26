 <template>
    <div>

        <div>

        <!-- <img src="@/assets/smartphones.jpg" /> -->
        </div>

       <nav class="mt-12 mb-8 text-center font-bold">
        
            <router-link class="pl-6" to="/">Home</router-link>

            <router-link class="pl-6" to="/about">About</router-link>

            <router-link class="pl-6" to="/shop">Shop</router-link>

            <router-link class="pl-6" to="/contact">Contact Us</router-link>

       </nav> 

       <div class="justify-end flex -mt-16 pr-4 space-x-5">

            <router-link class="hover:text-white-200" to="/wishlist">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">

                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />

                </svg>
            </router-link>

            <router-link class="flex items-center hover:text-white-200" to="/cart">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />

                </svg>

                <span class="flex absolute -mt-5 ml-4">

                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>

                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>

                </span>

            </router-link>
                    <!-- Sign In / Register Section -->

            <router-link v-if="!isLoggedIn" class="flex items-center hover:text-white-200" to="/login">

                        <!-- Login icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-white-200" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">

                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

                </svg>

            </router-link>


            <router-link v-else class="flex items-center hover:text-white-200" to="/user-account">
                        <!-- Login icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-white-200" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">

                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />

                </svg>

            </router-link>

        </div>

    </div>

    <div class="mt-16 text-white">

        <div class="rounded-lg p-8 text-left m-8 bg-cover bg-center" id="phone">

            <h2 class="font-bold">Smartphones</h2><br>

            <p class="mb-6">Stay connected in style with our sleek and powerful smartphones. From stunning displays to lightning-fast processors, our devices redefine the mobile experience.</p>

            <a class="bg-blue-500 border rounded w-1/4 mt-3 p-4" href="/smartphones">Shop Now</a>

        </div>

        <div class="flex flex-col">

            <div class="inline-flex">

                <div class="flex flex-col p-8 m-8 rounded-lg" id="laptop">

                    <h2 class="font-bold mb-4">Laptops and Computers</h2>

                    <p>Empower your productivity and unleash your creativity with our cutting-edge laptops and computers. From sleek ultrabooks to powerhouse gaming rigs, our collection offers the perfect blend of performance and portability.</p>

                    <p>Whether you're crunching numbers, designing masterpieces, or diving into immersive gaming worlds, our laptops and computers are your gateway to limitless possibilities.</p>

                    <a class="bg-blue-500 border rounded w-1/4 mt-3 p-4" href="/laptops-phones">Shop Now</a>

                </div>

                <div class="flex rounded-lg flex-col p-8 m-8" id="games">

                    <h1 class="font-bold mb-4">Gaming Console</h1>

                    <p>Experience gaming nirvana with our selection of gaming consoles. From epic adventures to thrilling multiplayer battles, immerse yourself in a world of entertainment like never before.</p>

                    <p>Choose from the latest consoles and accessories to elevate your gaming experience and become the ultimate champion of virtual realms.</p>

                    <a class="bg-blue-500 border rounded w-32 mt-3 p-4" href="/gaming-console">Shop Now</a>

                </div>

            </div>

        </div>

        <div class="flex flex-col">

            <div class="inline-flex">


                <div class="flex flex-col rounded-lg p-8 m-8" id="accessories">

                    <h2 class="font-bold mb-4">Accessories</h2>

                    <p>Complete your tech arsenal with our curated collection of accessories. From sleek phone cases to powerful chargers, find the perfect complement to enhance and protect your devices.</p>

                    <p>Elevate your style and functionality with our range of must-have accessories.</p>

                    <a class="bg-blue-500 border rounded w-1/4 mt-3 p-4" href="/accessories">Shop Now</a>

                </div>

                <div class="flex flex-col rounded-lg p-8 m-8 ml-auto" id="audio">

                    <h1 class="font-bold mb-4">Audio and Headphones</h1>

                    <p>Dive into a world of sound with our premium audio and headphones collection. Immerse yourself in crystal-clear audio, whether you're enjoying your favorite music, gaming, or taking calls. </p>

                    <p>From wireless earbuds to over-ear headphones, experience every beat and note with unparalleled clarity and comfort.</p>

                    <a class="bg-blue-500 border rounded w-1/4 mt-3 p-4" href="/audio-headphones">Shop Now</a>

                </div>

            </div>

        </div>

        <div class="p-8 text-left rounded-lg m-8" id="camera">

            <h2 class="font-bold">Cameras</h2><br>

            <p>Capture life's moments in stunning detail with our diverse range of cameras.</p>

            <p class="mb-8"> From compact point-and-shoots to professional-grade DSLRs, our collection offers something for every photographer. Unleash your creativity, preserve memories, and document adventures with our high-quality cameras designed to elevate your photography game.</p>

            <a class="bg-blue-500 border rounded w-1/4  p-4" href="/cameras">Shop Now</a>

        </div>

    </div>

    <div class="border bg-red-800	 text-white  flex-col flex">

        <footer class="grid">

            <div class="flex justify-center">

                <div class="flex flex-col mt-3">

                    <h1 class="font-bold mb-4">Quick Link</h1>

                    <router-link to="/">Home</router-link><br>              

                    <router-link to="/about">About Us</router-link><br>

                    <router-link to="/contact">Contact Us</router-link><br>

                    <router-link to="/offers">Offers</router-link>

                </div>

                <div class="flex flex-col ml-16 pr-10">

                    <h1 class="font-bold mb-4 mt-3">All departments</h1>

                    <router-link to="/smartphones">Smartphones</router-link><br>

                    <router-link to="/accessories">Accessories</router-link><br>

                    <router-link to="/audio-headphones">Audio and Headphones</router-link><br>

                    <router-link to="/cameras">Cameras</router-link><br>

                    <router-link to="/gaming">Gaming</router-link><br>

                    <router-link to="/computer-laptops">Computers and Laptops</router-link>

                </div>

            </div>

        </footer>

    </div>

</template>


<script>

</script>

<style>
#phone {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(124, 114, 114, 0.5)), url('/src/assets/smartphones.jpg');
}
#laptop {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/laptop.jpg');
}
#games{
    background-image: linear-gradient(rgba(89, 82, 82, 0.5), rgba(91, 85, 85, 0.5)), url('/src/assets/ps4.jpg');
}
#accessories {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/accessories.jpg');

}
#camera {
    background-image:   linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/camera.jpg');

    background-repeat: no-repeat;
}
#audio {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/headphones1');

}
/* body {
    background-image: url('/src/assets/background');
} */
</style>
