//* Margin & Padding Props
export type SpacesProps = {
    m?: number | string;
    my?: number | string;
    mx?: number | string;
    mt?: number | string;
    mb?: number | string;
    mr?: number | string;
    ml?: number | string;
    p?: number | string;
    py?: number | string;
    px?: number | string;
    pt?: number | string;
    pb?: number | string;
    pr?: number | string;
    pl?: number | string;
};

//* Border Props
export type BorderProps = {
    borderW?: number; //* borderWidth
    borderTW?: number; //* borderTopWidth
    borderRW?: number; //* borderRightWidth
    borderBW?: number; //* borderBottomWidth
    borderLW?: number; //* borderLeftWidth
    borderC?: string; //* borderColor
    borderTC?: string; //* borderTopColor
    borderRC?: string; //* borderRightColor
    borderBC?: string; //* borderBottomColor
    borderLC?: string; //* borderLeftColor
    borderR?: number; //* borderRadius
    borderTLR?: number; //* borderTopLeftRadius
    borderTRR?: number; //* borderTopRightRadius
    borderBLR?: number; //* borderBottomLeftRadius
    borderBRR?: number; //* borderBottomRightRadius
};


//* Text Props
export type TypographyProps = {
    children: React.ReactNode;
    color?: string;
    size?: number;
    weight?: string;
    fontFamily?: string;
    lineHeight?: number;
    alignment?: 'left' | 'center' | 'right';
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    decoration?: 'underline' | 'overline' | 'line-through';
    letter?: number;
    opacity?: number;
} & SpacesProps;

//* Core Props
export type CoreProps = {
    w?: number | string; //* Width Number or 100%
    h?: number | string; //* Height Number or 100%
    minW?: number | string; //* Minimum Width with Number or 100%
    minH?: number | string; //* Minimum Height with Number or 100%
    maxW?: number | string; //* Maximum Width with Number or 100%
    maxH?: number | string; //* Maximum Height with Number or 100%
    bgColor?: string | undefined; //* Background Color
    rounded?: number; //* Border Radius
    textAlign?: 'left' | 'center' | 'right'; //* Text Position
    d?: 'none' | 'block' | 'flex' | 'grid' | 'inline' | 'inline-block'; //* Display
    alignItem?: 'flex-start' | 'center' | 'flex-end'; //* Align Items
    alignContent?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'; //* Align Content
    alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'baseline'; //* Align Self
    justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'; //* Justify Content
    justifyItems?: 'auto' | 'flex-start' | 'center' | 'flex-end'; //* Justify Items
    flex?: number;
    flexDir?: 'row' | 'row-reverse' | 'column' | 'column-reverse'; //* Flex Direction
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'; //* Flex Wrap
    flexBasis?: number | string; //* Flex Basis
    flexGrow?: number; //* Flex Grow
    flexShrink?: number; //* Flex Shrink
    order?: number; //* Order
    overflow?: 'hidden' | 'auto' | 'scroll';
    overflowX?: 'hidden' | 'auto' | 'scroll';
    overflowY?: 'hidden' | 'auto' | 'scroll';
    position?: 'absolute' | 'relative' | 'static' | 'fixed';
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    zIndex?: number;
};

//* Types for Box (View)
export type BoxVariants = 'horizontal'
    | 'center'
    | 'space-between'
    | 'flex-start';

export type BoxProps = {
    variant?: BoxVariants;
} & CoreProps &
    SpacesProps &
    BorderProps;

//* Types for Btn (Button)
export type BtnVariants = 'primary' | 'secondary' | 'outline';

export type BtnProps = {
    variant?: BtnVariants;
} & CoreProps &
    SpacesProps &
    BorderProps;
