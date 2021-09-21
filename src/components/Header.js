import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({title, onAdd, showAddTask}) => {
    // const onClick = () => {
    //     console.log('Click');
    // }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color={showAddTask ? 'red' : 'green'} 
            // text is dynamic - if true, close. if not, add
            text={showAddTask ? 'Close' : 'Add'} 
            onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}


Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;