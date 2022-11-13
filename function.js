// function saludar() {
//      console.log('saludo')
// }

// saludar()

// const saludo = () => {console.log('saludar desde Arrow Functions')}

// saludo()

// const saludar = (a,b,c) => {
//      return a + b + c
// }
// console.log(saludar(3, 2, 3));

// currin (funciones dentro de funciones)

const func1 = (dato) => {
    return dato
}
const func2 = (d) => {
    console.log(d);
}

func2(func1('Alex'))
