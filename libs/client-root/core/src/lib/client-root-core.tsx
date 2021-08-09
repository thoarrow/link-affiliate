import { Route, Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ClientRootCoreProps {}

export function ClientRootCore(props: ClientRootCoreProps) {
  return (
    <div>
      <h1>Welcome to ClientRootCore!</h1>

      <ul>
        <li>
          <Link to="/">client-root-core root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the client-root-core root route.</div>}
      />
    </div>
  );
}

export default ClientRootCore;
