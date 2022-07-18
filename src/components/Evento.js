import Button from "./Button"

function Evento() {

    function meuEvento() {
        console.log('Salve, tu me ativou!')
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
        </div>
    )
}

export default Evento