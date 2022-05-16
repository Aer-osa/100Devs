//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function tonyHawk (skaterCharacter, skaterStyle, skaterSpecial, skaterBoard){
    this.character = skaterCharacter
    this.playstyle = skaterStyle
    this.specialmove = skaterSpecial
    this.board= skaterBoard
    this.kickflip = function(){
        alert('Do a kickflip')
    }
    this.ollie = function(){
        alert('OLLIEE')
    }
    this.nocomply = function(){
        alert('NO COMPLYYYYYYYYY')
    }
}
let bernard = new tonyHawk('NB','goofy','nosegrab','etnies')
