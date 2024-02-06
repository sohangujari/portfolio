function Mode() {
    var element = document.body;
    element.classList.toggle("light-mode");

    var icon = document.getElementById(modeIcon);
    var currentSrc = modeIcon.src;
    if (currentSrc.includes("light-icon")) {
        modeIcon.src = "assets/dark-icon.svg";
    } else {
        modeIcon.src = "assets/light-icon.svg";
    }
}