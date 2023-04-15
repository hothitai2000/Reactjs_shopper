import React, { Component } from 'react';
import LeftContent from './Left-content/Left-content'
import RightContent from './RightContent/RightContent'
class Content extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <LeftContent />
                        <RightContent />
                    </div>
                </div>
            </section>
        );
    }
}
export default Content;