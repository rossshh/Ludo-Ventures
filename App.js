import { Text, View } from "react-native"
import LudoBoardscreen from "./src/screens/LudoBoardscreen"
import { Provider } from 'react-redux';
import { persistor } from "./src/redux/store";
import Navigation from './src/navigation/Navigation'

const App=()=>{
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  )
}
export default App;