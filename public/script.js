// // client-side js, loaded by index.html. Run when web page is loaded
const axios = window.axios;
var isSharing = false;

//using geoLocation API to get real time location
var watchId;
function loc() {
  event.preventDefault();

  if (!isSharing) 
  {
    const successCallback = (position) => {
      console.log(position);
      isSharing = true;

      // code to make request to server
      axios
        .post("/update-position", { position })
        .then((res) => {
          // result printed
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    //if failed show error
    const errorCallback = (error) => {
      window.alert("Location is not enabled");
    };

    //start accessing location
    watchId = navigator.geolocation.watchPosition(
      successCallback,
      errorCallback,
      { enableHighAccuracy: true }
    );
    //changing button value to stop sharing
    document.getElementById("locationSharing").textContent = "Stop Sharing";
  }
  else 
  {
    //   stop accessing location
    navigator.geolocation.clearWatch(watchId);
    document.getElementById("locationSharing").textContent = "Share Location";
    document.getElementById("temp").textContent = ", Restart the application to again share location ";
    
  }
  console.log(watchId);
}

//trying form input function
// const submitForm = (event) => {
//   console.log(event);
//   const {elements} = event.target
//   const value = elements.testinput.value;
//   console.log(value);
// }


// var config = {
//   method: "get",
//   url: "https://maps.googleapis.com/maps/api/directions/json?origin=Boston%2C%20MA&destination=Concord%2C%20MA&waypoints=via%3ACharlestown%2CMA%7Cvia%3ALexington%2CMA&departure_time=now&key=YOUR_API_KEY",
//   headers: {},
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// function calculate() {
//   window.location = "output.html";
// }
