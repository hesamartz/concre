import { useState } from 'react';
import { ScopedCssBaseline, Container, Box, Typography, Divider, Alert } from '@mui/material';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import { Button, Stack } from '@mui/material';

import { InicioStyles } from './InicioStyles';

function Inicio() {
    const [count, setCount] = useState(0);
    const styles = InicioStyles;

    //return (
    //    <>
    //        <ScopedCssBaseline />
    //        <Container fixed>
    //            <Box component="main" sx={styles.box}>
    //                <Typography variant="h6" component="h1" gutterBottom style={styles.title}>
    //                    Reserva de Lugares
    //                </Typography>
    //                <Stack direction="row" spacing={2} >
    //                    <Typography variant="caption">
    //                        Sistema para la reserva de lugares en oficinas.
    //                    </Typography>
    //                </Stack>
    //                <Divider variant="middle" />
    //            </Box>
    //            <Box sx={styles.contentBox}>
    //                <Stack direction="row" spacing={2} alignItems="center">
    //                    <Button variant="contained" color="primary" onClick={() => setCount((count) => count + 1)}>
    //                        <AirlineSeatReclineNormalIcon />
    //                        <span>Reservar lugar {count}</span>
    //                    </Button>
    //                </Stack>
    //            </Box>
    //        </Container>
    //    </>
    //);

    return (
        <>
            <ScopedCssBaseline />
            <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
                <Box>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Bienvenido a la Reserva de Lugares
                    </Typography>
                    <Typography variant="h6" component="p" gutterBottom>
                        Esta es la p&aacute;gina de inicio de nuestra aplicaci&oacute;n. Aqu&iacute; puedes gestionar y reservar lugares de manera eficiente.
                    </Typography>
                    <Divider variant="middle" />
                    <Box sx={styles.contentBox}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Alert severity="info">Lugares disponibles {count}</Alert>
                            <Button variant="contained" color="primary" onClick={() => setCount((count) => count + 1)}>
                                <AirlineSeatReclineNormalIcon />
                                <span>Reservar lugar</span>
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export { Inicio };