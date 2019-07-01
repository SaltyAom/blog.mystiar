/* Preact */
import { h } from 'preact'

/* Redux */
import { connect } from 'react-redux'

/* CSS */
import 'css/landing.css'

/* Model */
/*
const mapStateToProps = (store) => {
    return {
        store: {

            

        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: {



        }
    }
}
*/

/* Components */
const Landing = () => {
    return(
        <main id="landing">
            <h1>Mystiar Blog</h1>
            <p>Hello World! I'm still here...</p>
        </main>
    )
}

/*
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing)
*/
export default Landing