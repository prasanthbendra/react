import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';

export default class AboutTeam extends React.Component {

    render(){
        const { team } = this.props;

        return (
            <div class="col-md-3 col-xs-6">
                <div class="center">
                    <p><img class="img-responsive img-thumbnail img-circle" src={ team.pic } alt={ team.name } /></p>
                    <h5>{ team.name }<small class="designation muted">{ team.designation }</small></h5>
                    <p>{ team.text }</p>
                    <a class="btn btn-social btn-facebook" href="#"><i class="icon-facebook"></i></a> <a class="btn btn-social btn-google-plus" href="#"><i class="icon-google-plus"></i></a> <a class="btn btn-social btn-twitter" href="#"><i class="icon-twitter"></i></a> <a class="btn btn-social btn-linkedin" href="#"><i class="icon-linkedin"></i></a>
                </div>
            </div>
        );
    }
}
