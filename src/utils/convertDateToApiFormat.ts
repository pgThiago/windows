export function convertDateToApiFormat(day: number, month: number, year: number) {
    const dateCorretFormat = `${year}-${month}-${day}`
    return dateCorretFormat
}