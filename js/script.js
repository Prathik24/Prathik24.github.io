function openNav() {
    document.getElementById("mySidenav").style.zIndex = "2";
    document.getElementById("mySidenav").style.width = "20ch";
    
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.zIndex = "-1";

} 


function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "0px" || sidenav.style.width === "") {
        openNav();
    } else {
        closeNav();
    }
}
