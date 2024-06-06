export const navbars = (p ,q, k ,v) =>
  {
     return `
     <nav class="w-[100%] fixed z-50 bg-zinc-700">
        <div
          class="mx-auto justify-between lg:py-4 md:py-4 items-center flex lg:w-[85%] md:w-[95%]  min-[320px]:py-1"
        >
          <div
            class="lg:justify-between lg:items-center lg:flex md:flex md:items-center min-[320px]:flex min-[320px]:items-center"
          >
            <img
              class="lg:h-[50px] lg:w-[50px] md:h-[50px] md:w-[50px] object-cover rotate-[-12deg] min-[320px]:h-[60px] min-[320px]:w-[70px]"
              src="../src/img/logo.png"
              alt="logo"
            />
            <a
              href="#"
              class="text-yellow-600 lg:text-3xl md:text-sm font-bold cursor-pointer ld:flex md:flex min-[320px]:hidden"
            >
              MOVIES TODAY
            </a>
          </div>
          <ul
            class="flex items-center justify-between lg:w-[550px] md:w-[330px] text-white lg:text-[1rem] md:text-sm min-[320px]:hidden lg:flex md:flex"
          >
            <li>
              <a href="../src/index.html" class="hover:text-red-500">MOVIES</a>
            </li>
            <li>
              <a href="../page/cinemas.html" class="hover:text-red-500"
                >CINEMAS</a
              >
            </li>
            <li>
              <a href="../page/promotion.html" class="hover:text-red-500"
                >PROMOTION</a
              >
            </li>
            <li>
              <a href="../page/about.html" class="hover:text-red-500"
                >ABOUT AS</a
              >
            </li>
          </ul>
          <section class="lg:hidden md:hidden min-[320px]:flex">
            <div
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-white   font-medium  text-sm px-5 py-2 text-center  inline-flex items-center"
            > 
            <i class="fa-solid fa-bars text-2xl"></i>
            </div>
           
            <!-- Dropdown menu -->
            <div
              id="dropdown"
              class="z-10 hidden bg-zinc-500 divide-y divide-gray-100  shadow w-full"
            >
              <ul
                class="py-2 text-sm text-white "
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="${p}"
                    class="block px-4 py-2 hover:bg-zinc-400"
                    >MOVIES</a
                  >
                </li>
                <li>
                  <a
                    href="${q}"
                    class="block px-4 py-2 hover:bg-zinc-400"
                    >CINEMAS</a
                  >
                </li>
                <li>
                  <a
                    href="${k}"
                    class="block px-4 py-2 hover:bg-zinc-400"
                    >PROMOTION</a
                  >
                </li>
                <li>
                  <a
                    href="${v}"
                    class="block px-4 py-2 hover:bg-zinc-400"
                    >ABOUT US</a
                  >
                </li>
                <li>
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                    >
                      <i class="fa-solid fa-magnifying-glass text-black"></i>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-3 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-zinc-500 focus:ring-zinc-400 focus:border-gray-100"
                      placeholder="Search Movies..."
                      required
                    />
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <!--TODO search -->
          <form
            class="lg:w-[300px] md:w-[200px] lg:flex lg:gap-5 md:gap-2 min-[320px]:hidden md:flex"
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
                class="block w-full lg:py-3 md:py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-zinc-400 focus:border-black"
                placeholder="Search Movies..."
                required
              />
            </div>
            <!-- login -->
            <a
              href="#"
              class="lg:text-center text-white text-sm bg-rose-800 rounded-[5px] lg:px-5 lg:py-3 md:px-1 md:py-1 md:place-content-center"
            >
              login
            </a>
          </form>
        </div>
      </nav>
     `;
  }
  