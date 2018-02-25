/* eslint-disable */
import React, { Component } from 'react';
import { CardsLayoutManager, Card, IframeCard } from 'configurable-interactive-layout';
import '../node_modules/configurable-interactive-layout/dist/interactiveLayout.css';
import { layoutConfiguration } from './configurations/basic/layout-configuration';
import { cardsConfiguration } from './configurations/basic/cards-configurations';
import EchoComponent from './components/EchoComponent';
import EventManager from './eventManager/EventManager';
import uniqBy from 'lodash/uniqBy';
import sortBy from 'lodash/sortBy';

class App extends Component {

    constructor(props){
        super(props);
        this.eventManager = new EventManager();
        this.state = {
            selectedView: "defaultView",
            cardsConfiguration: cardsConfiguration,
            docs: props.docs,
        }
    }

    onLayoutChange(cardsOrder) {
        const newCardsConfiguration = this.state.cardsConfiguration;
        newCardsConfiguration[this.state.selectedView].cardsOrder = cardsOrder;
        this.setState({
            cardsConfiguration: newCardsConfiguration,
        });
    }

    componentDidMount(){
        var self = this;
        clientPromise.then(client => {
            const db = client.service('mongodb', 'mongodb-atlas').db('Analytics');
            client.login().then(() =>
                db.collection('Steps').find().limit(1000).execute()
            ).then(docs => {
                this.setState({docs});
            }).catch(err => {
                console.error(err)
            });
        });
    }

    //returns array of objects: {stepId: <>, counter:<>}
    getStepCounters(){
        var uniqArr = uniqBy(this.state.docs, 'stepId');
        var stepCounters = [];
        for (var i =0; i<uniqArr.length; i++){
            var found = this.state.docs.filter(function(element) {
                return (element.stepId == uniqArr[i].stepId);
            });
            var stepCounter = {
                stepId: uniqArr[i].stepId,
                counter: found.length
            };
            
            stepCounters.push(stepCounter);
        }
        return stepCounters;
    }

    //returns array of objects: {transactionId: <>, stepsArray:[]}
    getStepOrders(){
        var uniqArr = uniqBy(this.state.docs, 'transactionId');
        var stepOrders = [];
        for (var i =0; i<uniqArr.length; i++){
            var found = this.state.docs.filter(function(element) {
                return (element.transactionId == uniqArr[i].transactionId);
            });

            var sortedStepIds = sortBy(found, 'stepCounter').map(function(item) {
                return item.stepId
            });

            var stepOrder = {
                transactionId: uniqArr[i].transactionId,
                stepOrder: sortedStepIds
            };
            
            stepOrders.push(stepOrder);
        }
        return stepOrders;
    }

    render() {
        const stepCounters = this.getStepCounters();
        const stepOrders = this.getStepOrders();
        const cardsConfig = cardsConfiguration[this.state.selectedView];
        return (
            <div>
                <CardsLayoutManager cardsConfiguration={cardsConfig} layoutConfiguration={ layoutConfiguration } onLayoutChange={this.onLayoutChange.bind(this)} >
                    <Card configId="echoCard" title="Steps table">
                        <EchoComponent 
                        docs={this.state.docs} 
                        stepCounters = {stepCounters}
                        stepOrders = {stepOrders}
                        />
                    </Card>
                </CardsLayoutManager>
            </div>
        );
    }
}

export default App;
