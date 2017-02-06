
//TASK 1


//Access HTML element with id tag-line.

var tagElement = document.getElementById("tag-line");

//Access all headings that belong to div with the class name bg-main-content.
var mainElement = document.querySelector(".bg-main-content");
var mainHeadings = mainElement.querySelectorAll("h2");
//console.log(mainHeadings);

//Create the variable collect and assign it with content of tag-line.
var collect = tagElement.innerHTML + "\n---------------------------------------";

//Loop through the array of headings and append the content of each heading to variable collect
for (i = 0; i < mainHeadings.length; i += 1) {
    collect+= "\n" + mainHeadings[i].innerHTML;
}

//After the loop, use alert to print collect
alert(collect);

//TASK 2

//Access 13th div with class name box that belongs to div with the class name bg-main-content. 
var boxElement = mainElement.querySelectorAll(".box")[12];

//You can name the variable when_to_launch.

//Use property children to "scoop" in array all HTML elements that belong to that div.
var when_to_launch = boxElement.children;
//console.log(when_to_launch);

//Create the variable collect and assign it with content of heading that belongs to gotten array.
collect = when_to_launch[0].innerHTML + "\n------------------------------";
//console.log(collect);
//Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
for (j = 1; j < when_to_launch.length; j += 1) {
    collect += "\n" + when_to_launch[j].innerHTML + "\n";
}
//After the loop, use alert to print collect
alert(collect);
