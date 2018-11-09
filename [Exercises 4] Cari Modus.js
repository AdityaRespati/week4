
function cariModus(arr) {
    var counter = 0
    var maxCounter = 0
    var modus = 0

    for (var i = 0; i < arr.length; i++) {
        counter = 0

        //jalankan counter setiap ada angka sama 
        for (var j = 0; j < arr.length; j++) {
            if (j !== i && arr[i] == arr[j]) {
                counter++
            }
        }

        //cari nilai counter terbesar
        if (maxCounter < counter) {
            maxCounter = counter
            modus = arr[i]
        }

        //masukkan syarat untuk -1
        else if (maxCounter === 0 || maxCounter == arr.length - 1) {
            modus = - 1
        }

    }
    return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([5, 10, 10, 6, 5, 6])); // 5