import { render } from '@testing-library/react';

import ClientRootCoreGraphql from './client-root-core-graphql';

describe('ClientRootCoreGraphql', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientRootCoreGraphql />);
    expect(baseElement).toBeTruthy();
  });
});
