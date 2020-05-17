//Ben Clauser Ringia
//displays a timer
//shows an animated border around the timer
//DOM-Centric Approach
class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton =startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete= callbacks.onComplete;
        }//OPTIONAL

        this.startButton.addEventListener('click',this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    //add Methods
    start = () => {
        if(this.onStart) {
            this.onStart(this.timeRemaining);
        }// runs onStart method if there's callback
        this.tick(); // removes the delay
        this.interval = setInterval(this.tick, 20); //runs tick once every 1sec 
    };
    pause = () => {
        clearInterval(this.interval);
    }
    tick = () => {
        if(this.timeRemaining <= 0) {
            this.pause();
            if(this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - .02;
            if(this.onTick) {
                this.onTick(this.timeRemaining);
            }
        } 
    };
    //getter && setter methods
    get timeRemaining() {
        return parseFloat(this.durationInput.value);// turns string into a decimal number
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}