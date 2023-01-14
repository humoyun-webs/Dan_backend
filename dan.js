class Mashina {
    #nomi;
      #model;
    #marka;
      #rangi;
    #nomer;
     #yil;
    #yoqilgi;
     #sarfi;
    #mator = false;
     #chiroq = false;

    constructor(nomi, model, marka, rangi, nomer, yil, yoqilgi, sarfi) 
    {
        this.#nomi = nomi;

        this.#model = model;

        this.#marka = marka;

        this.#rangi = rangi;

        this.#nomer = nomer;

        this.#yil = yil;
        
        this.#yoqilgi = yoqilgi;
        
        this.#sarfi = sarfi;
    }
    DAN() {
        this.ruxsatnoma = true;
    }
    texpasport() {
        return `Name : ${this.#nomi}

        Model : ${this.#model}
        
        Marka : ${this.#marka}
        
        Rangi : ${this.#rangi}
        
        Yili : ${this.#yil}
        
        Nomer : ${this.#nomer}
        `;
    }
    yurish(km) {
        if (this.#mator) {
       
            this.#yoqilgi -= (km / 100) * this.#sarfi;
       
            return "Yurdi";
       
        } else {
       
            return "AVVAL MSHINA QO'SHING";
       
        }
    }
    zaprafka(y) {
        this.#yoqilgi += y;
    }
    yoqish() {
        if (!this.#mator) {
       
            this.#mator = true;
       
            this.#chiroq = true;
       
            return "Qo'shildi";
       
        } else {
       
            return "ZZZ";
       
        }
    }
    ochirish() {
        if (this.#mator) {
            this.#mator = false;
            this.#chiroq = false;
            return "O'chirildi";
        } else {
            return "O'chik";
        }
    }
    remont(rangi, nomer, sarfi) {
        if (this.ruxsatnoma) {
            
            this.#sarfi = sarfi || this.#sarfi;
            this.#nomer = nomer || this.#nomer;
            this.#rangi = rangi || this.#rangi;
           
            return "Parametr o'zgartirildi";
        } else {
            return "DAN dan ruxsat oling!";
        }
    }
    holat() {
        return `Mator: ${this.#mator ? "ON" : "OFF"}
        Chiroq: ${this.#chiroq ? "ON" : "OFF"}
        Yoqilg'i: ${this.#yoqilgi}`;
    }
}

const car = new Mashina(
    "Malibu",
    "chevro",
    "TURBO",
    "oq",
    "01 | O 310 QB",
    2017,
    40,
    10
);

car.DAN();
console.log(car.nomi);
car.nomi = undefined;
console.log(car.nomi);
console.log(car.remont("oq", "01 | O 310 QB", "40"));
console.log(car.yoqish());
console.log(car.yurish(100));
console.log(car.holat());
console.log(car.texpasport());
console.log(car.ochirish());
console.log(car.ochirish());