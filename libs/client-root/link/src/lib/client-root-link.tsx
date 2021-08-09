import { Route, Link } from 'react-router-dom';

import './client-root-link.module.less';

/* eslint-disable-next-line */
export interface ClientRootLinkProps {}

export function ClientRootLink(props: ClientRootLinkProps) {
  return (
    <div>
      <h1>Welcome to ClientRootLink!</h1>

      <ul>
        <li>
          <Link to="/">client-root-link root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the client-root-link root route.</div>}
      />
    </div>
  );
}

export default ClientRootLink;
