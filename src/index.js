import "./main.scss"



async function weatherData() {
   
   let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kyiv?unitGroup=metric&key=QUGKMB5QL4DDPJAUE2LA3J9VV&contentType=json"

   let response  = await fetch(url);
   let json = await response.json();

   console.log(json)

}

weatherData()



