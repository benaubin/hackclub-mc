export function IndexPage(props: {}) {
  return <div>
    <div className="card">
      <h1>Hack Club</h1>
      <h3>At EA Young Academy</h3>

      <div style={{fontWeight: 700, paddingTop: 8}}>Every Wednesday at 4PM in Ms. Brown's room.</div>

      <hr/>
        
      <p>
        Hack Club is a global network of programming clubs where members learn to code through tinkering and building projects.
      </p>

      <p>
        As a member, you'll work at your own pace making websites, apps, & games. Whether you're an experienced developer or just getting started, you'll fit right in. There's a global community of developers (and at our school) able to help you with any question you might have. And, at the end of every meeting, you'll have real, working projects that you'll be able to use and share.
      </p>

      <p>As a bonus, we'll attend (and possibly even organize) Hackathons, events where you'll solve problems with technology, make new friends, and compete to win prizes.
      </p>

      <p>
        If you're into coding, software, games, or anything else, and you want to make them, you're in the right place.
      </p>

      <h4>Resources:</h4>

      <ul>
        <li>
          <a href="https://hackclub.com">
            Hack Club
          </a>
        </li>
        <li>
          <a href="https://github.com/EAYA-Hack-Club">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://github.com/EAYA-Hack-Club/club-website/">
            Source Code
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .card {
        background: #F9F9FA;
        color: #555;

        border-radius: 7px;
        box-sizing: border-box;

        margin: 10vh auto;

        width: 90vw;
        max-width: 480px;

        padding: 40px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      }
      h1 {
        color: #D33E79;
        font-weight: 700;

        margin: 4px 0;
      }
      h3 {
        font-weight: 400;
        margin: 4px 0;
      }

      ul {
        list-style: none;
        padding: 0;
      }
    `}</style>
  </div>;
};

export default IndexPage;