var text = '';
function findMeal (){
    text = document.getElementById('meal-search').value;
    connectMeal(text)
}
function connectMeal (text) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res=> res.json() )
    .then(data=> loadMeal(data));

}

connectMeal();

function loadMeal (data){

    console.table(data.meals[0]);
  
    var container = document.getElementById('main-container');
  
      // var imgLink = data.meals[0].strMealThumb;
      // var cat = data.meals[0].strCategory;
      // var title = data.meals[0].strMeal;
    
       container.innerHTML = `<div class="card" style="width: 50rem;">
  <img class="card-img-top" src="${data.meals[0].strMealThumb}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data.meals[0].strMeal}</h5>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">MEALID:${data.meals[0].idMeal}</li>
    <li class="list-group-item">MEAL_NAME${data.meals[0].strMeal}</li>
    <li class="list-group-item">CATEGORY:${data.meals[0].strCategory}</li>
  </ul>
  <div class="card-body">
  <p class="card-text">INSTRUCTIONS:<BR>${data.meals[0].strInstructions}</p>
  </div>
</div>`;
      
       
  
     
  
       
  
      container.appendChild(newDiv);
  }

 