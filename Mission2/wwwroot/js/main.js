
$("#btnsend").click(function () {

    var assignment = (parseFloat($("#assignments").val()) * .55).toFixed(2);
    var groupProj = (parseFloat($("#gprojects").val()) * .05).toFixed(2);
    var quiz = (parseFloat($("#quizzes").val()) * .1).toFixed(2);
    var exam = (parseFloat($("#exams").val()) * .2).toFixed(2);
    var intex = (parseFloat($("#intex").val()) * .1).toFixed(2);
    var combPerc;
    var letGrade;
    var finalPerc;
    combPerc = (parseFloat(assignment) + parseFloat(groupProj) + parseFloat(quiz) + parseFloat(exam) + parseFloat(intex)).toFixed(2);
    finalPerc = String(combPerc) + "%";


    if (combPerc >= 94.0) {
        letGrade = "A";
    } else if (combPerc >= 90.0) {
        letGrade = "A-";
    } else if (combPerc >= 87.0) {
        letGrade = "B+";
    } else if (combPerc >= 84.0) {
        letGrade = "B";
    } else if (combPerc >= 80.0) {
        letGrade = "B-";
    } else if (combPerc >= 77.0) {
        letGrade = "C+";
    } else if (combPerc >= 74.0) {
        letGrade = "C";
    } else if (combPerc >= 70.0) {
        letGrade = "C-";
    } else if (combPerc >= 67.0) {
        letGrade = "D+";
    } else if (combPerc >= 64.0) {
        letGrade = "D";
    } else if (combPerc >= 60.0) {
        letGrade = "D-";
    } else {
        letGrade = "E";
    }



    $("#perc").html(finalPerc);
    $("#letter").html(letGrade);
    //document.getElementById("perc").innerHTML = finalPerc;
    //document.getElementById("letter").innerHTML = letGrade;

})