import React, { Component } from 'react';
import _ from 'lodash';
import { WIPComponent } from 'react-c1';
import { Button, FormGroup, Intent, MenuItem } from '@blueprintjs/core';
import { Field, Form } from 'react-final-form';
import { Select } from '@blueprintjs/select';
import styled from 'styled-components';
import { getSavedConnection } from '../../../application/client';

const Container = styled.div`
    padding: 8px;
`;
export interface GeneralSettingsTabProps {

}

class GeneralSettingsTab extends Component<GeneralSettingsTabProps> {
    dataSources = [
        'ordinadorcasa.no-ip.org', 'localhost'
    ];
    envs = [
        'default', 'staging', 'testing'
    ];

    render() {
        const submitDataSourceForm = (values) => {
            console.log(`Submitting`, values);
            window.localStorage.setItem('connection', JSON.stringify(values))
            location.reload()
        };
        const getInitialValues = () => {
            return getSavedConnection();
        };
        return <Container>
            <div>Configuracions generals que s'utilitzen sovint. Ho implementem més endavant.</div>
            <Form onSubmit={submitDataSourceForm} initialValues={getInitialValues()}>
                {(form) => {
                    return <form onSubmit={form.handleSubmit}>
                        <h4>Connexió</h4>
                        <Field name={'host'}>
                            {({ input, meta }) => {
                                return <FormGroup label={'Servidor'}>
                                    <Select items={this.dataSources}
                                            filterable={false}
                                            itemRenderer={(item, info) => <MenuItem onClick={info.handleClick}
                                                                                    text={item}
                                                                                    icon={'globe-network'}/>}
                                            onItemSelect={(item, event) => input.onChange(item)}>
                                        <Button rightIcon="double-caret-vertical"
                                                icon={'globe-network'}
                                        >{input.value}</Button>
                                    </Select>
                                </FormGroup>
                            }}
                        </Field>
                        <Field name={'environment'}>
                            {({ input, meta }) => {
                                const getIntent = (name) => name === 'default' ? Intent.PRIMARY : Intent.SUCCESS
                                return <FormGroup label={'Entorn'}>
                                    <Select items={this.envs}
                                            filterable={false}
                                            itemRenderer={(item, info) => <MenuItem onClick={info.handleClick}
                                                                                    text={item}
                                                                                    icon={'globe-network'}
                                                                                    intent={getIntent(item)}
                                            />}
                                            onItemSelect={(item, event) => input.onChange(item)}>
                                        <Button rightIcon="double-caret-vertical"
                                                icon={'globe-network'}
                                                intent={getIntent(input.value)}
                                        >{input.value}</Button>
                                    </Select>
                                </FormGroup>
                            }}
                        </Field>
                        <Button type={'submit'} icon={'tick-circle'}>Acceptar</Button>
                    </form>;
                }}
            </Form>

        </Container>;
    }
}

export default GeneralSettingsTab;
