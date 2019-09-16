import React from 'react';
import Page from './components/Page';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      secretDay:'',
      idData: ''
    }
    this.handleFetchData = this.handleFetchData.bind(this);
  }

  componentDidMount() {
    this.handleFetchData()
  }

  handleFetchData() {
    const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/m3-tutoria-2/master/assets/data/bulk.json';
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(info => this.setState({
        secretDay: info.date,
        data: info.data
      }));
  }

  handleChangeValue = (event) => {
    const queryValue = event.currentTarget.value;
    const inputId = event.currentTarget.getAttribute ('data-id');
    console.log(queryValue);
    console.log(inputId);
    this.setState({
      query: queryValue,
      idData: inputId
    });
    this.handleFilters();
  }

  handleFilters=()=>{
    const filteredData = this.data.filter(info=>info.this.state.idData.includes(this.state.query));
    return console.log (filteredData);
  }

  render() {
    const { data, query, secretDay, idData } = this.state;
    return (
      <div className="app--container">
        <Page data={data} query={query} filteredData={this.filteredData} handleChangeValue={this.handleChangeValue} secretDay={secretDay} idData={idData}/>
      </div>
    );
  }
}

export default App;
