import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import {
    BannerPartial,
    CusinessPartial,
    CounterPartial
} from '../shared';
class CusinessPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <BannerPartial></BannerPartial>
                <CusinessPartial></CusinessPartial>
                <CounterPartial></CounterPartial>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}

export default CusinessPage;