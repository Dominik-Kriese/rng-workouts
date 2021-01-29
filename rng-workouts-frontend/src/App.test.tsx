import React from 'react';
import App from './App';
import {mount} from "enzyme";
import 'jest-styled-components';

test('renders learn react link', () => {
    const test = mount(<App/>);
    const test2 = test.find('div');
    expect(test2).toMatchSnapshot();
});
