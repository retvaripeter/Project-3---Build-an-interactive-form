// ---------------------------------------- VARIABLES ---------------------------------------- //

//DOM elements

const otherInputField = document.getElementById("other-title");

const otherSelected = document.getElementById("title");

const designSelected = document.getElementById("design");

const colorSelect = document.getElementById("color");

const colorWithoutHeart = document.querySelectorAll("#color option:nth-child(-n+3)");

const colorWithHeart = document.querySelectorAll("#color option:nth-child(n+4)");

// ---------------------------------------- FUNCTIONS ---------------------------------------- //

//COLOR heart or not heart

// Function: Hide the color menu options
function colorHide (withOrwithout) {

  for (let i= 0; i < withOrwithout.length; i+=1){

        withOrwithout[i].style.display = "none";
  }

}
// Function: Shiw the color menu options
function colorShow (withOrwithout) {

  for (let i= 0; i < withOrwithout.length; i+=1){

        withOrwithout[i].style.display = "";
  }

  withOrwithout[0].setAttribute("selected", '');
  dynamicOptionSelect[0].style.display = "none";

}
// Function: Make Select Theme option the "only one"
function selectTheme () {

  colorHide(colorWithoutHeart);//hide all without hearts in color menu
  colorHide(colorWithHeart);//hide all  hearts in color menu

//remove the selected attrubute on all color menu options
  for (let i= 0; i < dynamicOptionSelect.length; i+=1){

        dynamicOptionSelect[i].removeAttribute("selected"); //the dynamicOptionSelect varible will be generated later, when other DOM elements will be added with JS
  }

  dynamicOptionSelect[0].style.display = ""; //set the first select them to show

  dynamicOptionSelect[0].setAttribute("selected", '');//set the first select them to show

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

// 1.2) Make Select Theme option the "only one"

    selectTheme();

// 1.3) Add addEventListener to Design menu

designSelected.addEventListener('change', () => {  //set the event listener to the select menu

  if (designSelected.value ==='js puns') { //if the design select menu value = 'js puns' - (means that without heart is selected)

    colorHide(colorWithHeart);//hide all hearts in color menu
    colorShow(colorWithoutHeart);//show all without hearts in color menu

    } else if (designSelected.value ==='heart js'){ //if the design select menu value = 'heart js' - (means that  heart is selected)

    colorHide(colorWithoutHeart);//hide all without hearts in color menu
    colorShow(colorWithHeart);//show all  hearts in color menu

  } else if (designSelected.value ==='Select Theme'){ //if the design select menu value = 'heart js' - (means that  heart is selected)

    selectTheme();

    }

});




// ---------------------------------------- Register for Activities section ---------------------------------------- //

// ---------------------------------------- FORM VALIDATION section ---------------------------------------- //

// ---------------------------------------- FORM VALIDATION messages ---------------------------------------- //
