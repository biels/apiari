import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon, IconName } from '@blueprintjs/core';

const Container = styled.div`
    display: grid;
  //border: #0e5a8a dashed 3px;
  //border: 2px dashed gray;
  grid-auto-flow: column;
  height: 100%;
  padding: 16px;
  grid-template-rows: auto 1fr;
  border-radius: 4px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.26);
   background-color: #f8fbfd;
  @media screen and (max-width: 1024px) {
    border-radius: 3px;
  }
  &:hover{
    > * {
      fill: white;
    }
    //background-color: #f5f8fa;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.36);
    fill: white;
  }
`;
const IconContainer = styled.div`
  //border: 2px dashed gray;
  font-size: 60px !important;
  color: #768797;
  justify-self: center;
  @media screen and (max-width: 1024px) {
    font-size: 45px !important;
  }
  @media screen and (max-width: 800px) {
    font-size: 25px !important;
  }
`;
const LabelContainer = styled.div`
  font-size: 22px;
  justify-self: center;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export interface NewTabQuickActionProps {
    name: string
    icon: IconName
    onClick: () => void
}

class NewTabQuickAction extends Component<NewTabQuickActionProps> {
    render() {
        return <Container data-cy={'NewTabQuickAction-' + this.props.name} onClick={this.props.onClick}>
            <IconContainer>
                <Icon icon={this.props.icon} iconSize={60}/>
            </IconContainer>
            <LabelContainer>
                {this.props.name}
            </LabelContainer>
        </Container>;
    }
}

export default NewTabQuickAction;
