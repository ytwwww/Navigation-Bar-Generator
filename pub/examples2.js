const c = new NavigationBarGenerator();
c.makeLeftBar();

const d = new NavigationBarGenerator();
d.makeRightBar();

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