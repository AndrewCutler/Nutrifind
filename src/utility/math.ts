export const defaultBackgroundRed = 0xe2;
export const defaultBackgroundGreen = 0xd5;
export const defaultBackgroundBlue = 0xd0;

export const maxBackgroundRed = 0xff;
export const maxBackgroundGreen = 0x4b;
export const maxBackgroundBlue = 0x5;

export const maxDifferenceRed = maxBackgroundRed - defaultBackgroundRed;
export const maxDifferenceGreen = maxBackgroundGreen - defaultBackgroundGreen;
export const maxDifferenceBlue = maxBackgroundBlue - defaultBackgroundBlue;

export const getHexBackgroundByPercentage = (percentage: number): string => {
    return '#' + getHexValue(percentage, maxDifferenceRed, defaultBackgroundRed) +
        getHexValue(percentage, maxDifferenceGreen, defaultBackgroundGreen) +
        getHexValue(percentage, maxDifferenceBlue, defaultBackgroundBlue);
}

const getHexValue = (percentage: number, maxDifference: number, defaultBackground: number): string => {
    const offset = maxDifference * (percentage / 100);
    const backgroundColor = Math.round(defaultBackground + offset);

    if (backgroundColor <= 16) {
        return `0${backgroundColor.toString(16)}`;
    }

    return backgroundColor.toString(16);
}