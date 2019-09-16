import React from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';


class DataList extends React.Component {
    render() {
        const {filteredData} = this.props;

        return (
            <React.Fragment>
                <ul className="list--people">
                    {filteredData
                        .map((item, index) => {
                            return (
                                <li className="person--data" key={index}>
                                    <DataCard item={item} />
                                </li>
                            )
                        })

                    }
                </ul>
            </React.Fragment>
        )
    }
}
DataList.propTypes = {
    filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default DataList;