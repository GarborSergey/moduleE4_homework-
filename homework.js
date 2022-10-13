class ElectricalAppliance {
        constructor(name, power) {
                this.name = name;
                this.power = power
                this.network = false
        }

        getInfo() {
                console.log(`${this.name} electrical appliance \nPower consumption - ${this.power}`);
        }

        includeInTheNetwork() {
                if (this.network == false) {
                        this.network = true;
                        console.log(`${this.name} include in the network!`);
                } else {
                        console.log(`${this.name} already connected to the network`);
                }
        }

        disconnecrFromTheNetwork() {
                if (this.network == true) {
                        this.network = false;
                        console.log(`${this.name} disconnected from the network...`);
                } else {
                        console.log(`${this.name} not connected to the network`); 
                }
        }
}

class HomeElectricalAppliance extends ElectricalAppliance{
        constructor(name, power, place){
                super(name, power);
                this.place = place
        }

        getInfo() {
                super.getInfo();
                console.log(`${this.name} is located in ${this.place}`)
        }
}

const lamp = new HomeElectricalAppliance('Lamp', 40, 'Bedroom');
lamp.getInfo()
lamp.includeInTheNetwork()
console.log(lamp.network)
lamp.disconnecrFromTheNetwork()
console.log(lamp.network)
