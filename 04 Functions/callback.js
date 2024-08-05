// When we provide function as an (argument) to other function/argument that function is known as callback function.

function something(call){
    const value=10;
    call(value);
}

something(function call(value){
    console.log(value);
})

//another example

function greet(name,cb){ //here is callback function called as cb, canbe used used by any name
    console.log(`My name is ${name}`);
    cb(); //called the callback function
}

function cb(){
    console.log("this is callback function");
}

greet("Abhishek",cb);