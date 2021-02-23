import Button from '../button/Button';
import { ReactComponent as Splash } from './splash.svg';

function Section2({ handler, textVote }) {
  return (
    <section className="section-two">
      <div className="container d-flex">
        <div className="div-half">
          <h2 className="first-title">Archives</h2>
          <h2>Gustatives</h2>
          <div className="text-content">
            <p>Un menu de la maison Salvi vous a séduit? Vous refusez de croire qu&apos;il ne reviendra pas à la carte?</p>
            <p>Je vous propose de passer en revue les recettes, et de donner votre avis. Choisissez votre favori !</p>
          </div>
          <Button content="Voter" handler={handler} />
          <p className="bold">{textVote}</p>
        </div>
        <div className="div-half"><Splash /><div className="rounded-circle"><img src="img/suri02.jpg" alt="logo Suri" /></div></div>

      </div>
    </section>
  );
}

export default Section2;
