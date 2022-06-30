import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Student from './component/showStudent/showStudent.js';
import Create from './component/createStudent/createStudent.js';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className='appBar' position="startic" color="inherit">
          <Typography className='heading' varient="h2" align="center">
            Students Create & Show
          </Typography>
        </AppBar>
      </Container>
      <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="strect">
              <Grid item xs={12} sm={7}>
                <AppBar
                  className='appBar'
                  position="static"
                  color="inherit"
                >
                  <Student />
                </AppBar>
              </Grid>

              <Grid item xs={12} sm={4}>
                <AppBar
                  className='appBar'
                  position="static"
                  color="inherit"
                >
                  <Create />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
        
    </div>
  );
}

export default App;

