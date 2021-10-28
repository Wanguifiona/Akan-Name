
//date input
function akanName() {
  const date = document.getElementById("dateInput");
  const CC = parseInt(date.value.slice(0,2));
  const YY = parseInt(date.value.slice(2,4));
  const MM = parseInt(date.value.slice(5,7));
  const DD = parseInt(date.value.slice(8,10));
  const dateOfWeek= Math.ceil(parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7));

//gender input
  const genderInput = document.getElementById("genderInput");
  var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var akanNameMale=["kwasi", "kwadwo", "kwabena", "kwaku", "yaw" ,"kofi", "kwame"]
  var akanNameFemale=["akosua", "adwoa", "abenaa", "akua", "yaa" ,"afua", "ama"]
  const gender = genderInput.value.charAt(0).toUpperCase() + genderInput.value.slice(1);



  if (gender==="Male" && dateOfWeek===0) {
    document.getElementById("results").innerHTML = akanNameMale[0]
}
  else if (gender==="Male" && dateOfWeek===1) {
    document.getElementById("results").innerHTML = akanNameMale[1]
}
  else if (gender==="Male" && dateOfWeek===2) {
    document.getElementById("results").innerHTML = akanNameMale[2]
}
  else if (gender==="Male" && dateOfWeek===3) {
    document.getElementById("results").innerHTML =akanNameMale[3]
  }
  else if (gender==="Male" && dateOfWeek===4) {
    document.getElementById("results").innerHTML = akanNameMale[4]
}
  else if (gender==="Male" && dateOfWeek===5) {
    document.getElementById("results").innerHTML = akanNameMale[5]
}
  else if (gender==="Male" && dateOfWeek===6) {
    document.getElementById("results").innerHTML =akanNameMale[6]
}


  else if (gender==="Female" && dateOfWeek===0) {
    document.getElementById("results").innerHTML =akanNameFemale[0]
}
  else if (gender==="Female" && dateOfWeek===1) {
    document.getElementById("results").innerHTML = akanNameFemale[1]
}
  else if (gender==="Female" && dateOfWeek===2) {
    document.getElementById("results").innerHTML =akanNameFemale[2]
}
  else if (gender==="Female" && dateOfWeek===3) {
    document.getElementById("results").innerHTML =akanNameFemale[3]
}
  else if (gender==="Female" && dateOfWeek===4) {
    document.getElementById("results").innerHTML =akanNameFemale[4]
}
  else if (gender==="Female" && dateOfWeek===5) {
    document.getElementById("results").innerHTML =akanNameFemale[5]
}
  else if (gender==="Female" && dateOfWeek===6) {
    document.getElementById("results").innerHTML =akanNameFemale[6]
}
  else {
    alert("Please try again. Thank you")
  }
}
