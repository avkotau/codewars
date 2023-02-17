function getSize(width, height, depth) {
    console.log([2*(width * height)+ 2*(height * depth) + 2*(width*depth), width * height * depth])
}
getSize(4, 2, 6) //, [88, 48]);
getSize(10, 10, 10) //, [600, 1000]);
getSize(4, 2, 6)//[0] , 88);
getSize(4, 2, 6)//[1] , 48);


//2 (h × W) + 2 (h × L) + 2 (W × L)
