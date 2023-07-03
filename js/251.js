const first = [1,2,3,4];
const second = [3,4,5,6];

function intersection(a,b) {
    const setB = new Set(b)
    const dublicateEls = a.filter(el => setB.has(el));
    console.log(dublicateEls)
}

intersection(first, second)//[3,4]
