import { AppRegistry , Platform } from 'react-native';
import App from './App';

if(Platform.OS==='android'){
    AppRegistry.registerComponent('etimesheet', () => App);
} else {
    AppRegistry.registerComponent('ranonative', () => App);
}