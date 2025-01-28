function myFunction() {
    const x = document.getElementById("mynav");
    if (x.className === "topnav-right") {
        x.className += " responsive";
    } else {
        x.className = "topnav-right";
    }
}

function clickSingleA(link) {
    let parentContainer = link.parentElement;
    let links = parentContainer.getElementsByTagName("a");

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    link.classList.add("active");
}

const wrap = document.querySelector('#socials li:nth-child(2)');
console.log(wrap)