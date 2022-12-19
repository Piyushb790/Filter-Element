/* This code appears to define a function called filterSelection that takes in a single argument c. The function does the following:

Declares a variable x and assigns to it a collection of elements with the class name "filterDiv" using document.getElementsByClassName.
If the argument c is equal to the string "all", it assigns the empty string to c.
It then iterates through the elements in the x collection using a for loop. For each element, it does the following:
Removes the class "show" from the element using the RemoveClass function.
If the element's class name contains the string c, it adds the class "show" to the element using the AddClass function.
The purpose of this function is likely to show or hide elements in the DOM based on their class name. It appears to be intended to be used as part of a filtering system, where elements with certain class names are shown or hidden based on the value of the c argument */
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

/* This function adds a class to a given element. It takes two arguments:

element: The element to which the class should be added.
name: The name of the class to be added. Multiple classes can be added by separating them with a space.
The function works by first splitting the current className of the element into an array of individual classes using .split(" "). It then splits the name argument into an array of classes to be added in the same way.

It then loops through the array of classes to be added and checks if each one is already present in the element's className using .indexOf(). If the class is not present, it is added to the element's className by concatenating it with a space character.*/
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

/*his function removes a class or classes from a given element. It takes two arguments:

element: The element from which the class should be removed.
name: The name of the class to be removed. Multiple classes can be removed by separating them with a space.
The function works by first splitting the current className of the element into an array of individual classes using .split(" "). It then splits the name argument into an array of classes to be removed in the same way.

It then loops through the array of classes to be removed and uses .indexOf() to find the index of each class in the element's className array. If the class is present, it is removed using the .splice() method, which modifies the array by removing elements starting at a given index. The loop continues until all instances of the class have been removed.

Finally, the modified array of classes is rejoined into a string using .join(" ") and assigned back to the element's className property. */

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i], 1));
    }
  }
  element.className = arr1.join(" ");
}

//Add active clas to the current button (highlight it)

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
