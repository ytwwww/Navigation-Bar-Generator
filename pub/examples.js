const topNav = new NavigationBarGenerator();
topNav.makeTopBar();
topNav.addItem("Outerwear", "");
topNav.addItem("Swimwear", "");
topNav.addItem("Activewear", "");
topNav.addItem("Sleepwear", "");
topNav.addItem("Shoes", "");
topNav.addItem("Bags", "");
topNav.spaceEqually();

const bottomNav = new NavigationBarGenerator();
bottomNav.makeBottomBar();
bottomNav.addItem("New Arrivals", "", "L");
bottomNav.addItem("Most Popular", "", "L");
bottomNav.addItem("Free Shipping", "", "M");
bottomNav.addItem("Return Policy", "", "M");
bottomNav.addItem("Shopping Cart", "", "R");
bottomNav.addItem("My Account", "", "R");
bottomNav.addItem("Clearence", "");
bottomNav.changeBarColor("Lavender");

// const c = new NavigationBarGenerator();
// c.makeLeftBar();

// const d = new NavigationBarGenerator();
// d.makeRightBar();
