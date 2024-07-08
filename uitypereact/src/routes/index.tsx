import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts/DrawerContextFolder/useDrawerContext';

export const AppRoutes = () => {
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Routes>
            <Route path="/home" element={ <Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle Drawer</Button> } />

            // isso aqui serve para caso o usuario acesse a url errada ele ja vai ser redirecionado para a url de home por isso eu passo *             
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}