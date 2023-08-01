const btn=document.querySelectorAll('.faq-toggle');
const faqContainers=document.querySelectorAll('.faq');
console.log(faqContainers)
btn.forEach(button=>{
    button.addEventListener('click',()=>{
        faqContainers.forEach(container1=>{
            const target = button.dataset.target; // Get the target container identifier
            const container = document.getElementById(target); // Find the associated container
            if(container.classList.contains('active'))
            {
                container.classList.remove('active');
            }
            else
            {
                container.classList.add('active');
            }
        })
})
})