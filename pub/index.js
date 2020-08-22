"use strict"; 

function nav() {
    const bar = new NavigationBarGenerator();
    bar.makeBottomBar();
    bar.addItem("Documentation", "./documentation.html");
    bar.addItem("Horizontal Bars Examples", "./horizontal.html");
    bar.addItem("Vertical Bars Examples", "./vertical.html");
    bar.spaceEqually();
    bar.changeBarColor("bisque");
}

nav();
