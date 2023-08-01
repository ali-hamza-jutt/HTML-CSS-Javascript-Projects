    const background=document.querySelector('.bg');
    const text=document.querySelector('.text');


    let load=0;
    let interval=setInterval(blurring,30)
    function blurring()
    {
        load++;
        if(load>99){
            clearInterval(interval);
        }
        text.innerText=load+'%';
        text.style.opacity=mapRange(load,0,100,1,0);
        background.style.filter=`blur(${mapRange(load,1,100,70,0)}px)`
    }

    function mapRange(value, inMin, inMax, outMin, outMax) {
        // First, normalize the input value to a 0-1 range
        const normalizedValue = (value - inMin) / (inMax - inMin);
      
        // Map the normalized value to the output range
        const mappedValue = normalizedValue * (outMax - outMin) + outMin;
      
        // Return the mapped value
        return mappedValue;
      }
      

