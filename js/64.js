const areaOrPerimeter = function(l , w) {
    return l === w ? l*w : l*2+w*2
};
areaOrPerimeter(3,  3)


//    assert.strictEqual(areaOrPerimeter(3,  3),  9);
//     assert.strictEqual(areaOrPerimeter(6, 10), 32);
