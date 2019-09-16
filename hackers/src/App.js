import React from 'react';
import Page from './components/Page';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      secretDay:''
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
    console.log(queryValue);
    this.setState({
      query: queryValue
    })
  }

  render() {
    const { data, query, secretDay } = this.state;
    return (
      <div className="app--container">
        <Page data={data} query={query} handleChangeValue={this.handleChangeValue} secretDay={secretDay} />
      </div>
    );
  }
}

export default App;
