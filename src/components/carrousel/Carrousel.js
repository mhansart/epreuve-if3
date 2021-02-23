function Carrousel({ handler }) {
  const picture = [{ id: 0, pic: 'img/1.jpg' }, { id: 1, pic: 'img/2.jpg' }, { id: 2, pic: 'img/3.jpg' }, { id: 3, pic: 'img/4.jpg' }, { id: 4, pic: 'img/5.jpg' }];
  return (
    <section className="section-carrousel">
      <div className="container">
        <div className="col-md-12 one-line">
          <div id="blogCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#blogCarousel" data-slide-to="0" className="active" />
              <li data-target="#blogCarousel" data-slide-to="1" />
            </ol>

            <div className="carousel-inner">

              <div className="carousel-item active">
                <div className="row">
                  {picture.map((x, i) => {
                    if (i < 3) {
                      return (
                        <div key={`${x.id}-pic`} className="col-lg-4 col-md-6 col-sm-12 one-card" onClick={handler}>
                          <div className="our-dish">
                            <div className="pic">
                              <img src={x.pic} alt={`plat numéro ${i + 1}`} />
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return '';
                  })}
                </div>
              </div>

              <div className="carousel-item">
                <div className="row">
                  {picture.map((x, i) => {
                    if (i >= 3) {
                      return (
                        <div key={`${x.id}-pic`} className="col-lg-4 col-md-6 col-sm-12 one-card" onClick={handler}>
                          <div className="our-dish">
                            <div className="pic">
                              <img src={x.pic} alt={`plat numéro ${i + 1}`} />
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return '';
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carrousel;
