
//===========================getting elements Document===========================>>
const form = document.querySelector('form')
const input = document.querySelector('#inp')
const div = document.querySelector('#div')



//================================Weather Calling Api======================>>


form.addEventListener('submit',function(e){
    div.innerHTML = ''
    e.preventDefault()
    if(input.value == ""){
        Swal.fire("Enter City Name");
    }else{
        axios(`https://api.weatherapi.com/v1/current.json?key=f9ffd5b7d1fe42aabc3143638240101&q=${input.value}&aqi=no`)
        .then(function(res){
        console.log(res.data);
           div.innerHTML += `<div class="parant  rounded w-[50%] m-auto p-5 min-h-24 mt-5 bg-[#dee2e6]">
           <h2 class="text-2xl">${res.data.location.name}</h2>
           <span class="text-[#a5a58d] date-txt">${res.data.current.last_updated
           } <span>${res.data.location.country} </span></span>
           <div class="mt-5">
           <h1 class="text-c text-[#0d1b2a] pl-5 text-7xl">${res.data.current.temp_c}°C</h1>
           </div>
           <button onclick="clearbtn()" class="border-2 mt-10 border-solid border-[#2121] w-[100px]">Clear</button>
           </div>`
           input.value = ""
    }).catch(function(err){
    //    console.log(err);
       Swal.fire("City not found");
       input.value = ''
    })
    }
    
})
//===========================Clear Work=====================>>
// const clearbtn = document.querySelector('#clear-btn')


// clearbtn.addEventListener('click',function(e){
//     console.log('clicked',e);
// })

function clearbtn(index){
    div.innerHTML = ''
}