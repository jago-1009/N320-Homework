
async function quote() {
    const response = await fetch("https://api.quotable.io/quotes?limit=20")
    const result = await response.json()
    console.log(result.results)
    let results=result.results
    quoteDisplay(results)
    return results;
    
}


async function quoteDisplay(data) {
    //console.log("Inside Quote Display",data);
   let GridContainer = document.createElement("div") 
    GridContainer.setAttribute("id","GridContainer")
    document.body.appendChild(GridContainer)

    for (let quote of data) {
        let QuoteContainer = document.createElement("div") 
        QuoteContainer.setAttribute("class","QuoteContainer")
        GridContainer.appendChild(QuoteContainer)
        
        let QuoteContent = document.createElement("div") 
        QuoteContent.setAttribute("class","QuoteContent")
        QuoteContent.innerHTML= "\"" + quote.content + "\"";
        
        QuoteContainer.appendChild(QuoteContent)
        let QuoteAuthor = document.createElement("div") 
        QuoteAuthor.setAttribute("class","QuoteAuthor")
        QuoteAuthor.innerHTML= "-" +quote.author
        QuoteContainer.appendChild(QuoteAuthor)
    
    }
   };


quote().then((results) => {
    

}).catch((error) => {
console.log("Failed to fetch data.")
let errorMessage = document.createElement("div") 
       errorMessage.innerHTML= "ERROR: API was not able to be retrieved."
         document.body.appendChild(errorMessage)
});

