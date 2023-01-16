function solution(numbers) {
    // Tu código aquí 👈
  
    num_base = [3,4,5,6,7,8]
    
    let result_sum = 0

    for (let i = 0; i < num_base.length; i++) {
        
        
        let result = numbers[i] / num_base[i];
        result_sum = result_sum + result
        const multiplicador = result_sum / num_base.length
    
        if (i == num_base.length-1) {
            if ( multiplicador == 9) {
                console.log(result);
                return
                
            } else if ( multiplicador != 9){
                console.log(false)
                return
            }    
        }
            
    }
    
}
  
solution([27, 36, 45, 54, 63, 72])
solution([27, 36, 45, 54, 42, 72])