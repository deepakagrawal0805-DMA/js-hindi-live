// Immediately Invoked Function Expressions (IIFE)


(function coffee(){
    //named IFFE
    console.log(`DB CONNECTED`);   
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('deepak')

