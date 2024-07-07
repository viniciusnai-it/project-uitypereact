import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts/ThemeContextFolder/AppThemeContext';

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();

    return (
        <Routes>
            <Route path="/home" element={ <Button variant='contained' color='primary' onClick={toggleTheme}>Toggle theme</Button> } />

            // isso aqui serve para caso o usuario acesse a url errada ele ja vai ser redirecionado para a url de home por isso eu passo *             
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}