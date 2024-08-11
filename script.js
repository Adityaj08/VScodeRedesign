const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const loader = document.querySelector(".loader");
const download = document.querySelectorAll(".CTA");
const learnMoreBtn = document.querySelectorAll(".learnMore");
window.addEventListener("load" , () => {
    setTimeout(() => {
        loader.style.display = "none";
        document.body.style.overflow = "auto";
    }, 0);
});



const toggleNavbar = () =>{
    nav_header.classList.toggle("active");   
};

const removeNav = () =>{
    nav_header.classList.remove("active");   
};

mobile_nav.addEventListener('click', () => toggleNavbar());
nav.addEventListener('click', () => removeNav());

document.addEventListener('keydown', (e) => {
    if (e.key == 'x'){
        e.preventDefault();
        window.open('https://youtu.be/xvFZjo5PgG0', '_blank');
    }
});

download.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        window.open('https://vscode.download.prss.microsoft.com/dbazure/download/stable/eaa41d57266683296de7d118f574d0c2652e1fc4/VSCodeUserSetup-x64-1.92.1.exe','_blank')
    })
})

learnMoreBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        alert("Go to the official website to Learn More")
    })
})