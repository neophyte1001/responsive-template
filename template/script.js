// const ham = document.getElementById('ham');
// const cross = document.getElementById('cross');


// const navBar = document.getElementById('navBar');
// const navLinks = document.getElementById('navLinks');


// function showLinks() {
//     navBar.style.flexDirection = "column";
//     console.log("column added");

//     navLinks.style.display = "flex";
//     navLinks.style.flexDirection = "column";

//     console.log("column----added");
//     ham.style.display = "none";
//     console.log("none added");

//     cross.style.display = "block"

// }
// function removeLinks() {
//     ham.style.display = "flex";
//     navLinks.style.display = "none"
//     navBar.style.display = "flex";
//     navBar.style.flexDirection = "row"
//     cross.style.display = "none"
// }



// ham.addEventListener('click', showLinks);
// cross.addEventListener('click', removeLinks);


// !Method-2

function slide() {
    const navLinks = document.getElementById('navLinks');
    const ham = document.getElementById('ham');
    const cross = document.getElementById('cross');

    ham.addEventListener('click', function () {
        ham.style.display = "none"
        cross.style.display = "block"
        navLinks.classList.toggle('nav-active');
        console.log('added');
    });
    cross.addEventListener('click', function () {
        ham.style.display = "block"
        cross.style.display = "none"
        navLinks.classList.toggle('nav-active');
    });
}

slide();