import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import GlobalContextProvider from './context/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalContextProvider>
        <App />
    </GlobalContextProvider>
)
