var feet = document.getElementById("feet")
var inch = document.getElementById("inch")
var meter = document.getElementById("m")
var centeMeter = document.getElementById("cm")
var celsius = document.getElementById("C")
var fahrenheit = document.getElementById("F")


feet.addEventListener("input",function(){
    let f = this.value;
    let i = f*12;

    inch.value = i;
})

inch.addEventListener("input",function(){
    let i = this.value;
    let f = i/12;

    feet.value = f;

})

meter.addEventListener("input",function(){
     let m = this.value;
     let cm = m*100;

     centeMeter.value = cm;

})

centeMeter.addEventListener("input",function(){
    let cm = this.value;
    let m = cm / 100

    meter.value = m;
})


celsius.addEventListener("input",function(){
    let C = this.value;
    let F = (C * 9/5) + 32

    fahrenheit.value = F;
})

fahrenheit.addEventListener("input",function(){
    let F = this.value;
    let C = (F - 32) * 5/9;

    celsius.value = C;
})