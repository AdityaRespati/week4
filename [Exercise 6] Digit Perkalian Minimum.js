

function digitPerkalianMinimum(angka) {
    var factor = []

    for (var i = 1; i <= angka; i++) {
        for (var j = 1; j <= angka; j++) {
            if (i * j == angka) {
                factor.push( String(i) + String(j) )
            }
        }
    }

    var min = factor[0].length
    for(var k=1; k< factor.length; k++){
        if(min>factor[k].length){
            min=factor[k].length
        }

    }
    return min
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2