let createI = document.querySelector("#parkinfo");
var dropL = document.querySelector("#tx").value;

document.querySelector("#btn").addEventListener("change", myfunction);

function myfunction() {
  fetch("https://developer.nps.gov/api/v1/parks?parkCode=" + dropL + "&stateCode=Tx&limit=50&start=0&api_key=7XBVh3JlfEvfScseNuuSZfPdln6Rdn8jH5v7fFy7", {
      headers: {
        "Content-Type": "application/json"
      }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);

    let createI = document.querySelector("#park-info");
    var amistad = document.querySelector("#amistad")

    //createI.innerHTML = JSON.stringify(response.data[0].addresses[0]);

}
)}

  myfunction();
