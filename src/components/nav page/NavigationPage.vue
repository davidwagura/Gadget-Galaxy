 <template>
    <div>

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

    <div class="mt-4">
        <router-view></router-view>
    </div>

    <div class="border bg-red-800 text-white flex-col flex">

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
</style>
