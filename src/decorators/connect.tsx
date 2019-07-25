import { h, ComponentProps } from 'preact'
import { Connect } from 'redux-zero/preact'

export default (actions = {}): any => {
  return (Child: any) => (props: ComponentProps) => (
    <Connect mapToProps={(state: object) => ({ ...state })} actions={actions}>
      {(mappedProps: object) => <Child {...mappedProps} {...props} />}
    </Connect>
  )
}
