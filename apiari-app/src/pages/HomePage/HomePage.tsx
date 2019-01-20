import React, { Component } from 'react';
import styled from 'styled-components';
import NewTabQuickAction from './components/NewTabQuickAction';
import { page } from 'react-navigation-plane';
// @ts-ignore
import { Page } from 'react-c1';
import { NavigationConsumer } from 'react-navigation-plane';

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: auto auto 10px auto 1fr 1fr;
    justify-items: stretch;
    align-items: stretch;
    padding: 4% 8px 8px;
    grid-row-gap: 16px;
    @media screen and (max-width: 500px) {
      grid-template-rows: auto auto 0px auto 1fr 1fr;
      padding: 1% 8px 8px;
      grid-row-gap: 4px;
    }
`;
const BoxedItemContainer = styled.div`
    justify-self: center;
    justify-content: center;
    align-content: center;
    width: 80%;
    min-width: 0px;
`;
const TitleContainer = styled(BoxedItemContainer)`
    width: 80%;
    //border: 2px dashed gray;
    font-size: 80px;
    font-family: Calibri;
    color: lightslategray;
    display: flex;
    justify-content: center;
    padding: 4px;
   
    
    @media screen and (min-width: 1600px) {
      font-size: 110px;
    }
    @media screen and (max-width: 900px) {
      font-size: 60px;
    }
     @media screen and (max-width: 420px) {
      font-size: 45px;
    }
`;
const MainActionsContainer = styled(BoxedItemContainer)`
      width: 100%;
      display: grid;
      justify-content: center;
      grid-auto-flow: column;
      grid-gap: 16px;
      cursor: auto;
      
      font-size: 45px;
      @media screen and (max-width: 1000px) {
        grid-template-rows: auto auto;
        grid-gap: 12px;
      }
      @media screen and (max-width: 550px) {
        grid-auto-flow: row;
        grid-template-columns: auto auto;
        font-size: 30px;
        grid-gap: 8px;
      }
    }
`;


export interface HomePageProps {

}

class HomePage extends Component<HomePageProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return <Page
            title={'Inici'}
            subtitle={'Apiari'}
            actions={[]}
            renderCustomHeaderArea={() => <div/>}
            renderBody={() => {
                return <NavigationConsumer>
                    {({ navigate }) => {
                        return <Container>
                            <TitleContainer>
                                <span>
                                    {/*<img src={image} width="600px"/>*/}
                                    APIARI
                                </span>
                            </TitleContainer>
                            <BoxedItemContainer className={'pt-input-group pt-large'}>

                                <div className="bp3-input-group bp3-large">
                                    <span className="bp3-icon bp3-icon-search"/>
                                    <input className="bp3-input"
                                           type="search"
                                           placeholder={`Cerca a qualsevol lloc`}
                                           disabled={true}
                                           dir="auto"
                                    />
                                </div>

                            </BoxedItemContainer>
                            <div/>
                            <MainActionsContainer>

                                <NewTabQuickAction name={'Tauler de control'} icon={'dashboard'}
                                                   onClick={() => navigate({ to: 'dashboard' })}/>
                                <NewTabQuickAction name={'Ruscs'} icon={'document'}
                                                   onClick={() => navigate({ to: 'hives' })}/>
                                <NewTabQuickAction name={'Configuració'} icon={'settings'}
                                                   onClick={() => navigate({ to: 'settings' })}/>

                            </MainActionsContainer>
                        </Container>;
                    }}
                </NavigationConsumer>;
            }}
            entityPlane={{}}
        />;
    }
}

export default page(HomePage);
