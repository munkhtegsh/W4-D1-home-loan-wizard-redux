let initState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
};
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE"
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP =  "UPDATE_PROP";
const UPDATE_FOUND = "UPDATE_FOUND";
const UPDATE_REALSTATE = "UPDATE_REALSTATE";
const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HISTORY = "UPDATE_HISTORY";
const UPDATE_ADDRESS_ONE = "UPDATE_ADDRESS_ONE";
const UPDATE_ADDRSS_TWO = "UPDATE_ADDRSS_TWO";
const UPDATE_ADDRESS_THREE = "UPDATE_ADDRESS_THREE";
const UPDATE_FIRST = "UPDATE_FIRST";
const UPDATE_LAST = "UPDATE_LAST";
const UPDATE_EMAIL = "UPDATE_EMAIL";

function reducer(state = initState, action){
    switch(action.type) {
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload});
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload});
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});
        case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn: action.payload});
        case UPDATE_FOUND:
            return Object.assign({}, state, {found: action.payload});
        case UPDATE_REALSTATE:
            return Object.assign({}, state, {realEstateAgent: action.payload});
        case UPDATE_COST:
            return Object.assign({}, state, {cost: action.payload});
        case UPDATE_DOWNPAYMENT:
            return Object.assign({}, state, {downPayment: action.payload});
        case UPDATE_CREDIT:
            return Object.assign({}, state, {credit: action.payload});
        case UPDATE_HISTORY:
            return Object.assign({}, state, {history: action.payload});
        case UPDATE_ADDRESS_ONE:
            return Object.assign({}, state, {addressOne: action.payload});
        case UPDATE_ADDRSS_TWO:
            return Object.assign({}, state, {addressTwo: action.payload});
        case UPDATE_ADDRESS_THREE:
            return Object.assign({}, state, {addressThree: action.payload});
        case UPDATE_FIRST:
            return Object.assign({}, state, {firstName: action.payload});
        case UPDATE_LAST:
            return Object.assign({}, state, {lastName: action.payload});
        case UPDATE_EMAIL:
            return Object.assign({}, state, {email: action.payload});
        default:
            return state;
    }
}

//action creator
export let updateLoanType = (loanType) => {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    };
};

export let updatePropertyType = (property) => {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    };
};

export let updateCity = (city) => {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export let updateProp = (prop) => {
    return {
        type: UPDATE_PROP,
        payload: prop

    };
};

export let updateFound = (found) => {
    return {
        type: UPDATE_FOUND,
        payload: found
    };
};

export let updateRealState = (realState) => (
    {
        type: UPDATE_REALSTATE,
        payload: realState
    }
);


export let updateCost = (cost) => {
    return {
        type: UPDATE_COST,
        payload: cost
    }
}

export let updateDownpayment = (downPayment) => {
    return {
        type: UPDATE_DOWNPAYMENT,
        payload: downPayment
    }
}

export let updateCredit = (credit) => (
    {
        type: UPDATE_CREDIT,
        payload: credit
    }
);

export let updateHistory = (history) => (
    {
        type: UPDATE_HISTORY,
        payload: history
    }
)

export let updateAddressOne = (addressOne) => {
    return {
        type: UPDATE_ADDRESS_ONE,
        payload: addressOne
    }
}

export let updateAddressTwo = (addressTwo) => {
    return {
        type: UPDATE_ADDRSS_TWO,
        payload: addressTwo
    }
}

export let updateAddressThree = (addressThree) => {
    return {
        type: UPDATE_ADDRESS_THREE,
        payload: addressThree
    }
}

export let updateFirst = (firstName) => {
    return {
        type: UPDATE_FIRST,
        payload: firstName
    }
}

export let updateLast = (lastName) => {
    return {
        type: UPDATE_LAST,
        payload: lastName
    }
}

export let updateEmail = (email) => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export default reducer;