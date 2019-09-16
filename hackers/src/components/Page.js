import React from 'react';
import './Page.css';
import Header from './Header';
import Filters from './Filters';
import Status from './Status';
import DataList from './DataList';
import Footer from './Footer';
import PropTypes from 'prop-types';

class Page extends React.Component {
    render() {

        const { data, query, handleChangeValue, secretDay } = this.props;
        const filteredData = data.filter(info => info.email.includes(query));

        return (
            <React.Fragment>
                <Header secretDay={secretDay}/>
                <main className="app--main">
                    <Filters handleChangeValue={handleChangeValue} />
                    <Status filteredData={filteredData}/>
                    <DataList data={data} query={query} handleChangeValue={handleChangeValue} filteredData={filteredData} />
                </main>
                <Footer />
            </React.Fragment>

        )
    }
}

Page.prototypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    secretDay: PropTypes.string.isRequired
}

export default Page;