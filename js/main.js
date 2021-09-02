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

var modalOne = document.getElementById("modal_one");
var modalTwo = document.getElementById("modal_two");
var modalThree = document.getElementById("modal_three");

// Get the button that opens the modal
var btn1 = document.getElementById("services_button_one");
var btn2 = document.getElementById("services_button_two");
var btn3 = document.getElementById("services_button_three");

// Get the <span> element that closes the modal
var closeButtonList = document.getElementsByClassName("services_modal_close");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
    modalOne.style.display = "block";
}
btn2.onclick = function() {
    modalTwo.style.display = "block";
}
btn3.onclick = function() {
    modalThree.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeButtonList.onclick = function() {
   
}

Array.from(closeButtonList).forEach(element => {
    console.log(element)
    element.onclick = function() {
        if 
        (
            modalOne.style.display === 'block') {
            modalOne.style.display = "none"
        } 
        else if
        (modalTwo.style.display === 'block') {
            modal_two.style.display = "none"
        }
        else 
        {
            modalThree.style.display = "none"
        }
    }
});

// When the user clicks anywhere outside of the modal, close it

if (modalOne.style.display === 'block') 
{ 
    window.onclick = function() {
        modalOne.style.display = "none"
    }
    
} 

// Kenny MeSt23:12
// [btn1, btn2, btn3].forEach
// Kenny MeSt23:16
// const modalList = [modalOne, modalTwo, modalThree]
// const btnList = [btn1, btn2, bt3]
// Kenny MeSt23:18
// btnList.forEach((btn, index) => {
//   btn.onClick = () => {
//     modalList[index].style.display = "block"
//   }
// }

