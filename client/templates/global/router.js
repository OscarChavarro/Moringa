
    Router.configure({layoutTemplate: "layout"});
    Router.route("/", {name: "home"});
    Router.route("/productos", {name: "productos"});
    Router.route("/hojasEnBolsa", {name: "hojasEnBolsa"});
    Router.route("/hojasEnFrasco", {name: "hojasEnFrasco"});
    Router.route("/hojasTrituradasEnBolsa", {name: "hojasTrituradasEnBolsa"});
    Router.route("/hojasTrituradasEnFrasco", {name: "hojasTrituradasEnFrasco"});
    Router.route("/hojasTrituradasEnTizana", {name: "hojasTrituradasEnTizana"});
    Router.route("/hojasPulverizadasEnBolsa", {name: "hojasPulverizadasEnBolsa"});
    Router.route("/hojasPulverizadasEnFrasco", {name: "hojasPulverizadasEnFrasco"});
    Router.route("/hojasPulverizadasEnFrascoPequenio", {name: "hojasPulverizadasEnFrascoPequenio"});
    Router.route("/hojasPulverizadasEnFrascoMediano", {name: "hojasPulverizadasEnFrascoMediano"});
    Router.route("/hojasPulverizadasEnCapsulas", {name: "hojasPulverizadasEnCapsulas"});

    Router.route("/conocenos", {name: "conocenos"});
    Router.route("/articulos", {name: "articulos"});

    Router.route("/tratamientoDiabeticos", {name: "tratamientoDiabeticos"});
    Router.route("/estimulante", {name: "estimulante"});
    Router.route("/adelgazar", {name: "adelgazar"});
    Router.route("/subirDePeso", {name: "subirDePeso"});

    Router.route("/registroSanitario", {name: "registroSanitario"});
    Router.route("/codigoDeBarras", {name: "codigoDeBarras"});
    Router.route("/certificado", {name: "certificado"});
    Router.route("/restricciones", {name: "restricciones"});

    Router.route("/carritoCompras", {name: "carritoCompras"});
    Router.route("/dondeComprar", {name: "dondeComprar"});

    Router.route("/facturacion", {name: "facturacion"});
