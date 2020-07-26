const topNav = new NavigationBarGenerator();
topNav.makeTopBar();
topNav.addItem("btn01", "https://www.google.com/");
topNav.addItem("btn02", "https://www.google.com/");
topNav.addItem("btn03", "https://www.google.com/");
topNav.addItem("btn04", "https://www.google.com/");
topNav.addItem("btn05", "https://www.google.com/");
topNav.addItem("btn06", "https://www.google.com/");
topNav.spaceEqually();

const bottomNav = new NavigationBarGenerator();
bottomNav.makeBottomBar();
bottomNav.addItem("Left_1", "https://www.google.com/", "L");
bottomNav.addItem("Left_2", "https://www.google.com/", "L");
bottomNav.addItem("Middle_1", "https://www.google.com/", "M");
bottomNav.addItem("Middle_2", "https://www.google.com/", "M");
bottomNav.addItem("Right_1", "https://www.google.com/", "R");
bottomNav.addItem("Right_2", "https://www.google.com/", "R");
bottomNav.addItem("Left_3", "https://www.google.com/");
bottomNav.changeBarColor("Lavender");

// const d = new NavigationBarGenerator();
// d.makeLeftBar();
// d.makeRightBar();
// d.addItem("Google", "https://www.google.com/", "L");
