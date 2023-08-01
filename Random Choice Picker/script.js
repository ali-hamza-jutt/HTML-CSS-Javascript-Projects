const tags=document.getElementById('tags');
const textArea=document.getElementById('text-area');

textArea.focus();

textArea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);
    if(e.key==='Enter')
    {
        setTimeout(()=>{
            e.target.value='';
        },10)
    }
    randomSelect();
})

function randomSelect()
{
    const times=30;
    const interval=setInterval(()=>{
        const randomTag=pickRandomTag();
        if (randomTag !== undefined) {
            highlightTag(randomTag)
    
            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100)
        }
    },100)

    setTimeout(()=>{
        
        clearInterval(interval);
        setTimeout(()=>{
             randomTag=pickRandomTag();
            highlightTag(randomTag);
        },100*times)
    },100)
}
function pickRandomTag()
{
    const tags=document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];

}
function highlightTag(tag)
{
    tag.classList.add('highlight');
}
function unHighlightTag(tag)
{
    tag.classList.remove('highlight');
}

function createTags(input)
{
    const tags1=input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim());
    console.log(tags1);
    tags.innerHTML='';
    tags1.forEach(tag=>{
        const newTag=document.createElement('span');
        newTag.classList.add('tag');
        newTag.innerText=tag;
        tags.appendChild(newTag);
    })
}