let globalvar="I am Global";
function showGlobal(){
    let name="Nithish"//local variable
    console.log(globalvar);//printing global variable inside function
    console.log("Hello"+name);//printing local variable inside function
}
showGlobal();
console.log(globalvar);
console.log("Hello"+name);//unable to access the name(local variable)

{
    const inside=42;//block level variable
    console.log(inside);
}
console.log(typeof inside);//undefined bcoz of block level var
{
    var insidevar=42;
}
console.log(typeof insidevar);