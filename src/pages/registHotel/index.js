import React from 'react';
import RegistrationForm from './registForm';
import { Paper, makeStyles } from '@material-ui/core'
import { Navbar } from '../../components'

const useStyle = makeStyles(theme => ({
        pageContent: {
            margin: theme.spacing(5),
            padding: theme.spacing(3)
        }
}))

const RegistHotel = () => {

    const classes = useStyle();

    return (
        <>
            <Paper classNames={classes.pageContent}>
            <Navbar />
                <RegistrationForm />
            </Paper>
        </>
    )
};

export default RegistHotel