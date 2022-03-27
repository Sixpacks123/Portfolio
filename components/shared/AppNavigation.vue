<script>
export default {
  props: ["isOpen", "showModal", "modal", "categories"],
};
</script>

<template>
  <!-- App header navigation links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="
      incosolata
      m-0
      sm:ml-4
      mt-5
      sm:mt-3 sm:flex
      p-5
      sm:p-0
      justify-center
      items-center
      shadow-lg
      sm:shadow-none
    "
  >
    <NuxtLink
      to="/projects"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
      "
      aria-label="Projects"
      >Projets</NuxtLink
    >
    <NuxtLink
      to="/about"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
      aria-label="About Me"
      >À propos</NuxtLink
    >
    <NuxtLink
      to="/contact"
      class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
      aria-label="Contact"
      >Contact</NuxtLink
    >
    <div
      class="
        incosolata
        border-t-2
        pt-3
        sm:pt-0 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
    >
      <button
        class="
          sm:hidden
          block
          text-left text-md
          bg-yellow-600
          hover:bg-yellow-500
          text-white
          shadow-sm
          rounded-md
          px-4
          py-2
          mt-2
        "
        @click="showModal()"
        aria-label="Hire Me Button"
      >
        dsfsd
      </button>
    </div>
  </div>
</template>

<style scoped>

#nav .nuxt-link-exact-active,
#nav .nuxt-link-active {
  @apply text-yellow-600 dark:text-yellow-600;
}
</style>
