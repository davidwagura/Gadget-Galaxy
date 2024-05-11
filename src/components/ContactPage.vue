<template>

    <div class="bg-gradient-to-b from-purple-900 to-indigo-900 py-16">

      <div class="max-w-6xl mx-auto px-4 md:px-8">

        <div class="bg-white rounded-lg shadow-lg px-6 py-8">

          <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Contact Us</h1>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <!-- Contact Form -->

            <div class="col-span-1 md:col-span-1">

              <h2 class="text-2xl font-bold mb-4 text-gray-800">Send Us a Message</h2>

              <form>

                <div class="mb-4">

                  <label for="name" class="block text-gray-700 text-lg mb-2">Name</label>

                  <input type="text" id="name" name="name" placeholder="Your Name" class="w-full rounded-lg border border-gray-400 py-2 px-4 focus:outline-none focus:border-indigo-600">

                </div>

                <div class="mb-4">

                  <label for="email" class="block text-gray-700 text-lg mb-2">Email</label>

                  <input type="email" id="email" name="email" placeholder="Your Email" class="w-full rounded-lg border border-gray-400 py-2 px-4 focus:outline-none focus:border-indigo-600">

                </div>

                <div class="mb-4">

                  <label for="message" class="block text-gray-700 text-lg mb-2">Message</label>

                  <textarea id="message" name="message" rows="5" placeholder="Your Message" class="w-full rounded-lg border border-gray-400 py-2 px-4 focus:outline-none focus:border-indigo-600"></textarea>

                </div>

                <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">Send</button>

              </form>

            </div>

            <!-- Contact Information -->

            <div class="col-span-1 md:col-span-1">

              <h2 class="text-2xl font-bold mb-4 text-gray-800">Our Information</h2>

              <p class="text-lg text-gray-700 mb-4"><span class="font-bold">Email:</span> info@GadgetGalaxy.com</p>

              <p class="text-lg text-gray-700 mb-4"><span class="font-bold">Phone:</span> 0712345678</p>

              <p class="text-lg text-gray-700 mb-4"><span class="font-bold">Address:</span> 123 Main Street, City</p>

              <p class="text-lg text-gray-700 mb-4">Feel free to contact us via email, phone, or visit our physical store.</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </template>
  
  <script>
  
  export default {

    name: 'ContactPage',

  };

  </script>
  
  