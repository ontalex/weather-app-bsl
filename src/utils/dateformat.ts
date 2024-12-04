/**
 * Метод преобразования даты в часы по 12 часовому поясу.
 * @param {string} date строчное значение даты-времени (например, "2000-01-01Z00:00:00").
 * @returns {string} строковый формат часов в формате 12-часового пояса (например, '11 AM').
*/
export function getHours12HourFormat(date: string): string {
    return new Intl.DateTimeFormat('en-EN', {
        hour: "numeric",
        hour12: true
    }).format(new Date(date)).toLocaleUpperCase()
}