import { render } from '@testing-library/react';

import ClientRootCore from './client-root-core';

describe('ClientRootCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientRootCore />);
    expect(baseElement).toBeTruthy();
  });
});
