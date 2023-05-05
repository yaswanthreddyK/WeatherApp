let time = document.getElementsByClassName("time")[0]
let clock = time.children
setInterval(()=>{
    let d = new Date()
    let hours = d.getHours()
    let minutes = String(d.getMinutes()).padStart(2, '0')
    if(hours>12){
        clock[0].innerHTML = hours-12
        clock[4].innerHTML = "P.M"
        
    }
    else{
        clock[0].innerHTML = hours
        clock[4].innerHTML = "A.M"
    }

    clock[2].innerHTML = minutes
},1000)

//The Above code is for the clock.

let date = document.getElementsByClassName("dateAndDay")[0].children

setInterval(()=>{
    const d = new Date()
    date[0].innerHTML = d.getDate()
    const month = Number(d.getMonth())
    switch(month){
        case 0:
          date[1].innerHTML = "Jan"
          break;
        case 1:
          date[1].innerHTML = "Feb"
          break;
        case 2:
          date[1].innerHTML = "March"
          break;
        case 3:
          date[1].innerHTML = "April"
          break;
        case 4:
          date[1].innerHTML = "May"
          break;
        case 5:
          date[1].innerHTML = "June"
          break;
        case 6:
          date[1].innerHTML = "July"
          break;
        case 7:
          date[1].innerHTML = "Aug"
          break;
        case 8:
          date[1].innerHTML = "Sep"
          break;
        case 9:
          date[1].innerHTML = "Oct"
          break;
        case 10:
          date[1].innerHTML = "Nov"
          break;
        case 11:
          date[1].innerHTML = "Dec"
          break;
    }
    const day = Number(d.getDay())
    switch(day){
        case 0:
            date[3].innerHTML = "Sunday"
            break;
        case 1:
            date[3].innerHTML = "Monday"
            break;
        case 2:
            date[3].innerHTML = "Tuesday"
            break;
        case 3:
            date[3].innerHTML = "Wednesday"
            break;
        case 4:
            date[3].innerHTML = "Thursday"
            break;
        case 5:
            date[3].innerHTML = "Friday"
            break;
        case 6:
            date[3].innerHTML = "Satruday"
            break;
    }
})

let input = document.querySelector("input")
let search = document.querySelector("button")
let city = document.getElementsByClassName("city")[0]
let cityName = ""

search.addEventListener("click",function nameless(event){
     cityName = input.value
     input.value = ""
     let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2eb7b421a22dad734c6f0338f11cc502`
     async function WeatherUpdate(){
       let response = await fetch(apiUrl)
      let data = await response.json()
      city.innerHTML = data.name
      let temp = document.getElementsByClassName("num")[0]
      temp.innerHTML = Math.round((data.main.temp - 273.15)*10)/10
      let clouds = document.getElementsByClassName("clouds")[0]
      let sky = data.weather[0].description
      clouds.innerHTML = sky
      let image = document.getElementsByClassName("image")[0]
      if( sky == "clear sky"){
         image.innerHTML = `<i class="fa-solid fa-sun fa-beat"></i>`
      }else if(sky == "few clouds"){
        image.innerHTML = `<i class="fa-solid fa-cloud fa-beat"></i>`
      
      }else if(sky == "rain"){
        image.innerHTML = `<i class="fa-solid fa-cloud-rain fa-beat"></i>`
      
      }else if(sky == "shower rain"){
        image.innerHTML = `<i class="fa-solid fa-cloud-sun-rain fa-beat"></i>`
      
      }else if(sky == "thunderstorm"){
        image.innerHTML = `<i class="fa-solid fa-cloud-bolt fa-beat"></i>`

      }else if(sky == "snow"){
        image.innerHTML = `<i class="fa-solid fa-snowflake fa-beat"></i>`
  
      }else if(sky == "mist"){
        image.innerHTML = `<i class="fa-solid fa-colud-fog fa-beat"></i>`
  
      }else if(sky == "dust"){
        image.innerHTML = `<i class="fa-solid fa-sun fa-beat"></i>`
      }else{
        image.innerHTML = `<i class="fa-solid fa-cloud fa-beat"></i>` 
      }

      let humidity = document.getElementsByClassName("humidityValue")[0]
      humidity.innerHTML = data.main.humidity
      let windSpeed = document.getElementsByClassName("windSpeedValue")[0]
      windSpeed.innerHTML = data.wind.speed
}
    WeatherUpdate()
    
})

input.onclick = ()=>{

  document.addEventListener("keyup",function(event){
    if(event.code == 'Enter'){
       search.click()
    }
})
}


