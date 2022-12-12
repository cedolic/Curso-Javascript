for(var i=0; i < 5; i++) {
    // Create a new variable and pass itss value to setTimeout
    setTimeout(() => console.log(i), 1000)
 }

 for(var i=0; i < 5; i++) {
    // Create a new variable and pass itss value to setTimeout
    const value = i;
    setTimeout(() => console.log(value), 1000)
 }

 