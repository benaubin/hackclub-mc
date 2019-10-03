import Head from "next/head";

export function IndexPage(props: {}) {
  return <div>
    <Head>
      <title>The Hack Club MC Server</title>
    </Head>
    <div className="card">
      <h1>The Hack Club MC Server</h1>
      <h3>mc.hackclub.com</h3>

      <hr/>
        
      <p>
        If you're a Hack Clubber, you're probably here because you want to join in the fun.
      </p>

      <h4>Here's how:</h4>

      <ul>
        <li>Install <a href="https://multimc.org/#Download">MultiMC</a></li>
        <li>Download the <a href="https://f002.backblazeb2.com/file/hackclub/HACKCLUB_PACK.zip" target="_blank">ZIP of the Hack Club Modpack here</a></li>
        <li>Open MultiMC and at the top of the window, select "Add Instance"</li>
        <li>On the left of the opened window, select "Import from zip" and then select the ZIP you downloaded above</li>
        <li>Select "Ok"</li>
        <li>Select the Hack Club Pack button and click "Launch"</li>
      </ul>

      <p>As you're waiting for the game to boot up, make sure to ask in #minecraft for a whitelist!</p>

      <p>site by <a href="https://benaubin.com">@ben</a></p>
    </div>

    <style jsx>{`
      .card {
        background: #F9F9FA;
        color: #444;

        border-radius: 7px;
        box-sizing: border-box;

        margin: 10vh auto;

        width: 90vw;
        max-width: 480px;

        padding: 40px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      }
      h1 {
        color: #008B45;
        font-weight: 700;

        margin: 4px 0;
      }
      h3 {
        font-weight: 400;
        margin: 4px 0;
      }

      ul {
        padding: 0;
      }
    `}</style>
  </div>;
};

export default IndexPage;