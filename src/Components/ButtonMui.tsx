import {
    Stack, 
    Button, 
    IconButton, 
    ButtonGroup, 
    ToggleButtonGroup, 
    ToggleButton
    } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {useState} from 'react'


const ButtonMui = () =>{

    const [formats, setFormats] = useState<string | null >(null);
    console.log({
        formats,
    })
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
       setFormats(updatedFormats); 
    }

return(
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'> 
            <Button variant='text' href='https://www.google.com'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Contained</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={ () => alert('clicked')}> send</Button>
            <Button variant='contained' startIcon={<SendIcon />} disableElevation> send</Button>

            <IconButton area-label='send' color='success' size='small' >
                <SendIcon />
            </IconButton>
        </Stack>
        <Stack  direction='row'>
            <ButtonGroup variant='contained' 
            orientation='vertical' 
            size='small' 
            color='secondary'
            aria-label='alignment button group'>
                 <Button onClick={() => alert('left clicked')}>Left</Button>
                 <Button onClick={() => alert('center clicked')}>Center</Button>
                 <Button onClick={() => alert('right clicked')}>Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup ariaa-label='text formatting' 
            value={formats} 
            onChange={handleFormatChange}
            size='small'
            color='success'
            exclusive>
                <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
                <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
)
}
export default ButtonMui