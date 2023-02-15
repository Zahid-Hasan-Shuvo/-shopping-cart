
function updatePhoneNumber(isIncrease){
  const phoneNumberField=document.getElementById('phone-number-field');
  const phoneNumberString=phoneNumberField.value;
  const previousCaseNumber= parseInt(phoneNumberString);
 let newPhoneNumber;
  if(isIncrease){
    newPhoneNumber=previousCaseNumber+1;
  }
  else{
   newPhoneNumber=previousCaseNumber-1;
  }

   phoneNumberField.value=newPhoneNumber;
   return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
  const phoneTotalPrice =newPhoneNumber*59;
  const phoneTotalElement=document.getElementById('phone-total');
  phoneTotalElement.innerText=phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumber=updatePhoneNumber(true)
   updatePhoneTotalPrice(newPhoneNumber)
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
 const newPhoneNumber= updatePhoneNumber(false)
 updatePhoneTotalPrice(newPhoneNumber)
})