//  Функция конструктор для всех электрических устройств
function Device(name, firm, power){
    this.name = name,
    this.swith = false,
    this.firm = firm,
    this.power = power
}

// Метод для включения устройства
Device.prototype.turnOn = function(){
    console.log(`${this.name} "${this.firm}" подключен к розетке`)
    this.swith = true
}

// Метод для выключения устройства
Device.prototype.turnOf = function(swith){
    console.log(`${this.name} "${this.firm}" отключен от розетки`)
    this.swith = false
}

// Конструктор для утюгов. Наследуется от электрических устройств
function Iron (firm, power, weight, base){
    this.name = "Утюг",
    this.firm = firm,
    this.power = power,
    this.weight = weight,
    this.base = base,
    this.water = true
}

Iron.prototype = new Device()

// Конструктор для пылесосов. Наследуется от электрических устройств
function Hoover (firm, power, noizeLevel, size){
    this.name = "Пылесос"
    this.firm = firm,
    this.power = power,
    this.noizeLevel = noizeLevel,
    this.size = size,
    this.bag = true
}

Hoover.prototype = new Device()

// Метод для утюга
Iron.prototype.fillWater = function(){
    console.log(`${this.name} "${this.firm}" заправлен водой`)
    this.water = true
}


// Метод для пылесоса
Hoover.prototype.emptyBag = function(){
    console.log(`Мешок ${this.name.toLowerCase()}а "${this.firm}" очищен`)
    this.bag = true
}


const ironSamsung = new Iron("Samsung", "300 ВТ", "2 кг", "Тефлон" )

const hooverPhilips = new Hoover("Philips", "700 ВТ", "23 Дб", "50х40х30 см" )

ironSamsung.turnOn()
hooverPhilips.turnOf()
ironSamsung.fillWater()
hooverPhilips.emptyBag()