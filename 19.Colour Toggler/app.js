let toggler = document.getElementById("switch");

toggler.addEventListener ("click", () => {
    // if(toggler.checked === true) {
    //     document.body.style.backgroundColor = "pink";
    // }else{
    //     document.body.style.backgroundColor = "skyblue";
    // }

    toggler.checked === true
    ? (document.body.style.backgroundColor = "pink")
    : (document.body.style.backgroundColor = "skyblue")
});