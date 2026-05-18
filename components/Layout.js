import Head from 'next/head'
import Header from '../components/Header'
import Svg from '../components/Svg'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

export default function Layout({ children, showBanner = false }) {
  const siteTitle = 'Roxbury Poetry Festival'
  const siteDescription =
    'Registration is now open for the Roxbury Poetry Festival on June 27, 2026, a vital gathering of national and local writers in Roxbury, MA.'
  const siteUrl = 'https://www.roxburypoetryfestival.com/'
  const socialImage = `${siteUrl}social.jpg`

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={siteDescription} />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={socialImage} />
        <meta
          property="og:url"
          content={siteUrl}
          key="ogurl"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={socialImage} key="ogimage" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={siteDescription} />

        <meta
          property="og:site_name"
          content={siteTitle}
          key="ogsitename"
        />
        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={siteDescription}
          key="ogdesc"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5R06V6T39B"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-5R06V6T39B');
                `,
          }}
        />
      </Head>
      <Svg />
      <Header />
      <div className="relative">
        <main className="relative z-30">{children}</main>
      </div>
      <Footer />
      {showBanner ? <Banner /> : null}
    </>
  )
}
