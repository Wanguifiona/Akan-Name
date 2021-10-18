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

  var weekDay=["Sunday","Monday","Tuesday" ,"Wednesday" ,"Thursday", "Friday" , "Saturday"]
  var akanNameMale=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw" ,"Kofi", "Kwame"]
  var akanNameFemale=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa" ,"Afua", "Ama"]
  var male=document.getElementById("male")
  var female=document.getElementById("female")

     console.log(capturedMonth, capturedYear)
     if(document.getElementById('male').checked){
       capturedGender="Male"

     }
     else if (document.getElementById('female').checked){
       capturedGender="Female"

     }
     console.log(captureDate, capturedGender)
     const CC=parseInt(capturedYear.toString().slice(0,2))
     const YY= parseInt(capturedYear.toString().slice(2,4))
     const MM=capturedMonth+1
     const DD=capturedDate+1

     const dateOfWeek=  Math.ceil(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
     console.log(dateOfWeek)

     if(capturedGender==="Male" && dateOfWeek===0){
       console.log("Kwasi")
       akanNameMale="Kwasi"
     }
     else if (capturedGender==="Male" && dateOfWeek===1){
       console.log("Kwadwo")
       akanNameMale="Kwadwo"
     }
     else if (capturedGender==="Male" && dateOfWeek===2){
       console.log("Kwabena")
       akanNameMale="Kwabena"
     }
     else if (capturedGender==="Male" && dateOfWeek===3){
       console.log("Kwaku")
       akanNameMale="Kwaku"
     }
     else if (capturedGender==="Male" && dateOfWeek===4){
       console.log("Yaw")
       akanNameMale="Yaw"
     }
     else if (capturedGender==="Male" && dateOfWeek===5){
       console.log("Kofi")
       akanNameMale="Kofi"
     }
     else if (capturedGender==="Male" && dateOfWeek===6){
       console.log("Kwame")
       akanNameMale="Kwame"
     }



     if(capturedGender==="Female" && dateOfWeek===1){
       console.log("Akosua")
       akanNameFemale="Akosua"
     }
     else if (capturedGender==="Female" && dateOfWeek===2){
       console.log("Adwoa")
       akanNameFemale="Adwoa"
     }
     else if (capturedGender==="Female" && dateOfWeek===3){
       console.log("Abenaa")
       akanNameFemale="Abenaa"
     }
     else if (capturedGender==="Female" && dateOfWeek===4){
       console.log("Akua")
       akanNameFemale="Akua"
     }
     else if (capturedGender==="Female" && dateOfWeek===5){
       console.log("Yaa")
       akanNameFemale="Yaa"
     }
     else if (capturedGender==="Female" && dateOfWeek===6){
       console.log("Afua")
       akanNameFemale="Afua"
     }
     else if (capturedGender==="Female" && dateOfWeek===7){
       console.log("Ama")
       akanNameFemale="Ama"
     }

      alert("Your Akan name is ", akanNameMale+akanNameFemale)







}
