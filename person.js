export class Person {

#dob 
    constructor(name, surname, dob){
        this.name = name;
        this.surname = surname;
        this.#dob = dob;
    }

    #infoPrivate(){
        let year = this.#dob.getFullYear();
        let month = ("0" + (this.#dob.getMonth() + 1)).slice(-2);
        let day = ("0" + this.#dob.getDate()).slice(-2);
        return(this.name + ' ' + this.surname + ' ' + (day+'.'+month+'.'+year))
    }

    infoPublic(){
        let privateInfo = this.#infoPrivate();
        return this.#infoPrivate().split(' ').slice(0,2).join(" ")
    }

    nested() {
        const printThis = () => console.log(this);
        
        printThis();
    }
}