import React from 'react';
import Table from '../table/table';
import SaveName from '../saveName/save_name';
import {connect} from 'react-redux';


class UI extends React.Component {

render(){
    return (
      <div className="App">
        <Table />
        { this.props.iniState.isEdit?
          <SaveName />:null
        }
      </div>
    );
  }
}

export default connect(state=>({iniState:state}))(UI);
