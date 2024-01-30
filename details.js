async function getdetails(){
  
   const urlparams = new URLSearchParams(window.location.search);
  let id = urlparams.get('id');
   const request = await axios.get(`https://dummyjson.com/products/${id}`);
   const data = await request.data;
   document.querySelector(".title").innerHTML = `<h2>${data.title}</h2>`;
   document.querySelector(".description").innerHTML = `<p>${data.description}</p>`;
   document.querySelector(".brand").innerHTML = `<p>${data.brand}</p>`;
   document.querySelector(".price").innerHTML = `<p>${data.price}</p>`;
   document.querySelector(".image").innerHTML = `<img src = ${data.thumbnail}/>`;
}

  getdetails();