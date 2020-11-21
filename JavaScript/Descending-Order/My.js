function descendingOrder(n){
  var number = n.toString()
  var r = number.split('')

  for (let i = 0; i < r.length; i++) {
    for (let j = 0; j < r.length-i-1; j++) {
        if (r[j] < r[j+1]) { 
          var temp = r[j] 
          r[j] = r[j+1] 
          r[j+1] = temp
        }
    }
  }

  console.log('result: ')
  console.log(Number(r.join('')))
  console.log('type : '+typeof(Number(r.join(''))))
}

descendingOrder(42145)