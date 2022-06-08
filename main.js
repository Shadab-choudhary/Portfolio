// enable pr disable
let colorIcons = document.querySelector(".color-icon"),
icons = document.querySelector(".color-icon .icons");

icons.addEventListener("click", ()=>
{
    colorIcons.classList.toggle("open")   
})

// get all btn elements 
let buttons = document.querySelectorAll(".btn");
for ( var button of buttons) {
    button.addEventListener("click" , (e)=>{
        
        let target = e.target;
        
        let open = document.querySelector(".open");
        if(open) open.classList.remove("open");
        document.querySelector(".active").classList.remove("active");
        target.classList.add("active");
        
        // switch colors and dark mode 
      let root = document.querySelector(":root"),

      dataColor = target.getAttribute("data-color"),
        color = dataColor.split(" ");

 root.style.setProperty("--text", color[0] )
 root.style.setProperty("--black", color[1] )
 root.style.setProperty("--switchers-main", color[2] )
 root.style.setProperty("--nav-main", color[3] );
 root.style.setProperty("--light-bg", color[4] );

 let iconName = target.className.split(" ") [2],
 colorText = document.querySelector(".home-content span");
     if (target.classList.contains("fa-moon")){
         target.classList.replace(iconName , "fa-sun");
         colorIcons.style.display = "none";
         colorText.classList.add("darkMode");
        }else if (target.classList.contains("fa-sun")){
            target.classList.replace("fa-sun" , "fa-moon");
            colorIcons.style.display = "block";
            colorText.classList.remove("darkMode");
        document.querySelector(".btn.blue").click();
     }
 
    });
}

var typed = new Typed(".typing", {
    strings:["web Designer" ,"web Developer" ],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
var typed = new Typed(".typing-2", {
    strings:["web Designer" ,"web Developer" ],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

//    accordion 
const Buttons = document.querySelectorAll('button');

Buttons.forEach( button =>{
    button.addEventListener('click',() =>{
        const education = button.nextElementSibling;
        const icon = button.children[1];

        education.classList.toggle('show');
        icon.classList.toggle('rotate');
    });
});


// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("nav  ul li");
// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (scrollY >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// });


