//CREATED BY JACK COTE (MCSORELY PERIOD 3)

function Prism(l,w,h,m){
    this.mass = m;
    this.length = l;
    this.width = w;
    this.height = h;
    this.base = l*w;
    this.volume = l*w*h;
    this.surfaceArea = (2*l*w) + (2*l*h) + (2*w*h);
    this.density = m/this.volume;
}

function Cube(l,m){
    this.mass = m;
    this.length = l;
    this.base = Math.pow(l,2);
    this.volume = Math.pow(l,3);
    this.surfaceArea = 6*(Math.pow(l,2));
    this.density = m/this.volume;
}

function Pet(name,type){
    var stats = {
        rolls: 0,
        rollAttempts: 0,
        fetches: 0,
        shakes: 0,
        orations: 0,
        meals: 0,
        naps: 0
    };
    this.stats = stats;
    this.name = name;
    this.species = type;
    name = name.toLowerCase();
    type = type.toLowerCase();
    this.sleepy = 0;
    this.hunger = 0;
    this.awake = true;
    this.desire = 0.5;
    this.catDidRoll = false;
    this.catTriedRoll = false;
    this.speak = function() {
        if(!this.awake){return "Zzzz...";}
        this.stats.orations++;
        this.hunger++;
        this.sleepy++;
        if(type == "dog"){
            return "Woof! That means I love you!";
        } else if(type == "cat"){
            return "Ugh. meow.";
        }
    }
    this.eat = function() {
        if(!this.awake){return "Zzzz...";}
        this.stats.meals++;
        this.hunger = 0;
        this.sleepy++;
        if(type == "dog"){
            return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
        }else if(type == "cat"){
            return "Ugh, I guess I'll eat this.";
        }
    }
    this.nap = function() {
        this.sleepy = 0;
        this.awake = false;
        return "Zzzz...";
    }
    this.wakeUp = function() {4
        if(!this.awake){
            this.stats.naps++;
            this.sleepy = 0;
            this.hunger = 4;
            if(type == "dog"){
                return "I'm awake! Let's eat and then play! I love you!";
            }else if(type == "cat"){
                return "Ugh, I'm awake now. Is there anything to eat around here?";
            }
        } else {
            if(type == "dog"){
                return "I'm not asleep! I love you!";
            }else if(type == "cat"){
                return "I was never asleep in the first place, somthing the matter with you?";
            }
        }
    }
    this.rollOver = function() {
        if(!this.awake){return "Zzzz...";}
        if(type == "dog"){
            if(this.hunger>3){
                return "I'm hungry! Let's eat first. I love you!";
            }else if(this.sleepy>4){
                return "Yawn. Let's play after a nap. I love you!";
            }
            this.stats.rolls++;
            this.hunger++;
            this.sleepy++;
            return "Rolling! Now what? I love you!";
        }else if(type == "cat"){
            this.catTriedRoll = false;
            if(this.hunger>3){
                return "Ugh. Feed me before I'll even think about it.";
            }else if(this.sleepy>4){
                return "Ugh. I need a 12 hour nap first.";
            }
            this.stats.rollAttempts++;
            if(Math.random()>this.desire){
                this.hunger++;
                this.sleepy++;
                this.catDidRoll = true;
                this.catTriedRoll = true;
                this.stats.rolls++;
                return "Ugh. I'm a cat. I only roll over if I want to. Which I do, pet me.";
            } else {
                this.catDidRoll = false;
                this.catTriedRoll = true;
                return "Ugh. I'm a cat. I only roll over if I want to. Which I don't.";
            }
        }
    }
    this.fetch = function() {
        if(!this.awake){return "Zzzz...";}
        if(type == "dog"){
            if(this.hunger>3){
                return "I'm hungry! Let's eat first. I love you!";
            }else if(this.sleepy>4){
                return "Yawn. Let's play after a nap. I love you!";
            }
            this.stats.fetches++;
            this.hunger++;
            this.sleepy++;
            return "Must get the stick! I love you!";
        }else if(type == "cat"){
            if(this.hunger>3){
                return "Ugh. Feed me before I'll even think about it.";
            }else if(this.sleepy>4){
                return "Ugh. I need a 12 hour nap first.";
            }
            this.hunger++;
            this.sleepy++;
            return "Ugh. I'm a cat. I don't fetch.";
        }
    }
    this.shake = function() {
        if(!this.awake){return "Zzzz...";}
        if(type == "dog"){
            if(this.hunger>3){
                return "I'm hungry! Let's eat first. I love you!";
            }else if(this.sleepy>4){
                return "Yawn. Let's play after a nap. I love you!";
            }
            this.hunger++;
            this.sleepy++;
            this.stats.shakes++;
            return "Nice to meet you! I love you!";
        }else if(type == "cat"){
            if(this.hunger>3){
                return "Ugh. Feed me before I'll even think about it.";
            }else if(this.sleepy>4){
                return "Ugh. I need a 12 hour nap first.";
            }
            this.hunger++;
            this.sleepy++;
            return "Ugh. I'm a cat. I never shake";
        }
    }
}
