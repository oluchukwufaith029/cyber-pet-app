class Pet {
    constructor(name, play, hunger, thirst) {
        this._name = name;
        this._play = 50;
        this._hunger = 50;
        this._thirst = 50;
        this._intervalID = 0;
    }
    //getters//
    get name() {
        return this._name;
    }
    get play() {
        return this._play;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get intervalID() { 
        return this._intervalID; 
    }
    playWith() {
        this._play ++;
        this._hunger -= 0.5;
        this._thirst -= 0.5;
    }
    giveFood() {
        this._hunger ++;
        this._play -= 0.5;
        this._thirst -= 0.5;
    }
    giveDrink() {
        this._thirst ++;
        this._play -= 0.5;
        this._hunger -= 0.5;
    }
    alone() {
        this._play --;
        this._hunger --;
        this._thirst --;
    }   
}

//~subclass setup~//
class Dog extends Pet {
    constructor(name, walks) {
        super(name);
        this._walks = walks;
    }
    walkDog() {
        this._walks ++
        this._play += 2;
        this._thirst --;
        this._hunger --;
    }
}

class Cat extends Pet {
    constructor(name, groomed) {
        super(name);
        this._groomed = groomed;
    }
    lickSelf() {
        this._groomed ++;
    }

}

class Horse extends Pet {
    constructor(name, stereotypic) {
        super(name);
        this._stereotypic = stereotypic;
    }
    petHorse() {
        this._stereotypic ++;
    }
}
    
            class  Parrot extends Pet {
                constructor(name, flight) {
                    super(name);
                    this._flight = flight;
                }
                petParrot() {
                    this._flight ++;
                }
            }
            class  Rabbit extends Pet {
                constructor(name, binky) {
                    super(name);
                    this._binky = binky;
                }
                petHorse() {
                    this._binky ++;
                }
            }
            class  Hamster extends Pet {
                constructor(name, agonistic) {
                    super(name);
                    this._agonistic = agonistic;
                }
                petHamster() {
                    this._agonistic ++;
                }
            }
            class  Canary extends Pet {
                constructor(name, preparatorynesting) {
                    super(name);
                    this._preparatorynesting = preparatorynesting;
                }
                petCarnary() {
                    this._preparatorynesting ++;
                }
            }
            class Budgeriar extends Pet {
                constructor(name, neophilia) {
                    super(name);
                    this._neophilia = neophilia;
                }
                petBudgeriar() {
                    this._neophilia ++;
                }
            }
            
function alive(cyberPet){
    cyberPet.intervalID = setInterval(()=>{
        if (cyberPet.playWith == true || cyberPet.giveDrink == true || cyberPet.giveFood == true) {
            clearInterval(cyberPet.intervalID);
        } else {
            cyberPet.alone();
            console.log(cyberPet);
        }
    }, 3000)
};

