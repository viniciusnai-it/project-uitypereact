import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts/DrawerContextFolder/useDrawerContext';
import { useEffect } from 'react';


export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    useEffect(() => {
      setDrawerOptions([
        {
          icon: 'home',
          path: '/pagina-inicial',
          label: 'Página inicial',
        },
      ]);
    }, [setDrawerOptions]);
    
    return (
        <Routes>
            <Route path="/pagina-inicial" element={ <Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle Drawer</Button> } />

            // isso aqui serve para caso o usuario acesse a url errada ele ja vai ser redirecionado para a url de home por isso eu passo *             
            <Route path="*" element={<Navigate to="/pagina-inicial  " />} />
        </Routes>
    );
}