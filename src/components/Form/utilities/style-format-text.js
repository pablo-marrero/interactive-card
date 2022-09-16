export const replaceCharacterLetter = (e)=>{
    let value = e.target.value
    e.target.value = value
    .replace(/\D/g, "")
    .replace(/([0-9]{4})/g,"$1 ")
    .trim()
}

export const replaceCharacterNumber = (e)=>{
    let value = e.target.value

    e.target.value = value.replace(/[0-9]/g,"")
    .toUpperCase()
}

export const controlDate = (e)=>{
    let value = e.target.value
    let name  = e.target.name
    let date = new Date().toLocaleDateString().split("/");

// console.log(e.target.nextSibling)
    e.target.value = value.replace(/\D/g, "")

    if(name === "cardYear" &&
     value <= date[2] &&
     e.target.previousSibling.value  < date[1] 
     ) return console.log("papa")

}

export const sendFormTarget = (data, setIsSend)=>{
     const {cardName,
            cardNumber,
            cardMounth, 
            cardYear,
            cardCvc} = data

    if(cardName.trim() === "" ||
       cardNumber.trim() === "" ||
       cardMounth.trim() === "00" ||
       cardYear.trim() === "00" ||
       cardCvc.trim() === ""
    ) return console.log("error faltan completar campos")

    if(cardNumber.length < 19) return console.log("menos de 19")

    if(cardCvc.length < 3) return console.log("menos de 3")
    
    else return setIsSend(true)
}