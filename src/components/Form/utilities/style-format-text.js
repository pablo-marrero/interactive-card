export const replaceCharacterLetter = (e)=>{
    let value = e.target.value
    e.target.value = value
    .replace(/\D/g, "")
    .replace(/([0-9]{4})/g,"$1 ")
    .trim()
    if(value.length >= 4){
        if(value.substring(0,4) === "0000"){
            return "Invalid number"
        }
    }
}

export const replaceCharacterNumber = (e)=>{
    let value = e.target.value
    e.target.value = value.replace(/[0-9]/g,"")
    .toUpperCase()
    if(/[~`!#$%\^&*+=\-\[\]\\';@,/{}|\\":<>\?]/g.test(e.target.value)){ 
        return "Don't  is allow special characters"
    }
}

export const controlDate = (e)=>{
    let value = e.target.value
    let name  = e.target.name
    let date = new Date().toLocaleDateString().split("/");

    e.target.value = value.replace(/\D/g, "")

     if(name === "cardYear"){
         value = parseInt(value)
         date[1] = parseInt(date[1])
         date[2]= parseInt(date[2].substring(2))

         if(value < date[2]){
             return "The date cannot be less than the current one"
            }
         if(value === date[2]){
             if(parseInt(e.target.previousSibling.value) <= date[1]){
                 console.log("cumplo")
                 return "The date cannot be less than the current one"
             }
         }
     }
     if(name === "cardMounth"){
         value = parseInt(value)
         date[1] = parseInt(date[1])
         if(value <= date[1] && e.target.nextSibling.value <= date[2].substring(2)){
            return "The date cannot be less than the current one"
        }
        else{
            return ""
        }
    }
}

export const sendFormTarget = (data, setIsSend, erro)=>{
     const {cardName,
            cardNumber,
            cardMounth, 
            cardYear,
            cardCvc} = data


    if(cardName.value.trim() === "" ||
       cardNumber.value.trim() === "" ||
       cardMounth.value.trim() === "00" ||
       cardYear.value.trim() === "00" ||
       cardCvc.value.trim() === ""
    ) return setIsSend({
        send:false,
        error:"Please complete the fields"
    })

    if(cardNumber.value.length < 19) return setIsSend({
        send:false,
        error:"CARD NUMBERS : Must have 16 numbers"
    })

    if(cardCvc.value.length < 3) return setIsSend({
        send:false,
        error:"CVC : Must have 3 numbers"
    })
    
    if(erro.cardName !== "" && erro.cardNumber !== "" && erro.cardYear !== "") return setIsSend({
        send:false,
        error:"Please checked the fields"
    })
    
    else return setIsSend({
        send:true,
        error:""
    })
}