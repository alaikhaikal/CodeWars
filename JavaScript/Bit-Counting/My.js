var countBits = function(n) {
    var result = 0
    var bit = (n).toString(2)

    console.log('Bit number from ' + n + ' : ')
    for (let index = 0; index < bit.length; index++) {
        process.stdout.write(bit[index])   
    }
        
    for (let index = 0; index < bit.length; index++) {
      if (bit[index] == 1) {
        result++
      }
    }

    console.log('\nNumber 1 at binary number ' + n + ' is ' + result)
};

countBits(12345)