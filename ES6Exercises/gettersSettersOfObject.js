class Thermostat{
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit;
    }
    get temperature(){
        this.fahrenheit = 5/9 * (this.fahrenheit - 32);
        return this.fahrenheit;
    }

    set temperature(celcius){        this.fahrenheit=(celcius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // setting in Fahrenheit scale
console.log(thermos.temperature);
let temp = thermos.temperature; // 24.44 in C
console.log(thermos.temperature);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(thermos.temperature);
