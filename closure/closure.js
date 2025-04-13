function init(name) {
    // const pname = "Hitesh";

    function sayMyName() {
        // the innerFunction sayMyName() is a closure 
        console.log(name);
    }
    
    return sayMyName;
}

let fn = init("hitesh");
fn();

let jj = init("jj")
jj();
