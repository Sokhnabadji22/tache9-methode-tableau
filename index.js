/*1. Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2*/

// Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
let tab1 = [ ];
let tab2 = [ ];
for(i =0 ; i < 5 ; i++){
    let valeur1 =parseFloat( prompt("Saisir les valeurs1"));
    tab1.push(valeur1)
}
console.log(tab1 ,'test1');
console.log(" ");

for(i =0 ; i < 5 ; i++){
    let valeur2 =parseFloat( prompt("Saisir les valeurs2"));
    tab2.push(valeur2)
}
console.log(tab2 ,'test2');
console.log(" ");

//Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2

let tab3 = tab1.filter(nombre1 => !tab2.includes(nombre1));
console.log("n'appartient",tab3);


// Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2
let tab4 = tab1.filter(nombre2 => tab2.includes(nombre2));
console.log("appartient" , tab4);


/* 2. Soit un tableau tab=[5,3,87,1,-4,-99,0]
Sans utiliser les methodes javascript :
1. Ecrire une fonction qui  reçoit en parametre tab et qui permet de le trier  
2. Ecrire une fonction qui reçoit en parametre tab et retourne la valeur max , min */

//1. Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier 
let tab=[5,3,87,1,-4,-99,0] ;
function trie(tab){
    for (let i = 0; i < tab.length; i++) {
    
      for (let j = i+1; j < tab.length; j++) {
        if (tab[i] > tab[j]) {
          let tnp = tab[i]  
          tab[i] = tab[j]
          tab[j] = tnp
        }
    }     
}
return tab
}
trie(tab) 
console.log("tableau trie en ordre croissante" , tab);

//2. Ecrire une fonction qui reçoit en parametre tab et retourne la valeur max , min
let max =tab[0];
let min = tab[0]
for(let i = 0; i<tab.length ; i++){
  console.log(tab[i])
  //la plus grande valeur
  if(tab[i] >max){
    max = tab[i]
    // maxValeur = minValeur
      //la plus petite valeur
  }else if(min > tab[i]){
    min= tab[i]
  }
}
console.log("la plus grande valeur" ,max);
console.log("la plus petite valeur" , min);