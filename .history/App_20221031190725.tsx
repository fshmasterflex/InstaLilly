import { View, Text } from 'react-native';
import colors from './src/heme/colors';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary}}>Brooo</Text>
    </View>
  );
};

export default App;

