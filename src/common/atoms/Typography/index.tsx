import React from 'react';
import { Text, TextProps } from 'react-native';
import { TypographyProps } from '../types';

const Typography: React.FC<TypographyProps & TextProps> = (props) => {
  const {
    children,
    color = 'black',
    size = 18,
    weight = '400',
    fontFamily,
    lineHeight,
    alignment = 'left',
    transform,
    decoration,
    letter,
    opacity,
    style,
    m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py
  } = props;

  const inlineStyle: any = {
    color: color,
    fontSize: size,
    fontWeight: weight,
    fontFamily: fontFamily,
    lineHeight: lineHeight,
    textAlign: alignment,
    textTransform: transform,
    textDecorationLine: decoration,
    letterSpacing: letter,
    opacity: opacity,
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
  };

  return <Text style={[inlineStyle, style]}>{children}</Text>;
};

export default Typography;
