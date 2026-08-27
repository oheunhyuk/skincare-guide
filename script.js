const toggle=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.mobile-menu');
if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');});}
