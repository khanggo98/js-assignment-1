document.getElementById("Name").onclick = function() {
    document.getElementById("statement").innerHTML = ""
alert("Muhammad Rameez")
}

document.getElementById("Num").onclick = function() {
    document.getElementById("statement").innerHTML = ""
alert("0123456789")
}

document.getElementById("nameVari").onclick = function() {
    document.getElementById("statement").innerHTML = "Variable Name"
    document.getElementById("output").innerHTML = "varName"
}

document.getElementById("camel").onclick = function() {
    document.getElementById("statement").innerHTML = "Example of CamelCase"
    document.getElementById("output").innerHTML = "thisIsExampleOfCamelCase"
}

document.getElementById("sum").onclick = function() {
    let a= 20;
    let b= 5;
    let sum = a + b ;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerHTML = ` a + b = ${sum}`
}

document.getElementById("sub").onclick = function() {
    let a= 20;
    let b= 5;
    let sub = a - b ;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerHTML = `a - b = ${sub}`
}

document.getElementById("mul").onclick = function() {
    let a= 20;
    let b= 5;
    let mul = a * b ;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerHTML = `a * b = ${mul}`
}

document.getElementById("divi").onclick = function() {
    let a= 20;
    let b= 5;
    let divi = a / b ;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> `
    document.getElementById("output").innerHTML = `a / b = ${divi}`
}

document.getElementById("calc").onclick = function() {
    let a= 20;
    let b= 5;
    let c= 10;
    let d= 15;
    let e= 25;
    let calc = a / b + c * d - e ;
    document.getElementById("statement").innerHTML = `a = ${a} <br/> b = ${b} <br/> c = ${c} <br/> d = ${d} <br/> e = ${e}`
    document.getElementById("output").innerHTML = `a / b + c * d - e = ${calc}`
}







document.getElementById('clearStatement').onclick = function(){
    document.getElementById('statement').innerText = ""
}

document.getElementById('clearOutput').onclick = function(){
    document.getElementById('output').innerText = ""
}