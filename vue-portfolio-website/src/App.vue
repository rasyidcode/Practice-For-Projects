<template>
  <main class=" bg-white px-10 md:px-20 lg:px-40">
    <section class=" min-h-screen">
      <nav class=" py-10 mb-12 flex justify-between">
        <h1 class=" text-xl font-semibold">
          <span class=" uppercase font-bold text-cyan-700">r</span>asyid<span
            class=" uppercase font-bold text-cyan-700">c</span>o<span
            class=" uppercase font-bold text-cyan-700">d</span>e
        </h1>
        <ul class=" flex items-center">
          <li>
            <font-awesome-icon icon="fa-regular fa-moon" class=" text-2xl cursor-pointer" />
          </li>
          <li class="
            bg-gradient-to-r 
            from-cyan-500 
            to-teal-500 
            text-white
            px-4
            py-2
            border-none
            rounded-md
            ml-8">
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>

      <div class=" text-center p-10 py-10">
        <h2 class=" text-5xl py-2 text-teal-600 font-medium">Jamil Al Rasyid</h2>
        <h3 class=" text-2xl py-2">Software Engineer</h3>
        <p class=" text-base py-5 leading-8 text-gray-800 max-w-xl mx-auto">Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!</p>
        <div class=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <font-awesome-icon icon="fa-brands fa-twitter" />
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          <font-awesome-icon icon="fa-brands fa-youtube" />
        </div>
        <div class=" mx-auto bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <img :src="programmingsvg"/>
        </div>
      </div>
    </section>

    <section>
      <div>
        <h3 class=" text-3xl py-1">Service I offer</h3>
        <p class=" text-base py-2 leading-8 text-gray-800">Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for <span class=" text-teal-500">agencies</span> consulted for <span class=" text-teal-500">startups</span> and collaborated with talanted people to create digital products
              for both business and consumer use.</p>
        <p class=" text-base py-2 leading-8">I offer from a wide range of services, including brand design,
              programming and teaching.</p>
      </div>
      <div class=" lg:flex gap-10">
        <div class=" text-center shadow-lg p-10 rounded-xl flex-1">
          <img :src="artsvg" class=" w-60 h-60 mx-auto" />
          <h3 class=" text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
          <p class=" py-2">
            Creating elegant designs suited for your needs following core
                design theory.
          </p>
          <h4 class=" py-4 text-teal-600">Design Tools I Use</h4>
          <p class=" text-gray-800 py-1">Photoshop</p>
          <p class=" text-gray-800 py-1">Illustrator</p>
          <p class=" text-gray-800 py-1">Figma</p>
          <p class=" text-gray-800 py-1">Indesign</p>
        </div>
        <div class=" text-center shadow-lg p-10 rounded-xl flex-1">
          <img :src="art2svg" class=" w-60 h-60 mx-auto" />
          <h3 class=" text-lg font-medium pt-8 pb-2">Code your dream project</h3>
          <p class=" py-2">
            Do you have an idea for your next great website? Let's make it a
                reality.
          </p>
          <h4 class=" py-4 text-teal-600">Design Tools I Use</h4>
          <p class=" text-gray-800 py-1">Photoshop</p>
          <p class=" text-gray-800 py-1">Illustrator</p>
          <p class=" text-gray-800 py-1">Figma</p>
          <p class=" text-gray-800 py-1">Indesign</p>
        </div>
        <div class=" text-center shadow-lg p-10 rounded-xl flex-1">
          <img :src="art3svg" class=" w-60 h-60 mx-auto" />
          <h3 class=" text-lg font-medium pt-8 pb-2">Consulting</h3>
          <p class=" py-2">
            Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
          </p>
          <h4 class=" py-4 text-teal-600">Design Tools I Use</h4>
          <p class=" text-gray-800 py-1">Photoshop</p>
          <p class=" text-gray-800 py-1">Illustrator</p>
          <p class=" text-gray-800 py-1">Figma</p>
          <p class=" text-gray-800 py-1">Indesign</p>
        </div>
      </div>
    </section>

    <section class=" py-10">
      <div>
        <h3 class="text-3xl py-1">Portfolio</h3>
        <p class=" text-base py-2 leading-8 text-gray-800">
          Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for <span class=" text-teal-500">agencies</span> consulted for <span class=" text-teal-500">startups</span> and collaborated with talanted people to create digital products
              for both business and consumer use.
        </p>
        <p class=" text-base py-2 leading-8">I offer from a wide range of services, including brand design,
              programming and teaching.</p>
      </div>
      <div class=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div class=" basis-1/3 flex-1 bg-gradient-to-tl from-teal-500 to-cyan-500 overflow-hidden rounded-xl">
          <img :src="artsvg" class=" w-80 h-80 mx-auto p-5" />
        </div>
        <div class=" basis-1/3 flex-1 bg-gradient-to-tl from-red-500 to-yellow-500 overflow-hidden rounded-xl">
          <img :src="art2svg" class=" w-80 h-80 mx-auto p-5" />
        </div>
        <div class=" basis-1/3 flex-1 bg-gradient-to-tl from-green-500 to-blue-500 overflow-hidden rounded-xl">
          <img :src="art3svg" class=" w-80 h-80 mx-auto p-5" />
        </div>
        <div class=" basis-1/3 flex-1 bg-gradient-to-tl from-purple-500 to-orange-500 overflow-hidden rounded-xl">
          <img :src="art4svg" class=" w-80 h-80 mx-auto p-5" />
        </div>
        <div class=" basis-1/3 flex-1 bg-gradient-to-tl from-pink-500 to-rose-500 overflow-hidden rounded-xl">
          <img :src="art5svg" class=" w-80 h-80 mx-auto p-5" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import programmingsvg from '../src/assets/programming.svg';
import artsvg from '../src/assets/art.svg';
import art2svg from '../src/assets/art2.svg';
import art3svg from '../src/assets/art3.svg';
import art4svg from '../src/assets/art4.svg';
import art5svg from '../src/assets/art5.svg';

export default {
  name: 'App',
  data() {
    return {
      programmingsvg,
      artsvg,
      art2svg,
      art3svg,
      art4svg,
      art5svg,
    }
  }
}
</script>