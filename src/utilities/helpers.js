

const now = Date.now()

const relativeDates = {
    mi: "minute",
    hr:"hour",
    dy:"day",
    yr:"year",
}

export function relativeDate(date){
    // new Date instance from input 'date' object
    let postDate = new Date(date)
    // determine difference in 'date' vs 'now', in milliseconds
    let difference = Math.abs(now - postDate)

    // conditional statement for displaying time
    // if milliseconds is < 1 hr, display minutes
    if (difference < 3600000){
        let minutes = Math.round(difference/ (1000 * 60))
        return `${minutes} ${minutes < 1 ? relativeDates["mi"] : relativeDates["mi"] + "s"}`  
    // if milliseconds is < 24 hr, display hrs
    } else if (difference < 86400000){
        let hours = Math.round(difference/ (1000 * 60 * 60))
        return `${hours} ${hours < 1 ? relativeDates["hr"] : relativeDates["hr"] + "s"}`
    // if milliseconds is < 365 days, display days
    } else if (difference < 3.1556952 * 10 ** 10){
        let days = Math.round(difference/ (1000 * 60 * 60 * 24))
        return `${days} ${days < 1 ? relativeDates["dy"] : relativeDates["dy"] + "s"}`
    // if milliseconds is > 365 days, display years
    } else if (difference >= 3.1556952 * 10 ** 10){
        let years = Math.round(difference/ (1000 * 60 * 60 * 24 * 365))
        return `${years} ${years < 1 ? relativeDates["yr"] : relativeDates["yr"] + "s"}`
    }
    // let differenceInHrs = difference/ (1000 * 60 * 60)
    // console.log(difference)
    // console.log(differenceInHrs)
    // if (differenceInHrs < 48){
    //     return differenceInHrs < 1
    // }
    // return differenceInDays / (100 * 60 * 60 * 24)

}
