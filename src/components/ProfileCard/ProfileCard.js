import { useState } from "react"; //#1/5 UseState es una funcion que devuelve un arreglo

function ProfileCard(props){
    
    const { titulo , arroba, img, children } = props;

    const [count, setCount] = useState(0);//#2 UseState devuelve una variable y una funcion setter que carga la variable inicializada en este caso en 0 

    function handleClickSuma(){/*Siempre es handle + nombre del evento*/  
       //console.log("Click")
        setCount(count+1);//#5 Incremento. Cada vez que incremento se vuelve a ejecutar todo el componente sumando 1

    }
    function handleClickResta(){
     setCount(count-1);
 }
    return (/*State es la unica propiedad que permite cambiar el contenido que React muestra */

        <div className="card">
            <div className="card-img">
 
                <figure className="image is-1by1">
                    <img src={img} alt="logo"/>
                </figure>
            </div>           
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4">Titulo: {titulo}</h3>
                    <p className="subtitle is-4">{arroba}</p>
                </div>

                <div className="columns">
                    
                    <div className="column is-4">
                    
                        <button onClick={handleClickSuma} className="button is-primary full-width is-fullwidth">
                            <p>+</p>
                        </button> {/*#4 Cuando se escucha el click, se ejecuta la funcion {handleClickSuma} */} 
                        
                        </div>

                            <div className="column">
                                <p>Likes: {count}</p>{/*#3 Utilizo la variable de estado*/}
                            </div>

                        <div className="column">
                        <button onClick={handleClickResta} className="button is-danger is-fullwidth">
                            <p>-</p>
                        </button>  
                    </div>
                    
                </div>

                {children}
                
            </div>
            
        </div>
    )

}

export default ProfileCard;