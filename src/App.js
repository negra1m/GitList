import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Container} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Cards from './components/Cards/Cards';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import './App.css';

function App() {

  return (
    <div>
    {/* <HideOnScroll> */}
    <AppBar>
       <Toolbar className="header">
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>
          <Typography className="app-name" variant="h5">
            Git List
          </Typography>
        </Toolbar>
    </AppBar>
    <Toolbar />
    <Container className="container-cards">
    <div>
      <Cards onClick="Add()" ClassName="card" type="add" title="Adicionar" text="Clique para adicionar." action="Add"></Cards>
      <Cards onClick="Srch()" ClassName="card" type="srch" title="Procurar" text="Clique para procurar." action="Search"></Cards>
    </div>
    <div>
      <Cards onClick="Del()" ClassName="card" type="del" title="Apagar" text="Clique para apagar." action="Del" ></Cards>
      <Cards onClick="MyRep()" ClassName="card" type="myrep" title="Meus Repositórios" text="Clique para ver." action="View"></Cards>
    </div>
    </Container> 
    </div>
  );
}
const [open, setOpen] = React.useState(false);

function Add(){
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;