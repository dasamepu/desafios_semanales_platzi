function solution(numbers) {
    // Declaro una variable "num_base" con un arreglo de números fijos
    num_base = [3,4,5,6,7,8]
    
    // Declaro una variable "result_sum" para almacenar la suma de los resultados
    let result_sum = 0

    // Itero sobre el arreglo "num_base"
    for (let i = 0; i < num_base.length; i++) {
        
        // En cada iteración, divido el elemento en la posición "i" del arreglo "numbers" por el elemento en la posición "i" del arreglo "num_base"
        let result = numbers[i] / num_base[i];
        
        // Sumo el resultado a la variable "result_sum"
        result_sum = result_sum + result
        
        // Divido la variable "result_sum" entre la longitud del arreglo "num_base" para obtener el promedio
        const multiplicador = result_sum / num_base.length
    
        // Si es la última iteración del ciclo
        if (i == num_base.length-1) {
            
            // Si el promedio es igual a 9
            if ( multiplicador == 9) {
                console.log(result);
                return
                
            // Si el promedio no es igual a 9
            } else if ( multiplicador != 9){
                console.log(false)
                return
            }    
        }
            
    }
    
}
  
solution([27, 36, 45, 54, 63, 72])
solution([27, 36, 45, 54, 42, 72])