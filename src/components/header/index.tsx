import * as React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// import logo from '../../logo.svg';

export interface HeaderComponentProps extends React.Props<HeaderComponent> {

}

const Header = styled.header`
    height 50px;
`;

const Nav = styled.nav`
    height: 100%;
`;

const UL = styled.ul`
    height: 100%;
`;

const LI = styled.li`
   display: inline-block;
`;

class HeaderComponent extends React.Component<HeaderComponentProps, {}> {
    constructor (props: HeaderComponentProps) {
        super(props)

        this.state = {
            ds: ''
        }
    }

    render() {
        return (
            <Header>
                <Nav>
                    <UL>
                        <LI><Link to="/studio">Studio</Link></LI>
                        <li><Link to="/synth">Synth</Link></li>
                    </UL>
                </Nav>
            </Header>
        );
    }
}

export default HeaderComponent;