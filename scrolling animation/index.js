const boxes=document.querySelectorAll('.box');

window.addEventListener('scroll',scrollAnimation);


function scrollAnimation()
{
    const triggerPoint=window.innerHeight/5*4
    boxes.forEach(box => {
        const boxTop=box.getBoundingClientRect().top;
        if(boxTop<triggerPoint)
        {
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    });
}