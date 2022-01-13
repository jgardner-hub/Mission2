
$(document).ready(function () {
    $("#perc").val() = "---";
    $("#letter").val() = "---";
});


$("#btnsend").click(function () {

    var assignment = parseFloat($("#assignments").val());
    var groupProj = parseFloat($("#gprojects").val());
    var quiz = parseFloat($("#quizzes").val());
    var exam = parseFloat($("#exams").val());
    var intex = parseFloat($("#intex").val());
    var combPerc;
    var letGrade;
    var finalPerc;

    combPerc = assignment + groupProj + quiz + exam + intex;
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



    //$("#perc").html() = finalPerc;
    //$("#letter").html() = letGrade;
    document.getElementById("perc").innerHTML = finalPerc;
    document.getElementById("letter").innerHTML = letGrade;

})