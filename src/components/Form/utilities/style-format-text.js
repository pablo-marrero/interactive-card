export const styleFormatFormLength = (e, num)=>{
    let name = e.target.name
    let value = e.target.value
    if(name === "cardNumber" &&  value.length > num) return false

    if(name === "cardMounth" &&  value.length > num) return false

    if(name === "cardYear" &&  value.length > num) return false

    if(name === "cardCvc" &&  value.length > num) return false

    return true
}

export const replaceCharacter = (e)=>{
    let name = e.target.name
    let value = e.target.value.replace(/\D/, "")

}