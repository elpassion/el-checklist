type Color = string;
export type ColorsList = { [key: string]: Color };
type FontFamily = string;

export type Theme = {
  spacing: {
    unit: number;
  };

  colors: ColorsList;

  palette: {
    primary: Color;
    secondary: Color;
    background: Color;
    backgroundHoisted: Color;
    text: Color;
    heading: Color;
  };

  fonts: {
    default: FontFamily;
    significant: FontFamily;
  };

  duration: {
    default: number;
  };

  shape: {
    radii: {
      default: number;
    };
  };
};
