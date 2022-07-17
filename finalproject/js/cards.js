const requestURL = 'https://mitchdoug.github.io/wdd230/chamber/json/data.json';


  async function getTemple(requestURL){
    const response = await fetch(requestURL);
    if (response.ok) {
      const jsonObject = await response.json();
      console.log(jsonObject);
      const temple = jsonObject["temples"];
      temple.forEach(displayTemple);
    }
  }
  getTemple(requestURL);

  function displayTemple(temple) {
    let card = document.createElement('section');
    let div1 = document.createElement('div');
    let h2 = document.createElement('h2');
    let addr = document.createElement('p');
    let phone = document.createElement('p');
    let site = document.createElement('a');
    let linkText = document.createTextNode(`${temple.website}`);
    let div2 = document.createElement('div');
    let img = document.createElement('img');

    h2.textContent = temple.name ;
    addr.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    
    site.appendChild(linkText);
    site.title = `${temple.website}`;
    site.href = temple.website;
    img.setAttribute('src', temple.imgurl)
    img.setAttribute('alt', `${temple.name}`)
    div1.id = "div1";
    div2.id = "div2";
    div1.appendChild(img);
    div2.appendChild(h2);
    div2.appendChild(addr);
    div2.appendChild(phone);
    div2.appendChild(site);
    card.appendChild(div1);
    card.appendChild(div2);
    document.querySelector('.cards').appendChild(card);

  }