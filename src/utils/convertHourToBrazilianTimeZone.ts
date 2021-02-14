export function convertHourToBrazilianTimeZone(utcTime: string) {
    const lessThreeHours = Number(utcTime.slice(0, 1)) - 3
    const localTime = utcTime.replace(utcTime.slice(0, 1), lessThreeHours.toString())
    return localTime
}