export default function numberFormat(num) {
  if (Math.abs(num) > 999999) {
    return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(2) + 'ล้าน'
  }
  if (Math.abs(num) > 99999) {
    return Math.sign(num) * (Math.abs(num) / 100000).toFixed(2) + 'แสน'
  }
  if (Math.abs(num) > 9999) {
    return Math.sign(num) * (Math.abs(num) / 10000).toFixed(2) + 'หมื่น'
  }
  if (Math.abs(num) > 999) {
    return Math.sign(num) * (Math.abs(num) / 1000).toFixed(2) + 'พัน'
  } else {
    return Math.sign(num) * Math.abs(num)
  }
}
