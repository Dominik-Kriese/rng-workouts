import React from 'react';
import App from './app';
import {mount} from 'enzyme';
import 'jest-styled-components';
import {Exercise} from './features/excersices/types';

test('renders learn react link', () => {
    const test3 = mount(<App/>)
        .find('Workouts')
        .prop('exercises') as Exercise[];
    expect(test3.length).toBeGreaterThan(0);
});
