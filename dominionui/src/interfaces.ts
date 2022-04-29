interface iBlock{    
    idBlock: number; //id univoco del block
    title: String; //titolo del block
    content: String; //contenuto in ingresso
    description : String; //descrizione del block
    actionValue: String; //testo nel CTA (eg. pulsante)
    value:String; //valore elaborato in uscita
    outputIds:[]; //output del value
    autoFire: false; //scatena automaticamente l'action del block
    object?: Object;
}

