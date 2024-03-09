<template>
    <div>
        <div>
        <!-- <img src="/assets/camera.jpg" /> -->
        </div>
       <nav class="-mt-10">
            <router-link class="pl-6" to="/home">Home</router-link>
            <router-link class="pl-6" to="/about">About</router-link>
            <router-link class="pl-6" to="/shop">Shop</router-link>
            <router-link class="pl-6" to="/contact-us">Contact Us</router-link>
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
    <div class="mt-16">
        <div class="border bg-blue-500 text-xl p-8 text-left m-8">
            <h2 class="font-bold">Smartphones</h2><br>
            <p>Stay connected in style with our sleek and powerful smartphones. From stunning displays to lightning-fast processors, our devices redefine the mobile experience.</p>
            <button class="bg-red-500">
                <router-link to="/smartphones">
                    <span>Shop Now
                        <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </span>
                </router-link>
            </button>
        </div>
        <div class="flex flex-col">
            <div class="flex flex-col border border-black text-xl p-8 m-8">
                <h2 class="font-bold">Computers and Laptops</h2>
                <p>Unleash your productivity with our range of cutting-edge laptops and computers.</p>
                <p>Whether you're a student, professional, or creative, find the perfect balance of performance and portability.</p>
            </div>
            <div class="border border-black flex flex-col text-xl p-8 m-8">
                <h1 class="font-bold">Gaming Console</h1>
                <p>Embark on epic adventures and multiplayer showdowns with our cutting-edge gaming consoles.</p>
                <p>From high-octane action to immersive storytelling, experience gaming like never before.</p>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex flex-col border border-black text-xl p-8 m-8">
                <h2 class="font-bold">Accesories</h2>
                <p>Complete your tech arsenal with our curated collection of accessories. From sleek phone cases to powerful chargers, find the perfect complement to enhance and protect your devices.</p>
                <p>Elevate your style and functionality with our range of must-have accessories.</p>

            </div>
            <div class="border border-black flex flex-col text-xl p-8 m-8">
                <h1 class="font-bold">Audio and Headphones</h1>
                <p>Dive into a world of sound with our premium audio and headphones collection. Immerse yourself in crystal-clear audio, whether you're enjoying your favorite music, gaming, or taking calls. </p>
                <p>From wireless earbuds to over-ear headphones, experience every beat and note with unparalleled clarity and comfort.</p>
            </div>
        </div>
        <div class="border bg-blue-500 text-xl p-8 text-left m-8">
            <h2 class="font-bold">Cameras</h2><br>
            <p>Capture life's moments in stunning detail with our diverse range of cameras.</p>
            <p> From compact point-and-shoots to professional-grade DSLRs, our collection offers something for every photographer. Unleash your creativity, preserve memories, and document adventures with our high-quality cameras designed to elevate your photography game.</p>
            <button class="bg-red-500">
                <router-link to="/smartphones">
                    <span>Shop Now
                        <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </span>
                </router-link>
            </button>
        </div>

    </div>
    <div class="border bg-pink-600 text-white  flex-col flex">
        <footer class="grid">
            <div class="flex justify-center">
                <div class="flex flex-col mt-3">
                    <h1 class="font-bold mb-4">Quick Link</h1>
                    <router-link to="/home">Home</router-link><br>                
                    <router-link to="/about-us">About Us</router-link><br>
                    <router-link to="/contact-us">Contact Us</router-link><br>
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