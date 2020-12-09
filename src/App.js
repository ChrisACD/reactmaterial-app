import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveIcon from '@material-ui/icons/Save';
import './App.css';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const useStyle = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



const useStyles1 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));


function App() {
  const classes = useStyles();
  const classe = useStyle();
  const classe1 = useStyles1();


  return (
    <div>
      <div className={classes.root}>
       <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
       </ButtonGroup>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
      </ButtonGroup>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
      </ButtonGroup>
    </div>


<div>
<Button
  variant="contained"
  color="secondary"
  className={classe.button}
  startIcon={<DeleteIcon />}
>
  Delete
</Button>
{/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
<Button
  variant="contained"
  color="primary"
  className={classe.button}
  endIcon={<Icon>send</Icon>}
>
  Send
</Button>
<Button
  variant="contained"
  color="default"
  className={classe.button}
  startIcon={<CloudUploadIcon />}
>
  Upload
</Button>
<Button
  variant="contained"
  disabled
  color="secondary"
  className={classe.button}
  startIcon={<KeyboardVoiceIcon />}
>
  Talk
</Button>
<Button
  variant="contained"
  color="primary"
  size="small"
  className={classe.button}
  startIcon={<SaveIcon />}
>
  Save
</Button>
<Button
  variant="contained"
  color="primary"
  size="large"
  className={classe.button}
  startIcon={<SaveIcon />}
>
  Save
</Button>
</div>

<div className={classe1.root}>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </div>






</div>





  );
}
export default App;