import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

import Page from '../page';
import AboutTeam from './about-team';
import * as Action from './about-action';

@connect((store)=>{
    return {
        about: store.about.about,
        team: store.about.team
    }
})
export default class About extends React.Component {

    constructor(){
        super();

    }

    componentDidMount(){
        this.props.dispatch(Action.fetchAbout());
        this.props.dispatch(Action.fetchTeam());
    }

    componentWillUnmount(){

    }

    render(){
        let about = "";
        let team = "";
        if( !!this.props.about ){
            about = this.props.about.data;
        }
        if( !!this.props.team.data ){
            let teamItems = this.props.team.data;
            team = teamItems.map( (teamItem) => <AboutTeam key={ teamItem.id } team={ teamItem } />);
        }

        return (
            <Page title="About" description="Pellentesque habitant morbi tristique senectus et netus et malesuada">
                <section id="about-us" class="container body-section">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2>What we are</h2>
                            <p>{ about }</p>
                        </div>
                        <div class="col-sm-6">
                            <h2>Our Skills</h2>
                            <div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                        <span>HTML/CSS</span>
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                        <span>Wordpress</span>
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
                                        <span>Joomla</span>
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width: "55%"}}>
                                        <span>Drupal</span>
                                    </div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>
                                        <span>PHP</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="gap"></div>
                    <h1 class="center">Meet the Team</h1>
                    <p class="lead center">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <div class="gap"></div>

                    <div id="meet-the-team" class="row">
                        { team }
                    </div>
                </section>
            </Page>
        );
    }
}
