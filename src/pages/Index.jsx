import React, { useState } from 'react'
import Post from '../components/Post';
import NavBar from '../components/NavBar';

function Index() {

    const [mostrar, setMostrar] = useState(false);

    const usuarios = [
        { id : 1, nombre : 'Rusell', biografia : 'Hola, soy Russell' },
        { id : 2, nombre : 'Norwing', biografia : 'Hola, soy Norwing' },
        { id : 3, nombre : 'Laureano', biografia : 'Hola, soy Lawreano' }
    ];

    return (
        <>
            <NavBar/>

            {
                mostrar ? (
                    <div style={ {
                        width : '500px',
                        height : '500px',
                        backgroundColor : 'indigo'
                    } }>
        
                    </div>
                ) : (
                    <div>Contenedor oculto</div>
                )
            }

            <button onClick={ () => {setMostrar(!mostrar)} }>Mostrar/Ocultar</button>


            <h1>Página del index</h1>

            {
                usuarios.map( usuario => (
                    <Post key={ usuario.id } username={ usuario.nombre } texto={ usuario.biografia }/>
                ) )
            }

        </>
    )
}

export default Index