import { TextField, Grid, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'

const useStyle = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

const initialFValues = {
    id:0,
    name: '',
    photo:'',
    address: '',
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
        <form className={classes.root}>
            <div className='registHotel'>
            <h3>Registrasi Hotel</h3>
            <h5>Input Data Hotel</h5>
            <Grid container>
                <Grid item xs={5}>
                    <TextField 
                    variant="outlined"
                    label="Nama Hotel"
                    name="namahotel"
                    value={values.name}
                    onChange ={handleInputChange}
                    />
                </Grid>
                <Grid item xs={5}>
                <TextField 
                    variant="outlined"
                    label="Foto Hotel"
                    name="fotohotel"
                    value={values.photo}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={11}>
                    <TextField 
                    variant="outlined"
                    label="Alamat Hotel"
                    name="alamathotel"
                    className='alamatHotel'
                    value={values.address}
                    onChange={handleInputChange}
                    />
                    </Grid>
                </Grid>
                <Button className='btnKirim' color="warning">Kirim</Button>{" "}
            </div>
        </form>
    )
}

export default RegistrationForm