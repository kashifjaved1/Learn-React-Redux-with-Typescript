import { Provider } from "react-redux";
import {store} from '../Redux';
import { Currencies } from "./Currencies";

const App = () => {
    return <Provider store={store}>
        <div>
            <h1>
                Find Currency
            </h1>
            <Currencies />
        </div>
    </Provider>
}

export default App;
