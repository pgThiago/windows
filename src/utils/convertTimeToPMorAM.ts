export function convertTimeToPMorAM(hours: number, minutes: number, seconds: number) {
    const amOrPm = hours >= 12 ? 'PM' : 'AM'
    hours = (hours % 12) || 12
    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}