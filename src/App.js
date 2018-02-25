/* eslint-disable */
import React, { Component } from 'react';
import { CardsLayoutManager, Card, IframeCard } from 'configurable-interactive-layout';
import '../node_modules/configurable-interactive-layout/dist/interactiveLayout.css';
import { layoutConfiguration } from './configurations/basic/layout-configuration';
import { cardsConfiguration } from './configurations/basic/cards-configurations';
import EchoComponent from './components/EchoComponent';
import EventManager from './eventManager/EventManager';

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
                db.collection('Steps').find().limit(200).execute()
            ).then(docs => {
                this.setState({docs});
                //self.docs = docs;
            }).catch(err => {
                console.error(err)
            });
        });
    }

    render() {
        const cardsConfig = cardsConfiguration[this.state.selectedView];
        return (
            <div>
                <CardsLayoutManager cardsConfiguration={cardsConfig} layoutConfiguration={ layoutConfiguration } onLayoutChange={this.onLayoutChange.bind(this)} >
                    <Card configId="echoCard" title="Steps table">
                        <EchoComponent docs={this.state.docs}/>
                    </Card>
                </CardsLayoutManager>
            </div>
        );
    }
}

export default App;
