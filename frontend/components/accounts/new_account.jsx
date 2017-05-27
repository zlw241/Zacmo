import React from 'react';
import { Link, withRouter } from 'react-router';

class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iavToken: null,
      loading: {
        display: 'none'
      }
    }
    this.initializeIAV = this.initializeIAV.bind(this);
  }

  componentWillMount() {
    this.props.fetchToken().then(
      (res) => {
        this.setState({
          iavToken: res.token.iavToken,
          loading: {
            display: 'none'
          }
        });
        this.initializeIAV(res.token.iavToken)
      }
    );
    this.setState({
      loading: {
        display: {}
      }
    });
  }

  initializeIAV() {
    dwolla.iav.start(this.state.iavToken, {
      container: 'iavContainer',
      stylesheets: [
        // 'http://localhost:3000/assets/application.self-8478822dee13e342a9069480c2104c16497502f44d0c842b52c49f16a3e729bd.css?body=1'
      ],
      microDeposits: false,
      fallbackToMicroDeposits: true,
      backButton: true,
      subscriber: ({ currentPage, error }) => {
        console.log('currentPage:', currentPage, 'error:', JSON.stringify(error))
      }
    }, (err, res) => {
      this.props.router.push("/home/accounts")
      console.log('Error: ' + JSON.stringify(err) + ' -- Response: ' + JSON.stringify(res));
    });
  }

  render() {
    return (
      <div>
        <div id="iavContainer">
        </div>
        <div className="loading" style={this.state.loading}>
          <div className="loader"></div>
        </div>
      </div>
    );
  }
}


export default withRouter(NewAccount);
