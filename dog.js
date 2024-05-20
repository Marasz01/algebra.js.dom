class Dog {
    constructor(imePsa) {
        this.imePsa = imePsa;
    }

    bark() {
        console.log(`${this.imePsa} kaže: Vau!`);
    }
}

const mojPas = new Dog("Rex");
console.log(mojPas.imePsa); // Ispisuje: Rex
mojPas.bark(); // Ispisuje: Rex kaže: Vau!
