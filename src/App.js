import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Education } from './Components/Education';
import { WorkExperience } from './Components/WorkExperience';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { Certifications } from './Components/Certifications';
import { Contacts } from './Components/Contacts';
import { ErrorPage } from './Components/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {index: true, element: <Home/>},
        { path: "education", element: <Education/> },
        { path: "work-experience", element: <WorkExperience/> },
        { path: "certifications", element: <Certifications/> },
        { path: "projects", element: <Projects/>, 
          // children:[{path:'bliss-india', element:<BlissIndia/>}] 
        },
        { path: "skills", element: <Skills/> },
        { path: "contacts", element: <Contacts/> },
      ],
      // errorElement:<ErrorPage/>
    },
    {path: "*", element:<ErrorPage/>}
  ])
  return (
    <RouterProvider router={router} >
      </RouterProvider>
  );
}

export default App;
