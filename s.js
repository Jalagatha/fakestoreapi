
    fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();})
    .then((completed)=>{
    let data1 ="";
    completed.map((values)=>{
    
        data1 +=` <div class="card">
    <h1 class="title">${values.title}</h1>
    <img src=${values.image} alt="images"class="images" >
    <p>${values.description}</p>
    <p class="category">${values.category}</p>
    <p class="price">${values.price}</p>
    </div> `;
    });
    document.getElementById("cards").innerHTML=data1
    }).catch((error)=>{
    console.log("Error", error);
    })