var x = 1;
a();
b();
console.log(x); // 1

function a(){
    var x = 10;
    console.log(x); // 10
}

function b(){
    var x = 100;
    console.log(x); // 100
}

/**
 * once the javascript engine is satart executing this code line by line the global exceution context is created.
 * 
 * once the golbal excution has been created the control go at line number 1st and allocate the memory 
 * x -> undedined
 * 
 * a() -> {}
 * after invoke a() the contorl will goes to the line 6 check the value assign to the x var and log into the console.
 * after that pop-out from the callstack. 
 * 
 * b() -> {} 
 * after invoke b() the contorl will goes to the line 6 check the value assign to the x var and log into the console.
 * after that pop-out from the callstack.
 * 
 * agian control goes to line no. 1st and assign the var x and replace it to thw value 1 and log into the console 
 * after this step the callstack is empty and whole global execution also has been deleted.
 */