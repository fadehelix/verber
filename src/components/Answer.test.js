import React from 'react';
import { render } from '@testing-library/react';
import getVerb from '../../test-utils/verb-mock';
import Answer from './Answer';

let verbStub = '';
beforeAll(() => {
  verbStub = getVerb();
});

describe('Answer', () => {
  test('label "for" attribute match "id" in related input field', () => {
    const { container } = render(
      <Answer value={verbStub.infinitive}>Test Answer</Answer>
    );
    const labelFor = container.querySelector('label').getAttribute('for');
    const input = container.querySelector('input');

    expect(input).toHaveAttribute('id', labelFor);
  });
});
