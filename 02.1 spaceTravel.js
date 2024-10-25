function spaceTravel(arr){
    let newArr = arr.shift().split("||");
    let startingFuel = +arr[0];
    let startinAmmunition = +arr[1];

    
    
    for(let i = 0; i <newArr.length;  i++ ){
        let command = newArr[i];
        if(command === "Titan"){
            console.log("You have reached Titan, all passengers are safe.")
            break;
        }

    let token = command.split(" ");
    let info = token[0];
    
    if(info === "Travel"){
        let distance = +token[1];
     startingFuel -= distance;
     if( startingFuel < 0){
        console.log("Mission failed.");
        break;

     } else{
        console.log(`The spaceship travelled ${distance} light-years.`);

     }

    } else if(info === "Enemy"){
        let enemyArmor = +token[1];
        startinAmmunition -= enemyArmor;

        if(startinAmmunition < 0){
            startingFuel -= enemyArmor * 2;
            
            if (startingFuel < 0){
                console.log("Mission failed.");
                break;
            } else {
                    console.log(`An enemy with ${enemyArmor} armour is outmaneuvered.`)
            }
        } else {
            console.log(`An enemy with ${enemyArmor} armour is defeated.`)
        }



    } else if(info === "Repair"){
        let refeel = +token[1];
        startingFuel += refeel;
        startinAmmunition += refeel * 2;
        console.log(`Ammunitions added: ${refeel * 2}.`);
        console.log(`Fuel added: ${refeel}.`);
    }
    

        
    }

}
spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
    '60', 
    '100' ])