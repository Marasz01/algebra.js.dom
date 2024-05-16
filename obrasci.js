//1.Napišite modul za brojanje broja koraka. Modul će se brinuti o povećanju broja koraka, 
//a izvana će se moći pristupiti dvjema metodama modula: wlak() i getTotalSteps().
//2. Exportirajte modul iz datoteke


let totalSteps = 0;

function walk() {
    totalSteps++;
    console.log("Korak broj:", totalSteps);
}

function getTotalSteps() {
    return totalSteps;
}

module.exports = { walk, getTotalSteps };
