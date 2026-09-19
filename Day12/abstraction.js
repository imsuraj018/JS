// js directly not supports abstraction 
// it can be supported using private methods that are not allowed to call

//js doesn't support - multiple inheritance, compile time polymorphism, protected keyword, multiple constructors


class EmailService{
    sendEmail(to, msg){
        this.#connect();
        this.#authenticate(); // # is for private methods
        this.#send(msg);
        console.log(`Email sent to ${to}`)
    }

    #connect(){
        console.log("Connecting..");
    }
    #authenticate(){
        console.log("Authenticating..");
    }
    #send(msg){
        console.log("Sending:",msg);
    }
}

const em = new EmailService();
em.sendEmail("xyz@gmail.com", "Bring me liboyz!");