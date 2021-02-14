export function checkIfIsDayOrNight(nowTime: number, sunsetTime: number, sunriseTime: number, amOrPm: string) {
    if (amOrPm === 'AM') {
        if (nowTime < sunriseTime) {
            console.log('Boa madrugada')
            return true
        }
        else {
            console.log('Bom dia')
            return false
        }
    }
    else {
        if (nowTime < sunsetTime) {
            console.log('Boa tarde')
            return false
        }
        else {
            console.log('Boa noite')
            return true
        }
    }
}