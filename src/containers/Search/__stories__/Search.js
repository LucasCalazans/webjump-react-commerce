import Search from '../index';
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Search', module);

stories.add('Search Bar', () => {
    return <Search url="http://localhost:3100/products" />;
});