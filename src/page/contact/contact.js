import React from 'react';
import { render } from 'react-dom';

import Page from '../page';

export default class Contact extends React.Component {

    render(){
        return (
            <Page>
                <section id="contact-page" className="container body-section">
                    <div className="row">
                        <div className="col-sm-8">
                            <h4>Contact Form</h4>
                            <div className="status alert alert-success" style={{display: "none"}}></div>
                            <form id="main-contact-form" className="contact-form" name="contact-form" method="post" action="sendemail.php" role="form">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="form-group">
                                            <input type="text" className="form-control" required="required" placeholder="First Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" required="required" placeholder="Last Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" required="required" placeholder="Email address" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-7">
                                        <textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-4">
                            <h4>Our Location</h4>
                            <iframe width="100%" height="215" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.au/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Dhaka,+Dhaka+Division,+Bangladesh&amp;aq=0&amp;oq=dhaka+ban&amp;sll=40.714353,-74.005973&amp;sspn=0.836898,1.815491&amp;ie=UTF8&amp;hq=&amp;hnear=Dhaka+Division,+Bangladesh&amp;t=m&amp;ll=24.542126,90.293884&amp;spn=0.124922,0.411301&amp;z=8&amp;output=embed"></iframe>
                        </div>
                    </div>
                </section>
            </Page>
        );
    }
}
