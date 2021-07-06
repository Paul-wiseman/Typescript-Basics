
// Generics 
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return{...obj, uid}; 
}

let docOne = addUID({name: 'yoshi', age: 40});
