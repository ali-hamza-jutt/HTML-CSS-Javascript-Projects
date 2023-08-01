const panels=document.querySelectorAll('.panel');
function resize()
{
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        if(panel.classList.contains('active'))
        {
            console.log("active");
            panel.classList.remove('active');
        }
        else
        {
            resize();
            panel.classList.add('active');
            console.log("in-active");
        }
        
    })
});