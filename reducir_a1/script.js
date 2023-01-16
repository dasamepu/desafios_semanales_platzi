//creditos: https://platzi.com/p/Arkaditz/

// Este código es un bucle "for" que itera 100 veces y en cada iteración llama a la función "solution" 
// con el valor actual de la variable "i" como parámetro
for (let i = 0; i < 100; i++) {
   // Llamada a la función "solution" con el parámetro "i"
    solution(i)

    function solution(num) {
    // Inicializando la variable "resp" en 0
    let resp = 0;
    // Bucle "while" para reducir el número "num" a 1
    while (num > 1) {

        // Si "num" es divisible entre 2, se divide entre 2
        if (num % 2 === 0) {
        num = num / 2
        } 
        // Si "num" es igual a 3 módulo 4, se suma 1
        else if (num % 4 == 3) {
        num++
        } 
        // Si no cumple ninguna de las condiciones anteriores, se resta 1
        else {
        num--
        }
        // Se aumenta el valor de "resp" en 1
        resp++
    }
    // Se imprime el número original y el número de pasos necesarios para reducirlo a 1
    console.log("numero a reducir: " + i + " | numero de pasos: " + resp );
    }
    
}


