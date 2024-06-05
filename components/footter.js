
export const footter = () => {
  return `
  <section class="text-center mt-7 ">
  <h5 class="text-2xl font-bold">Follow Our Social Media</h5>
  <!-- TODO icon -->
  <div class="mt-7 text-[30px] flex justify-center items-center gap-24">
    <i class="fa-brands fa-facebook hover:text-red-700"></i>
    <i class="fa-brands fa-twitter hover:text-red-700"></i>
    <i class="fa-brands fa-youtube hover:text-red-700"></i>
    <i class="fa-brands fa-tiktok hover:text-red-700"></i>
  </div>
</section>
<section class="mt-7 bg-yellow-600 w-[100%] py-10">
   <!-- TODO company -->
    <div class="flex justify-between w-[85%] mx-auto">
      <div class="flex flex-col text-[1rem] gap-2">
          <h2 class="text-2xl font-semibold">Company</h2>
          <a href="#" class="hover:text-zinc-800">About us</a>
          <a href="#" class="hover:text-zinc-800">Contact us</a>
          <a href="#" class="hover:text-zinc-800">Cinemas</a>
      </div>
      <div class="flex flex-col text-[1rem] gap-2">
        <h2 class="text-2xl font-semibold">More</h2>
        <a href="#" class="hover:text-zinc-800">Promotions</a>
        <a href="#" class="hover:text-zinc-800">My Ticket</a>
        <a href="#" class="hover:text-zinc-800">News & Activity</a>
        <a href="#" class="hover:text-zinc-800">Terms & Conditions</a>
      </div>
      <div class="flex flex-col text-[1rem] gap-2">
        <h2 class="text-2xl font-semibold">Download Our App</h2>
        <div class="flex gap-7 items-center">
        <a href="#" class="hover:text-zinc-800 text-[30px]">
              <i class="fa-brands fa-apple"></i>
        </a>
        <a href="#" class="hover:text-zinc-800 text-[25px]">
          <i class="fa-brands fa-google-play"></i>
        </a>
        </div>
      </div>
    </div>
    <div class="w-[85%] mx-auto mt-10">
      <h2 class="text-2xl font-semibold">Payment</h2>
      <div class="flex mt-7 gap-x-4">
        <div class="h-[100px] w-[100px] object-cover">
          <img src="../src/img/aba.webp" alt="payment">
        </div>
        <div class="h-[100px] w-[100px] object-cover">
          <img src="../src/img/visa.png" alt="payment">
        </div>
        <div class="h-[50px] w-[100px] justify-start -mt-4 object-cover">
          <img src="../src/img/payment.png" alt="payment">
        </div>
        
      </div>
      <p class="text-center mt-5">All right reserved ® 2024</p>
    </div>
</section>
  `;
}
