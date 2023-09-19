import React, { Component } from 'react';
import Header from './Header/Header';
import Todo from './Todo';
import Auth from './Auth/Auth';
import Logout from "./Auth/Logout"
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authCheck } from '../redux/authActionCreators';

import { useEffect } from 'react';

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
    }
}

// const Main = ()=>{



// useEffect(() => {


//     let data = props;

//     const check = (data)=>{

//         data.authCheck();

//     }

//     check();
    
    
//   }, []);

// let routes = null;
// if (this.props.token === null) {
//     routes = (
//         <Switch>
//             <Route path="/login" component={Auth} />
//             <Redirect to="/login" />
//         </Switch>
//     )
// } else {
//     routes = (
//         <Switch>

//             <Route path="/logout" component={Logout} />
//             <Route path="/" exact component={Todo} />
//             <Redirect to="/" />
//         </Switch>
//     )
// }
//     return(
//         <div>
//             <Header />
//             <div className="container">
//                 HI
//             </div>
//         </div>
//     )
// }


class Main extends Component {
    componentDidMount() {
        this.props.authCheck();
    }
    render() {
        let routes = null;
        if (this.props.token === null) {
            routes = (
                <Switch>
                    <Route path="/login" component={Auth} />
                    <Redirect to="/login" />
                </Switch>
            )
        } else {
            routes = (
                <Switch>
      
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={Todo} />
                    <Redirect to="/" />
                </Switch>
            )
        }
        return (
            <div>
                <Header />
                <div className="container">
                    {routes}
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);