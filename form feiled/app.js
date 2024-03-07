

var chemmarks = document.querySelector("#chem-marks")
var phymarks = document.querySelector("#phy-marks")
var mathmarks = document.querySelector("#math-marks")
var commarks = document.querySelector("#com-marks")
var studenttotal = document.querySelector("#total-marks")
var percentage = document.querySelector("#grade")
var grade = document.querySelector("#percentage")


function calculatepercentage(){
    console.log(chemmarks.value);
    console.log(phymarks.value);
    console.log(mathmarks.value);
    console.log(commarks.value);

    var totalmarks =500;
    var obtainedmarks = +chemmarks.value + +phymarks.value + +mathmarks.value +  +commarks.value;
    console.log("obtainedmarks ===>.",
    obtainedmarks);
    studenttotal.innerHTML = obtainedmarks;

    var studentpercentage = obtainedmarks /totalmarks * 100;
    percentage.innerHTML = studentpercentage;

    if(studentpercentage > 90){
        grade.innerHTML = 'A+'
    }else if(studentpercentage > 70){
        grade.innerHTML = 'A'
    }else if(studentpercentage  > 60){
        grade.innerHTML = 'B' 
    }else{
        grade.innerHTML = 'Fail'
    }   
    
}

   