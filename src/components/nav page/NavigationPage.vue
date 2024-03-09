<template>
    <div>
        <div>
        <!-- <img src="./assets/logo.png" /> -->
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
    <div>
        <div class="border bg-blue-500 text-xl p-8 text-left m-8">
            <h2>Smartphones</h2><br>
            <p>Get affordable and quality phones and tablets. Phones with fast processing speed and reliable at any moment.</p>
            <router-link to="/smartphones">
                <span>Shop Now
                    <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </span>
            </router-link>
        </div>
    </div>
    <div>
        <footer>

        </footer>
    </div>
</template>

<script>

</script>