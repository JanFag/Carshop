import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export default function Addcar(props) {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
      brand: '', model: '', color: '', fuel: '', year: '', price: ''
  });

  const [open1, setOpen1] = React.useState(false);
  
  
  
  const handleClose = () => {
      
      setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = (event, reason) => {
    if(reason === 'clickaway') {
        return;
    }

    setOpen1(false);
};

  const handleInputCnange = (event) => {
    setCar({...car, [event.target.name]: event.target.value})
  };

  const handleClick1 = () => {
    setOpen1(true);
};
  const addCar = () => {
      props.saveCar(car);
      handleClose();
      handleClick1();
  };
    return (
        <div>
        <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
            Add Car
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Car</DialogTitle>
                <DialogContent>        
                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={car.brand}
                        onChange={e => handleInputCnange(e)}
                        label="Brand"                        
                        fullWidth
                    />
                     <TextField
                        
                        margin="dense"
                        name="model"
                        value={car.model}
                        onChange={e => handleInputCnange(e)}
                        label="Model"                        
                        fullWidth
                    />
                     <TextField
                        
                        margin="dense"
                        name="color"
                        value={car.color}
                        onChange={e => handleInputCnange(e)}
                        label="Color"                        
                        fullWidth
                    />
                     <TextField
                        
                        margin="dense"
                        name="fuel"
                        value={car.fuel}
                        onChange={e => handleInputCnange(e)}
                        label="Fuel"                        
                        fullWidth
                    />
                     <TextField
                        
                        margin="dense"
                        name="year"
                        value={car.year}
                        onChange={e => handleInputCnange(e)}
                        label="Year"                        
                        fullWidth
                    />
                     <TextField
                        
                        margin="dense"
                        name="price"
                        value={car.price}
                        onChange={e => handleInputCnange(e)}
                        label="Price"                        
                        fullWidth
                    />
                </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={addCar} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
        <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open1}
                autoHideDuration={6000}
                onClose={handleClose1}
                message="The car was added"
                action={
                    <React.Fragment>
                    <Button color="secondary" size="small" onClick={handleClose1}>
                        Close
                    </Button>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose1}>              
                    </IconButton>
                    </React.Fragment>
        }
        />
    </div>
    );
}