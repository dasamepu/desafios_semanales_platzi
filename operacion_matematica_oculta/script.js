function solution(num1, num2) {
  // Tu código aquí 👈
  let res1 = num1 - num2
  let res2 = num1 + num2
  let result = res1 + "" + res2

  return parseInt(result)
}
solution(5, 4)
solution(21, 5)

/* Se puede usar la funciom toString() 
pero esto era mas simple*/