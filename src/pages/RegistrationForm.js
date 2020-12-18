import { TextField, Grid, makeStyles, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react'

const useStyle = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1),
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(1)
        }
    }
}))

const initialFValues = {
    id:0,
    name: '',
    price:'',
    address: '',
    description: '',
}

function RegistrationForm() {

    const [values, setValues] = useState(initialFValues);
    const classes = useStyle();

    const handleInputChange = event => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <form className={classes.root} justify='center' display='flex'>
            <Grid container spacing={1  } >
                <Grid item xs={6}>
                    <TextField 
                        variant="outlined"
                        label="Nama Tempat"
                        name="namatempat"
                        value={values.name}
                        onChange ={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                <TextField 
                        variant="outlined"
                        label="Harga"
                        name="harga"
                        value={values.price}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1}>    
                <Grid item xs={12}>
                <TextField 
                        variant="outlined"
                        label="Alamat"
                        name="alamat"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        variant="outlined"
                        label="Description"
                        multiline
                        rows={4}
                        name="description"
                        value={values.description}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Button variant="contained" color="primary">Kirim</Button>
            </Grid>
        </form>
    )
}

export default RegistrationForm
