/* eslint-disable */
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class EchoComponent extends Component {

    render() {

        return (
            <BootstrapTable data={this.props.stepCounters}>
                <TableHeaderColumn isKey dataField='stepId'>Step Id</TableHeaderColumn>
                <TableHeaderColumn dataField='counter'>Number Of clicks</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}