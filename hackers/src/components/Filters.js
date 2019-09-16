import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component{
    render(){
        const {handleChangeValue} = this.props;
        return (
            <React.Fragment>
            <label className="email--label">¿Email?</label>
            <input className="input--mail" type="text"  data-id="email" onChange={handleChangeValue} />
            <label className="label--name">¿Name?</label>
            <input className="input--name" type="text" data-id="name"onChange={handleChangeValue}/>
            </React.Fragment>
        )
    }
}
Filters.propTypes={
    handleChangeValue: PropTypes.func.isRequired,
}
export default Filters;