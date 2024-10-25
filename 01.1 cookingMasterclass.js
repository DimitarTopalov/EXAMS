function cookingMasterClass(arr){
    let budget = +arr[0];
    let studentsCount = +arr[1];
    let flourPrice = +arr[2];
    let eggsPrice = +arr[3];
    let apronPrice = +arr[4];

    let freeFlour = Math.floor(studentsCount / 5); 
    let freeFlourNum = Number(freeFlour);
    let apronCount = Math.ceil(studentsCount * 1.2);
    let apronCountNum = Number(apronCount)

    let totalSum =  apronPrice * (apronCountNum) + (eggsPrice * 10 * studentsCount) + flourPrice * (studentsCount - freeFlourNum)

   if(totalSum <= budget){
    console.log(`Items purchased for ${totalSum.toFixed(2)}$.`)
   } else {
    let moneyNeeded = totalSum - budget;
    console.log(`${moneyNeeded.toFixed(2)}$ more needed.`)

   }

}
cookingMasterClass (['946',
    '20',
    '12.05',
    '0.42',
    '27.89'])
    