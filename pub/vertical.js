"use strict"; 

function leftBarExample() {
    const leftBar = new NavigationBarGenerator();
    leftBar.makeLeftBar();

    leftBar.addItem("Btn01", "", "L");
    leftBar.addItem("Btn02", "", "L");
    leftBar.addItem("Btn03", "", "L");

    leftBar.addItem("Btn11", "", "M");
    leftBar.addItem("Btn12", "", "M");
    leftBar.addItem("Btn13", "", "M");

    leftBar.addItem("Btn21", "", "R");
    leftBar.addItem("Btn22", "", "R");
    leftBar.addItem("Btn23", "", "R");
}

function rightBarExample() {
    const rightBar = new NavigationBarGenerator();
    rightBar.makeRightBar();

    rightBar.addItem("Btn1", "", "");
    rightBar.addItem("Btn2", "", "");
    rightBar.addItem("Btn3", "", "");
    rightBar.spaceEqually();
}

leftBarExample();
rightBarExample();



// make it mobile-unfriendly.
// If I zoomed in more than 175%, the text on the buttons will overlap.
// Although the buttons are still distanced to each other, the text however, are crammed together.
// You might consider fixing with options in "css overflow".

// add some instructions on the web page to guide the user and think about how to display different examples on the one page.

// it would be better to change the text on different pages to show the functionality of your library.

// can’t really see how the page is changed when you click on different items on the search bar. 
// But different text on different pages will make your library’s functionality more clear

// one feature is to add some animations when you want to implement the minimization of the navigation bar.
// For example the user could choose how the navigation bar is popped up and popped out.