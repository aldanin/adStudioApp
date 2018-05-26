import * as React from 'react';
import { Link } from 'react-router-dom'

// import logo from '../../logo.svg';

export interface HeaderComponentProps extends React.Props<HeaderComponent> {

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
            <header>
                <nav>
                    <ul>
                        <li><Link to="/studio">Studio</Link></li>
                        <li><Link to="/synth">Synth</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;