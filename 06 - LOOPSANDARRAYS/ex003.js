//Make a program that returns tha name with starts 'V' in a list

const names = ['Victor', 'Ivisson', 'Guilherme', 'Vanessa', 
            'Venelope', 'Lucas', 'Alberto', 'Gilberto'];

for(let i = 0; i < names.length; i++) {
    if(names[i][0] === 'V') {
        console.log(names[i]);
    }
}

console.log("\n Complete list: ", names);