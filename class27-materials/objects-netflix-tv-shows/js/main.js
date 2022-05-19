//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeShow{
    constructor(showShow,castShow,locationShow,dateShow){
        this.show = showShow
        this.cast = castShow
        this.location = locationShow
        this.date = dateShow
    }
    play(){
        alert('Play Show')
    }
    skip(){
        alert('skip this shit')
    }
    delete(){
        alert('this trash is garbage')
    }
    
}

let peakyBlinders = new MakeShow('Peaky Blinders','Unknown','england','2020')