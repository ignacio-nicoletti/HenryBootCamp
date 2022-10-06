const traverseDomAndCollectElements = function(matchFunc, startEl=document.body) {
  let resultSet = [];

 /* if (typeof startEl === "undefined") {   ---> startEl=document.body
                                          si no me llega nada por default ....
    startEl = document.body;
  }*/    

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){resultSet.push(startEl)}

for(let i =0 ; i < startEl.children.length ; i++){//el.children devuelve un array en html con elementos del body 

let response =traverseDomAndCollectElements(matchFunc,startEl.children[i])//guardo la respuesta de la recursion y le paso la funcion y el hijo para que recorra si tiene hijos 

resultSet=[...resultSet,...response];//los 3 puntos concatenan lo que tiene el primer array con lo que tiene el 2do array 


}
return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {//es un queryselector
  // tu código aquí
  if(selector[0]==="#") return "id"  
  if(selector[0]===".") return "class"  
  if(selector.includes('.')) return "tag.class"  
  else{return "tag"} 
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;
  


    
  if (selectorType === "id") { 
    matchFunction= el =>`#${el.id}`===selector;
    } 

    else if (selectorType === "class") {
      matchFunction= el =>{

        let classes=el.classList;//['small,'lead']
        
        for (let i= 0; i < classes.length; i++) {
          if(`.${classes[i]}`===selector) return true;     
        // '.small'==='.lead' vuelve al for '.lead'==='.lead'  
        }return false
      }

    } else if (selectorType === "tag.class") {
      matchFunction= el =>{
   
        let [t,c]=selector.split('.');//destructuring
        return matchFunctionMaker(t)(el) && matchFunctionMaker(`.${c}`)(el);
        //t me devuleve una funcion y le paso a esa funcion el e igual que con .c 
      }
      
    } else if (selectorType === "tag") {//aparece en mayuscula el tag o selector 
     matchFunction = el=>{
        return el.tagName.toLowerCase()===selector //paso a mayuscula el tag y comparo con selector


     }
    }
  

  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
