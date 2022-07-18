import PropTypes from 'prop-types'

function List({fruta, vegetal}) {
    return (
        <>
            <h1>Minha Lista:</h1>
            <ul>
                <li>{fruta}</li>
                <li>{vegetal}</li>
            </ul>
        </>
    )
}

List.propTypes = {
    fruta: PropTypes.string.isRequired
}

export default List