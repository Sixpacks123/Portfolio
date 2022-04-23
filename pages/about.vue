<script>
import feather from "feather-icons";

export default {
  name: "About",
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
    <AboutMe class="container mx-auto" />
    <div class="container mx-auto" >
      <h2 class="text-3xl font-medium text-gray-900 dark:text-ternary-light  py-4 text-left ">Certifications</h2>
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
                      Certificat
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 dark:text-ternary-light px-6 py-4 text-left">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-ternary-light">
                        Mooc SecNum Academy (ANSSI) 
                    </td>
                    <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                      <a href=""></a>
                    </td>
                    <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                    Fini
                    </td>
                  </tr>
                  <tr class=" border-b transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-ternary-light">
                        Responisve Web Design (FreeCodeCamp)
                    </td>
                    <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                      <a href="https://www.freecodecamp.org/certification/sixpacks/responsive-web-design">Certificat</a>
                    </td>
                    <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                    Fini
                    </td>
                  </tr>
                  <tr class=" border-b transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-ternary-light">
                        Vue.js (codecademy)
                    </td>
                    <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                      <a href="https://www.codecademy.com/profiles/pySurfer66220/certificates/db927a84bf4bba96bb285ee6a85466fc">Certificat</a>
                    </td>
                    <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                     Fini
                    </td>
                  </tr>
                  <tr class=" border-b transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-ternary-light">
                        React.js (codecademy)
                    </td>
                    <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                      <a href="https://www.codecademy.com/profiles/pySurfer66220/certificates/db927a84bf4bba96bb285ee6a85466fc">Certificat</a>
                    </td>
                    <td class="text-sm text-gray-900 dark:text-ternary-light font-light px-6 py-4 whitespace-nowrap">
                     En cours
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
