import React from 'react';
import { connect } from 'react-redux';
import TransactionSearch from './transaction_search';
import { searchUsers } from '../../util/user_api_util';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => searchUsers(query)
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionSearch);
