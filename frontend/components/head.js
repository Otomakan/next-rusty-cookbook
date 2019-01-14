import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>30 Days of Cooking</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Comfortaa|Exo" rel="stylesheet"/>
    </Head>
    <style jsx global>{`
      body { 
        margin:0;
        padding:0;
        top:0;
        font-family: 'Exo',sans-serif;
        font-family: 'Comfortaa',cursive;
        font-family: Arial;
        font-weight:light;
      }
      li{
        list-style: none;
      }
    `}</style>
  </div>
)