export type Color = string;
export type ColorsList = { [key: string]: Color };
type FontFamily = string;

export type Theme = {
  breakpoints: {
    sm: number;
  };

  spacing: {
    unit: number;
  };

  colors: ColorsList;

  palette: {
    primary: Color;
    primaryActivated: Color;
    secondary: Color;
    disabled: Color;
    background: Color;
    backgroundHoisted: Color;
    text: Color;
    textOverBg: Color;
    heading: Color;
    headingActivated: Color;
    success: Color;
    warning: Color;
    error: Color;
  };

  fonts: {
    default: FontFamily;
    significant: FontFamily;
  };

  fontSizes: {
    default: number;
    small: number;
    significant: number;
  };

  fontWeights: {
    default: number;
    bold: number;
  };

  duration: {
    default: number;
  };

  shape: {
    radii: {
      default: number;
    };
    underline: {
      default: number;
      thick: number;
    };
    inputSizes: {
      default: {
        standard: number;
        expanded: number;
      };
      large: {
        standard: number;
        expanded: number;
      };
    };
  };
};
