function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("searchInput").focus();
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

function openMenu() {
    document.getElementById("mobileMenu").style.right = "0";
    document.getElementById("menuBtn").style.visibility="hidden";

}

function closeMenu() {
    document.getElementById("mobileMenu").style.right = "-100%";
    document.getElementById("menuBtn").style.visibility="visible";
}
var x = 0;

function openSubMenu() {

    if (x == 0) {
        document.getElementById("mobileSubMenu").style.display = "block";
        x = 1;
    } else {
        document.getElementById("mobileSubMenu").style.display = "none";
        x = 0
    }
}