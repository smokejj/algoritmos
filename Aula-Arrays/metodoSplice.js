const letras = ["A" , "B" , "C" , 'D' ,"E" , "F" , "G", "H"]
//indices (1)    0     1      2    3    4     5      6    7
letras.splice(2 ,1)
//letras  = ["A" , "B" , "D" ,"E" , "F" , "G", "H"]
//indices (1)   0    1     2    3    4     5    6
letras.splice(3, 2)//letras= ["A" , "B" , "D" , "G", "H"]
console.log(letras)