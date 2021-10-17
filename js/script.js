let captureDate;
let capturedGender;
let akanName;
document.getElementById("dateInput").addEventListener("change", function() {
 const input = this.value;
 console.log(input); //e.g. 2015-11-13
 captureDate=input
})


function getDate() {
  let date=document.getElementById("dateInput")
  console.log("date")
  const dateOfBirth = new Date(captureDate)
  const capturedMonth= dateOfBirth.getMonth()
  const capturedDate=dateOfBirth.getDate()
  const capturedYear= dateOfBirth.getFullYear()

     console.log(capturedMonth, capturedYear)
     if(document.getElementById('male').checked){
       capturedGender="Male"

     }
     else if (document.getElementById('female').checked){
       capturedGender="Female"

     }
     console.log(captureDate, capturedGender)
     const CC=parseInt(capturedYear.toString().slice(2,4))
     const YY= parseInt(capturedYear.toString().slice(0,2))
     const MM=capturedMonth+1
     const DD=capturedDate+1

     const dateOfWeek=  Math.ceil(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
     console.log(dateOfWeek)

     if(capturedGender==="Male" && dateOfWeek===1){
       console.log("Kwasi")
       akanName="Kwasi"
     }
     else if (capturedGender==="Male" && dateOfWeek===2){
       console.log("Kwadwo")
       akanName="Kwadwo"
     }
     else if (capturedGender==="Male" && dateOfWeek===3){
       console.log("Kwabena")
       akanName="Kwabena"
     }
     else if (capturedGender==="Male" && dateOfWeek===4){
       console.log("Kwaku")
       akanName="Kwaku"
     }
     else if (capturedGender==="Male" && dateOfWeek===5){
       console.log("Yaw")
       akanName="Yaw"
     }
     else if (capturedGender==="Male" && dateOfWeek===6){
       console.log("Kofi")
       akanName="Kofi"
     }
     else if (capturedGender==="Male" && dateOfWeek===7){
       console.log("Kwame")
       akanName="Kwame"
     }
     alert("Your Akan name is ", akanName)




}
