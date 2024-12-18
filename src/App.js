import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "./components/ui/provider";
import { Box, Container } from "@chakra-ui/react";

// pages
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import RedirectExample from './pages/RedirectExample';
import ProjectsIndex from './pages/projects/Index';
import ProjectsShow from './pages/projects/Show';

//components
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Provider>
            <Router>
                <Box className='bg-gradient-to-b min-h-screen'>
                    <Navbar />
                    <Container maxW="container.xl" className="min-h-screen">
                        <Routes>
                            <Route path={"/"} element={<Home />} />
                            <Route path={"/redirect-example"} element={<RedirectExample />} />
                            <Route path={"/projects"} element={<ProjectsIndex />} />
                            <Route path={"/projects/:slug"} element={<ProjectsShow />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </Container>
                </Box>
            </Router>
        </Provider>
    );
};

export default App;