export const detail = (a,b,c,d,e,f,g) => {
  return `
  <div class="w-[85%] mx-auto">
  <!--TODO detail -->
  <section class="pt-[7rem] flex md:flex-row min-[320px]:flex-col min-[320px]:gap-6  md:justify-center md:gap-6">
    <div class="">
      <img
        src=${a}
        alt="detail1"
        class="w-[250px] h-[300px] object-cover rounded-md"
      />
    </div>
    <div class="tracking-wider font-semibold flex flex-col justify-between">
      <h3 class="text-4xl">${b}</h3>
      <div class="flex flex-col gap-5">
        <p class="text-xl">
          Director:<span class="text-yellow-500">${c}</span>
        </p>
        <p class="text-xl">
          Writers:<span class="text-yellow-500">
            ${d}</span
          >
        </p>
        <p class="text-xl">
          Time:<span class="text-yellow-500"> ${e}</span>
        </p>
        <p class="text-xl">
          Date:<span class="text-yellow-500"> ${f}</span>
        </p>
      </div>
    </div>
  </section>
  <section>
    <div
      class="flex gap-3 font-medium text-xl justify-center pt-7 border-b-2 pb-7"
    >
      <h3>SHOW TIME</h3>
      <h3>|</h3>
      <h3>DETAIL</h3>
    </div>
  </section>
  <section>
    <section class="mt-6 flex flex-col gap-y-6">
        <div class="">
          <h1 class="text-3xl p-4 w-fit border rounded-md">SHOW TIME:</h1>
        </div>
        <div class="w-[100%] mx-auto">
          <!--TODO search -->
          <form class="">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only"
              >Search</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <i class="fa-solid fa-magnifying-glass text-white"></i>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-3 ps-10 text-sm text-white border border-gray-300 rounded-md bg-black focus:ring-zinc-400 focus:border-black"
                placeholder="Search location..."
                required
              />
            </div>
          </form>
        </div>
        <div class="flex gap-x-8">
          <div
            class="bg-zinc-600 w-fit flex flex-col items-center px-12 py-2 rounded-md"
          >
            <p>Today</p>
            <p>25</p>
            <p>May</p>
          </div>
          <div
            class="bg-zinc-600 w-fit flex flex-col items-center px-12 py-2 rounded-md"
          >
            <p>Today</p>
            <p>25</p>
            <p>May</p>
          </div>
          <div
            class="bg-zinc-600 w-fit flex flex-col items-center px-12 py-2 rounded-md"
          >
            <p>Today</p>
            <p>25</p>
            <p>May</p>
          </div>
          <div
            class="bg-zinc-600 w-fit flex flex-col items-center px-12 py-2 rounded-md"
          >
            <p>Today</p>
            <p>25</p>
            <p>May</p>
          </div>
        </div><div class="w-[100%] mx-auto">
          <!--TODO search -->
          <form class="">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only"
              >Search</label
            >
            <div class="relative">
              <input
                type="input"
                id="default-search"
                class="block w-full p-3 text-sm text-white border border-gray-300 rounded-md bg-black focus:ring-zinc-400 focus:border-black"
                placeholder="MoivesToday Cinema Sihanoukville"
                required
              />
              <i class="fa-solid fa-chevron-down absolute top-3 right-3"></i>
            </div>
          </form>
        </div>
        <div class="">
            <img src="../src/img/2d.png" alt="2D" class="w-[80px] h-[60px] object-cover p-3">
          <div class="flex items-center gap-1">
            <i class="fa-solid fa-volume-low"></i>
            <p>EN</p>
            <p>|</p>
            <p>KH</p>
          </div>
        </div>
        <!--TODO Time -->
        <div class="flex gap-10">
          <p class="px-8 py-3 bg-zinc-500 w-fit rounded-xl">7:00PM</p>
          <p class="px-8 py-3 bg-zinc-500 w-fit rounded-xl">8:00PM</p>
          <p class="px-8 py-3 bg-zinc-500 w-fit rounded-xl">11:00PM</p>
          <p class="px-8 py-3 bg-zinc-500 w-fit rounded-xl">1:00PM</p>
        </div>
        <!--TODO search -->
          <form class="">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only"
              >Search</label
            >
            <div class="relative">
              <input
                type="input"
                id="default-search"
                class="block w-full p-3 text-sm text-white border border-gray-300 rounded-md bg-black focus:ring-zinc-400 focus:border-black"
                placeholder="MoviesToday K Mall"
                required
              />
              <i class="fa-solid fa-chevron-down absolute top-3 right-3"></i>
            </div>
          </form>
          <div class="">
            <img src="../src/img/2d.png" alt="2D" class="w-[80px] h-[60px] object-cover p-3">
          <div class="flex items-center gap-1">
            <i class="fa-solid fa-volume-low"></i>
            <p>EN</p>
            <p>|</p>
            <p>KH</p>
          </div>
        </div>
          <!--TODO Time -->
        <div class="flex gap-10">
          <p class="px-8 py-3 bg-zinc-500 w-fit rounded-xl">7:00AM</p>
          <p class="px-8 py-3 bg-zinc-500 w-fit rounded-xl">9:00AM</p>
          <p class="px-8 py-3 bg-zinc-500 w-fit rounded-xl">8:00PM</p>
          <p class="px-8 py-3 bg-zinc-500 w-fit rounded-xl">11:00PM</p>
        </div>
        <div class="">
          <h1 class="text-3xl p-4 w-fit border rounded-md">DETAIL:</h1>
        </div>
        <div class="">
          <h3 class="text-2xl text-yellow-500">THE STORY:</h3>
          <P>${g}</P>
        </div>
    </section>
  </section>
</div>
  `;
}