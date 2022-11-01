import { View, Text } from 'react-native';
import colors from './src/theme/colors';
import weight from './src/theme/fonts';
import size from './src/theme/fonts';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ color: colors.primary, fontSize: size.}}>Brooo</Text>
      <Text style={{color: colors.red, fontWeight: weight.weight.normal}}>Stop that!</Text>
    </View>
  );
};

export default App;

