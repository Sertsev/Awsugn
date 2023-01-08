import React, {useState} from 'react'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Box, TextField, InputAdornment, Button } from '@mui/material'
import axios from 'axios';



const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#ff712c',
            string: '#ff712c',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#ff712c',
            string: '#ff712c'
        },
    },
});

export default function Subscription() {
    const [number, setNum] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMsg] = useState('');

    const handleNumbers = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setNum(value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleMsg = (e) => {
        setMsg(e.target.value);
    };

    const handleSubmit = async (e) => {
        // console.log(email, name, number)
        try {
            const resp = await axios.post('http://awsugnmmvp.sertsev.com/store/api/subscribers', {
                name: name,
                number: number,
                email: email,
                message: message
            });
            console.log(resp.data);
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <ThemeProvider className='input-fields' theme={theme}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    onChange={handleName}
                    id="outlined-basic"
                    label="Name"
                    value={name}
                    variant="outlined"
                    required
                    error={!name}
                    helperText={!name ? "Name is required!":""} />
                <TextField
                    onChange={handleNumbers}
                    id="outlined-basic"
                    InputProps={{
                    startAdornment: <InputAdornment position="start" color='secondary'>+251</InputAdornment>,
                    }}
                    label="Phone Number"
                    value={number}
                    variant="outlined" />
                <br />
                <TextField
                    onChange={handleEmail}
                    id="outlined-basic"
                    label="Email"
                    type='email'
                    variant="outlined"
                    helperText='Please make sure to type a valid email: "example@example.com"'/>
                <TextField
                    onChange={handleMsg}
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    placeholder='if you have messages please write here'
                    multiline
                    maxRows={3} />
            </Box>
            <Button
                onClick={handleSubmit}
                variant="outlined"
                style={{ width: '58%', margin: 20, height: 45 }}
            >
                Notify Me
            </Button>
        </ThemeProvider>
    )
}
