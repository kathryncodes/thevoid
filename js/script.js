//Important Global Variables
const animateBlock = document.getElementById("animate-block");
const enterBtn = document.getElementById("enter-btn");
const inputField = document.getElementById("input-field");

//Create reset function to use after each instance of enterText()
function reset(){
    animateBlock.classList.remove("animate");
    animateBlock.innerHTML = "";
}

//Main function: triggers text animation, resets input value and triggers reset function
function enterText(){
    const inputText = inputField.value;
    animateBlock.classList.add("animate")
    animateBlock.innerHTML = `<h2>${inputText}</h2>`;
    console.log(inputText);
    inputField.value = "";
    setTimeout(reset, 2000)
}

//Add enterText function to the "Enter Text" button as well as they Enter button on keyboard
enterBtn.addEventListener("click", enterText);
inputField.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        enterText();
    }
})

//SIDEBAR
const changeButton = document.getElementById("change-theme-btn");
const sidebar = document.getElementById("sidebar");
const closeSidebarButton = document.getElementById("close-sidebar-btn");

const sidebarOut = () => {
    sidebar.style.width = "20vw";
}

const closeSidebar = () => {
    sidebar.style.width = "0vw";
}

changeButton.addEventListener("click", sidebarOut);
closeSidebarButton.addEventListener("click", closeSidebar);

//CHANGING THEMES
const galaxyBtn = document.getElementById("galaxy");
const pastelBtn = document.getElementById("pastel");
const oceanBtn = document.getElementById("ocean");
const flamesBtn = document.getElementById("flames");
const zenBtn = document.getElementById("zen");
const natureBtn = document.getElementById("nature");

//Add Click Events to each Theme Button

galaxyBtn.addEventListener("click", function(){
    document.body.classList = "";
    document.body.classList.add("galaxy");
})

pastelBtn.addEventListener("click", function(){
    document.body.classList = "";
    document.body.classList.add("pastel");
})

oceanBtn.addEventListener("click", function(){
    document.body.classList = "";
    document.body.classList.add("ocean");
})

flamesBtn.addEventListener("click", function(){
    document.body.classList = "";
    document.body.classList.add("flames");
})

zenBtn.addEventListener("click", function(){
    document.body.classList = "";
    document.body.classList.add("zen");
})

natureBtn.addEventListener("click", function(){
    document.body.classList = "";
    document.body.classList.add("nature");
})



