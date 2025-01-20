function clickSingleA(clickedLink) {
    var links = document.querySelectorAll('.topnav-right a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');
}


function myFunction() {
    var x = document.getElementById("mynav");
    if (x.className === "topnav-right") {
        x.className += " responsive";
    } else {
        x.className = "topnav-right";
    }
}

