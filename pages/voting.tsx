import { FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Menu, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import type { NextPage } from 'next';

import styles from '../styles/Dashboard.module.css';

const Voting: NextPage = () => {

    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Select
                            labelId='Name'
                            id='name'
                            label="Name"
                            >
                            <MenuItem>Henry</MenuItem>
                            <MenuItem>Tony Georgy</MenuItem>
                            <MenuItem>Tony Orchard</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel>Sex</FormLabel>
                        <RadioGroup row name="sex" aria-label="Sex">
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            </main>
        </div>
    );
}

export default Voting;