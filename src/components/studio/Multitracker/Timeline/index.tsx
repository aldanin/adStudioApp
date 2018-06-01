import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

export interface TimelineProps {

}

const Container = styled.div`
    background-color: #5c86c5;
    color: #0aece4;
`;

const TimelineComponent: React.SFC<TimelineProps> = (props: TimelineProps) => {
    return (
        <Container>Timeline</Container>
    );
}
// TimelineComponent.defaultProps = {};

export default TimelineComponent;