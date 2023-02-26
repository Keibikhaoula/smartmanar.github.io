const themenu = document.getElementById("themenu");
const action = document.getElementById("actions");

themenu.addEventListener("click", ()=> {
    hundleMenu();
})

function hundleMenu(){
    themenu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}
