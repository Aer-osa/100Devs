//Create a constructor with 4 properties and 3 methods

function MakeSurfboard(surfStyle, surfFins, surfColor, surfRocker){
    this.style = surfStyle
    this.fins = surfFins
    this.surfColor = surfColor
    this.rocker = surfRocker

    this.bag = function() {
        console.log('Bagged up')
    }
    this.beach = function() {
        console.log('Ready to go')
    }
    this.wave = function() {
        console.log('Try to catch it')
    }
}

let fish = new MakeSurfboard('fish','two','white','medium')