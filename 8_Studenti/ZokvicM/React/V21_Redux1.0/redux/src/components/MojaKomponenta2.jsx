import React from "react";
import { RESET } from "../store/redux-store";
import { connect } from "react-redux";

class MojaKomponenta2 extends React.Component {

    render(){
        const {brojac, reset} = this.props; // razdvajamo propsove iz propsova mapDiscpatchProps i mapStateToProps
        return(
            <>
            <h2>Ovo je Komponenta2</h2>
            <p>I moja komponenta2 koristi Redux store: {brojac} (u obliku klase)</p>
            <button onClick={reset}>Reset</button>
            </>
        );
    }
}

function mapStateToProps(state){
    return {
        brojac: state.counter
    };
}

function mapDispatchToProps(dispatch){
    return {
        reset: () => dispatch( { type: RESET} )
    };
};

//export default MojaKomponenta2;
export default connect(mapStateToProps, mapDispatchToProps)(MojaKomponenta2); // connect 2 funkcije kada se poziva komponenta