// ---------------------------------------- VARIABLES ---------------------------------------- //

//Select all DOM elements and assign it to a variable

const otherInputField = document.getElementById("other-title");

const otherSelected = document.getElementById("title");

const designSelected = document.getElementById("design");

const colorSelect = document.getElementById("color");

const colorWithoutHeart = document.querySelectorAll("#color option:nth-child(-n+3)");

const colorWithHeart = document.querySelectorAll("#color option:nth-child(n+4)");

const checkboxes = document.querySelectorAll('.activities input');

const checkBoxesParent = document.querySelector('.activities');

const totalParent = document.querySelector('.activities');

const creditCard = document.querySelector('.credit-card');

const payPal = creditCard.nextElementSibling;

const Bitcoin = payPal.nextElementSibling;

const selectPayment = document.querySelector('#payment');

const registerButton = document.querySelector('button');

const nameInput = document.querySelector("#name");

const emailField=document.querySelector("#mail");

const cCardNUmber = document.querySelector("#cc-num");

const zipCode = document.querySelector("#zip");

const cVV = document.querySelector("#cvv");

const labelName = document.querySelector('fieldset label[for="name"]');

const labelEmail = document.querySelector('fieldset label[for="mail"]');

const labelActivties = document.querySelector(".activities legend");

const labelPaymentinfo = document.querySelector("#payment");

const allInput = document.querySelectorAll("input");

const form = document.querySelector('form');



let eventBusket = 0; //this variable holds the added event's cost by the user



// ---------------------------------------- FUNCTIONS ---------------------------------------- //

//COLOR heart or not heart

// Function: Hide the color menu options
function colorHide (withOrwithout) {

//hide the element:

  for (let i= 0; i < withOrwithout.length; i+=1){

        withOrwithout[i].style.display = "none";
  }

}
// Function: Show the color menu options
function colorShow (withOrwithout) {

//show the element

  for (let i= 0; i < withOrwithout.length; i+=1){

        withOrwithout[i].style.display = "";
  }
//make the first child selected from the dropdownmenu with the attribute: 'selected'
  withOrwithout[0].setAttribute("selected", '');
  dynamicOptionSelect[0].style.display = "none";

}

// Function for hide elements

function hideElement (element) {

element.style.display = 'none';

}

// Function for show elements

function showElement (element) {

element.style.display = 'block';

}
//Function for fading out the elements

//basically it also use simple setinterval(.05 sec), but the function is decreasing the opacity of the element if op <= 0.1
function fadeOut(element) {
    var op = 1;  // set opacity to 100%
    var timer = setInterval(function () { //set interval and create a function as a first argument
        if (op <= 0.1){ //check if the op is smaller or equal than 0.1
            clearInterval(timer); //if yes, the code stop the interval
            element.style.display = 'none'; //hide the element too
        }
        element.style.opacity = op; // if the op is greater then 0.1 it will decrease the op with 0.1
        op -= 0.1;
    }, 50); //finish the interval after 0.05

}

//Function checks that is there at least one checkbox unchecked

function isOneChecked () {

//loop through all checkboxes

  let holdChecked = []; //create an array which will hold a checkbox if its attribute is isOneChecked

  for (let i = 0; i < checkboxes.length; i += 1) {

    if (checkboxes[i].checked === true) {

      holdChecked.push(checkboxes[i]);

    }

  }
return holdChecked.length; // if the length is not 0 it means that the user checked at least 1
}

function ValidateEmail(mail) {

  /*
An email is a string (a subset of ASCII characters) separated into two parts by @ symbol:
1) "personal_info"
2)  domain, that is personal_info@domain.

The length of the personal_info part may be up to 64 characters long and domain name may be up to 253 characters.
The personal_info part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~

  */

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)){

    return (true)
  }
    return (false)
  }

function ValidateCreditCard (){

  //check if credit card is otherSelected

  if(selectPayment.value = 'credit card'){

      if(isNaN(cCardNUmber.value) || isNaN(zipCode.value) || isNaN(cVV.value)){

        return 1;
      }

      else if(cCardNUmber.value.length > 12 && cCardNUmber.value.length < 17 && zipCode.value.length === 5 && cVV.value.length === 3 ){

        return true;

      } else {

        return false;
      }

  }
}

function buildElement (elementafter,text,classname,id) {

  const element = document.createElement('DIV');
  element.textContent = text;
  element.className = classname;
  element.id = id;
  elementafter.parentNode.insertBefore(element, elementafter.nextElementSibling);

}
function removeAllVm () {

  const element = document.querySelectorAll(".vm");

  for (let i = 0; i < element.length; i+=1) {

  element[i].parentNode.removeChild(element[i]);

  }

  for (let i = 0; i < allInput.length; i+=1) {

  allInput[i].style.border= '2px solid #c1deeb';

  }

}
// ---------------------------------------- Program starts ---------------------------------------- //

//set focus on the name fieldset

document.getElementById("name").focus();

// ---------------------------------------- Job role section ---------------------------------------- //

// 1.1) Add the "Other" job role input directly into the HTML

// 1.2)  Give the Other inputfield an id of “other-title,” and add the placeholder text "Your Job Role".

// 2) Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.

// 2.1) Hide otherInputField

otherInputField.style.display = "none";

// 2.2) Create event listener for Other option to 'unhide' the otherInputField

otherSelected.addEventListener('change', () => {  //set the event listener to the select menu

  if (otherSelected.value ==='other') { //if the select menu value = 'other' - (means that other is selected)

      otherInputField.style.display = ""; //unhide the input

    } else { //if the select menu value is not equal to 'other'

      otherInputField.style.display = "none"; //hide the input

    }

});

// ---------------------------------------- T-Shirt Info section ---------------------------------------- //

// 1) For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.

// 1.1) Add "<-- Please select a T-shirt theme" to the Color menu when JS is enebled

  // 1.1.1) Create item <option>
  const createOption = document.createElement("OPTION");

  // 1.1.2) Add textContent to <option>
  createOption.textContent = '<-- Please select a T-shirt theme';
  // 1.1.3) Add selected attribute to show first in the dropdownmenu
  createOption.setAttribute("selected", '');
  // 1.1.4) Insert as a firstchild of select
  colorSelect.insertBefore(createOption, colorSelect.childNodes[0]);

// 1.2) Remove "shirt only" textcontent

const dynamicOptionSelect = document.querySelectorAll("#color option") // select all the color-options

//rewrite the textContent of all color-option
dynamicOptionSelect[1].textContent = "Cornflower Blue";
dynamicOptionSelect[2].textContent = "Dark Slate Grey ";
dynamicOptionSelect[3].textContent = "Gold";
dynamicOptionSelect[4].textContent = "Tomato";
dynamicOptionSelect[5].textContent = "Steel Blue";
dynamicOptionSelect[6].textContent = "Dim Grey";

// 1.3) Make Select Theme option disabled and the Color Label hide until one theme is selected

    const colorLabel = document.querySelector('#colors-js-puns');
    colorLabel.style.display = 'none';
    designSelected[0].setAttribute("disabled", '');

// 1.3.1) Add addEventListener to Design menu

designSelected.addEventListener('change', () => {  //set the event listener to the select menu

  if (designSelected.value ==='js puns') { //if the design select menu value = 'js puns' - (means that without heart is selected)

    colorLabel.style.display = 'block';
    colorHide(colorWithHeart);//hide all hearts in color menu
    colorShow(colorWithoutHeart);//show all without hearts in color menu

    } else if (designSelected.value ==='heart js'){ //if the design select menu value = 'heart js' - (means that  heart is selected)

    colorLabel.style.display = 'block';
    colorHide(colorWithoutHeart);//hide all without hearts in color menu
    colorShow(colorWithHeart);//show all  hearts in color menu

  }

});

// ---------------------------------------- Register for Activities section ---------------------------------------- //

  // 1) Competing activities

    // Create the totalElement and append it to the document

    const totalElement = document.createElement("DIV");
    totalElement.className = 'total';
    totalParent.appendChild(totalElement);

    // 1.1) Disable the checkbox when user clicks on a workshop with competing time

    checkBoxesParent.addEventListener('change', (event) =>{ //set eventlistener to the parent of the checkbox

      const boxClicked = event.target; //create variable and set the value to event.target

      //there will be 2 main branch: 1)checkbox was unchecked before the click or 2) checkbox wasn't unchecked before the useclick

     // 1) If the user clicks on an unchecked checkboxes and makes it checked

     if (boxClicked.checked === true) { //if the user makes the checkbox clicked/checked

         if (boxClicked.name === 'js-frameworks') { //if the user clicks on a checkbox with a name attribute: 'js-framworks'

           checkboxes[3].disabled = true; //disable the other checkbox with the same time of the event
           checkboxes[3].parentNode.style.color = 'grey'; //set the color of the other checkbox's parent's content with the same time of the event to grey

       } else if (boxClicked.name === 'express') {

          checkboxes[1].disabled = true;
          checkboxes[1].parentNode.style.color = 'grey';

       }else if (boxClicked.name === 'js-libs') {

          checkboxes[4].disabled = true;
          checkboxes[4].parentNode.style.color = 'grey';

       }else if (boxClicked.name === 'node') {

          checkboxes[2].disabled = true;
          checkboxes[2].parentNode.style.color = 'grey';

       }

       // add the proper 100$ to the variable eventBusket

       let boxText = boxClicked.parentNode.textContent; //get the textcontent which belongs to the checkbox (its parent's content)
       let split = boxText.split('$',2); //split the textcontent we just got to 2 parts: 1) before $ 2) after $
       eventBusket+=parseInt(split[1]); //get the numbers after the $ sign
       totalElement.textContent = "TOTAL: " + eventBusket + " $"; //add the number to the totalElement which is still hided
       totalElement.style.opacity = 1; //set back the opacity of the totalElement
       totalElement.style.display = 'block'; // finaly show the totalElement

    }

   // 2) Checkbox was checked before the user boxClicked

    //the process is the same like above except that here we hide the elements after user make the ckeckboxes unchecked

   if (boxClicked.checked === false) {

       if (boxClicked.name === 'js-frameworks') {

         checkboxes[3].disabled = false;
         checkboxes[3].parentNode.style.color = 'white'; //set the color of the other checkbox's parent's content with the same time of the event to black

     } else if (boxClicked.name === 'express') {

        checkboxes[1].disabled = false;
        checkboxes[1].parentNode.style.color = 'white';

     }else if (boxClicked.name === 'js-libs') {

        checkboxes[4].disabled = false;
        checkboxes[4].parentNode.style.color = 'white';

     }else if (boxClicked.name === 'node') {

        checkboxes[2].disabled = false;
        checkboxes[2].parentNode.style.color = 'white';

     }
//the process is the same like above except that here we fade the totalElement after the eventBusket is 0

     let boxTextUnchecked = boxClicked.parentNode.textContent;
     let splitUnchecked = boxTextUnchecked.split('$',2);
     eventBusket-=parseInt(splitUnchecked[1]);
     totalElement.textContent = "TOTAL: " + eventBusket + " $";
     totalElement.style.display = 'block';
     if (eventBusket === 0){

       fadeOut(totalElement);

     }

  }

    });
// ---------------------------------------- PAYMENT INFO section ---------------------------------------- //

  //Hide all paymentinfo except creditcard

  hideElement(payPal);
  hideElement(Bitcoin);

  //Credit card option is selected by default

  selectPayment[1].setAttribute("selected", ''); //make creditcard the first showd element in dropdownmenu
  selectPayment[0].removeAttribute("selected"); //remove the fist showd element be default (select payment method)
  selectPayment[0].setAttribute("disabled", ''); //disable the select payment method option

  //Add eventlistener to the paymentselect dropdownmenu, we can clearly see the actions from the functions name

  selectPayment.addEventListener('change', () => {

        if (selectPayment.value ==='credit card') {

          hideElement(payPal);
          hideElement(Bitcoin);
          showElement(creditCard);

      } else if (selectPayment.value ==='paypal') {

          hideElement(creditCard);
          hideElement(Bitcoin);
          showElement(payPal);

      }   else if (selectPayment.value ==='bitcoin') {

          hideElement(creditCard);
          hideElement(payPal);
          showElement(Bitcoin);

      }

  });

// ---------------------------------------- FORM VALIDATION messages ---------------------------------------- //

// this function use the buildElement function, which holds 3 arguments: textcontent, classname, idea
// we use ID to easily locate the element we created later on the project (e.g.: if we need to remove it)
// we use className to design it with CSS
function validateMessages () {

  //it goes through basically every element that we have to validate

  if (nameInput.value === '') { //check is nameInputfield is empty or not, if yes it will make the followings:

    nameInput.style.borderColor = 'red';
    nameInput.style.borderStyle = 'dotted';
    buildElement(labelName,"Please type your name:", 'vm','nameinput'); //it will also add a validate message to the proper section

  }

// it works the same for the other inputfields too
   if (ValidateEmail(emailField)=== false) {

    emailField.style.borderColor = 'red';
    emailField.style.borderStyle = 'dotted';
    buildElement(labelEmail,"Please type a valid email address:", 'vm','emailfield');

  }

    if (isOneChecked()===0) { // here we use the isOneChecked function to check the the user clicked at least one checkbox

    buildElement(labelActivties,"Please select at least 1 activity from the events:", 'vm','isone');

   }

   if(cVV.value.length !== 3) {

    cVV.style.borderColor = 'red';
    cVV.style.borderStyle = 'dotted';
    buildElement(labelPaymentinfo,"CVV field: please provide a 3 digit number:", 'vm','iscvv');

  }

  if(zipCode.value.length !== 5) {

   zipCode.style.borderColor = 'red';
   zipCode.style.borderStyle = 'dotted';
   buildElement(labelPaymentinfo,"Zipcode field: Please provide a 5 digit number:", 'vm','iszip');
 }

// here we have to separate the cCardNUmber validation into 3 branches. Because 0 represents when the user didn't write any numbers
// 1 represents the the failure if the user type fewer number than 13
// 2 represents when the user types more than 16 numbers

 if(cCardNUmber.value.length === 0) {

  cCardNUmber.style.borderColor = 'red';
  cCardNUmber.style.borderStyle = 'dotted';
  buildElement(labelPaymentinfo,"CCNumber field: Please enter a credit card number:", 'vm','iscard');

}

 else if(cCardNUmber.value.length < 13 && cCardNUmber.value.length !== 0 ) {

  cCardNUmber.style.borderColor = 'red';
  cCardNUmber.style.borderStyle = 'dotted';
  buildElement(labelPaymentinfo,"CCNumber field: Please provide at least 13 and maximum 16 digit number:", 'vm','iscard');

}

else if(cCardNUmber.value.length < 13 || cCardNUmber.value.length > 16) {

 cCardNUmber.style.borderColor = 'red';
 cCardNUmber.style.borderStyle = 'dotted';
 buildElement(labelPaymentinfo,"CCNumber field: Please provide at least 13 and maximum 16 digit number:", 'vm','iscard');

}

}

//We also need another process when the user fill the form/inputs properly. We need to notify her/him

function validateGreen () {

  if (nameInput.value !== '') { //if the nameinput is properly field out (not empty :) ) we make the input border green from red

    nameInput.style.borderColor = 'green';
    nameInput.style.borderStyle = 'solid';

    //this long if means that we need to check if the element(validete error message for nameinput) is already exist or not
    // to avoid failure when trying to remove an element which doesn't exist

    if(document.getElementById("nameinput")!== '' && document.getElementById("nameinput")!== null){ //we check if nameinput is exist, if yes we can delete it

//we delete the element since if it's exist
      const removebyID = document.getElementById("nameinput");
      const parent = removebyID.parentNode;
      parent.removeChild(removebyID);
    }

//the method is the same for all the other elements

  }

   if (ValidateEmail(emailField)=== true) {

     emailField.style.borderColor = 'green';
     emailField.style.borderStyle = 'solid';

     if(document.getElementById("emailfield")!== '' && document.getElementById("emailfield")!== null){

       const removebyID = document.getElementById("emailfield");
       const parent = removebyID.parentNode;
       parent.removeChild(removebyID);

     }

  }


   if(cVV.value.length === 3) {

     if(document.getElementById("iscvv")!== '' && document.getElementById("iscvv")!== null){

    cVV.style.borderColor = 'green';
    cVV.style.borderStyle = 'solid';
    const removebyID = document.getElementById("iscvv");
    const parent = removebyID.parentNode;
    parent.removeChild(removebyID);
  }

  }

  if(zipCode.value.length === 5) {

     if(document.getElementById("iszip")!== '' && document.getElementById("iszip")!== null){

     zipCode.style.borderColor = 'green';
     zipCode.style.borderStyle = 'solid';
     const removebyID = document.getElementById("iszip");
     const parent = removebyID.parentNode;
     parent.removeChild(removebyID);
    }

  }

  if(cCardNUmber.value.length > 12 && cCardNUmber.value.length < 17) {

    if(document.getElementById("iscard")!== '' && document.getElementById("iscard")!== null) {

    cCardNUmber.style.borderColor = 'green';
    cCardNUmber.style.borderStyle = 'solid';
    const removebyID = document.getElementById("iscard");
    const parent = removebyID.parentNode;
    parent.removeChild(removebyID);

    }

  }

}


// ---------------------------------------- FORM VALIDATION section ---------------------------------------- //

  // If any of the main validation errors exist, prevent the user from submitting the form.

    // Validation function for all required empty field

      //Disable the register button by setting it only clickable button

      function validateForm()  {

      if (registerButton.type = 'button') { //if the button type set to button will not refresh the page and send the data to the server

        removeAllVm(); //removes all validateMessages
      }

      registerButton.type = 'button';

      //Define the requirements

      const nameField= nameInput.value;
      const checkboxValidation = isOneChecked();
      const checkEmail = ValidateEmail(emailField);


      //if ccard is selected
        if (selectPayment.value ==='credit card') {

          const checkCreditCard = ValidateCreditCard();

          if (checkCreditCard===1){ // if the validecreditcard return 1, means that the user didn't write number

            alert("You wrote a letter instead of number. Please provide only numbers!");

          }
          // it will check all inputfield and if one of the are not fits the requiremt the whole if will go to false
            //if nameinput is empty
            //if email is not validete
            //if no checkboxes checked
            //if the paymentfield is not properly filled

          else if (nameField==="" || checkEmail===false || checkboxValidation===0 || checkCreditCard===false) {
              alert("Please Fill All Required Field"); //alert the user
              validateMessages(); // write the validetemessages to alert more properly the user
              return false;

          }
          else { // if the requirements are ok we set the buttontype to submit and send the data from the user

            registerButton.type = 'submit';
          }

          // this section is about if not creditcard is selected from the payment options

        } else if (nameField==="" || checkEmail===false || checkboxValidation===0) {
              alert("Please Fill All Required Field");
              validateMessages();
              return false;

          }
          else {

            registerButton.type = 'submit';
          }

  }
      // we activate the function we wrote above:

      // Eventlistener to register registerButton

      registerButton.addEventListener('click', () => {

        validateForm();

  });
      //notify the user while he/her is typing with keyup event and validegreen function:

  form.addEventListener('keyup', () => {

    validateGreen();

});

// We have to use different eventlistener to the checkboxes with event: change

totalParent.addEventListener('change', () => {

// check if the validate messages is alreafy exist or not, if yes (element is not null or ''), then remove it

  if(document.getElementById("isone")!== '' && document.getElementById("isone")!== null){

    let checkremovebyID = document.getElementById("isone");
    let checkparent = checkremovebyID.parentNode;

    checkparent.removeChild(checkremovebyID);

  }

});

//this is for the REALTIME email validation

  emailField.addEventListener('keyup', () => {

    //if the emailfield valide message hasn't created, create it

    if(document.getElementById("emailfield")== null){

        buildElement(labelEmail,"Please type a valid email address:", 'vm','emailfield');
      }

      //if the the email didn't fill properly bye the user make the border red

  if (ValidateEmail(emailField)=== false) {

   emailField.style.borderColor = 'red';
   emailField.style.borderStyle = 'dotted';

 }

 else { //if the the emaifield filled  properly bye the user make the border green

   validateGreen();

 }

});
