// Function expression to select elements `

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
            console.log(index/7 + 0.5)
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
                console.log(index/7 + 0.5)
            }
        })
    })
})

/* ========= Modal Handling =============== */

var modal_one = document.getElementById("modal_one");
var modal_two = document.getElementById("modal_two");
var modal_three = document.getElementById("modal_three");

// Get the button that opens the modal
var btn1 = document.getElementById("services_button_one");
var btn2 = document.getElementById("services_button_two");
var btn3 = document.getElementById("services_button_three");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("services_modal_close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modal_one.style.display = "block";
}
btn2.onclick = function() {
    modal_two.style.display = "block";
}
btn3.onclick = function() {
    modal_three.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_one.style.display = "none"; 
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_one) {
    modal_one.style.display = "none";
  } 
  else if (event.target == modal_two)
  {
    modal_two.style.display = "none"
  } 
  else 
  {
    modal_three.style.display = "none"
  }
}

