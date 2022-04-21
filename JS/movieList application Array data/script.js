var movieList=[{
    name:"test",
    year:2020,
    Budget:50,
    cast:['adf'],
    Review:['Good'],
    Language:"Hindi",
}]
var length=movieList.length;
for(var i=0;i<length;i++){
    var divDom=document.createElement('div');
    var movie=movieList[i];

    var nameDom=document.createElement('p');
    nameDom.innerHTML="name:" +movie.name;

    var yearDom=document.createElement('p');
    yearDom.innerHTML="year:" +movie.year;

    var budgetDom=document.createElement('p');
    budgetDom.innerHTML="Budget:" +movie.Budget;

    var castlabel=document.createElement('p');
   castlabel.innerHTML="cast";


    var castDom=document.createElement('ul');
    for(let j=0;j<movie.cast.length;j++){
var castNameDom=document.createElement("li");

castNameDom.innerHTML=movie.cast[j];
castDom.appendChild(castNameDom);
    }

    var reviewlabel=document.createElement('label');
    reviewlabel.innerHTML="Review";
 
 
     var reviewDom=document.createElement('ul');
     for(let j=0;j<movie.Review.length;j++){
 var rdom=document.createElement("li");
 rdom.innerHTML=movie.Review[j];
 reviewDom.appendChild(rdom);
     }

     var languageDom=document.createElement("p");
     languageDom.innerHTML="Language:" +movie.Language;

     divDom.appendChild(nameDom);


     divDom.appendChild(yearDom);

     divDom.appendChild(budgetDom);

     divDom.appendChild(castlabel);

     divDom.appendChild(castDom);

     divDom.appendChild(reviewlabel);

     divDom.appendChild(reviewDom);

     divDom.appendChild(languageDom);

     document.body.appendChild(divDom);





}