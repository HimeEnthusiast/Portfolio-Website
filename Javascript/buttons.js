let open = false;
let portrait = window.matchMedia("(max-width: 767px) and (orientation: portrait)"); //Mobile Portrait
let landscape = window.matchMedia("(max-width: 767px) and (orientation: landscape)"); //Mobile Landscape

function menuChange() {
    if (open == false) { //If menu is closed
        if (portrait.matches) { //If in mobile portrait mode
            document.getElementById("menu").style.height='100%';
            document.getElementById("menu-icon").style.fill='#B7004F';
            open = true; //Set menu status to open
        
        } else if (landscape.matches) {
            document.getElementById("menu").style.height='100%';
            document.getElementById("menu-icon").style.fill='#B7004F';
            open = true; //Set menu status to open
        
        } else { //In desktop display
            document.getElementById("menu").style.width='25%';
            document.getElementById("menu").style.minWidth='300px';
            open = true;
        }

    } else { //If menu is open
        if (portrait.matches) {
            document.getElementById("menu").style.height='0';
            document.getElementById("menu-icon").style.fill='#FFFFFF';
            open = false;
        
        } else if (landscape.matches) {
            document.getElementById("menu").style.height='0';
            document.getElementById("menu-icon").style.fill='#B7004F';
            open = false;
        
        } else {
            document.getElementById("menu").style.width='0';
            document.getElementById("menu").style.minWidth='0px';
            open = false;
        }
    }
}