<script>
import feather from "feather-icons";

export default {
  name: "CTF",
  scrollToTop: true,
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
    <div class="container mx-auto" >
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class=" border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 dark:text-ternary-light px-6 py-4 text-left">
                Noms
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 dark:text-ternary-light px-6 py-4 text-left">
                Liens
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 dark:text-ternary-light px-6 py-4 text-left">
                Date
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 dark:text-ternary-light px-6 py-4 text-left">
                Classement
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class=" border-b transition duration-300 ease-in-out hover:text-secondary-dark
        dark:hover:text-secondary-light">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-ternary-light">
                  Root me 
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                 <a href="https://www.root-me.org/Sixpacks">Sixpacks</a>
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
               infini
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                1185 points
              </td>
            </tr>
             <tr class=" border-b transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-ternary-light">
                  Hackday 
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                <a href="https://ctf.hackday.fr/">Hackday</a>
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
               08/04/2022 - 18/04/2022
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                37/60
              </td>
            </tr>
             <tr class=" border-b transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-ternary-light">
                  BreizhCTF 
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                 <a href="https://www.breizhctf.com/">breizhctf</a>
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
               01/04/2022 - 02/04/2022
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                90/100
              </td>
            </tr>
            <tr class=" border-b transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-ternary-light">
                  Ctf Pôle Sup 
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                #
              </td>
              <td class="text-sm text-gray-900  dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                2020/2021
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                5 ème
              </td>
            </tr>
            <tr class=" border-b transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-ternary-light">
                  Ctf Pôle Sup 
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                #
              </td>
              <td class="text-sm text-gray-900  dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                2021/2022 (en cours)
              </td>
              <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                9 èmes
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<style scoped></style>
