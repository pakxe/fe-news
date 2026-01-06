export const ThemeManager = {
	init() {
		const savedTheme =
			localStorage.getItem("theme") ||
			(window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light");
		this.applyTheme(savedTheme);
	},

	applyTheme(theme) {
		document.body.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	},

	toggle() {
		const nextTheme =
			document.body.getAttribute("data-theme") === "light"
				? "dark"
				: "light";
		this.applyTheme(nextTheme);
		return nextTheme;
	},
};

export function renderThemeToggle() {
	const container = document.createElement("div");
	container.classList.add("theme-toggle-container");

	const button = document.createElement("button");
	button.type = "button";
	button.className = "theme-toggle-btn";
	button.innerText = "테마 전환";

	button.addEventListener("click", () => {
		ThemeManager.toggle();
	});

	container.append(button);
	return container;
}
