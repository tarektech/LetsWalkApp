import { View, type ViewProps } from 'react-native';

export default function ViewCustom({ children, style, ...props }: ViewProps) {
  return (
    <View style={style} {...props}>
      {children}
    </View>
  );
}
