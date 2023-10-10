import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Sidebar from '../composants/sidebar'
// import Navbar from '../composants/navbar';

import Log from '../pages/login';

import { PageAdmin } from './routes-auth';
import { Update } from '../pages/admin/update';

export default function AppRouting() {
    return (
        <BrowserRouter>
            <Navbar />
            <Sidebar />
            <Routes>

                {/* S'affichera que l'utilisateur soit connecté ou non */}

                {/* Ne s'affichera plus si l'utilisateur est connecté */}
                <Route path="/signin" element={<Log />} />

                {/* Ne s'affichera que si le role est admin */}
                <Route path="/admin" >
                    <Route path="/admin/gestion" element={<PageAdmin />} />
                    <Route path="/admin/update/:id" element={< Update />} />
                </Route>

            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}
