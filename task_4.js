// ф-я конструктор
function ElectricalDevice (name, connect, power){
    this.name = name;
    this.connect = connect;
    this.power = power;
    this.voltage = '220';
}

// метод конструктора, меняющий режим работы электро прибора (вкл / выкл)
ElectricalDevice.prototype.WorkOnOff = function (){
    if (this.connect === true){
        this.connect = false;
    } else if (this.connect === false){
        this.connect = true;
    }
}

// Устанавливаем делегирующие связи (наследуем прототип)
function HomeDevice (name, connect, power, appointment, price){
    ElectricalDevice.call(this, name, connect, power); // Вызываем конструктор родителя с передачей параметров
    this.appointment = appointment;
    this.price = price;
}

ElectricalDevice.prototype.showPrice = function () {
    console.log(`Стоимость ${this.name} ${this.price} рублей`)

}

HomeDevice.prototype = new ElectricalDevice();

function IndustrialDevice(name, connect, power, appointment, voltage) {
    ElectricalDevice.call(this, name, connect, power); // Вызываем конструктор родителя с передачей параметров
    this.appointment = appointment;
    this.voltage = voltage;
}

ElectricalDevice.prototype.showVoltagePhase3 = function (){
    console.log(`Оборудование ${this.name} подключено к сети 380 В`)
}

IndustrialDevice.prototype = new ElectricalDevice();

function getMetodPrototype() {
    vacuumCleaner.showPrice();
    drillingMachine.showVoltagePhase3();
}

// ф-я запускает выполнение задания
function start () {

    // Выводим созданные экземпляры
    console.log(array);

    // Включаем/выключаем все приборы
    array.forEach(device => device.WorkOnOff());

    // Получаем массив включенных приборов
    const devicesOn = array.filter(device => device.connect);

    // Выводим информацию о включенных приборах
    devicesOn.forEach(device => console.log(`Подключен прибор ${device.name} мощностью ${device.power} Вт`));

    // Получаем и выводим общую мощность включенных приборов
    const sumPower = devicesOn.reduce((sum, device) => sum + device.power, 0);
    console.log(`Общая мощность подключенных приборов равна ${sumPower} Вт`);

    getMetodPrototype()

}

const coffeeMaker = new HomeDevice('coffeeMaker', false, 510, 'Home', 100);
const vacuumCleaner = new HomeDevice('vacuumCleaner', true, 2050,'Home', 520);
const fridge = new HomeDevice('fridge', false, 320, 'Home', 300);
const lathe = new IndustrialDevice('lathe', false,  2400, 'Industrial', 380);
const drillingMachine = new IndustrialDevice('drillingMachine', false,  1500, 'Industrial', 380);

const array = [coffeeMaker, vacuumCleaner, fridge, lathe, drillingMachine];

start ()
