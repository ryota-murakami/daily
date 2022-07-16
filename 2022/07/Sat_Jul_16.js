function JSClock() {
  const time = new Date()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  let temp = '' + (hour > 12 ? hour - 12 : hour)
  if (hour == 0) temp = '12'
  temp += (minute < 10 ? ':0' : ':') + minute
  temp += (second < 10 ? ':0' : ':') + second
  temp += hour >= 12 ? ' P.M.' : ' A.M.'
  return temp
}

setInterval(() => console.log(JSClock()), 1000)
