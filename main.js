

class Vehicule {
    constructor(make,model,mileage,licencePlate, year){
        this.make = make;
        this.model = model;
        this.mileage = mileage;
        this.licencePlate = licencePlate;
        this.year = year;
        this.inTime = null;
    }

    display(){
        return `${this.make} ${this.model} ${this.mileage} ${this.licencePlate} ${this.year}`
    }

}


const alertSuccess = document.getElementById('successBox');
const alertDanger = document.getElementById('alertBox');
const alertWarning = document.getElementById('messageBox');

const plate = document.getElementById('licencePlate');
console.log(plate);

const payButton = document.getElementById('paymentBtn');
// ajouter un event listener "click" pour arreter le time "IN" et
// if plate exist réaliser l'opérartion this.time - time IN et afficher alert warning +innerHTML = message
// else afficher alert danger + innerHTML (Le prix à payer pour le véhicule ${this.plateLicense} est de ${result OUT-IN compare to range} €)


const enterButton = document.getElementById('enterBtn');
// ajouter un event listener "click" pour set le time "IN" 
// ajouter info de plate et time in dans un tableau
// on click enregistrer l'information
// on click add plate to tablean( plate, time in) et alert Success + innerHTML = Veuillez prendre votre ticket pour le véhicule ${this.plateLicence} 

let parkTabs = [];


enterButton.addEventListener("click", () => {
    const inTime = new Date();
    const newTicket = {
        licencePlate: plate.value,
        inTime: inTime
    };

    parkTabs.push(newTicket);

    alertSuccess.classList.remove("hidden"),5000;
    alertSuccess.innerHTML = `<p>Veuillez prendre votre ticket pour le véhicule ${plate.value}</p>`;

    setTimeout(() => {
        alertSuccess.classList.add("hidden");
    }),5000;
});




payButton.addEventListener('click', () => {
    const outTime = new Date();
    const vehicle = parkTabs.find(car => car.licencePlate === plate.value);

    if (vehicle) {

        const duration = (outTime - vehicle.inTime);
        let price=0;

        if (duration <= 15) {
                        price = 0.8;
                    } else if (duration <= 30) {
                        price = 1.3;
                    } else if (duration <= 45) {
                        price = 1.7;
                    } else {
                        price = 6;
                    }

                    alertWarning.classList.remove("hidden");
                    alertWarning.innerHTML = `Le prix à payer pour le véhicule ${plate.value} est de ${price}€`;

                    setTimeout(() => {
                        alertWarning.classList.add("hidden"),5000;
                    });
                } else {
                    alertDanger.classList.remove("hidden");
                    alertDanger.innerHTML = `Le véhicule ${plate.value} n'existe pas!`;

                    setTimeout(() => {
                        alertDanger.classList.add("hidden");
                    });
                }
            });


