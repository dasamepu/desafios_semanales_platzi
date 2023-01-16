function solution(num1, num2) {// Esta función toma dos números como argumentos (num1 y num2)
  
  let res1 = num1 - num2; // Primero, se calcula la diferencia entre los dos números y se almacena en la variable res1
  let res2 = num1 + num2; // Luego, se calcula la suma de los dos números y se almacena en la variable res2
  let result = res1 + "" + res2; // Finalmente, se concatenan las dos variables res1 y res2 en una sola variable llamada result
  console.log(parseInt(result)); // Se utiliza el método parseInt para convertir la variable result a un número entero y se imprime el resultado final utilizando console.log
}

solution(5, 4); // se llama a la función dos veces con los valores 5 y 4 y 21 y 5 para probarla.
solution(21, 5);

/* Tambien se puede usar la funciom toString()*/