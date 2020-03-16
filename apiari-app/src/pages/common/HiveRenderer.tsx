import React, { Component } from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

const Container = styled.div`
    align-self: start;
    position: relative;
    width: 130px
    //transform: scale(0.5)
`;
const BaseContainer = styled.div`
    bottom: 0;
    background-color: gray;
    height: 10px;
    margin-left: 8px;
    margin-right: 8px;
`;
const TapaContainer = styled.div`
    top: 10px;
    background-color: gray;
    height: 15px;
`;
// Blocks
const InnerContainer = styled.div`

    top: 10px;
    margin-left: 8px;
    margin-right: 8px;
    
    display: grid;
    grid-gap: 2px;
    
`;
const AlcaContainer = styled.div`
    height: 60px;
    background-color:  SlateBlue;
`;
const MitjaAlcaContainer = styled.div`
    height: 30px;
    background-color: SlateBlue;
`;
const ExcluidorContainer = styled.div`
    height: 3px;
    background-color: rgb(200, 100, 100);
`;
let componentMap = {
    'c': AlcaContainer,
    'a': MitjaAlcaContainer,
    'e': ExcluidorContainer
};

interface HiveRendererProps {
    blocks: string
}

class HiveRenderer extends Component<HiveRendererProps> {
    render() {
        if (this.props.blocks == null || this.props.blocks === '') return null;
        let blockList = _.reverse(this.props.blocks.split(''));
        return (
            <Container>
                <TapaContainer/>
                <InnerContainer>
                    {blockList.map(b => {
                        let C = componentMap[b];
                        if (C == null) return null;
                        return <C/>;
                    })}
                </InnerContainer>
                <BaseContainer/>
            </Container>
        );
    }
}

export default HiveRenderer;
