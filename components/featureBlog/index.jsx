/* Preact */
import { h } from 'preact'

/* Next */
import Link from 'next/link'

/* CSS */
import './featureBlog.css'

/* Component */
const FeatureBlog = () => {
    return(
        <Link href="/content/ghost_rule">
            <a id="feature-blog-link">
                <section id="feature-blog">
                    <picture>
                        <source type="image/webp" srcset="/static/mockup/ghost_rule.webp" /> 
                        <source type="image/jpg" srcset="/static/mockup/ghost_rule.jpg" /> 
                        <img id="feature-blog-image" src="/static/mockup/ghost_rule.jpg" alt="Today's feature" />
                    </picture>
                    <article id="feature-blog-article">
                        <picture>
                            <source type="image/webp" srcset="/static/mockup/ghost_rule.webp" /> 
                            <source type="image/jpg" srcset="/static/mockup/ghost_rule.jpg" /> 
                            <img id="feature-blog-pseudo-image" src="/static/mockup/ghost_rule.jpg" />
                        </picture>
                        <div id="feature-blog-detail-panel">
                            <h3 id="feature-blog-title">เริ่มต้นเขียน Firestore จาก 0 ด้วย JavaScript กันเถอะ!</h3>
                            <div id="feature-blog-writer-panel">
                                <img id="feature-blog-writer" src="/static/mockup/aomkrby.jpg" alt="aomkirby's image profile" />
                                <p>aomkirby123</p>
                            </div>
                        </div>
                    </article>
                </section>
            </a>
        </Link>
    )
}

export default FeatureBlog