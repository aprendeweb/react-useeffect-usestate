import { useEffect } from 'react';

const Saludar = () => {
    useEffect(() => {
        console.log("Montado");
        return () => { console.log("Desmontado") }
    }, [])
    return (
        <p>Hola soy el App2</p>
    )
}

export default Saludar;