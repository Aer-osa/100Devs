//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter(fighterGender,fighterSize,fighterPower,fighterHair){
    this.gender = fighterGender
    this.size = fighterSize
    this.power = fighterPower
    this.hair = fighterHair
    this.jump = function(){
      alert('Jump')
    }
    this.attack = function(){
      alert('Attack!!')
    }
    this.block = function(){
        alert('Block!!!!')
    }
  }
  
  let fighterOne = new MakeFighter('NB','Large','Powerful', 4)