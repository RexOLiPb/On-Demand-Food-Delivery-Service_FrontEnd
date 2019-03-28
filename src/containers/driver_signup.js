import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../store/actions/auth';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class DriverSignup extends React.Component {

  constructor() {
     super();
     this.state = {
     	email: '',
     	password1: '',
     	phone: '',
     	ssn: '',
     	date_of_birth: '',
     	first_name: '',
		last_name: '',
		income: '',
		car_plate: '',
		car_model: '',
		location: '',
     };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = param => (event) => {
     this.setState({
      [param]: event.target.value
     })
  }

  handleSubmit = (e) => {
  	e.preventDefault();
  	console.log(this.state);
  	this.props.onAuth(this.state.email, this.state.password1,
  		this.state.phone, this.state.ssn, this.state.income, this.state.date_of_birth,
  		this.state.first_name, this.state.last_name, this.state.car_plate, this.state.car_model,
  		this.state.location)
  	this.props.history.push('/')
  }

  render () {
	  
	  let errorMessage = null;
	  if (this.props.error) {
	  	errorMessage = (
	  		<p>{this.props.error.message}</p>
	  	)
	  }


	  const { classes } = this.props;

	  return (
	  	<div>
	  		{errorMessage}
	  		{
	  			this.props.loading ?

	  			<CircularProgress className={classes.progress} />

	  			:

			    <main className={classes.main}>
			      <CssBaseline />
			      <Paper className={classes.paper}>
			        <Avatar className={classes.avatar}>
			          <LockOutlinedIcon />
			        </Avatar>
			        <Typography component="h1" variant="h5">
			          Driver Signup
			        </Typography>
			        <form className={classes.form} onSubmit={this.handleSubmit}>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="email">Email</InputLabel>
			            <Input id="email" name="email" value={this.state.email} autoFocus onChange={this.handleChange('email')} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="password1">Password</InputLabel>
			            <Input name="password1" type="password" id="password1" value={this.state.password1} onChange={this.handleChange('password1')} />
			          </FormControl>
			           <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="first_name">First Name</InputLabel>
			            <Input id="first_name" name="first_name" value={this.state.first_name} onChange={this.handleChange('first_name')} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="last_name">First Name</InputLabel>
			            <Input id="last_name" name="last_name" value={this.state.last_name} onChange={this.handleChange('last_name')} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="phone">Phone</InputLabel>
			            <Input id="phone" name="phone" value={this.state.phone} onChange={this.handleChange('phone')} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="income">Income</InputLabel>
			            <Input id="income" name="income" value={this.state.income} onChange={this.handleChange('income')} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="date_of_birth">Date of Birth</InputLabel>
			            <Input id="date_of_birth" name="date_of_birth" value={this.state.date_of_birth} onChange={this.handleChange('date_of_birth')} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="ssn">SSN</InputLabel>
			            <Input id="ssn" name="ssn" value={this.state.ssn} onChange={this.handleChange('ssn')} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="car_plate">Car Plate</InputLabel>
			            <Input id="car_plate" name="car_plate" value={this.state.car_plate} onChange={this.handleChange('car_plate')} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="car_model">Car Model</InputLabel>
			            <Input id="car_model" name="car_model" value={this.state.car_model} onChange={this.handleChange('car_model')} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="location">Location</InputLabel>
			            <Input id="location" name="location" value={this.state.location} onChange={this.handleChange('location')} />
			          </FormControl>
			          <Button
			            type="submit"
			            fullWidth
			            variant="contained"
			            color="primary"
			            className={classes.submit}
			          >
			            Signup
			          </Button>
			          <Button
			            fullWidth
			            variant="contained"
			            color="primary"
			            className={classes.submit}
			            component={Link}
			            to='/login/'
			          >
			            Login
			          </Button>
			        </form>
			      </Paper>
			    </main>
		   	}
		</div>
	  );

  }
}

DriverSignup.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		error: state.error
	}
}

const mapDispatchProps = dispatch => {
	return {
		onAuth: (email, password1, phone, ssn, income, date_of_birth, first_name, last_name, car_plate, car_model, location) => 
		dispatch(actions.authSignupDriver(email, password1, phone, ssn, income, date_of_birth, first_name, last_name, car_plate, car_model, location))
	}
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchProps)(DriverSignup));


