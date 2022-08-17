export const clearComma = (value: any) => {
  return `${value}`.replace(/VND\s?|(,*)|(\.*)/g, '')
}

export const docChuThanhSo = (money: any) => {
  let _money: any = clearComma(String(money))
  _money = Number(_money)
  var mangso = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín']

  function dochangchuc(so: any, daydu: any) {
    var chuoi = ''
    var chuc = Math.floor(so / 10)
    var donvi = so % 10
    if (chuc > 1) {
      chuoi = ' ' + mangso[chuc] + ' mươi'
      if (donvi === 1) {
        chuoi += ' mốt'
      }
    } else if (chuc === 1) {
      chuoi = ' mười'
      if (donvi === 1) {
        chuoi += ' một'
      }
    } else if (daydu && donvi > 0) {
      chuoi = ' lẻ'
    }

    if (donvi === 5 && chuc >= 1) {
      chuoi += ' lăm'
    } else if (donvi > 1 || (donvi === 1 && chuc === 0)) {
      chuoi += ' ' + mangso[donvi]
    }
    return chuoi
  }

  function docblock(so: any, daydu: any) {
    var chuoi = ''
    var tram = Math.floor(so / 100)
    so = so % 100
    if (daydu || tram > 0) {
      chuoi = ' ' + mangso[tram] + ' trăm'
      chuoi += dochangchuc(so, true)
    } else {
      chuoi = dochangchuc(so, false)
    }
    return chuoi
  }

  function dochangtrieu(so: any, daydu: any) {
    var chuoi = ''
    var trieu = Math.floor(so / 1000000)
    so = so % 1000000
    if (trieu > 0) {
      chuoi = docblock(trieu, daydu) + ' triệu'
      daydu = true
    }
    var nghin = Math.floor(so / 1000)
    so = so % 1000
    if (nghin > 0) {
      chuoi += docblock(nghin, daydu) + ' nghìn'
      daydu = true
    }
    if (so > 0) {
      chuoi += docblock(so, daydu)
    }
    return chuoi
  }

  function docso(so: any) {
    if (so === 0) return mangso[0]
    var chuoi = '',
      hauto = ''
    do {
      var ty = so % 1000000000
      so = Math.floor(so / 1000000000)
      if (so > 0) {
        chuoi = dochangtrieu(ty, true) + hauto + chuoi
      } else {
        chuoi = dochangtrieu(ty, false) + hauto + chuoi
      }
      hauto = ' tỷ'
    } while (so > 0)
    return chuoi
  }

  let result: any = docso(_money).trim()
  result = String(result).split('')
  result[0] = String(result[0]).toUpperCase()
  result = result.join('')
  return result
}
