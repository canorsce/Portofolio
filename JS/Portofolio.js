function openTab(th){
    window.open(th.name,'PDF');
}

const Aboutme = document.getElementById("About-me");

window.addEventListener("scroll", function(e_){

    let offset = window.pageYOffset;
    Aboutme.style.backgroundPositionY = offset * 0.7 + "px"
});

