class Vegetable{
    constructor(carrot){
        this.name = carrot;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
