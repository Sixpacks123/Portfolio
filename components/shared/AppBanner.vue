<script>
import feather from "feather-icons";
import Particles from '~/components/Particles.vue'
export default {
  components: {
   Particles
  },
  data: () => {
    return {
      // Todo
    };
  },

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
<div>
      <client-only>
      <Particles
        color="#960e0e"
        :particles-number="100"
        shape-type="star"
        :particle-size="3"
        movement-direction="top"
        lines-color="#dedede"
        :line-linked="false"
        :move-speed="0.75"
        class=" dark:text-black absolute  top-0 left-0 w-full h-screen"
      />
  </client-only>


  <section
    class="
     text-left pt-60 pb-60 w-8/1
    "
  >


    <!-- Banner left contents -->
    <div class="w-full md:w-2/3 text-left z-4">
      <h1
        class="
        mx-auto
          incosolata
          text-6xl
          md:text-5xl
          xl:text-6xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
          uppercase
        "
      >
        <span class="text-yellow-600">Heurtault </span> Aubin
      </h1>
      <p
        class="
          incosolata
          mt-2
          text-lg
          sm:text-3xl
          xl:text-3xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        "
      >
        Junior Developer, CTF Player
      </p>
      <div class="flex justify-center sm:block">
        <a
          href="/CV_heurtault_aubin.pdf"
          download=""
          class="
            flex
            justify-center
            items-center
            w-36
            sm:w-48
            mt-12
            mb-6
            sm:mb-0
            text-lg
            py-2.5
            sm:py-3
            shadow-lg
            rounded-lg
            bg-gray-100
            focus:ring-1 focus:ring-indigo-900
            hover:bg-yellow-600
            text-gray-500
            hover:text-white
            duration-500
          "
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg incosolata duration-100"
            >Download CV</span
          ></a
        >
      </div>
    </div>

    <!-- Banner right illustration -->

  </section>
  </div>
</template>

<style lang="scss" scoped>

</style>
