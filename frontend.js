let toggleState = true;
function toggleFilterGenre() {
    let bttn = document.getElementById("genre");
    let content = document.getElementById("genre-content");
    if (toggleState) {
        toggleState = false
        bttn.style.backgroundColor = "#1782FF";
        content.style.display = "block";
    }else{
        toggleState = true;
        bttn.style.backgroundColor = "#363636";
        content.style.display = "none";
    }
}