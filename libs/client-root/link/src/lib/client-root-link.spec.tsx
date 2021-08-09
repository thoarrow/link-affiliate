import { render } from '@testing-library/react';

import ClientRootLink from './client-root-link';

describe('ClientRootLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientRootLink />);
    expect(baseElement).toBeTruthy();
  });
});
