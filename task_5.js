class ElectricalDevice {
    constructor (name, connect, power) {
        this.name = name;
        this.connect = connect;
        this.power = power;
        this.voltage = '220';
    }

    WorkOnOff = function (){
        if (this.connect === true){
            this.connect = false;
        } else if (this.connect === false){
            this.connect = true;
        }
    }
}

class HomeDevice extends ElectricalDevice{
    constructor (appointment, price, name, connect, power){
        super (name, connect, power);
        this.appointment = appointment;
        this.price = price;
    }

    showPrice = function () {
        console.log(`Стоимость ${this.name} ${this.price} рублей`)
    }
}

class IndustrialDevice extends ElectricalDevice {
    constructor (appointment, voltage, name, connect, power) {
        super (name, connect, power);
        this.appointment = appointment;
        this.voltage = voltage;
    }
    showVoltagePhase3 = function (){
        console.log(`Оборудование ${this.name} подключено к сети 380 В`)
    }
}

function getMetodPrototype() {
    vacuumCleaner.showPrice();
    drillingMachine.showVoltagePhase3();
}

function start () {

    console.log(array);

    array.forEach(device => device.WorkOnOff());

    const devicesOn = array.filter(device => device.connect);

    devicesOn.forEach(device => console.log(`Подключен прибор ${device.name} мощностью ${device.power} Вт`));

    const sumPower = devicesOn.reduce((sum, device) => sum + device.power, 0);
    console.log(`Общая мощность подключенных приборов равна ${sumPower} Вт`);

    getMetodPrototype()

}

const coffeeMaker = new HomeDevice('Home', 100, 'coffeeMaker', false, 100);
const vacuumCleaner = new HomeDevice('Home', 520, 'vacuumCleaner', true, 2050);
const fridge = new HomeDevice('Home', 300, 'fridge', false, 320 );
const lathe = new IndustrialDevice('Industrial', 380, 'lathe', false, 2400);
const drillingMachine = new IndustrialDevice('Industrial', 380, 'drillingMachine', false, 1500);

const array = [coffeeMaker, vacuumCleaner, fridge, lathe, drillingMachine];

start ()
