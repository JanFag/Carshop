import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function Addcar() {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
      brand: '', model: '', color: '', fuel: '', year: '', price: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputCnange = (event) => {
    setCar({...car, [event.target.name]: event.target.value})
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
                <Button onClick={handleClose} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}