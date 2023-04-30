import { TouchableOpacity } from 'react-native';
import { getButtonSize } from '../../utils/getButtonSize';
import { styles } from './styles';
import theme from '../../utils/theme';

export function Button({
  children,
  columns,
  margin,
  isSpan,
  isActive,
  onPress,
}) {
  const buttonSize = getButtonSize(columns, margin);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { width: isSpan ? buttonSize * 2 + 8 : buttonSize },
        { height: buttonSize },
        { borderRadius: buttonSize / 2 },
        { backgroundColor: theme.colors[isActive ? 'primary' : 'base_4'] },
        { margin: margin },
      ]}
      activeOpacity={0.7}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
