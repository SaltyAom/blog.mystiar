/* Preact */
import { h, Fragment } from 'preact'

/* Components */
import Navbar from 'components/navbar'
import FeatureBlog from 'components/featureBlog'

/* CSS */
import 'css/landing.css'

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

export default Landing