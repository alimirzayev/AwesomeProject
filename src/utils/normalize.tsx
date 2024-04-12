import React from 'react';
import { Dimensions, PixelRatio } from 'react-native';
import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('window');
const defaultFontSize = Math.round(PixelRatio.getFontScale() * 16);

function getMultiplier(fontSize: number): number {
    if (fontSize === 16) {
        return 2.2;
    } else if (fontSize >= 19) {
        return 2.2 - (fontSize - 16) * 0.18;
    } else if (fontSize > 16) {
        return 2.2 - (fontSize - 16) * 0.1;
    } else {
        return 2.2 + (16 - fontSize) * 0.05;
    }
}

export function normalize(size: number, fontSize = defaultFontSize) {
    const multiplier = getMultiplier(fontSize);
    let scale = 0;

    const orientation = Orientation.getInitialOrientation();

    if (orientation === 'PORTRAIT' || orientation === 'PORTRAITUPSIDEDOWN') {
        scale = (width / height) * multiplier;
    } else if (orientation === 'LANDSCAPE') {
        scale = (height / width) * multiplier;
    }

    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function useOrientation() {
    const [orientation, setOrientation] = React.useState(Orientation.getInitialOrientation());

    React.useEffect(() => {
        Orientation.addOrientationListener(handleOrientationChange);
        return () => {
            Orientation.removeOrientationListener(handleOrientationChange);
        };
    }, []);

    function handleOrientationChange(newOrientation) {
        setOrientation(newOrientation);
    }

    return orientation;
}
