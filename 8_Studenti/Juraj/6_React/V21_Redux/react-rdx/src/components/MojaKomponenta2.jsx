import React from "react";
import RESET from "redux-store";
import { connect } from "react-redux";

class MojaKomponenta2 extends React.Component {

    render() {

        const {brojac, reset } = this.props; 
        return (
            <>
            
          <h2>Ovo je Moja Komponenta 2</h2>  
            <p>I moja komponenta koristi Redux store: {brojac}</p>
            <button onClick={null}>Reset</button>
            </>

        );
    }
}

function mapStateProps(state) {
    return {
        brojac: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        reset: () => dispatch({ type: RESET  })
    }
}

// export default MojaKomponenta2;
export default connect(mapStateProps, mapDispatchToProps)(MojaKomponenta2);