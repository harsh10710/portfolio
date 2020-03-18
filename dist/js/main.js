//select dom items
const menubtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menubNav=document.querySelector('.menu-nav');
const menuBranding=document.querySelector('.menu-branding');
const navItems=document.querySelectorAll('.nv-item');

//set initial stte of menu
let showmenu=false;
menubtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showmenu){
    menubtn.classList.add('show');
    menu.classList.add('show'); 
    menubNav.classList.add('show'); 
    menuBranding.classList.add('show');
    navItems.forEach(item=>item.classList.add('show'));
    showmenu=true;
    }else{

        menubtn.classList.remove('show');
        menu.classList.remove('show'); 
        menubNav.classList.remove('show'); 
        menuBranding.classList.remove('show');
        navItems.forEach(item=>item.classList.remove('show'));
        showmenu=false;
        
    }
}