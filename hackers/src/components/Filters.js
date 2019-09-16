import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component{
    render(){
        const {handleChangeValue} = this.props;
        return (
            <input className="input--mail" type="text" onChange={handleChangeValue} />

        )
    }
}
Filters.propTypes={
    handleChangeValue: PropTypes.func.isRequired,
}
export default Filters;