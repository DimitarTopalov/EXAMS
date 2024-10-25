function burgerBus(arr){
    let cetiesToVisit = Number(arr[0]);
    let citiesCount = 0;
    let citySum = 0;
    let totalSum = 0;

    for(i = 1; i <arr.length; i+=3 ){
        let currentCity = arr[i];
        let income = Number(arr[i+1]);
        let expences = Number(arr[i+2]);
        citiesCount ++;
        
        if(citiesCount === 5){
            income -= 0.1 * income;
        } else if(citiesCount === 3){
            expences += 0.5 * expences;
        }
        citySum = (income - expences);
        totalSum += citySum;
        console.log(`In ${currentCity} Burger Bus earned ${citySum.toFixed(2)} leva.`);



       

            
        
    }

    console.log(`Burger Bus total profit: ${totalSum.toFixed(2)} leva.`)


}
burgerBus(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])
    
    