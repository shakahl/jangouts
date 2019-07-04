/**
 * Copyright (c) [2015-2019] SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer, { act } from 'react-test-renderer';

import LoginForm from './LoginForm';

jest.mock('react-redux', () => {
  return {
    useDispatch: () => {}
  };
});

jest.mock('../../janus-api', () => {
  return {
    getRooms: () => Promise.resolve([{ id: '1st room' }])
  };
});

describe('LoginForm component', () => {
  let container;

  beforeEach(() => {
    act(() => {
      container = TestRenderer.create(<LoginForm />);
    });
  });

  afterEach(() => {
    container = null;
  });

  it('has an input to enter the username', () => {
    const inputs = container.root.findAllByType('input');

    expect(inputs.map((input) => input.props.name)).toContain('username');
  });

  it('has a selector to choose the room', () => {
    const selector = container.root.findByType('select');

    expect(selector.props.name).toBe('room');
  });
});
