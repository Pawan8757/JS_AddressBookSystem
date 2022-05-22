class AddressBook{
    constructor(...para){
        this.firstName = para[0];
        this.lastName = para[1];
        this.address = para[2];
        this.city = para[3];
        this.state = para[4];
        this.zip = para[5];
        this.phoneNo = para[6];
        this.email = para[7];
    }

    get firstName(){return this._firstName}
    set firstName(firstName){
        this._firstName = firstName;
    }

    
    get lastName(){return this._lastName}
    set lastName(lastName){
        this._lastName = lastName;
    }

    
    get address(){return this._address}
    set address(address){
        this._address = address;
    }

    
    get city(){return this._city}
    set city(city){
        this._city = city;
    }

    
    get zip(){return this._zip}
    set zip(zip){
        this._zip = zip;
    }

    
    get phoneNo(){return this._phoneNo}
    set phoneNo(phoneNo){
        this._phoneNo = phoneNo;
    }

    
    get email(){return this._email}
    set email(email){
        this._email = email;
    }

    toString(){
        return "FirstName="+this.firstName+", lastName="+this.lastName+", Address="+this.address+", City="+this.city+", State="+this.state+", Zip="+this.zip+", PhoneNo="+this.phoneNo+", Email="+this.email;
    }
}

let addressBook = new AddressBook("Pawan","Kumar","Rafiganj","Aurangabad","Bihar","824125","9304314938","Pwnkryadv@gmail.com")
console.log(addressBook.toString());