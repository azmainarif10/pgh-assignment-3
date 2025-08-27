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

    const clear = document.querySelector(".btn-clear")
      clear.addEventListener("click",function(){
         
        callList.innerHTML = "";

      })

    const  heartCount = document.getElementById("heart")
      let numberCount = Number(heartCount.innerText)
    const heart = document.querySelectorAll(".heart-icon")
  heart.forEach(function(btn){
    
  btn.addEventListener("click",function(){
       
    numberCount += 1 ;
    btn.classList.toggle("text-red-600")
    heartCount.innerHTML = numberCount;
  })

  })
   
  const copy = document.getElementById("copy")
  let copyCount = Number(copy.innerText);
  let lastCoppiedNumber = "";
  const allCopyBtn = document.querySelectorAll(".btn-cp")
    
     allCopyBtn.forEach(function(btnCp){

      btnCp.addEventListener("click",function(){

        allCopyBtn.forEach(function(bt){

          bt.classList.remove("bg-blue-200")
          bt.classList.add("bg-white")
        })

             

      btnCp.classList.remove("bg-white")
     btnCp.classList.add("bg-blue-200")


const containerInfo = btnCp.closest(".container")
 const copyNumber = containerInfo.querySelector(".number").textContent
        
       lastCoppiedNumber = copyNumber

     navigator.clipboard.writeText(copyNumber)
     .then(function(){
        alert("Number" + " " +`${lastCoppiedNumber}`+ " "+ "Coppied!")
             copyCount += 1;
     copy.innerHTML = copyCount;
       
     btnCp.classList.remove("bg-blue-200")

     })
     .catch(function(err){
      console.error("Number not coppied",err)
     });

      })


     })