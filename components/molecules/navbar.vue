  <template>
  <div class="w-full shadow">
    <nav
      class="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0"
    >
      <div>
        <div
          class="flex flex-wrap items-center justify-between w-full lg:w-auto"
        >
          <a href="/">
            <span
              class="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
            >
              <span>
                <Image
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="32"
                  class="w-8"
                />
              </span>
              <span>Beerly</span>
            </span>
          </a>

          <button
            aria-label="Toggle Menu"
            class="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
          >
            <svg
              class="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />

              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>

          <div class="flex flex-wrap w-full my-5 lg:hidden">
            <nuxt-link
              v-for="(item, i) in navigation"
              :to="item == 'Beers' ? '/beers' : '/'"
              :key="i"
              class="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
            >
              {{ item }}
            </nuxt-link>

            <a
              href="/"
              class="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div class="hidden text-center lg:flex lg:items-center">
        <ul
          class="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex"
        >
          <li class="mr-3 nav__item" v-for="(menu, i) in navigation" :key="i">
            <nuxt-link
              :to="menu == 'Beers' ? '/beers' : '/'"
              class="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
            >
              {{ menu }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="hidden mr-3 space-x-4 lg:flex nav__item">
        <nuxt-link
          to="/foods"
          class="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
        >
          Get Started
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>
  
  <script setup>
const navigation = ["Features", "Beers", "Pricing", "Blog"];
</script>
  
  <style>
</style>

