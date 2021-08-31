import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Login() {
    return (
       <Grid container>
<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>




</Grid>
<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
    <Typography>PRODUCT APP</Typography>
<TextField 
label="product code"
required
fullWidth
type="text"
variant="outlined"
margin="normal"
/>
<TextField 
label="product name"
required
fullWidth
margin="normal"
type="text"
variant="outlined"
/>
<TextField 
label="seller name"
required
fullWidth
type="text"
variant="outlined"
margin="normal"
/>
<TextField
label="manufacture name"
required
fullWidth
type="text"
variant="outlined"
margin="normal"
/>
<TextField
type="text"
label="manufacturing year"
required
fullWidth
variant="outlined"
margin="normal"
/>
<TextField 
type="text"
variant="outlined"
label="MRP"
required
fullWidth
margin="normal"
/>
<Button color="secondary" variant="contained" margin="normal" fullWidth>Login</Button>


</Grid>
<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>






</Grid>




       </Grid>



    )
}
