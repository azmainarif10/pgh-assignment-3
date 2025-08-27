const allBtn = document.querySelectorAll(".btn-cl")
const coin = document.getElementById("coin")
const callList = document.querySelector(".page")
 let totalCoin = 100;
 let coinEachCall = 20;
 let onPage ="";

  allBtn.forEach(function(btn){
         
    btn.addEventListener("click",function(){

      const emergencyContainer = btn.closest(".container")
      const serviceName = emergencyContainer.querySelector(".name").textContent
      const serviceNumber = emergencyContainer.querySelector(".number").textContent
       
       if(totalCoin >=20 ){
       totalCoin = totalCoin - coinEachCall 
      coin.innerHTML = totalCoin ;
       alert("Calling" + "  " + serviceName + "  "+ serviceNumber )



    const time = new Date().toLocaleTimeString();
           onPage += 
           `<div class=" mx-auto w-78 h-20 bg-gray-200 rounded-xl mb-4  flex items-center gap-7">
      <div class="ml-3"> 
         <p class="font-[Inter] font-semibold text-[16px] ">${serviceName}</p>
          <p class="font-[Hind Madurai] text-lg text-gray-500 ">${serviceNumber}</p>
    </div>
    <p class="font-[Hind Madurai] text-[14px]  text-gray-500 ">${time}</p>
   </div>`
   callList.innerHTML = onPage;
      }
      else{
        alert("You Don't have sufficient coin to make a call.")
       }

    })



  })

  

    const heart = document.querySelectorAll(".heart-icon")
    