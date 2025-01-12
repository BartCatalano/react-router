
function HomePage () {
    return(
    <div className="homeLayout">
        <div>
<h1>Cosa Boolean in pentola!?!</h1>
<h3>Questo è il tuo angolo di cucina!</h3>
<p>Puoi vedere tutte le nostre ricette, per inserirne nuove usa l'apposito menu Admin!</p>
</div>
<div className="row rowcol">
    <div className="col"><img className=" imgHome" src="http://localhost:3000/images/pane_fritto_dolce.jpeg" alt="" /></div>
    <div className="col"><img className=" imgHome" src="http://localhost:3000/images/cracker_barbabietola.jpeg" alt="" />
    </div>
    <div className="col"><img className=" imgHome" src="http://localhost:3000/images/ciambellone.jpeg" alt="" /></div>
</div>
</div>
    )
}

export default HomePage;