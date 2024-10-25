function phoneShop(arr){
   let phones = arr.shift().split(", ");

   for (i = 0; i < arr.length; i++){
    let command = arr[i];
    if (command === "End"){
        break;
    }

    let token = command.split(" - ");
    let info = token[0];
    let phoneBrand = token[1];

    let phoneExists = phones.includes(phoneBrand);

    if(info === "Add"){
        if(!phoneExists){
            phones.push(phoneBrand);
            
        }
    } else if(info === "Remove"){
        if(phoneExists){
            let indexOfPhone = phones.indexOf(phoneBrand);
                phones.splice(indexOfPhone, 1);
                
        }
    } else if(info === "Bonus phone"){
         let both = phoneBrand.split(":");
         let oldPhone = both[0]; 
         let newPhone = both[1];
         let oldPhoneExists = phones.includes(oldPhone);
         
        if(oldPhoneExists){
            
            

            let indexOfPhone = phones.indexOf(oldPhone);
            phones.splice(indexOfPhone + 1, 0, newPhone );
            
            


        }
    } else if(info === "Last"){
        if(phoneExists){
            let indexOfPhone = phones.indexOf(phoneBrand);
            phones.splice(indexOfPhone,1);
            phones.push(phoneBrand);
            
            
            


        }
    }


    

   }
   console.log(phones.join(", "))
   

}
phoneShop (["SamsungA50, MotorolaG5, IphoneSE","Add - Iphone10",
    "Remove - IphoneSE",
    "End"])
    