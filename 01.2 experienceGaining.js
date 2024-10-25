function experience (arr){
    let experienceNeeded = +arr[0];
    let battles = +arr[1];
    let battleCount = 0;

    let temporaryExperience = 0;

    for( i = 2; i < arr.length; i++){
        let currentBattleExpirience = arr[i];
        battleCount++;

        if(battleCount % 15 === 0){
            currentBattleExpirience = currentBattleExpirience * 1.05;

        } else if(battleCount % 5 ===0){

            currentBattleExpirience = currentBattleExpirience * 0.9;
           
        } else if (battleCount % 3 === 0) {
            currentBattleExpirience = currentBattleExpirience * 1.15

        } else{
            currentBattleExpirience = currentBattleExpirience;
        }

        temporaryExperience +=currentBattleExpirience;
       
        if(temporaryExperience >= experienceNeeded){
            console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
            break;
        }

    }
    let neededExperience = experienceNeeded - temporaryExperience;
    if(temporaryExperience < experienceNeeded)
    console.log(`Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`)
}
experience
([500,
5,
50,
100,
200,
100,
30])
