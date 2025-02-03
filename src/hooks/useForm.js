import {useState} from 'react'

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)
    // Cuando se modifica el input
    // En vez de tomar el event tomamos directamente el traget
    const onInputChange = ({target}) => { 
        const {name, value} = target
        setFormState({
            ...formState, // Se mantiene toda la informacion y se agregar la nueva
            [name]: value
        })
    }

    return {
        ...formState, // Para desestructurarlo
        onInputChange
    }
}