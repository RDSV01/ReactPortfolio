import "../styles/Page404.css";

const Page404 = () => {
  return (
    <div className="page404">
      <>
        <p className="p_404">
          HTTP: <span>404</span>
        </p>
        <code>
          <span>this_page</span>.<em>not_found</em> = true;
        </code>
        <code>
          <span>if</span> (<b>you_spelt_it_wrong</b>) {<span>try_again()</span>}
          ;{"}"}
        </code>
        <code>
          <span>
            else if (<b>we_screwed_up</b>)
          </span>{" "}
          {<em>alert</em>}(<i>"Désolé, cette page n'existe pas."</i>);{" "}
          <span>window</span>.<em>location</em> = home;{"}"}
        </code>
        <center>
          <a href="/">Revenir à l'accueil</a>
        </center>
      </>
    </div>
  );
};

export default Page404;
