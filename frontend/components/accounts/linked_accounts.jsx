import React from 'react';
import { Link, withRouter } from 'react-router';


class LinkedAccounts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      linkedAccounts: [],
      loading: {
        display: 'none'
      }
    }
    this.newAccount = this.newAccount.bind(this);
  }

  componentWillMount() {
    this.props.fetchAccounts().then(
      (res) => this.setState({
        linkedAccounts: res.accounts,
        loading: {
          display: 'none'
        }
      })
    )
    this.setState({
      loading: {}
    });
  }

  newAccount() {
    this.props.router.push('/home/accounts/new');
  }

  render() {
    return (
      <div className="dwollaContainer">
        <div className="linked-accounts">
          <div className="accounts-header">
            <h2>Payment Methods</h2>
            <Link className="new-account-link" to="/home/accounts/new">Link New Account</Link>
          </div>
          <div className="account-list-container">
            <div className="account-list-header">
              <div className="account-list-header-item">
                Account Name
              </div>
              <div className="account-list-header-item">
                Nickname
              </div>
              <div className="account-list-header-item">
                Type
              </div>
              <div className="account-list-header-item">
                Status
              </div>
            </div>
            <ul className="account-list">
              {this.state.linkedAccounts.map((acc, i) => (
                <li className="account-container" key={i}>
                  <div className="account-list-items-container">
                    <div className="account-list-item">
                      {acc.name}
                    </div>
                    <div className="account-list-item">
                      {acc.nickname}
                    </div>
                    <div className="account-list-item">
                      {acc.type}
                    </div>
                    <div className="account-list-item">
                      <div className="account-verified">
                        <img className="account-verified-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgogICAgIHdpZHRoPSIxM3B4IiBoZWlnaHQ9IjEzcHgiIHZpZXdCb3g9IjAgMCAxMyAxMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMgMTM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAuc3Qwe2ZpbGw6IzU4QjM2Njt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LjUsMWMzLDAsNS41LDIuNSw1LjUsNS41UzkuNSwxMiw2LjUsMTJTMSw5LjUsMSw2LjVTMy41LDEsNi41LDEgTTYuNSwwQzIuOSwwLDAsMi45LDAsNi41UzIuOSwxMyw2LjUsMTMKICBTMTMsMTAuMSwxMyw2LjVTMTAuMSwwLDYuNSwwTDYuNSwweiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNS40LDguOWMtMC4xLDAtMC4zLDAtMC40LTAuMUwzLjMsN2MtMC4yLTAuMi0wLjItMC41LDAtMC43czAuNS0wLjIsMC43LDBsMS40LDEuNEw5LDQuMkM5LjIsNCw5LjUsNCw5LjcsNC4yCiAgczAuMiwwLjUsMCwwLjdMNS44LDguOEM1LjcsOC45LDUuNiw4LjksNS40LDguOXoiLz4KPC9zdmc+Cg=="
                          />
                        {acc.status}
                      </div>
                    </div>
                  </div>
                  <div className="account-list-item-divider">
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="loading" style={this.state.loading}>
          <div className="loader"></div>
        </div>
        <div className="new-account-container">
          {this.props.children}
        </div>
      </div>
    );

  }
}

export default withRouter(LinkedAccounts);
