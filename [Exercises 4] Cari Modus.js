/*PSEUDO CODE
READ "input" as array
SET "counter" to 0
SET "maxCounter" to 0
SET "modus" to 0

FOR every "input" data

    FOR every other "input" data
        IF "input" data is EQUAL to to the other data
            INCREMENT "counter"
        ENDIF
    ENDFOR

    IF "maxCounter" is less than "counter" THEN
        SET "maxCounter" to "counter"
        SET "modus" to "input" data
    ELSE IF "counter" is zero OR all data at "input" are EQUAL
        SET "modus" to -1
    ENDIF

ENDFOR

DISPLAY "modus"
*/

function cariModus(arr) {
    var deret = 0
    var deret2 = 0
    var modus = 0

    for (var i = 0; i < arr.length; i++) {
        deret = 0

        //jalankan counter setiap ada angka sama 
        for (var j = 0; j < arr.length; j++) {
            if (j !== i && arr[i] == arr[j]) {
                deret++
            }
        }

        //cari nilai counter terbesar
        if (deret2 < deret) {
            deret2 = deret
            modus = arr[i]
        }

        //masukkan syarat untuk -1
        else if (deret2 === 0 || deret2 == arr.length - 1) {
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