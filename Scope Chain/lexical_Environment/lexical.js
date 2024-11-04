function a(){
    var b = 27;
    c();
    function c(){
        console.log(b);
    }
}
a();

/**
 * whenver a global execution context is created the lexical environment is also created.
 * lexical environment is the local memory along with the lexical environment of it's parent.
 * 
 * lexical environement means it is an order or heirarchy
 * 
 * lexical environment = local memory + refrence environment of lexical parent  
 */