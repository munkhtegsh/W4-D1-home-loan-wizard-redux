import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateRealState } from '../../ducks/reducer';

class WizardFive extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={() => this.props.updateRealState('True')}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={() => this.props.updateRealState('False')}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

let mapPropsToState = (state) => {
    return {
        realEstateAgent: state.realEstateAgent
    }
}

let actionCreators = (
    { updateRealState }
)
export default connect(mapPropsToState, actionCreators)(WizardFive);