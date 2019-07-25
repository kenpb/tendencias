import { h, ComponentProps } from 'preact'
import { Route } from 'react-router-dom';

export default (): any => {
  (Child: any) =>
    (props: ComponentProps) => (
      <Route render={routeProps =>
        <Child {...routeProps} {...props} />} />
    )
}
