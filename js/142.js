function likes(names) {
    console.log(names.length === 0 ? 'no one likes this'
        : names.length === 1 ? `${names[0]} likes this`
        : names.length === 2 ? `${names[0]} and ${names[1]} like this`
        : names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this`
        : names.length === 4 ? `${names[0]}, ${names[1]} and 2 others like this`
        : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`)
}
//or
//function likes(names) {
//   names = names || [];
//   switch(names.length){
//     case 0: return 'no one likes this'; break;
//     case 1: return names[0] + ' likes this'; break;
//     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//   }
// }

likes([]) //, 'no one likes this');
likes(['Peter']) //, 'Peter likes this');
likes(['Jacob', 'Alex']) //, 'Jacob and Alex like this');
likes(['Max', 'John', 'Mark']) //, 'Max, John and Mark like this');
likes(['Alex', 'Jacob', 'Mark', 'Max']) //, 'Alex, Jacob and 2 others like this');
