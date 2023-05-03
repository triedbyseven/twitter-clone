import Home from './Home';
import { HomeScreenProps } from './Home/interfaces';
import Detail from './Detail';
import { DetailProps } from './Detail/interfaces';
import Login from './Login';
import { LoginProps } from './Login/interfaces';
import Register from './Register';
import { RegisterProps } from './Register/interfaces';

const Screens: {
  Home: React.FC<HomeScreenProps>;
  Detail: React.FC<DetailProps>;
  Login: React.FC<LoginProps>;
  Register: React.FC<RegisterProps>;
} = (): void => { };

Screens.Home = Home;
Screens.Detail = Detail;
Screens.Login = Login;
Screens.Register = Register;

export default Screens;