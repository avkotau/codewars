function descendingOrder(n){
    let result;
    result  = n.toString().split('').sort((a,b) => a - b).reverse().join('');
    return +result
}
descendingOrder(102134)

