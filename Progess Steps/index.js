const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
const circle1=document.getElementById('circle-1');
const circle2=document.getElementById('circle-2');
const circle3=document.getElementById('circle-3');
const circle4=document.getElementById('circle-4');
const line=document.querySelector('.line');


function nextButtonClicked() {
    if(circle2.classList.contains('active')&&circle3.classList.contains('active'))
    {
        circle4.classList.add('active');
        line.classList.add('circle-4');
    }
    else if(circle2.classList.contains('active'))
    {
        circle3.classList.add('active');
        line.classList.add('circle-3');
    }
    else
    {
        circle2.classList.add('active');
        line.classList.add('circle-2');
        if(FileList.classList.contains('circle-2'))
        {
            console.log('class-2 added to line');
        }


    }
}
function prevButtonClicked() {
    if(circle2.classList.contains('active')&&circle3.classList.contains('active')&&circle4.classList.contains('active'))
    {
        circle4.classList.remove('active');
        line.classList.remove('circle-4');
    }
    else if(circle2.classList.contains('active')&&circle3.classList.contains('active'))
    {
        circle3.classList.remove('active');
        line.classList.remove('circle-3');
    }
    else if(circle2.classList.contains('active'))
    {
        circle2.classList.remove('active');
        line.classList.remove('circle-2');
    }
  }
nextButton.addEventListener('click', nextButtonClicked);
prevButton.addEventListener('click', prevButtonClicked);
