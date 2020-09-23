class Mobile {
    constructor(name) {
        this.name = name;
        this.message = '';
        this.inBox = [];
        this.outBox = [];
        this.battery = 100;
        this.status = true;
    }

    writeMessage(message) {
        this.message = message;
    }

    sendMessage(phone) {
        if (this.checkOnOff()) {
            if (this.battery > 98) {
                this.outBox.push(this.message);
                phone.inBox.push(this.message);
                this.battery--;
            } else {
                alert('khong gui duoc message do pin yeu!')
            }
        } else {
            alert('dien thoai dang tat')
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    checkOnOff() {
        return this.status;
    }

    changeBattery() {
        if (this.battery < 100) {
            this.battery++;
        }
    }

    getInbox() {
        return this.inBox;
    }

    getOutbox() {
        return this.outBox;
    }

    clearOutbox() {
        this.outBox = [];
    }

    getBattery(){
        return this.battery;
    }
}

let samsung = new Mobile('samsung');
let iphone = new Mobile('iphone');
// samsung.writeMessage('xin chao iphone');
// samsung.sendMessage(iphone);
// console.log(iphone.getInbox());
