import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';

import _ from 'lodash';

import {
    SignupForm
} from '../../../src/application/signup/signup-form';

storiesOf('SignupForm', module)
    .addDecorator(centered)
    .add('',
        withInfo({
            header: false,
            inline: true,
            source: true,
            text: `
            
            
            [Based On]()
            
            `
        })(
            () => <SignupForm/>
        )
    );
