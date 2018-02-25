import React, { Component } from 'react';
import { Graph } from 'react-d3-graph';

export default class CounterComponent extends Component {

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

// graph event callbacks
    const onClickNode = function(nodeId) {
      console.log('Clicked node ${nodeId}');
    };

    const onMouseOverNode = function(nodeId) {
      console.log('onMouseOverNode ${nodeId}');
    };

    const onMouseOutNode = function(nodeId) {
      console.log(`Mouse out node ${nodeId}`);
    };

    const onClickLink = function(source, target) {
      console.log(`Clicked link between ${source} and ${target}`);
    };

    const onMouseOverLink = function(source, target) {
      console.log(`Mouse over in link between ${source} and ${target}`);
    };

    const onMouseOutLink = function(source, target) {
      console.log(`Mouse out link between ${source} and ${target}`);
    };

    return <Graph
        id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
        onMouseOverNode={onMouseOverNode}
        onMouseOutNode={onMouseOutNode}
        onMouseOverLink={onMouseOverLink}
        onMouseOutLink={onMouseOutLink}/>
  }
}
