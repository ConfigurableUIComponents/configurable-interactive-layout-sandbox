import React, { Component } from 'react';
import { Graph } from 'react-d3-graph';

export default class GraphCard extends Component {

  render() {

    // graph payload (with minimalist structure)
    const data = {
      nodes: [
        {id: 'login', size: 600, color: 'blue'},
        {id: 'taskList'},
        {id: 'openFilter'},
        {id: 'openGt', size: 1000}
      ],
      links: [
        {source: 'login', target: 'taskList', value: 0.1},
        {source: 'taskList', target: 'openFilter', value: 18},
        {source: 'openFilter', target: 'openGt', value: 0.1},
        {source: 'openGt', target: 'taskList', value: 0.1},
      ]
    };

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
    const myConfig = {
      nodeHighlightBehavior: true,
      node: {
        color: 'lightgreen',
        size: 300,
        highlightStrokeColor: 'blue', fontSize: 18
      },
      link: {
        highlightColor: 'lightblue',
        semanticStrokeWidth: true,
        strokeWidth: 3
      },
      width: 2000,
      height: 600
    };

    const graphs = this.props.transactions.map(transaction => {
      const steps = transaction.stepOrder;
      var data = { nodes: [], links: []};
      for(var ii=0; ii < steps.length;){
        if(ii != 0 && ii % 2 !== 0) data.links.push({source: data., target: 'taskList', value: 0.1})
      }

    })

    return <Graph
        id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
    />
  }
}
