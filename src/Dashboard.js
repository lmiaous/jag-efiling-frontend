import React, {Component} from 'react';
import Journey from './components/Journey.js';
import Top5 from './forms/Top5.js';
import ActiveFormList from './components/ActiveFormList.js';
import NeedHelp from './NeedHelp.js';
import './dashboard.css';
import Iframe from 'react-iframe'

class Dashboard extends Component {

    render() {
        return (
            <div id="topicTemplate" className="template container gov-container form">
                <div className="row">
                    <div role="main" className="col-sm-12">
                        <ActiveFormList />
                    </div>
                </div>
                <div className="row">
                    <div role="main" className="center-main col-lg-8" >
                        <Journey/>
                    </div>
                    <div role="main" className="right-nav-main col-lg-4"  >
                        <div className="row">
                            <div className="col-lg-12">
                                <Top5/>
                            </div>
                        </div>
                        <div className="row">
                            <div role="main" className="col-lg-12">
                                <NeedHelp/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-12 form-section">

                        <Iframe url="https://dev.justice.gov.bc.ca/cso/ext/coa/form7/#/qualify?_k=f90vwa"
                                width="100%"
                                height="800px"
                                id="iframe-form7"
                                className="form-7-iframe"
                                display="initial"
                                position="relative"
                                target="_parent"
                                allowFullScreen/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
