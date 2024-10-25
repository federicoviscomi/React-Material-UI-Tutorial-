import { Box, Divider, Stack, Grid2 as Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
    return (
        (<Paper sx={{ padding: '32px' }} elevation={4}>
            <Stack
                sx={{ border: '1px solid' }}
                direction='row'
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
            >
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        height: '100px',
                        width: '100px',
                        padding: '16px',
                        '&:hover': {
                            backgroundColor: 'primary.light'
                        }
                    }}>
                    MuiLayout
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        height: '100px',
                        width: '100px',
                        bgcolor: 'success.light',
                        p: 2
                    }}>

                </Box>
            </Stack>
            <Grid container spacing={2} sx={{
                my: 4
            }}>
                <Grid sx={{ xs: 'auto' }}>
                    <Box
                        sx={{
                            bgcolor: 'primary.light',
                            p: 2
                        }}>Item 1</Box>
                </Grid>
                <Grid sx={{ xs: 'auto' }}>
                    <Box
                        sx={{
                            bgcolor: 'primary.light',
                            p: 2
                        }}>Item 2</Box>
                </Grid>
                <Grid sx={{ xs: 'auto' }}>
                    <Box
                        sx={{
                            bgcolor: 'primary.light',
                            p: 2
                        }}>Item 3</Box>
                </Grid>
                <Grid sx={{ xs: 'auto' }}>
                    <Box
                        sx={{
                            bgcolor: 'primary.light',
                            p: 2
                        }}>Item 4</Box>
                </Grid>
            </Grid>
        </Paper>)
    );
};