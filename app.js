//Ben Clauser Ringia
//displays a timer
//shows an animated border around the timer
//DOM-Centric Approach



const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const time = new Timer(durationInput, startButton, pauseButton, {
    //callback functions
    onStart(totalDuration) { console.log('STARTED')
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset',
       perimeter * timeRemaining / duration - perimeter 
       );
    },
    onComplete() {
        console.log("COMPLETED")
    }
});