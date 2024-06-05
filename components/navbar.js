export const navbars = (p ,q, k ,v) =>
  {
     return `
     <nav class="w-[100%] fixed z-50 bg-zinc-700">
          <div
            class="mx-auto justify-between py-4 items-center flex w-[85%]"
          >
            <div class="justify-between items-center flex">
              <img
                class="h-[50px] w-[50px] object-cover rotate-[-12deg]"
                src="../src/img/logo.png"
                alt="logo"
              />
              <a
                href="../src/index.html"
                class="text-yellow-600 text-3xl font-bold cursor-pointer"
              >
                MOVIES TODAY
              </a>
            </div>
            <ul class="flex items-center justify-between w-[550px] text-white">
              <li><a href=${p} class="hover:text-red-500">MOVIES</a></li>
              <li><a href=${q} class="hover:text-red-500">CINEMAS</a></li>
              <li><a href=${k} class="hover:text-red-500">PROMOTION</a></li>
              <li><a href=${v} class="hover:text-red-500">ABOUT AS</a></li>
            </ul>
            <!--TODO search -->
            <form class="w-[300px] flex gap-5">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only"
                >Search</label
              >
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                >
                  <i class="fa-solid fa-magnifying-glass text-black"></i>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-zinc-400 focus:border-black"
                  placeholder="Search Movies..."
                  required
                />
              </div>
              <!-- login -->
              <a
                href="#"
                class="text-center text-white text-sm bg-rose-800 rounded-[5px] px-5 py-3"
              >
                login
              </a>
            </form>
          </div>
        </nav>
     `;
  }