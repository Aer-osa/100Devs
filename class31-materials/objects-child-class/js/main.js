//Create an a class and extend it - Can be anything you would like it to be! 
class Computer{
    constructor(name){
        this.name = name
    }
    turnOn(){
        console.log(`${this.name} turns on`)
    }
}
class Smartphone extends Computer{
    constructor(name, model){
        super(name, model)
        this.model = model
    }
}
let unit = new Smartphone('Samsung', 'S20')
