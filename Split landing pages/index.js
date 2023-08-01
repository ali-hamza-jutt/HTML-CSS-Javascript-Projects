var container=document.querySelector('.container');
var ps=document.querySelector('#ps-bg');
var xbox=document.querySelector('#xbox-bg');

ps.addEventListener('mouseenter',()=>{container.classList.add('ps-active')})
ps.addEventListener('mouseleave',()=>{container.classList.remove('ps-active')})
xbox.addEventListener('mouseenter',()=>{container.classList.add('xbox-active')})
xbox.addEventListener('mouseleave',()=>{container.classList.remove('xbox-active')})