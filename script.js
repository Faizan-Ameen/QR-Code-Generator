// Use to target input field 
var user__input = document.getElementById("inp");

// Use to target Image tag 
var Qr__image = document.getElementById("img");



// Define a button function 
function myFun() {
      let value = user__input.value;
      console.log(value)

      // Aghar input ky andar kuch bhe ni hoga or user generate button par click kary ga to ya IF condition run hoge 
      if (value == "") {
            alert("Please Enter Something");
      }

      // Aghar input ky andar kuch bhe write hoga or user generate button par click kary ga to ya IF condition run hoge 
      if (value) {
            Qr__image.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
            console.log(Qr__image)
      }
}