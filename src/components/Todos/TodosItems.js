import PropTypes from 'prop-types';

const TodosItems = ({todo:{id, task, state},handleToogle,handleDelete}) => {
    return (
        <li 
            key={id} 
            className={`${state && 'text-decoration-line-through text-muted'} fw-bold list-group-item d-flex justify-content-between`}
            onClick={() => handleToogle(id)}>
            {task}
            <button className="btn btn-sm" onClick={() => handleDelete(id)}>🗑️</button>
        </li>
    )
}

TodosItems.propTypes = {
    todo: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToogle: PropTypes.func.isRequired
}

export default TodosItems
