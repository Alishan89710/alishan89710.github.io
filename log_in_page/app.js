var blackMode = document.documentElement.style;
var mode = true;


function changedMode() {
    if (mode) {
        darkMode();
    }
    else { lightMode(); }
}
function lightMode() {
    blackMode.setProperty("--background1", "rgba(230,230,230,)")
    blackMode.setProperty("--shadow1", "rgba(139, 133, 133, 0.5)")
    blackMode.setProperty("--shadow2", "rgba(255,255,255,0.85)")
    blackMode.setProperty("--color", "black")

}


function darkMode() {

    blackMode.setProperty("--background1", "rgba(9 25 33)")
    blackMode.setProperty("--shadow1", "rgba(0 0 0 / 45%)")
    blackMode.setProperty("--shadow2", "rgba(255 255 255 / 12%)")
    blackMode.setProperty("--color", "rgba(255 255 255 / 59%)")

}
