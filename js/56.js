function finalGrade (exam, projects) {
    console.log( exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0)
}

    finalGrade(0, 11) //0
    finalGrade(32, 12)// 0;
    finalGrade(52, 11)// 75;
//    finalGrade(100, 12)// 100;
//     finalGrade(85, 5)// 90;

//exam = 0, projects = 11: expected +0 to equal 100
// Testing for 100 random tests
// Testing for exam = 32, projects = 12: expected +0 to equal 100
