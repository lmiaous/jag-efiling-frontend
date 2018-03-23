import React, { Component } from 'react';
import './active.forms.css';

class ActiveForms extends Component {

    render() {
        return (
            <div id="active-forms" className="form-section">
                <div>
                    <h3 style={{ display:'inline-block' }}>Cases Reminders</h3>
                    <div style={{ display:'inline-block', float:'right', marginTop:'15px' }}>
                        <a href="/my-applications.html" className="btn btn-primary round-borders">View All Cases</a>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr className="header">
                            <td></td>
                            <td>File #</td>
                            <td>Parties</td>
                            <td>Status                                
                            </td>
                            <td>Deadline to File</td>
                            <td>Recently Modified</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="near-deadline"><i className="fas fa-exclamation-circle"></i></td>
                            <td>3456769</td>
                            <td>Moreno / McLane</td>
                            <td>draft</td>
                            <td style={{ color:'rgb(255, 0, 0)' }}>2018-03-20</td>
                            <td>2018-03-12</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>2098709</td>
                            <td>Moreno / McLane</td>
                            <td>rejected</td>
                            <td>2018-04-05</td>
                            <td>2018-03-01</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>2098710</td>
                            <td>Moreno / McLane</td>
                            <td>submitted</td>
                            <td>2018-04-06</td>
                            <td>2018-03-01</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>2098711</td>
                            <td>Moreno / McLane</td>
                            <td>withdrawn</td>
                            <td>2018-04-07</td>
                            <td>2018-03-01</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ActiveForms;