//  Функция конструктор для всех электрических устройств
class Device {
    constructor(name, firm, power){
        this.name = name;
        this.swith = false;
        this.firm = firm;
        this.power = power;
    }

    // Метод для включения устройства
    turnOn = function(){
        console.log(`${this.name} "${this.firm}" подключен к розетке`)
        this.swith = true
    }

    // Метод для выключения устройства
    turnOf = function(swith){
        console.log(`${this.name} "${this.firm}" отключен от розетки`)
        this.swith = false
    }
}

// Класс утюгов. Наследуется от электрических устройств
class Iron extends Device {
    constructor(firm, power, weight, base){
        super("Утюг", firm, power);
        this.weight = weight;
        this.base = base;
        this.water = false;
    }
    // Функция заполнения водой
    fillWater = function(){
        console.log(`${this.name} "${this.firm}" заправлен водой`)
        this.water = true
    }
}


// Класс пылесосов. Наследуется от электрических устройств
class Hoover extends Device {
    constructor(firm, power, noizeLevel, size){
        super("Пылесос", firm, power);
        this.noizeLevel = noizeLevel;
        this.size=size;
        this.bag = false;
    }

    // Функция очищения мешка
    emptyBag = function(){
        console.log(`Мешок ${this.name.toLowerCase()}а "${this.firm}" очищен`)
        this.bag = true
    }
}


const ironSamsung = new Iron("Samsung", "300 ВТ", "2 кг", "Тефлон" )

const hooverPhilips = new Hoover("Philips", "700 ВТ", "23 Дб", "123x32x23 см")

ironSamsung.fillWater()

hooverPhilips.emptyBag()

