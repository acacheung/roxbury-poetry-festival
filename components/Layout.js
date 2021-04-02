import Head from "next/head";
import Header from "../components/Header";
import Svg from "../components/Svg";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="Description"
          content="The Roxbury Poetry Festival is a biennial event centering poetry in Roxbury, MA. The inaugural festival is happening virtually with the exception of two evening events. The festival features several award-winning writers, panelists, and curators, and centers a keynote address from 2020 Pulitzer Prize winning poet, Jericho Brown. The day-long event culminates with a Publisher’s Poetry Slam sponsored by Button Poetry that yields a book contract for a local writer and a “Beast The Beat” concert battle highlighting local hip hop artist. The festival is free and open to the public."
        />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta
          property="og:url"
          content="https://www.roxburypoetryfestival.com/"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://www.roxburypoetryfestival.com/social.jpg"
          key="ogimage"
        />

        <meta
          property="og:site_name"
          content="Roxbury Poetry Festival"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Roxbury Poetry Festival"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="A vital gathering of national and local writers."
          key="ogdesc"
        />
        <link rel="icon" href="/favicon.ico" />
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
    </>
  );
}
