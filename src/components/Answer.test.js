import React from 'react';
import {render, screen} from '@testing-library/react';
import {toHaveAttribute} from '@testing-library/jest-dom';
import {getVerb} from '../../test-utils/verb-mock';
import Answer from './Answer';


let verbStub = '';
beforeAll(() => verbStub = getVerb());

describe('Answer', () => {
  test('label "for" attribute match "id" in related input field', () => {
    const {container} = render(
      <Answer verb={verbStub.infinitive}>Test Answer</Answer>
    );
    const labelFor = container.querySelector('label').getAttribute('for');
    const input = container.querySelector('input');

    expect(input).toHaveAttribute('id', labelFor)
  })
})