import { createHashRouter } from "react-router-dom";
import App from "./App.jsx";
import Charts from "./routes/Charts.jsx";
import Movies from "./routes/Movies.jsx";

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Charts />
            },
            {
                path: 'movies',
                element: <Movies />
            },
            {
				path: '*',
				element: <Charts />
			}
        ]
    }
])

export { router }