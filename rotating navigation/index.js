const container=document.getElementById('container');
const openButton=document.getElementById('open');
const closeButton=document.getElementById('close');

console.log(container);
console.log(openButton);
console.log(closeButton);

function openButtonClicked()
{
    container.classList.add('show');
}


function closeButtonClicked()
{
    container.classList.remove('show')
}

openButton.addEventListener('click',openButtonClicked);
closeButton.addEventListener('click',closeButtonClicked);