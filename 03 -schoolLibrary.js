function schoollibrary(arr){
    let shelf = arr.shift().split("&");
    for(let i = 0; i < arr.length; i++){
        let command = arr[i];
        if (command === "Done"){
            break;
        }
        
        
        
        let token = command.split(" | ");
        let info = token[0];
        
        
        
        


        if(info === "Add Book"){
            let bookToAdd = token[1];
            let bookExists = shelf.includes(bookToAdd);
            

            if(!bookExists){
                shelf.unshift(bookToAdd);
                
            }

            

            

        } else if(info === "Take Book"){
            let bookToRemove= token[1];
            let bookExists = shelf.includes(bookToRemove);

            if(bookExists){
                let indexOfBook = shelf.indexOf(bookToRemove);
                shelf.splice(indexOfBook, 1);
                
                
            }

        } else if(info === "Swap Books"){
            let firstBook = token[1];
            let secondBook = token[2];
            let firstExists = shelf.includes(firstBook);
            let secondExists = shelf.includes(secondBook);

            if (firstExists && secondExists){
                let indexOf1Book = shelf.indexOf(firstBook);
                let indexOf2Book = shelf.indexOf(secondBook);

                shelf[indexOf1Book] = secondBook;
                shelf[indexOf2Book] = firstBook;
                
                
                
            
            }


        } else if( info === "Insert Book"){
            let bookToInsert = token[1];
            let bookExists = shelf.includes(bookToInsert);

            if(!bookExists){
                shelf.push(bookToInsert);
                

            }



        }  else if(info === "Check Book"){
            let bookIndex = token[1];

            if( bookIndex>= 0 && bookIndex < shelf.length){
                let bookName = shelf[bookIndex];
                console.log(bookName);
               
            }
        }
        
        
        
    }
    console.log(shelf.join(", "))
    



}
schoollibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"]);
    