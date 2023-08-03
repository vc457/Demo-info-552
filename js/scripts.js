let burgerbtn = document.querySelector("#burger-btn")
let mainmenu = document.querySelector("#main-menu")

let canSeeMenu = false;

burgerbtn.addEventListener("click", () => {
    console.log (canSeeMenu);
    if(!canSeeMenu){
        mainmenu.classList.add("show-menu");
        canSeeMenu = true;
    }else{
        mainmenu.classList.remove("show-menu");
        canSeeMenu = false;

    }
})

mainmenu.addEventListener("click", () => {
    mainmenu.classList.remove("show-menu");
    canSeeMenu = false;
})