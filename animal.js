export class Animal{
   
    _dead = false;
   constructor(name, color){
       this.name = name;
       this.color = color;
       this.news = document.getElementById("news")
   }

   informWorld(message){
    this.news.innerHTML += ("<br>" + this.constructor.name + " " +this.name + " " +message)
}

  die(){
      if(this._dead){
        this.informWorld('už nemôže zomrieť znova')
      }else{
        this._dead = true;
        this.informWorld('zomrela'); 
      }
      
  }

  isAlive(){
      if(this._dead){
          this.informWorld('nežije')
      }else{
          this.informWorld('žije')
      }
  }

  makeSound(){
      if(this._dead){
          this.informWorld('...')
      } else{
      this.informWorld(':ssss')
    }
  }
}