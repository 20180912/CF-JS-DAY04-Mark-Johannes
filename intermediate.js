class Hotel {
    hotelName ="";
    numberOfNights;
    address ="";
    image ="";
    constructor(a,c,d) {
        this.hotelName = a;
        this.numberOfNights = Math.floor(Math.random()*10+1);
        this.address = c;
        this.image = d;
    }
    showAvailability (n) {
        if (n<=this.numberOfNights) {
            document.getElementById("button").innerHTML +="<button>I'll book "+this.hotelName+"</button><br>"
            return 'yes'
        } else {
            
            return 'Sorry, no available nights for ' + this.hotelName + ', only ' + this.numberOfNights + ' available.'
        }
    }
}

var HotelCalifornia = new Hotel("Hotel California", "High Street", "img src")
var HotelSacher = new Hotel("Hotel Sacher", "Ringstraße", "img src")
var HotelMama = new Hotel("Hotel Mama", "zuhause", "img src")
console.table(HotelCalifornia)
console.table(HotelSacher)
console.table(HotelMama)
console.log(HotelCalifornia.showAvailability(5))
console.log(HotelSacher.showAvailability(5))
console.log(HotelMama.showAvailability(5))