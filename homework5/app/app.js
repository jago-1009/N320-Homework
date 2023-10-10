let h1 = document.querySelectorAll('h1')
let h2 = document.getElementsByClassName('desc')

h1[0].innerHTML = "Library Catalog"
let divs = document.querySelectorAll('div')
divs[0].innerHTML += "Catalog Items"
h2[1].innerHTML += "Updated Catalog Items <br>"
console.log(divs)

class Media {
     constructor(id,title,pubYear,value) {
        this.id = id;
        this.title=title;
        this.pubYear = pubYear;
        this.value=value
     }
}
class Books extends Media {
    constructor(id,title,pubYear,value,author,genre) {
        super(id,title,pubYear,value) 
        this.author = author;
        this.genre = genre;
    }
}
class DVD extends Media {
    constructor(id,title,pubYear,value,director,runtime) {
        super(id,title,pubYear,value) 
        this.director = director;
        this.runtime = runtime;
    }
}
class CD extends Media {
    constructor(id,title,pubYear,value,artist,songNum) {
        super(id,title,pubYear,value) 
        this.artist = artist;
        this.songNum = songNum;
    }
}

class display {
    
    constructor() {
        this.itemArr = [];
    }
        removeItem(value){
            return this.itemArr.filter((item) => item.id !== value )
        
        }
        addItem(values){
               return this.itemArr.push(...values)
        }
        getTotal(){
            return this.itemArr.reduce((acc, value) => acc + value.value, 0);

        }
        displayCatalog(divvalue,array) {
            this.itemArr.forEach(value => {
        divvalue.innerHTML += ('Title:'+ value.title + "<br>");
        divvalue.innerHTML +=('Publication Date:'+ value.pubYear + "<br>");
        divvalue.innerHTML +=('Price:'+ value.value + "<br>");
    if (value.author) {
        divvalue.innerHTML += ('Author:'+ value.author + "<br>");
        divvalue.innerHTML +=('Genre:'+ value.genre + "<br>");   
        divvalue.innerHTML += "<br>"
    }
    else if (value.director) {
        divvalue.innerHTML += ('director:'+ value.director + "<br>");
        divvalue.innerHTML +=('runtime:'+ value.runtime + "<br>");   
        divvalue.innerHTML += "<br>"
    }
    else  {
        divvalue.innerHTML += ('artist:'+ value.artist + "<br>");
        divvalue.innerHTML +=('number of Songs:'+ value.songNum + "<br>");   
        divvalue.innerHTML += "<br>"
    }
     
    });
          
        }
    }





let dPlay = new display();
let b1 = new Books(1, 'The Fellowship of the Ring', 1951, 19.99, 'J.R.R Tolkien', 'Fiction');
let c1 = new DVD(2, 'Shrek', '2001',12.99,'Chris Miller', 90)
let d1 = new CD(3, 'Paranoid', '1970',15.99,'Black Sabbath', 8)
console.log(b1)

dPlay.addItem([b1,c1,d1]);


dPlay.displayCatalog(divs[0])
h2[0].innerHTML += "$"+dPlay.getTotal();
let newMedia = dPlay.removeItem(2);
console.log(newMedia)
let dPlay2 = new display();
dPlay2.addItem(newMedia);
dPlay2.displayCatalog(divs[1])

