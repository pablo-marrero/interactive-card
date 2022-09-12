export const styleFormatFormLength = (e, num)=>{
    let name = e.target.name
    let value = e.target.value
    if(name === "cardNumber" &&  value.length > num) return false

    if(name === "cardMounth" &&  value.length > num) return false

    if(name === "cardYear" &&  value.length > num) return false

    if(name === "cardCvc" &&  value.length > num) return false

    return true
}

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
    let date = new Date();

    e.target.value = value.replace(/\D/g, "")

    
    console.log(date.toLocaleDateString())
}