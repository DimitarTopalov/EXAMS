function taxCalculator(arr){
    let newArr = arr.shift().split(">>");

    let sumPercar =0;
    let totalSum = 0;
    let kiloInedx = 0;

    for(i = 0; i < newArr.length; i++){
        let command = newArr[i];
        let tokens = command.split(" ");
        let carType = tokens.shift();
        let years = +tokens.shift();
        let kilometers = +tokens.shift();

    
        if(carType === "family"){
            if(kilometers >= 3000){
                 let inedx = Math.floor(kilometers / 3000);
                 kiloInedx = Number(inedx) * 12;
            }
                sumPercar = 50 + kiloInedx - (5 * years);
                totalSum += sumPercar;
                console.log(`A ${carType} car will pay ${sumPercar.toFixed(2)} euros in taxes.`)
            
    
        }else if(carType === "heavyDuty"){
            if(kilometers >= 9000){
                 let inedx = Math.floor(kilometers / 9000);
                 kiloInedx = Number(inedx) * 14;
            }
                sumPercar = 80 + kiloInedx - (8 * years);
                totalSum += sumPercar;
                console.log(`A ${carType} car will pay ${sumPercar.toFixed(2)} euros in taxes.`)
            
    
        } else if(carType === "sports"){
            if(kilometers >= 2000){
                 let inedx = Math.floor(kilometers / 2000);
                 kiloInedx = Number(inedx) * 18;
            }
                sumPercar = 100 + kiloInedx - (9 * years);
                totalSum += sumPercar;
                console.log(`A ${carType} car will pay ${sumPercar.toFixed(2)} euros in taxes.`)
            
    
        } else {
            console.log("Invalid car type." );
        }
}

console.log(`The National Revenue Agency will collect ${totalSum.toFixed(2)} euros in taxes.`)
    

}
taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])