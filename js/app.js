console.log("Галерея загружена");

const navBarBtnMenu = document.getElementById("navBarBtnMenu");


const navBarMenu = document.getElementById("navBarMenu");

const mediaQuery = window.matchMedia("(max-width: 600px)");
let phone = mediaQuery.matches;

mediaQuery.addEventListener("change", (e) => {
    phone = e.matches;
    if (phone)
        navBarMenu.style.setProperty("display", "none");
    else
        navBarMenu.style.setProperty("display", "flex");
})


navBarBtnMenu.addEventListener("click", ()=>{    
    const display = window.getComputedStyle(navBarMenu).display;
    if (display === "none")
        navBarMenu.style.setProperty("display", "flex");
    else
        navBarMenu.style.setProperty("display", "none");
})

document.addEventListener("click", (e) => {    
    if (!navBarBtnMenu.contains(e.target) && phone) {
        navBarMenu.style.setProperty("display", "none");
    }
})