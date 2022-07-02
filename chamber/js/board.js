const requestURL = 'https://mitchdoug.github.io/wdd230/chamber/json/data.json';


  async function getBusiness(requestURL){
    const response = await fetch(requestURL);
    if (response.ok) {
      const jsonObject = await response.json();
      console.log(jsonObject);
      const business = jsonObject["businesses"];
      business.forEach(displayBusiness);
    }
  }
  getBusiness(requestURL);

  function displayBusiness(business) {
    let card = document.createElement('section');
    let div1 = document.createElement('div');
    let h2 = document.createElement('h2');
    let addr = document.createElement('p');
    let phone = document.createElement('p');
    let site = document.createElement('a');
    let linkText = document.createTextNode(`${business.website}`);
    let div2 = document.createElement('div');
    let img = document.createElement('img');

    h2.textContent = business.name ;
    addr.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    
    site.appendChild(linkText);
    site.title = `${business.website}`;
    site.href = business.website;
    img.setAttribute('src', business.imgurl)
    img.setAttribute('alt', `${business.name}`)
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