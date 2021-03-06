import React from 'react'
import Event from './entrance'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from "@material-ui/styles"
import {
  CssBaseline,
  Typography,
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

class App extends React.Component {
	state = {
		data: []
	}

	componentDidMount() {
		fetch('https://api.airtable.com/v0/appxyvvJ7pdLqLxYO/Table%201?api_key=keyKJ9xVsfuwehiME')
			.then(res => res.json())
			.then(res => {
				console.log(res.records)
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
	}

  render(){
		const {data} = this.state
			return (
				<ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography style={{ marginTop: 50 }}>
	  
				
	<div
          style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      	><video
		autoplay="true"
		muted="true"
		width='980'
		height='550'
		preload='true'
		loop='true'
        	controls
        	style={{ backgroundColor: "black" }}
        	controlsList="nodownload"
      	><source
          src="https://res.cloudinary.com/chakolas/video/upload/v1606559057/Pavilion_t0e46w.mp4"
          type="video/mp4"
        /></video></div>
		    	<Grid container direction='row'>
		     	{data.map(book => (
		      		<Event {...book.fields} key={book.fields.id} />
					))}
				</Grid>
				<div align="center" justify="center" ><h4><footer>&copy; Copyright 2020 <a href="https://aks.one">https://aks.one</a></footer></h4></div>
				</Typography>
				</ThemeProvider>
			)
		}
}

export default App
