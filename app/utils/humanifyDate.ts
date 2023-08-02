export default function humanifyDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()

  // Calculate the difference between now and the given date
  const diffInHours = Math.floor(
    (now.getTime() - date.getTime()) / 1000 / 60 / 60
  )

  // If the difference is less than 24 hours, return "X HOURS AGO"
  if (diffInHours < 24) {
    return `${diffInHours} HOURS AGO`
  } else {
    // Otherwise, return the date in the format "MM.DD.YY"
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear()).substr(-2)

    return `${month}.${day}.${year}`
  }
}
