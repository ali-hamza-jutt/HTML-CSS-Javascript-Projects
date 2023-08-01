const sounds=['applause','boo','gasp','tada','victory','wrong'];

sounds.forEach(sound => {
    const btn=document.createElement('button');
    btn.classList.add('btn');
    btn.innerText=sound;

    const buttons=document.getElementById('buttons').appendChild(btn);

    btn.addEventListener('click',()=>{
        stopSong();
        document.getElementById(sound).play();
    })
});
function stopSong()
{
    sounds.forEach(sound=>{
        document.getElementById(sound).pause();
        sound.currentTime=0;
    })
}
