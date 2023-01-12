//Cria a function javascript
import './Banner.css'

function Banner(){
    //JSX
    return(
    //Class eh uma palavra reserva do javascript, utilziar para importar
    //o css className
        <header className= "banner"> 
            <img src ='imagens/banner.png' alt ="Banner principal pagina organo"/>
        </header>
    )
}

//exporta
export default Banner