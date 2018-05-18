import * as React from 'react';

// import logo from '../../logo.svg';

export interface HeaderComponentProps extends React.Props<HeaderComponent> {
    name: string
}

class HeaderComponent extends React.Component<HeaderComponentProps, {}> {
    constructor (props: HeaderComponentProps) {
        super(props)

        this.state = {
            ds: ''
        }
    }

    render() {
        return (
      <div>
          {this.props.name}
      </div>
        );
    }
}

export default HeaderComponent;