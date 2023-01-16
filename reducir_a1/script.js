//creditos: https://platzi.com/p/Arkaditz/

for (let i = 0; i < 100; i++) {
    
    solution(i)

    function solution(num) {
    let resp = 0;
    while (num > 1) {

        if (num % 2 === 0) {
        num = num / 2
        } else if (num % 4 == 3) {
        num++
        } else {
        num--
        }
        resp++
    }
    console.log("numero a reducir: " + i + " | numero de pasos: " + resp );
    }
 
}


