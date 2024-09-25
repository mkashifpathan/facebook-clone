document.querySelector(".nav-right .user-profile").addEventListener("click", showSettings);
function showSettings() {
    const settings = document.querySelector(".user-settings-menu");
    settings.classList.toggle("height");
}


document.querySelector(".theme-toggle-btn").addEventListener("click", changeThemeBtn);
function changeThemeBtn() {
    const themeBtn = document.querySelector(".theme-toggle-btn");
    themeBtn.classList.toggle("dark");
    document.body.classList.toggle("dark-mode");
    document.body.querySelector(".theme-toggle-btn span").style.backgroundColor = "white";


    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    let invertedSvgs = document.body.querySelectorAll(".invert");
    invertedSvgs.forEach(e => {
        e.style.filter = "invert(1)";
    })
    }
    else {
        localStorage.setItem("theme", "light");

    let invertedSvgs = document.body.querySelectorAll(".invert");
    invertedSvgs.forEach(e => {
        e.style.color = "white";
    })
    }

}

if (localStorage.getItem("theme") == "light") {
    const themeBtn = document.querySelector(".theme-toggle-btn");
    themeBtn.classList.remove("dark");
    document.body.classList.remove("dark-mode");
}
else if (localStorage.getItem("theme") == "dark") {
    const themeBtn = document.querySelector(".theme-toggle-btn");
    themeBtn.classList.add("dark");
    document.body.classList.add("dark-mode");
}
else {
    localStorage.setItem("theme", "light")
}





// let mainLeftSidebar = document.querySelector(".main-left-sidebar");
// let settings;
// if (mainLeftSidebar.style.display === "none") {
//     settings = document.querySelector(".settings");
//     mainLeftSidebar.style.display = "block"
//     settings.appendChild(mainLeftSidebar)
//     console.log("Sidebar", mainLeftSidebar)
//     console.log("Settings", settings)
// }
// console.log(mainLeftSidebar)
// settings.appendChild(`<h3>jhjsdskhdkjhdkjsa</h3>`)