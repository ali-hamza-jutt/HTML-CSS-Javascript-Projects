nav=document.querySelector('nav');
btn=document.querySelector('.icon');

btn.addEventListener('click',()=>{
    if(nav.classList.contains('active'))
    {
        nav.classList.remove('active');
    }
    else{
        nav.classList.add('active');
    }
})