import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateFound } from '../../ducks/reducer';
class WizardFour extends Component {
    render(){
        console.log(this.props)
        console.log(this.props.updateFound)
        return(
            <div className="parent-div">
                <div className="vert-align">            
                    <p>Have you already found your new home?</p> <br />
                    
                    <div className="row">
                        <Link to="/wFive"><button onClick={() => this.props.updateFound('True')}>Yes</button></Link>
                        <Link to="/wFive"><button onClick={() => this.props.updateFound('False')}>No </button></Link>  
                    </div>         
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        found: state.found
    }
}

let actionCreators = {
    updateFound
}

export default connect(mapStateToProps, actionCreators)(WizardFour);