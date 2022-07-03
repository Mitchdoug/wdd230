const requestURL = 'https://mitchdoug.github.io/wdd230/chamber/json/board.json';


  async function getBusiness(requestURL){
    const response = await fetch(requestURL);
    if (response.ok) {
      const jsonObject = await response.json();
      console.log(jsonObject);
      const business = jsonObject["board"];
      business.forEach(displayBusiness);
    }
  }
  getBusiness(requestURL);

  function displayBusiness(business) {
    let card = document.createElement('section');
    let div1 = document.createElement('div');
    let name = document.createElement('h2');
    let position = document.createElement('h3');
    let div2 = document.createElement('div');
    let img = document.createElement('img');

    position.textContent = business.position;
    name.textContent = business.name;

    img.setAttribute('src', business.imgurl)
    img.setAttribute('alt', `${business.name}`)
    div1.id = "div1";
    div2.id = "div2";
    name.id = "boardname";
    position.id = "boardposition";

    div1.appendChild(img);
    div2.appendChild(name);
    div2.appendChild(position);
    card.appendChild(div1);
    card.appendChild(div2);
    document.querySelector('.cards').appendChild(card);
  }