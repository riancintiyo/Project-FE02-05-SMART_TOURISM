import React from 'react';
import RegistrationForm from './RegistrationForm';
import { Paper, makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
        pageContent: {
            margin: theme.spacing(5),
            padding: theme.spacing(3)
        }
}))

const Registration = () => {

    const classes = useStyle();

    return (
        <>
            <Paper classNames={classes.pageContent}>
                <RegistrationForm />
            </Paper>
        </>
    )
};

export default Registration
