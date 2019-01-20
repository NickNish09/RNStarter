import { Navigation } from 'react-native-navigation';

import { Home } from './home/Home';
import { Counter } from './counter/Counter';

export interface IScreen {
  componentId: string;
  testID?: string;
}

export const Screens = new Map();

export const HOME = 'rnstarter.Home';
export const COUNTER = 'rnstarter.Counter';

Screens.set(HOME, Home);
Screens.set(COUNTER, Counter);

export const startApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'ROOT_STACK',
        children: [{
          component: { name: HOME },
        }],
      },
    },
  });
};
