import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: font.size.xxlg}}>
        Brooo
      </Text>
      <AntDesign name="stepforward" size={16} />
      <Text
        style={{
          color: colors.black,
          fontWeight: font.weight.bold,
          fontSize: font.size.xxlg,
        }}>
        Stop that!
      </Text>
    </View>
  );
};

export default App;
