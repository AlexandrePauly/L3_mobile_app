import React, { useState } from 'react';
import './index.css';

// Images
import image1 from './assets/image-1.jpg';
import image2 from './assets/image-2.jpg';
import image3 from './assets/image-3.jpg';

// Material
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Adb';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function App() {
  const [selectedItem, setSelectedItem] = useState('home');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    const tabImages = [image1, image2, image3]
    switch (selectedItem) {
      case 'home':
        return <HomePage />;
      case 'table':
        return <TablePage />;
      case 'about':
        return (
          <div className="card_container">
          {tabImages.map((item, index) => (
            <CardPage key={index} image={item} />
          ))}
        </div>
        );
      case 'register':
        return <RegisterPage onItemClick={handleItemClick}/>
      default:
        return null;
    }
  };

  return (
    <div className="box">
      <NavBar onItemClick={handleItemClick} />
      {renderContent()}
    </div>
  );
}

const HomePage = () => {
  return (
    <div>
      <h1>Base UI + Create React App scaffold (JavaScript)</h1>
      <div className="item">
        <a href="https://mui.com/base-ui/">Base UI</a> is a library of unstyled React UI components
        and hooks.
      </div>
      <div className="item">
        <a href="https://create-react-app.dev/">Create React App</a> is a framework for quickly
        creating a new React project without the need to configure complex build tools or
        development environments.
      </div>
      <span>
        Created with 💙 by <a href="https://mui.com">MUI</a>.
      </span>
    </div>
  );
};

const NavBar = ({ onItemClick }) => {
  return (
    <Box className="navbar" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button>
            <Link href="#" color="white" underline="none" onClick={() => onItemClick('home')}>Home</Link>
          </Button>
          <Button>
            <Link href="#" color="white" underline="none" onClick={() => onItemClick('table')}>Table</Link>
          </Button>
          <Button>
            <Link href="#" color="white" underline="none" onClick={() => onItemClick('about')}>About us</Link>
          </Button>
          <Button>
            <Link href="#" color="white" underline="none" onClick={() => onItemClick('register')}>Register</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const CardPage = ({image}) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lorem ipsum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse corrupti cum facere sapiente. Sint quo quis officia ea quas non hic ipsa suscipit reiciendis nulla quod commodi, placeat autem!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const TablePage = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const RegisterPage = ({onItemClick}) => {  
  const [name, setName] = useState(''); 
  const [password, setPassword] = useState('');

  const checkForm = () => {
    // Vérifiez si les champs sont tous remplis
    if (name.trim() !== '' && password.trim() !== '') {
      onItemClick('home');
    }
  };

  return (
    <div className="table">
      <Box
        className="card_container"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-required"
            label="Name"
            defaultValue=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Password"
            defaultValue=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button>
            <Link href="#" underline="none" onClick={() => checkForm()}>Register</Link>
        </Button>
      </Box>
    </div>
  );
}