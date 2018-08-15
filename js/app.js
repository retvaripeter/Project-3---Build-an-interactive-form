// ---------------------------------------- VARIABLES ---------------------------------------- //

//DOM elements

const otherInputField = document.getElementById("other-title");

const otherSelected = document.getElementById("title");

const designSelected = document.getElementById("design");

const colorSelect = document.getElementById("color");

const colorWithoutHeart = document.querySelectorAll("#color option:nth-child(-n+3)");

const colorWithHeart = document.querySelectorAll("#color option:nth-child(n+4)");

const checkboxes = document.querySelectorAll('.activities input');

const checkBoxesParent = document.querySelector('.activities');

const sConflict = document.querySelectorAll(".sconflict");

const totalElement = document.querySelector('.total');

let eventBusket = 0;



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
// Function for hide elements

function hideElement (element) {

element.style.display = 'none';

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

  // 1) Competing activities
    // 1.1) Disable the checkbox when user clicks on a workshop with competing time

    checkBoxesParent.addEventListener('change', (event) =>{ //set eventlistener to the parent of the checkbox

      const boxClicked = event.target; //create variable and set the value to event.target

      //there will be 2 main branch: 1)checkbox was unchecked before the click or 2) checkbox wasn't unchecked before the useclick

     // 1) If the user clicks on an unchecked checkboxes and makes it checked

     if (boxClicked.checked === true) { //if the user makes the checkbox clicked/checked

         if (boxClicked.name === 'js-frameworks') { //if the user clicks on a checkbox with a name attribute: 'js-framworks'

           checkboxes[3].disabled = true; //disable the other checkbox with the same time of the event
           sConflict[2].style.display = 'block' //display a schedule-conflict message
           checkboxes[3].parentNode.style.color = 'grey'; //set the color of the other checkbox's parent's content with the same time of the event to grey

       } else if (boxClicked.name === 'express') {

          checkboxes[1].disabled = true;
          sConflict[0].style.display = 'block'
          checkboxes[1].parentNode.style.color = 'grey';

       }else if (boxClicked.name === 'js-libs') {

          checkboxes[4].disabled = true;
          sConflict[3].style.display = 'block'
          checkboxes[4].parentNode.style.color = 'grey';

       }else if (boxClicked.name === 'node') {

          checkboxes[2].disabled = true;
          sConflict[1].style.display = 'block'
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
         sConflict[2].style.display = 'none'
         checkboxes[3].parentNode.style.color = 'black';

     } else if (boxClicked.name === 'express') {

        checkboxes[1].disabled = false;
        sConflict[0].style.display = 'none'
        checkboxes[1].parentNode.style.color = 'black';

     }else if (boxClicked.name === 'js-libs') {

        checkboxes[4].disabled = false;
        sConflict[3].style.display = 'none'
        checkboxes[4].parentNode.style.color = 'black';

     }else if (boxClicked.name === 'node') {

        checkboxes[2].disabled = false;
        sConflict[1].style.display = 'none'
        checkboxes[2].parentNode.style.color = 'black';

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


// ---------------------------------------- FORM VALIDATION section ---------------------------------------- //

// ---------------------------------------- FORM VALIDATION messages ---------------------------------------- //
