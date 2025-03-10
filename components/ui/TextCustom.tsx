import { Text, type TextProps } from 'react-native';


export default function TextCustom({
  children,
  style,
  ...props
}: TextProps) {
  return <Text style={style} {...props}>{children}</Text>;
}
