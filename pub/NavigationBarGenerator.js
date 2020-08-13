function NavigationBarGenerator() {
	this.bar = null;
	this.leftItems = [];
	this.middleItems = [];
	this.rightItems = [];

	// remove margin of body
    const body = document.querySelector("body");
    body.style = "margin: 0px";
}

NavigationBarGenerator.prototype = {

	makeTopBar: function() {
		const bar = document.createElement("div");
		bar.className = "NavigationBarGenerator-topBar";

        const body = document.querySelector("body");
		body.prepend(bar);
        this.bar = bar;

        const centerDiv = document.createElement("div");
        centerDiv.className = "NavigationBarGenerator-middleGroup";
        bar.append(centerDiv);

        const rightDiv = document.createElement("div");
        rightDiv.className = "NavigationBarGenerator-rightGroup";
        bar.append(rightDiv);
	},

	makeBottomBar: function() {
		const bar = document.createElement("div");
        bar.className = "NavigationBarGenerator-bottomBar";

        // prevent the bottom bar from covering other content
		const spacer = document.createElement("div");
        spacer.className = "NavigationBarGenerator-bottomSpacer";

		const body = document.querySelector("body");
		body.append(spacer);
		body.append(bar);
        this.bar = bar;

        const centerDiv = document.createElement("div");
        centerDiv.className = "NavigationBarGenerator-middleGroup";
        bar.append(centerDiv);

        const rightDiv = document.createElement("div");
        rightDiv.className = "NavigationBarGenerator-rightGroup";
        bar.append(rightDiv);
	},

	makeLeftBar: function() {
        const bar = document.createElement("div");
        bar.className = "NavigationBarGenerator-leftBar";
        const spacer = document.createElement("div");
        spacer.className = "NavigationBarGenerator-leftSpacer";
		const body = document.querySelector("body");
		body.prepend(spacer);
		body.prepend(bar);
		this.bar = bar;
	},

	makeRightBar: function() {
		const bar = document.createElement("div");
        bar.className = "NavigationBarGenerator-RightBar";

		const spacer = document.createElement("div");
        spacer.className = "NavigationBarGenerator-rightSpacer";
		const body = document.querySelector("body");
		body.prepend(spacer);
		body.prepend(bar);
		this.bar = bar;
	},

	// Adds an item/button to the navbar
	// position: "L" (left), "M" (middle), or "R" (right), specifying where to insert the new item.
	// If position is not provided, the item will be inserted to left.
	addItem: function(name, address, position) {
		const link = document.createElement("a");
		link.innerText = name;
		link.href = address;
		link.className = "NavigationBarGenerator-btns";

		if (position === "M") {
            this.middleItems.push(link);
            document.querySelector("." + this.bar.className + " .NavigationBarGenerator-middleGroup").append(link);
		} else if (position === "R") {
            this.rightItems.push(link);
            document.querySelector("." + this.bar.className + " .NavigationBarGenerator-rightGroup").append(link);
		} else {
            this.leftItems.push(link);
            this.bar.append(link);
		}
	},

	addSearchField: function(position) {
	},

	addMinimizeButton: function(position) {
	},

	// function to space all buttons on the bar equally, should only be called when all items are added (as left).
	spaceEqually: function() {
        const percentage = 100 / (this.leftItems.length);
        this.leftItems.forEach((item) => {
            item.style = "padding-left: 0px; padding-right: 0px;"
            item.style.width = percentage + "%";
        });
	},

	changeBarColor: function(color) {
		this.bar.style.backgroundColor = color;
    },

    changeHoverColor: function(color) {
    },

    changeTextColor: function(color) {
	},
	
	changeTextFont: function(font) {
	},
}






