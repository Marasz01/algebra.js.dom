function Dog(name){
    if(name == undefined){

        this.dogName = "Rex";
    }else{
        this.dogName = name;
    }
}

var dog = new Dog();
console.log("Ime psa default name = " + dog.dogName);

var dog1 = new Dog("Loki");
console.log("Ime psa = " + dog1.dogName);

Dog.prototype.imePsa = function(){
    return this.dogName;
};