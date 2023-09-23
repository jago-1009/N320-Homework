
async function quote() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/20")
    const result = await response.json()
    console.log(result.message)
    let results=result.message
    quoteDisplay(results)
    return results;
    
}


async function quoteDisplay(data) {
    //console.log("Inside Quote Display",data);
   let GridContainer = document.createElement("div") 
    GridContainer.setAttribute("id","GridContainer")
    document.body.appendChild(GridContainer)

    for (let img of data) {
        let QuoteContainer = document.createElement("img") 
       
        QuoteContainer.setAttribute("src",img)
     QuoteContainer.setAttribute("style","height:300px")
        GridContainer.appendChild(QuoteContainer)
    
    }
   };


quote().then((results) => {
    

}).catch((error) => {
console.log("Failed to fetch data.")
let errorMessage = document.createElement("div") 
       errorMessage.innerHTML= "ERROR: API was not able to be retrieved."
         document.body.appendChild(errorMessage)
});

