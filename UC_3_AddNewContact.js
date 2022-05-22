class AddressBook{
    constructor(...para){
        this.firstName = para[0];
        this.lastName = para[1];
        this.address = para[2];
        this.city = para[3];
        this.state = para[4];
        this.zip = para[5];
        this.PhoneNo = para[6];
        this.email = para[7];
    }

    get firstName(){return this._firstName}
    set firstName(firstName){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName))
            this._firstName = firstName;
        else throw "FirstName Is Incorrect Try Diff Name..!!"
    }

    get lastName(){return this._lastName}
    set lastName(lastName){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName))
            this._lastName = lastName;
        else throw "LastName Is Incorrect Try Diff Name..!!"
    }

    get address(){return this._address}
    set address(address){
        let nameRegex = RegExp('[A-Z,a-z,0-9]{3,}$');
        if(nameRegex.test(address))
            this._address = address;
        else throw "Address In Incorrect Try Diff..!!"
    }

    get city(){return this._city}
    set city(city){
        let nameRegex = RegExp('[A-Z,a-z,0-9]{3,}$');
        if(nameRegex.test(city))
            this._city = city;
        else throw "Incorrect City Name Try Diff..!!"
    }
    
    get state(){return this._state}
    set state(state){
        let nameRegex = RegExp('[A-Z,a-z,0-9]{3,}$');
        if(nameRegex.test(state))
            this._state = state;
        else throw "Incorrect State Name Try Diff..!!"
    }
    get zip(){return this._zip}
    set zip(zip){
        let nameRegex = RegExp('^[1-9]{1}[0-9]{5}')
        if(nameRegex.test(zip))
            this._zip = zip;
        else throw "Incorrect zip Pattern Try Diff..!"
    }
 
    get PhoneNo(){return this._PhoneNo}
    set PhoneNo(PhoneNo){
        let nameRegex = RegExp('^[9]{1}[0-9]{9}$')
        if(nameRegex.test(PhoneNo))
            this._PhoneNo = PhoneNo;
        else throw "Incorrect Phone Num..!!"
    }

    get email(){return this._email}
    set email(email){
        let nameRegex = RegExp('^[0-9a-zA-Z]+[./+_-]{0,1}[0-9a-zA-Z]+[@][a-zA-Z0-9-]+[.][a-zA-Z]{2,}([.][a-zA-Z]{2,}){0,1}$')
        if(nameRegex.test(email))
            this._email = email;
        else throw "Incorrect Email Address..!"
    }

    toString(){
        return "FirstName="+this.firstName+", lastName="+this.lastName+", Address="+this.address+", City="+this.city+", State="+this.state+", Zip="+this.zip+", PhoneNo="+this.PhoneNo+", Email="+this.email;
    }
}


try {
    let addressBookList = new Array();
    const prompt = require('prompt-sync')();
    const sizeOfBookStr = prompt('Enter Size Of Book: ');
    const sizeOfBook = Number(sizeOfBookStr)
    let i = 0;
    while(i<sizeOfBook){
        firstName = prompt("Enter First Name: ");
        lastName = prompt("Enter Last Name: ");
        address = prompt("Enter Address: ");
        city = prompt("Enter City: ");
        state = prompt("Enter State: ");
        zip = prompt("Enter Zip: ");
        phoneNum = prompt("Enter Phone Number: ");
        email = prompt("Enter Email Address: ");
        let addressBook = new AddressBook(firstName,lastName,address,city,state,zip,phoneNum,email);
        addressBookList.push(addressBook.toString());
        i++;
    }
    console.log(addressBookList);
} catch (e) {
    console.error(e)
}