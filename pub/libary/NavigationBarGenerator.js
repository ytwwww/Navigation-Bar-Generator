/* JS Library */
"use strict";

(function(global) { // the window object serves as the global object in the browser.

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

			const centerDiv = document.createElement("div");
			centerDiv.className = "NavigationBarGenerator-middleGroup";
			bar.append(centerDiv);
	
			const rightDiv = document.createElement("div");
			rightDiv.className = "NavigationBarGenerator-bottomGroup";
			bar.append(rightDiv);
		},
	
		makeRightBar: function() {
			const bar = document.createElement("div");
			bar.className = "NavigationBarGenerator-rightBar";
	
			const spacer = document.createElement("div");
			spacer.className = "NavigationBarGenerator-rightSpacer";
			const body = document.querySelector("body");
			body.prepend(spacer);
			body.prepend(bar);
			this.bar = bar;

			const centerDiv = document.createElement("div");
			centerDiv.className = "NavigationBarGenerator-middleGroup";
			bar.append(centerDiv);
	
			const rightDiv = document.createElement("div");
			rightDiv.className = ".NavigationBarGenerator-bottomGroup";
			bar.append(rightDiv);
		},
	
		// Adds an item/button to the navbar
		// position: "L" (left), "M" (middle), or "R" (right), specifying where to insert the new item.
		// If position is not provided, the item will be inserted to left.
		addItem: function(name, address, position, action) {
			const link = document.createElement("a");
			link.innerText = name;
			link.className = "NavigationBarGenerator-btns";
			const vertical = this.bar.className == "NavigationBarGenerator-leftBar" || this.bar.className == "NavigationBarGenerator-rightBar";
			if (action) {
				link.onclick = action;
			} else {
				link.href = address;
			}
			if (position === "M") {
				this.middleItems.push(link);
				document.querySelector("." + this.bar.className + " .NavigationBarGenerator-middleGroup").append(link);
			} else if (position === "R") {
				this.rightItems.push(link);
				if (vertical) {
					document.querySelector("." + this.bar.className + " .NavigationBarGenerator-bottomGroup").append(link);
				} else {
					document.querySelector("." + this.bar.className + " .NavigationBarGenerator-rightGroup").append(link);
				}
			} else {
				this.leftItems.push(link);
				this.bar.append(link);
			}
			if (vertical) {
				document.querySelectorAll(".NavigationBarGenerator-btns").forEach((item) => {
					item.style.float = "none";
				});
			}
			return link;
		},
	
		addSearchField: function(position) {
			const input = document.createElement("input");
			input.type = "text";
			input.placeholder = "Search";
			input.className = "NavigationBarGenerator-btns";
			this.rightItems.push(input);
			document.querySelector("." + this.bar.className + " .NavigationBarGenerator-rightGroup").append(input);
		},

		// function to space all buttons on the bar equally, should only be called when all items are added (as left).
		spaceEqually: function() {
			const vertical = this.bar.className == "NavigationBarGenerator-leftBar" || this.bar.className == "NavigationBarGenerator-rightBar";
			if (!vertical) {
				this.bar.style.display = "flex";
			}
			const allItems = this.leftItems.concat(this.middleItems).concat(this.rightItems);
			const percentage = Math.floor(100 / (allItems.length));
			allItems.forEach((item) => {
				item.className = "NavigationBarGenerator-btns";
				if (vertical) {
					item.style.height = percentage + "%";
				} else {
					item.style.width = percentage + "%";
				}
			});
		},
	
		changeBarColor: function(color) {
			this.bar.style.backgroundColor = color;
		},
	
		changeHoverColor: function(color) {
			const style = document.createElement("style");
			const hoverCss = "." + this.bar.className + " .NavigationBarGenerator-btns:hover{ background-color:" + color + "}";
			style.append(document.createTextNode(hoverCss));
			document.querySelector("." + this.bar.className + " .NavigationBarGenerator-btns").append(style);
		},
	
		changeTextColor: function(color) {
			document.querySelectorAll("." + this.bar.className + " .NavigationBarGenerator-btns").forEach((item) => {
				item.style.color = color;
			});
		},
		
		changeTextFont: function(font) {
			this.bar.style.fontFamily = font;
		},
	}
	global.NavigationBarGenerator = global.NavigationBarGenerator || NavigationBarGenerator
})(window);
