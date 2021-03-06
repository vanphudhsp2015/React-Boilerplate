import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import {
    BannerPartial,
    EatPartial,
    IntroducPartial,
    SliderPartial,
    CusinessPartial,
    CounterPartial
} from '../shared';
class IndexPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <BannerPartial></BannerPartial>
                <EatPartial></EatPartial>
                <IntroducPartial></IntroducPartial>
                <SliderPartial></SliderPartial>
                <CusinessPartial></CusinessPartial>
                <CounterPartial></CounterPartial>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}

export default IndexPage;