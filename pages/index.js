/* Preact */
import { h, Fragment } from 'preact'

/* Redux */
import { connect } from 'react-redux'

/* Components */
import Navbar from 'components/navbar'
import FeatureBlog from 'components/featureBlog'

/* CSS */
import 'css/landing.css'

/* Model */
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

/* Components */
const Landing = () => {
    return(
        <Fragment>
            <Navbar />
            <main id="landing">

                <FeatureBlog />

            </main>
        </Fragment>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing)