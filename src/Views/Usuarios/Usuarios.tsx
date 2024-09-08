import { ScopedCssBaseline, Container, Box, Typography, Divider } from '@mui/material';
import { Stack } from '@mui/material';

import { UsuarioStyles } from './UsuarioStyles';

function Usuarios() {
    const styles = UsuarioStyles;

    return (
        <>
            <ScopedCssBaseline />
            <Container fixed>
                <Box component="main" sx={styles.box}>
                    <Typography variant="h6" component="h1" gutterBottom sx={styles.title}>
                        Usuarios del sistema
                    </Typography>
                    <Stack direction="row" spacing={2} >
                        <Typography variant="caption">
                            Usuarios del sistema para la reserva de lugares en oficinas.
                        </Typography>
                    </Stack>
                    <Divider variant="fullWidth" />
                </Box>
            </Container>
        </>
    );
}

export { Usuarios };