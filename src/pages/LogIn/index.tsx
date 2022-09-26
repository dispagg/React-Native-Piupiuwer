import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LogIn from '../../templates/LogIn';

type LogInInterface = {
  LogIn: undefined,
  Feed: undefined
}

const LogInPage = ({ navigation }: NativeStackScreenProps<LogInInterface, 'LogIn'>) => (<LogIn navigation={navigation} />);

export default LogInPage;
