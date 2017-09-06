var app = angular.module("SportsCarApp", [])

app.controller('CarController', function(){
    self.carsArray = [];
    class Car{
        constructor(numberOfCylinders, color, name, fuelCapacity){
            this.cylinders = numberOfCylinders;
            this.carColor = color;
            this.carName = name;
            this.fuelCapacity = fuelCapacity;
            this.fillVolume = 0;
        }
        fillTank(fuelIn){
            if(this.fillVolume + fuelIn <= this.fuelCapacity){
                this.fillVolume += fuelIn;
            } else {
                console.log('That would overflow your fuel tank')
            }
        }
        goForADrive(fuelUsed){
            if(this.fillVolume - fuelUsed > this.fillVolume){
                console.log('You still have gas left!');
                this.fillVolume -= fuelUsed;
            }else{
                console.log('You ran out of gas!');
                this.fillVolume = 0;
            }
        }
        
    }
    let corvette = new Car(8,'Lightning Blue', 'Corvette', 19);
    let viper = new Car(10,'Red', 'Viper', 22);
    let lamborghini = new Car(12,'Neon Green', 'Aventador', 24);
    let supra = new Car(6,'Bright Orange', 'Supra', 20);
    supra.fillTank(4)
    console.log(supra.fillVolume);
    supra.goForADrive(5);
    carsArray.push(corvette);
    carsArray.push(viper);
    carsArray.push(lamborghini);
    carsArray.push(supra);
    console.log(corvette);
    console.log(carsArray);

})