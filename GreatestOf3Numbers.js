function greatNumBy(){
    num1= document.getElementById("firstnumber").value;
    num2=document.getElementById("secondnumber").value;
    num3=document.getElementById("thirdnumber").value;
    if(num1>num2&&num1>num3){
        document.getElementById("result").innerHTML=("A is Greater");
    }
    else if(num2>num3){
        document.getElementById("result").innerHTML=("B is Greater");
    }
    else{
        document.getElementById("result").innerHTML=("C is Greater");
    }
}