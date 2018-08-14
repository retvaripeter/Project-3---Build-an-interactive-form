//VARIABLES

//DOM elements

const otherInputField = document.getElementById("other-title");

const otherSelected = document.getElementById("title");

const designSelected = document.getElementById("design");

const colorSelect = document.getElementById("color");

const colorWithoutHeart = document.querySelectorAll("#color option:nth-child(-n+3)");

const colorWithHeart = document.querySelectorAll("#color option:nth-child(n+4)");

//FUNCTIONS

//COLOR heart or not heart

function colorHide (withOrwithout) {

  for (let i= 0; i < withOrwithout.length; i+=1){

        withOrwithout[i].style.display = "none";
  }

}


function colorShow (withOrwithout) {

  for (let i= 0; i < withOrwithout.length; i+=1){

        withOrwithout[i].style.display = "";
  }

  withOrwithout[0].setAttribute("selected", '');
  colorOptionSelect[0].style.display = "none";

}

// ---------------------------------------- Program starts ---------------------------------------- //

//set focus on the name fieldset

document.getElementById("name").focus();

// ---------------------------------------- Job role section ---------------------------------------- //

// 1) Add the "Other" job role input directly into the HTML

// 1.2)  Give the Other inputfield an id of “other-title,” and add the placeholder text of "Your Job Role".

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
