import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { searchUsers } from '../../util/user_api_util';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => searchUsers(query)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
