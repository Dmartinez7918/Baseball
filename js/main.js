// JavaScript Document

//Card 1
let name = document.querySelector("#name")

fetch('https://swapi.co/api/people/1')
  .then(function(response) {
    return response.json();
  })
  .then(function(Luke) {
    name.textContent = Luke.name
    
  });

//card 2
  let name2 = document.querySelector("#name2")

fetch('https://swapi.co/api/people/2')
  .then(function(response) {
    return response.json();
  })
  .then(function(C3PO) {
    name2.textContent = C3PO.name
    
  });

//card 3
  let name3 = document.querySelector("#name3")

  fetch('https://swapi.co/api/people/3')
    .then(function(response) {
      return response.json();
    })
    .then(function(R2D2) {
      name3.textContent = R2D2.name
      
    });

//card 4
    let name4 = document.querySelector("#name4")

    fetch('https://swapi.co/api/people/4')
      .then(function(response) {
        return response.json();
      })
      .then(function(Darth) {
        name4.textContent = Darth.name
        
      });

//card 5
  let name5 = document.querySelector("#name5")

  fetch('https://swapi.co/api/people/5')
    .then(function(response) {
      return response.json();
    })
    .then(function(Leia) {
      name5.textContent = Leia.name
      
    });  
//card 6
  let name6 = document.querySelector("#name6")

  fetch('https://swapi.co/api/people/6')
    .then(function(response) {
      return response.json();
    })
    .then(function(Owen) {
      name6.textContent = Owen.name
      
    });  

//card 7
  let name7 = document.querySelector("#name7")

  fetch('https://swapi.co/api/people/7')
    .then(function(response) {
      return response.json();
    })
    .then(function(Beru) {
      name7.textContent = Beru.name
      
    });  
    
//card 8
  let name8 = document.querySelector("#name8")

  fetch('https://swapi.co/api/people/8')
    .then(function(response) {
      return response.json();
    })
    .then(function(Droid) {
      name8.textContent = Droid.name
      
    }); 
    
//card 9
  let name9 = document.querySelector("#name9")

  fetch('https://swapi.co/api/people/9')
    .then(function(response) {
      return response.json();
    })
    .then(function(Biggs) {
      name9.textContent = Biggs.name
      
    }); 

//card 10
  let name10 = document.querySelector("#name10")

  fetch('https://swapi.co/api/people/10')
    .then(function(response) {
      return response.json();
    })
    .then(function(Ben) {
      name10.textContent = Ben.name
      
    }); 

//card 11
  let name11 = document.querySelector("#name11")

  fetch('https://swapi.co/api/people/11')
    .then(function(response) {
      return response.json();
    })
    .then(function(Anakin) {
      name11.textContent = Anakin.name
      
    }); 

//card 12
    let name12 = document.querySelector("#name12")

    fetch('https://swapi.co/api/people/12')
      .then(function(response) {
        return response.json();
      })
      .then(function(Tarkin) {
        name12.textContent = Tarkin.name
        
      }); 

//card 13
let name13 = document.querySelector("#name13")

fetch('https://swapi.co/api/people/13')
  .then(function(response) {
    return response.json();
  })
  .then(function(Chewie) {
    name13.textContent = Chewie.name
    
  }); 

//card 14
let name14 = document.querySelector("#name14")

fetch('https://swapi.co/api/people/14')
  .then(function(response) {
    return response.json();
  })
  .then(function(Han) {
    name14.textContent = Han.name
    
  }); 

//card 15
let name15 = document.querySelector("#name15")

fetch('https://swapi.co/api/people/15')
  .then(function(response) {
    return response.json();
  })
  .then(function(Greedo) {
    name15.textContent = Greedo.name
    
  }); 

//card 16
let name16 = document.querySelector("#name16")

fetch('https://swapi.co/api/people/16')
  .then(function(response) {
    return response.json();
  })
  .then(function(Jabba) {
    name16.textContent = Jabba.name
    
  }); 

//card 17
let name17 = document.querySelector("#name17")

fetch('https://swapi.co/api/people/18')
  .then(function(response) {
    return response.json();
  })
  .then(function(Guy) {
    name17.textContent = Guy.name
    
  }); 

//card 18
let name18 = document.querySelector("#name18")

fetch('https://swapi.co/api/people/19')
  .then(function(response) {
    return response.json();
  })
  .then(function(Porkins) {
    name18.textContent = Porkins.name
    
  }); 

//card 19
let name19 = document.querySelector("#name19")

fetch('https://swapi.co/api/people/20')
  .then(function(response) {
    return response.json();
  })
  .then(function(Yoda) {
    name19.textContent = Yoda.name
    
  }); 

//card 20
let name20 = document.querySelector("#name20")

fetch('https://swapi.co/api/people/21')
  .then(function(response) {
    return response.json();
  })
  .then(function(Palpatine) {
    name20.textContent = Palpatine.name
   
  }); 

//card 21
let name21 = document.querySelector("#name21")

fetch('https://swapi.co/api/people/22')
  .then(function(response) {
    return response.json();
  })
  .then(function(boba) {
    name21.textContent = boba.name
    
  }); 

//card 22
let name22 = document.querySelector("#name22")

fetch('https://swapi.co/api/people/23')
  .then(function(response) {
    return response.json();
  })
  .then(function(Fighter) {
    name22.textContent = Fighter.name
    
  }); 

//card 23
let name23 = document.querySelector("#name23")

fetch('https://swapi.co/api/people/24')
  .then(function(response) {
    return response.json();
  })
  .then(function(Lizard) {
    name23.textContent = Lizard.name
    
  }); 

//card 24
let name24 = document.querySelector("#name24")

fetch('https://swapi.co/api/people/25')
  .then(function(response) {
    return response.json();
  })
  .then(function(Lando) {
    name24.textContent = Lando.name
    
  }); 

//card 25
let name25 = document.querySelector("#name25")

fetch('https://swapi.co/api/people/26')
  .then(function(response) {
    return response.json();
  })
  .then(function(nerd) {
    name25.textContent = nerd.name
    
  }); 

  var div = document.getElementById('container'),
    clone = div.cloneNode(true);
clone.id = "cloneDiv";
document.body.appendChild(clone);

  let button = document.querySelector('#clone')
  button.addEventListenter('click', () => {
    console.log("Click!")
  })