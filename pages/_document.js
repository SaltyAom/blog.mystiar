/* Next */
import Document, { Html, Head, Main, NextScript } from 'next/document'

/* Component */
class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      return (
        <Html lang="en">
          <Head>
            <meta http-equiv="content-type" content="text/html; charset=utf8" />
            <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1, viewport-fit=cover" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

            <meta name="title" content="Mystiar Blog - เริ่มต้นสู่การเขียนโปรแกรมอย่าง ง่ายๆ" />
            <meta name="description" content="Mystiar Blog - เริ่มต้นการเขียนเว็บไซต์ (Web Development) และ Competitive Programming ที่สำหรับผู้เริ่มต้นจนถึงระดับมืออาชีพ" />
            <meta name="author" content="aomkirby123" />
            <meta name="keyword" content="Mystiar,software development,เขียนโปรแกรม,ทำเว็บ,เว็บไซต์,Competitive Programming,โปรแกรมเมอร์,สอนเขียนโปรแกรม" />
            <link rel="shortcut icon" href="/static/assets/app/icon/nhentai_opener_fav.png" />
            <meta name="application-name" content="Mystiar Blog" />

            <meta name="robots" content="index, follow" />

            <meta property="og:title" content="Mystiar Blog - เริ่มต้นสู่การเขียนโปรแกรมอย่าง ง่ายๆ" />
            <meta property="og:description" content="Mystiar Blog - เริ่มต้นการเขียนเว็บไซต์ (Web Development) และ Competitive Programming ที่สำหรับผู้เริ่มต้นจนถึงระดับมืออาชีพ" />
            <meta property="article:author" content="aomkirby123" />
            <meta property="og:site_name" content="https://blog.mystiar.com" />
            <meta property="og:url" content="https://blog.mystiar.com" />
            <meta property="og:image" content="https://blog.mystiar.com/static/app/view/cover.png" />
            <meta property="og:image:width" content="1920" />
            <meta property="og:image:height" content="1080" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Mystiar Blog - เริ่มต้นสู่การเขียนโปรแกรมอย่าง ง่ายๆ" />
            <meta name="twitter:description" content="Mystiar Blog - เริ่มต้นการเขียนเว็บไซต์ (Web Development) และ Competitive Programming ที่สำหรับผู้เริ่มต้นจนถึงระดับมืออาชีพ" />
            <meta name="twitter:site" content="@SaltyAom" />
            <meta name="twitter:creator" content="@SaltyAom" />
            <meta name="twitter:image" content="https://blog.mystiar.com/static/app/view/cover.png" />
            <meta name="twitter:creator" content="@SaltyAom" />

            <link rel="manifest" href="/assets/app/manifest.json" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="theme-color" content="#25283b" />

            <meta name="application-name" content="NHentai Opener" />
            <meta name="mssmarttagspreventparsing" content="true" />
            <meta name="msapplication-window" content="width=1366;height=768" />
            <meta name="msapplication-navbutton-color" content="#25283b" />
            <meta name="msapplication-tooltip" content="Safe platform for reading doujinshi's hentai." />

            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content="Mystiar Blog" />
            <link rel="apple-touch-icon" href="/static/app/icon/ShinoX256.jpg" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name='format-detection' content="telephone=no" />
            <meta name="apple-touch-fullscreen" content="yes" />
            
            <link href="/static/app/splashscreens/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/app/splashscreens/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/app/splashscreens/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
            <link href="/static/app/splashscreens/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
            <link href="/static/app/splashscreens/iphonexr_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/app/splashscreens/iphonexsmax_splash.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
            <link href="/static/app/splashscreens/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/app/splashscreens/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/app/splashscreens/ipadpro3_splash.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
            <link href="/static/app/splashscreens/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument