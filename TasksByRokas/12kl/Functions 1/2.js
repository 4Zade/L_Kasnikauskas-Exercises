function taskTwo(...numbers) {
    
    if(numbers.length === 0) {
        console.error('No numbers provided.')
      }
      
     let maxNum = numbers[0];
     
     for(let i = 1; i < numbers.length; i++) {
       
        if (numbers[i] > maxNum) {
          maxNum = numbers[i]
        }
     }
      return maxNum
    }
    
    const numbers = [5, 17, -4, 6, 23];

    const result = taskTwo()
    
    console.log(result)