/* Preact */
import { h } from 'preact'

/* CSS */
import './featureBlog.css'

/* Component */
const FeatureBlog = () => {
    return(
        <section id="feature-blog">
            <img id="feature-blog-image" src="/static/mockup/ghost_rule.jpg" alt="Today's feature" />
            <article id="feature-blog-article">
                <img id="feature-blog-pseudo-image" src="/static/mockup/ghost_rule.jpg" />
                <div id="feature-blog-detail-panel">
                    <h3 id="feature-blog-title">เริ่มต้นเขียน Firestore จาก 0 ด้วย JavaScript กันเถอะ!</h3>
                    <div id="feature-blog-writer-panel">
                        <img id="feature-blog-writer" src="/static/mockup/aomkrby.jpg" alt="aomkirby's image profile" />
                        <p>aomkirby123</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default FeatureBlog