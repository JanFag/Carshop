import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Addcar from './Addcar';
import Editcar from './Editcar';


export default function Carlist(){
const [cars, setCars] = useState([]);

useEffect(() => fetchData(), []);

const fetchData = () => {
    fetch('https://carstockrest.herokuapp.com/cars')
    .then(response => response.json())
    .then(data => setCars(data._embedded.cars))
};

const [open, setOpen] = useState(false);
const handleClick = () => {
    setOpen(true);
};

const deleteCar = (link) => {
    if(window.confirm('Are you sure?')){
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
        handleClick();
    }
    
};

const handleClose = (event, reason) => {
    if(reason === 'clickaway') {
        return;
    }

    setOpen(false);
};

const saveCar = (car) => {
    fetch('https://carstockrest.herokuapp.com/cars', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
};

const updateCar = (car, link) => {
    fetch(link, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    }) 
    .then(res => fetchData())
    .catch(err => console.error(err))

};

const columns = [
    {
        Header: 'Brand',
        accessor: 'brand'
    },
    {
        Header: 'Model',
        accessor: 'model'
    },
    {
        Header: 'Color',
        accessor: 'color'
    },
    {
        Header: 'Fuel',
        accessor: 'fuel'
    },
    {
        Header: 'Model',
        accessor: 'model'
    },
    {
        Header: 'Year',
        accessor: 'year'
    },
    {
        Header: 'Price',
        accessor: 'price'
    },
    {
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: row => <Editcar updateCar={updateCar} car={row.original}/>
        
    },
    {
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: row => <Button size="small" color="secondary" onClick={()=> deleteCar(row.value)} >Delete</Button>
        
    }
]

    return (
        <div>
            <Addcar saveCar={saveCar}/>
        <ReactTable filterable={true} data={cars} columns={columns} />
        <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="The car was deleted"
                action={
        <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
              Close
        </Button>
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              
        </IconButton>
        </React.Fragment>
        }
        />
        </div>
    )
}