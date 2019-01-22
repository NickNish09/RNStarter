import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { observer } from 'mobx-react';
import { Navigation } from 'react-native-navigation';
import CodePush from 'react-native-code-push';

import { UIStore } from 'stores/UIStore';
import { codePushConfig } from 'utils/code-push';
import { COUNTER, IScreen } from 'screens';
import { Button } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const s = require('./Home.scss');

@CodePush(codePushConfig())
@observer
export class Home extends React.Component<IScreen> {

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Entrar',
        },
      },
    };
  }

  componentWillMount() {
    SplashScreen.hide();
  }

  componentDidAppear() {
    UIStore.setComponentId(this.props.componentId);
  }

  onCounterScreenPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: COUNTER,
      },
    });
  }

  render() {
    return (
      <View style={s.host} testID="HOME_SCREEN">
        <View style={s.content}>
          <Image
            style={s.logo}
            source={require('assets/images/logo.png')}
            resizeMode="contain"
          />
          <Text style={s.text}>Bem vindo à Template</Text>
          <Input
            placeholder='Email'
            leftIcon={
              <Icon
                name='at'
                size={24}
                color='black'
              />
            }
          />
          <Input
            placeholder='Senha'
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color='black'
              />
            }
          />
        </View>

        <Button
          raised
          style={s.marginBtm}
          buttonStyle={s.btnlogin}
          icon={
            <Icon
              name='sign-in'
              size={24}
              color='white'
            />
          }
          title='Entrar' />

        <Button
          raised
          buttonStyle={s.btnsignup}
          icon={
            <Icon
              name='user-plus'
              size={24}
              color='white'
            />
          }
          onPress={this.onCounterScreenPress} title="Novo usuário? Registrar-se" />
      </View>
    );
  }
}
