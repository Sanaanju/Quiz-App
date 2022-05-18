import Dashboard from './Dashboard';
import { Route, Router } from 'react-router-dom';
import QuizHome from './QuizHome';
import { useLocation } from 'react-router';

function Path()
{
    let location = useLocation();
    console.log(location);
    return (
        <>
            <Router>
                <Route path="/" exact element={<Dashboard />} />
                <Route
                    path="/quiz/:category/:level"
                    element={<QuizHome location={location} />}
                />
            </Router>
        </>
    );
}

export default Path;