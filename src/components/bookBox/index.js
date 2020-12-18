import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  return (
    <main className="cover-page" id="hero">
        <section className="wrapped-page">
        {/* <div className="item-center"> */}
            <div className='datePick'>
                <form className={classes.container} noValidate>
                    <div className='box'>
                    <form>
                        <label>
                            Destination
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Departure:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Hotel:
                            <input type="text" name="name" />
                        </label>
                        </form>
                        </div>
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue="2020-12-17"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <Button className='btn_book' color="warning">Book</Button>{" "}
                </form>
            </div>
            {/* </div> */}
        </section>
    </main>
  );
}