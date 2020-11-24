import * as React from 'react';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { initializeIcons } from 'office-ui-fabric-react';

export interface IMySliderProps {
    currentValue: number;
    onSliderChanged: (value?: number) => void;
}

initializeIcons();

export default class MySliderControl extends React.Component<IMySliderProps, {}> {
    render() {
        return (
            <Slider
                label="My slider"
                min={1}
                max={10}
                value={this.props.currentValue}
                onChange={this.props.onSliderChanged}
            />
        );
    }
}
