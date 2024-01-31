const body = document.querySelector("body");
const themeToggle = document.querySelector(".theme-toggle");
const currentMode = JSON.parse(localStorage.getItem("page-theme")).toString() || "1";
const themeMap = {
    "1": "",
    "2": "light-theme",
    "3": "strange-theme"
}


function setPageTheme(theme) {
    body.setAttribute("class", theme);
}

themeToggle.addEventListener("input", (event) => {
    const toggleMode = event.target.value;
    localStorage.setItem("page-theme", toggleMode);
    setPageTheme(themeMap[toggleMode]);
})

// On load
setPageTheme(themeMap[currentMode]);
themeToggle.value = currentMode;