/**
 * WEB222 – Final assessment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Perrin Le
 *      Student ID: 157667213
 *      Date:       April 13, 2022
 */

//validate form
 function formValidation() {
  var valid=true;
  valid = validateText("name");
  //validate email
  valid = validateText("email") && valid;
  //validate city
  valid = validateText("city") && valid;
  //validate postalcode with regex
  valid = validatePostal() && valid;
  //validate reason is not absent
  valid = validateReason() && valid;
  //validate message
  valid = validateText("message") && valid;
  return valid;
}
function validateReason(){
  var valid = true;
  var errorfield = document.getElementById("errors");
  //validate rate if exists
  if(document.getElementById("reason-3").checked){
    var rate=document.getElementById("rate").value;
    if(rate.length===0){
      errorfield.appendChild(document.createTextNode(`ERROR: rate cannot be empty`));
      errorfield.appendChild(document.createElement("br"));
    }
    else{
      valid=/[0-9]*\.[0-9][0-9]$/.test(rate);
      if(valid===false){
        errorfield.appendChild(document.createTextNode(`ERROR: invalid format for rate`));
        errorfield.appendChild(document.createElement("br"));
      }
    }
  }
  else if(!document.getElementById("reason-1").checked && !document.getElementById("reason-2").checked){
    valid= false;
    errorfield.appendChild(document.createTextNode(`ERROR: a reason must be selected`));
    errorfield.appendChild(document.createElement("br"));
  }
  return valid;
}

function validatePostal(){
  var valid=true;
  var fieldvalue = document.getElementById("postal").value;
  var errorfield = document.getElementById("errors");
  //remove all whitespace
  fieldvalue = fieldvalue.replace(/\s/g, '');
  //postal codes are 6 characters long in canada
  if(fieldvalue.length === 0){
    valid=false;
    errorfield.appendChild(document.createTextNode(`ERROR: postal code field cannot be empty`));
    errorfield.appendChild(document.createElement("br"));
  }
  else if(fieldvalue.length !== 6){
    valid=false;
    errorfield.appendChild(document.createTextNode(`ERROR: postal codes are 6 characters long`));
    errorfield.appendChild(document.createElement("br"));
  }
  else{
    //regex to make sure we have a postal code
    valid=/[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]/.test(fieldvalue);
    if(valid===false){
      errorfield.appendChild(document.createTextNode(`ERROR: invalid postal code format`));
      errorfield.appendChild(document.createElement("br"));
    }
  }
  return valid;
}

//used to validate all generic text fields
function validateText(id) {
  var valid=true;
  var fieldvalue = document.getElementById(id).value;
  var errorfield = document.getElementById("errors");
  fieldvalue = fieldvalue.trim();
  if(fieldvalue.length === 0){
    valid=false;
    errorfield.appendChild(document.createTextNode(`ERROR: ${id} field cannot be empty`));
    errorfield.appendChild(document.createElement("br"));
  }
  //email doesn't need because it automatically self validates
  else if( id==='name' || id === 'city'){
    //ensure city and name do not contain numbers
    valid = /^[a-zA-Z ]*$/.test(fieldvalue);
    if(valid===false){
      errorfield.appendChild(document.createTextNode(`ERROR: ${id} field must be composed of only alphabetic characters`));
      errorfield.appendChild(document.createElement("br"));
    }
  }
  return valid;
}

function addIncomeInput (){
  var income = document.querySelector("#hiringrate");
  var field = document.createElement("input");
  field.type="text";
  field.name="rate";
  field.id="rate";
  field.value = "";
  field.placeholder ="Enter hourly rate (ex. 15.50)";
  income.appendChild(field);
}


function deleteIncomeField() {
  var income = document.querySelector("#hiringrate");
  while(income.hasChildNodes()){
    income.removeChild(income.firstChild);
  }
}

function clearErrors(){
  var errors = document.querySelector("#errors");
  while(errors.hasChildNodes()){
    errors.removeChild(errors.firstChild);
  }
}

window.onload = function(){
  var uoft = document.getElementById("uoft");
  var seneca = document.getElementById("seneca");
  uoft.addEventListener("click", function() {
    const win = window.open("https://utsc.calendar.utoronto.ca/specialist-program-statistics-science");
    win.focus();
  });
  seneca.addEventListener("click", function() {
    const win = window.open("https://www.senecacollege.ca/programs/fulltime/CPA.html");
    win.focus();
  });
  var hiringradio = document.getElementById("reason-3");
  hiringradio.addEventListener("click", function() {
    addIncomeInput();
  });
  var nonhiringradio = document.getElementById("reason-1");
  nonhiringradio.addEventListener("click", function(){
    deleteIncomeField();
  });
  nonhiringradio = document.getElementById("reason-2");
  nonhiringradio.addEventListener("click", function(){
    deleteIncomeField();
  });
  var submitb = document.getElementById("submit");
  submitb.addEventListener("click", function(){
    clearErrors();
  });
  var resetb = document.getElementById("reset");
  resetb.addEventListener("click", function(){
    clearErrors(); 
  });
};
