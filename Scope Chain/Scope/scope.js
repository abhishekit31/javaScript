/**
 *  Scope is where we can access the special variable anf funtion in the code.
 *  Scope is directly dependent on the lexiacal environment
 */

function a(){
    var b = 27;
    function c(){
        console.log(b);
    }
    c();
}
a();

/**
 * in the scope here we can access the variable even inside the function and the funtion inside the funtion and inside the local scope
 */
