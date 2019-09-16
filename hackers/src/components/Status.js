import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {
    render() {
        const {filteredData} = this.props;
        return (
            <p className="data--lenght">{filteredData.length === 1 ? 'Hay 1 resultado': `Hay ${filteredData.length} resultados`}</p>
        )
    }
}
Status.propTypes = {
    filteredData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Status;