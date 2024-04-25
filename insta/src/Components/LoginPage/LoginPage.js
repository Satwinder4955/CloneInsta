import React,{Component}from 'react';
import Grid from '@material-ui/core/Grid';
// import inst_img from '../../images';
// import inst_logo from './images/insta.png';


class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div Container>
                <Grid>
                    <Grid item xs={3}>
                        Hello
                    </Grid>
                    <Grid item xs={6}>
                        {/* <div>
                            <div>
                                <img src='inst_img' width={450}></img>
                            </div>
                        </div> */}
                        {/* <div>
                            <div>
                                <img src='inst_logo' width={450}></img>
                            </div>
                        </div> */}
                    </Grid>
                    <Grid item xs={3}>
                        Instagram
                    </Grid>
                </Grid>

            </div>
        )
    }
}

export default LoginPage;