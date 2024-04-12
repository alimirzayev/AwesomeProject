import React from 'react';
import { View, ViewProps } from 'react-native';
import { BoxProps } from '../types';

const getVariantStyles = (variant: 'horizontal' | 'center' | 'space-between' | 'flex-start' | undefined) => {
  switch (variant) {
    case 'horizontal':
      return {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      };
    case 'center':
      return {
        justifyContent: 'center',
        alignItems: 'center'
      };
    case 'space-between':
      return {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
      };
    case 'flex-start':
      return {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'flex-start'
      };
    default:
      return {};
  }
}

const Box: React.FC<BoxProps & ViewProps> = (props) => {
  const {
    children,
    variant,
    w,
    h,
    minW,
    minH,
    maxW,
    maxH,
    bgColor,
    rounded,
    textAlign,
    d,
    alignItem,
    alignContent,
    alignSelf,
    justifyContent,
    justifyItems,
    flex,
    flexDir,
    flexWrap,
    flexBasis,
    flexGrow,
    flexShrink,
    order,
    overflow,
    overflowX,
    overflowY,
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
    m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py,
    borderW,
    borderTW,
    borderRW,
    borderBW,
    borderLW,
    borderC,
    borderTC,
    borderRC,
    borderBC,
    borderLC,
    borderR,
    borderTLR,
    borderTRR,
    borderBLR,
    borderBRR,
    style,
    ...rest
  } = props;

  const inlineStyle: any = {
    width: w,
    height: h,
    minWidth: minW,
    minHeight: minH,
    maxWidth: maxW,
    maxHeight: maxH,
    backgroundColor: bgColor,
    borderRadius: rounded,
    textAlign: textAlign as any,
    display: d,
    alignItems: alignItem,
    alignContent: alignContent,
    alignSelf: alignSelf,
    justifyContent: justifyContent,
    justifyItems: justifyItems,
    flex: flex,
    flexDirection: flexDir,
    flexWrap: flexWrap,
    flexBasis: flexBasis,
    flexGrow: flexGrow,
    flexShrink: flexShrink,
    order: order,
    overflow: overflow,
    overflowX: overflowX,
    overflowY: overflowY,
    position: position,
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    zIndex: zIndex,
    margin: m,
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr,
    marginHorizontal: mx,
    marginVertical: my,
    padding: p,
    paddingTop: pt,
    paddingBottom: pb,
    paddingLeft: pl,
    paddingRight: pr,
    paddingHorizontal: px,
    paddingVertical: py,
    borderWidth: borderW,
    borderTopWidth: borderTW,
    borderRightWidth: borderRW,
    borderBottomWidth: borderBW,
    borderLeftWidth: borderLW,
    borderColor: borderC,
    borderTopColor: borderTC,
    borderRightColor: borderRC,
    borderBottomColor: borderBC,
    borderLeftColor: borderLC,
    borderTopLeftRadius: borderTLR,
    borderTopRightRadius: borderTRR,
    borderBottomLeftRadius: borderBLR,
    borderBottomRightRadius: borderBRR,
    ...getVariantStyles(variant),
    ...rest
  };
  
  return <View style={[inlineStyle, style]}>{children}</View>;
};

export default Box;
