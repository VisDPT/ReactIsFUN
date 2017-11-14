import React from 'react';
import { Link } from 'react-router';
//main.js is parent, child is notesgrid or single; react router handles the swapping out
// {React.cloneElement(this.props.children, this.props)}   this passes props from parent to Child 

const Main = React.createClass({
    render(){
        return(
            <div>
            <h1>
            <Link to="/"> H1 TITLE </Link> 
            </h1>
            {React.cloneElement(this.props.children, this.props)}
            
            </div>
        )
    }
});

export default Main;