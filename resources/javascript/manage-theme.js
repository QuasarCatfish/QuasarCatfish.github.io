const themes = [
	"/resources/css/dark.css",
	"/resources/css/light.css"
];

window.addEventListener("DOMContentLoaded", event => {
	setTheme(0);
});

function indexOfTheme(theme) {
	for (let index in themes) {
		if (theme.substring(theme.lastIndexOf("/")) == themes[index].substring(themes[index].lastIndexOf("/"))) {
			return index;
		}
	}
	return -1;
}

function setTheme(theme) {
	let links = document.getElementsByTagName("link");
	for (let curTheme of links) {
		if (curTheme.rel !== "stylesheet") continue;

		if (typeof theme === "number") {
			curTheme.href = themes[theme % themes.length];
		} else {
			curTheme.href = theme;
		}

		break;
	}
}

function changeTheme() {
	let links = document.getElementsByTagName("link");
	for (let curTheme of links) {
		if (curTheme.rel !== "stylesheet") continue;

		let index = indexOfTheme(curTheme.href);
		if (index === -1) continue;

		curTheme.href = themes[(parseInt(index) + 1) % themes.length];
		break;
	}
}
