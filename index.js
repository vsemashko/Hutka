import { AppRegistry, YellowBox } from 'react-native';
import Application from './src';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Remote debugger']);

AppRegistry.registerComponent(appName, () => Application);
