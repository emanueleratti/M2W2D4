const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
    cart: [10, 200, 30]
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
    cart: [1, 2, 300]
  }
  
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
    cart: [10, 20]
  }
  
  
  
  // Creare un array di utenti 
  let listaUtenti = [];
  let listaAmbassadors = [];
  listaUtenti.push(marco, paul, amy);
  console.log(listaUtenti);
  
  // Stampiamo se è o non è ambassador
  for (let i = 0; i < listaUtenti.length; i++) {
    if (listaUtenti[i].isAmbassador === true) {
      console.log(listaUtenti[i].name + " " + listaUtenti[i].lastName + " è un ambassador");
      listaAmbassadors.push(listaUtenti[i]);
    } else {
      console.log(listaUtenti[i].name + " " + listaUtenti[i].lastName + " non è un ambassador");
    }
  }
  
  console.log(listaAmbassadors);
  
  // VERIFICA SPEDIZIONE
  let user = amy;
  const shippingCost = 50; // Se carrello > 100 -> sped gratuita
  let finalPrice = 0;
  let finalOrder = 0;
  
  
  console.log(finalPrice);
  
  function calcolaTotale(user) {
  
    // Calcolo il costo totale del carrello
    for(let i = 0; i < user.cart.length; i++) {
      finalPrice += user.cart[i];
    }
  
    console.log(finalPrice);
  
    // Se l'utente è ambassador
    if (user.isAmbassador) {
      // Applico 30% di sconto
      finalPrice = finalPrice * 0.7;
    }
  
    // Valuto se la spesa è maggiore o minore di 100
    if (finalPrice >= 100) {
      finalOrder = finalPrice;
    } else {
      finalOrder = finalPrice + shippingCost;
      console.log("Per la spedizione gratuita ti mancano ancora " + (100 - finalPrice));
    }
  
    return finalOrder;
  
  }
  
  console.log(calcolaTotale(amy));
  