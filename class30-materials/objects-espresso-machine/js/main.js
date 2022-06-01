//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class MakeEspressoMachine {
    constructor(machineMake,machineModel,machineFeature,machinePressure){
        this.make = machineMake
        this.model = machineModel
        this.feature = machineFeature
        this.pressure = machinePressure

    }
    grind(){
        alert("Espresso grind")
    }
    autoTamp(){
        alert("Tamp tamp tamp")
    }
    foam(){
        alert("That nice microfoam")
    }
}


