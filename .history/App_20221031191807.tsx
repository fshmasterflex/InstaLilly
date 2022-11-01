import { View, Text } from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ color: colors.primary, }}>Brooo</Text>
      <Text style={{color: colors.red, fontWeight: weight.semi}}>Stop that!</Text>
    </View>
  );
};

export default App;

