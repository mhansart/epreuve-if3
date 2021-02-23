import Button from '../button/Button';

function Section1({ handler }) {
  const lineInCircle = [];
  for (let i = 0; i < 11; i++) {
    lineInCircle.push(<div className="line-in-circle" key={i} />);
  }
  return (
    <section className="section-one">
      <div className="container d-flex">
        <div className="rounded-circle decorate-top d-flex">
          {lineInCircle.map((x) => x)}
        </div>
        <div className="div-half">
          <div className="rounded-circle img-container d-flex">
            <img src="img/curry_de_legume.jpg" alt="Curry de légumes de Chef Pablo" />
          </div>
          <div className="text-content">
            <p>La Maison Salvi vous offre chaque jour le choix entre un menu carne ou végé: 10€ livraison incluse (sur Rennes uniquement)</p>
            <p>Des produits sains et simples, de saison, mis en musique et en couleur pas le Chef Pablo. Qui d&apos;autre aurait pu réconcilier la famille autour d&apos;une idée aussi simple et chaleureuse?</p>
            <p>Il est temps de passer commande !</p>
          </div>
          <Button content="Menu du jour" handler={handler} />
        </div>
        <div className="div-half" style={{ backgroundImage: "url('img/cuistot1.jpg')" }} />
        <div className="rounded-circle decorate-bottom" />

      </div>
    </section>
  );
}

export default Section1;
