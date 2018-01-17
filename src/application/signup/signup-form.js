import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    PEditable,
    PButton,
    PDatePicker,
    PDateRangePicker,
    PRadioButton,
    PRow,
    PColumn,
    PLayout
} from 'pisgah/dist/index.umd';

export class SignupForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // <PButton label={"Things"}></PButton>
        // <PDateRangePicker></PDateRangePicker>


        return (
            <PLayout celled ui grid>
                <PRow three column row>
                    <PColumn width={5}>
                        <PEditable
                            placeholder={'First'}
                            fluid
                        />
                    </PColumn>
                    <PColumn width={5}>
                        <PEditable
                            placeholder={'Middle'}
                        />
                    </PColumn>
                    <PColumn width={5}>
                        <PEditable
                            placeholder={'Last'}
                        />
                    </PColumn>
                </PRow>
                <PRow two column row>
                    <PColumn width={10}>
                        <PEditable
                            placeholder={'Email'}
                        />
                    </PColumn>
                    <PColumn width={5}>
                        <PRadioButton label={'M'}/>
                        <PRadioButton label={'F'}/>
                    </PColumn>
                </PRow>
                <PRow two column row>
                    <PColumn width={10}>
                        <PEditable
                            placeholder={'Homepage'}
                        />
                    </PColumn>
                    <PColumn width={5}>
                        <PDatePicker/>
                    </PColumn>
                </PRow>
                <PRow two column row>
                    <PColumn width={10}>
                        <PEditable
                            placeholder={'Phone'}
                        />
                    </PColumn>
                </PRow>
                <PRow two column row>
                    <PColumn width={3} floated={'left'}><PButton label={'Cancel'}/></PColumn>
                    <PColumn width={3} floated={'right'}><PButton label={'Save'}/></PColumn>
                </PRow>
            </PLayout>
        );
    }
}
