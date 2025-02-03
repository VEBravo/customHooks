import { useState } from "react"
// Es posible setear el valor inicial
export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)
    //Es posible enviarle como parametro el incremento y decremento

    const increment = (val = 1) => {
        setCounter(counter + val)
    }
    const reset = () => {
        setCounter(initialValue)
    }
    // Si se envia como parametro (1, false) no permitirá tomar valores negativos
    const decrement = (val = 1, allowNegative = true) => {
        if(!allowNegative && counter < 1) return
        setCounter(counter - val)
    }

    return {
        counter,
        increment,
        reset,
        decrement
    }
}


