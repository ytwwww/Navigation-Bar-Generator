"use strict"; 

function topBarExample() {
	const topNav = new NavigationBarGenerator();
    topNav.makeTopBar();

    topNav.addItem("Outerwear", "");
    topNav.addItem("Swimwear", "");
    topNav.addItem("Activewear", "");
    topNav.addItem("Sleepwear", "");
    topNav.addItem("Shoes", "");
    topNav.addItem("Bags", "");
    topNav.spaceEqually();

    topNav.changeBarColor("HoneyDew");
    topNav.changeTextFont("Verdana");
    topNav.changeTextColor("CadetBlue");
    topNav.changeHoverColor("PaleTurquoise");
}

function bottomBarExample() {
    const bottomNav = new NavigationBarGenerator();
    bottomNav.makeBottomBar();

    bottomNav.addItem("My Account", "", "L");
    bottomNav.addItem("New Arrivals", "", "L");
    bottomNav.addItem("Most Popular", "", "L");
    bottomNav.addItem("Free Shipping", "", "M");
    bottomNav.addItem("Return Policy", "", "M");
    bottomNav.addItem("Shopping Cart", "", "M");
    bottomNav.addSearchField();

    bottomNav.changeBarColor("MistyRose");
    bottomNav.changeTextFont("Tahoma");
    bottomNav.changeTextColor("Tomato");
    bottomNav.changeHoverColor("PeachPuff");
}

topBarExample();
bottomBarExample();
