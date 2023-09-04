export function timeComp(timeStamp) {
  const soldTime = new Date(timeStamp);
  const currentTime = new Date();

  if (soldTime.getFullYear() < currentTime.getFullYear())
    return `${currentTime.getFullYear() - soldTime.getFullYear()} years ago`
  else if (soldTime.getMonth() < currentTime.getMonth())
    return `${currentTime.getMonth() - soldTime.getMonth()} months ago`
  else if (soldTime.getDate() < currentTime.getDate())
    return `${currentTime.getDate() - soldTime.getDate()} days ago`
  else if (soldTime.getHours() < currentTime.getHours())
    return `${currentTime.getHours() - soldTime.getHours()} hours ago`
  else if (soldTime.getMinutes() < currentTime.getMinutes())
    return `${currentTime.getMinutes() - soldTime.getMinutes()} minutes ago`
  else if (soldTime.getSeconds() < currentTime.getSeconds())
    return `${currentTime.getSeconds() - soldTime.getSeconds()} seconds ago`
}
