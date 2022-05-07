atividade1()

function atividade1() {
        for (let n = 1; n < 1000000; n++) {
            numberStr = String(n).split("");
            if (Number(numberStr[numberStr.length - 1]) != 0) {
                numberReverse = numberStr.reverse()
                reverseNumber = Number(numberReverse.join(""))
                if( n != reverseNumber) {
                    sumReverse = n +  reverseNumber
                    if(sumReverse % 2 != 0) {
                        console.log(`Estes são todos os valores de n+ nreverse que são impares ${n-1} `)
                    }
                }            
            }                    
        }
        
    }
    