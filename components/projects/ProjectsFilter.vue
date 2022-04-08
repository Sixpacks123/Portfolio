<script>
export default {
  props: {
    select: {
      type: String,
      default: "projects",
    },
    selectOptions: {
      type: Array,
      default: () => [
        "Web Application",
        "Mobile Application",
        "UI/UX Design",
        "Branding & Anim",
        "Gérer Le patrimoine informatique",
        "Répondre aux incident et aux demande d'assistance",
        "Développer la présence en ligne de l'organisation",
        "Travailler en mode projet",
        "Mettre a disposition des utilisateurs un service informatique",
        "Organiser son développement proffesionelle"
      ],
    },
  },
};
</script>

<template>
  <select
    @change="$emit('change', $event.target.value)"
    :name="select"
    :id="select"
    class="
      font-general-medium
      px-4
      py-2
      border-1 border-gray-200
      dark:border-secondary-dark
      rounded-lg
      text-sm
      sm:text-md
      bg-secondary-light
      dark:bg-gray-50
      text-primary-dark
      dark:text-primary-dark
    "
  >
    <option value class="text-sm sm:text-md">Catégories</option>
    <option
      v-for="option in selectOptions"
      :key="option"
      :value="option"
      class="sm:text-md"
    >
      {{ option }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
