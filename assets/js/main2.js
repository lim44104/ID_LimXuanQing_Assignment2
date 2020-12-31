//select elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movie-searchable');
const movieContainer = document.querySelector('#movie-container');
const movieSec = document.getElementById("movieSec");
const trendSec = document.getElementById("trendSec");
const singleMovieContainer = document.getElementById("sigleMovieContainerDiv");
const movieName = document.getElementById("movieName");
const movieDescription = document.getElementById("movieDescription");
const movieImage = document.getElementById("movieImage");
const actorName = document.getElementById("actorName");
const actorDescription = document.getElementById("actorDescription");
const actorImage = document.getElementById("actorImage");
const tvName = document.getElementById("tvName");
const tvDescription = document.getElementById("tvDescription");
const tvImage = document.getElementById("tvImage");

function movieSection(movies) {
    const section = document.createElement('section');
    section.classList = 'section';

    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    section.appendChild(cardColumn);
    
    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);

    movies.map((movie) => {
        if (movie.poster_path){
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-lg-2 col-md-4 col-sm-6 col-6');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card h-100 text-white');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"movie.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('target','_blank');
            moviePage.setAttribute('data-id',movie.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + movie.poster_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = movie.title;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);

            const rating = document.createElement('h6');
            rating.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#0085ca" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>`+" "+ movie.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h6');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.title;
            cardBody.appendChild(bodyTittle);
        }
    })
    return section;
}

function createMovieContainer(movies,tittle = '') {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class','movie');

    const header =document.createElement('h2');
    header.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085ca" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>`+" "+ tittle;
    const section = movieSection(movies);

    movieElement.appendChild(header);
    movieElement.appendChild(section);

    return movieElement;
}

function renderSearchMovies(data) {
    movieSearchable.innerHTML = '';
    const movies = data.results;
    const movieBlock = createMovieContainer(movies);
    movieSearchable.appendChild(movieBlock);
    console.log('Data: ',data);
    console.log(data.results[0].id);
    console.log(data.results[0].overview);
}

function homeMov(data){
    movieSec.innerHTML = '';
    const movies = data.results;

    const header =document.createElement('h2');
    header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085ca" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>`+" "+ "Movie";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);

    movies.map((movie) => {
        if(movie.poster_path){
            //const movie = movies[i];
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-lg-2 col-md-4 col-sm-6 col-6');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card h-100 text-white');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"movie.html");
            moviePage.setAttribute('target','_blank');
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('data-id',movie.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + movie.poster_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = movie.title;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);

            const rating = document.createElement('h6');
            rating.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#0085ca" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>`+" "+ movie.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h6');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.title;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function similarMov(data){
    movieSec.innerHTML = '';
    const movies = data.results;

    const header =document.createElement('h2');
    header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085ca" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>`+" "+ "Similar Movie";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    console.log(movies);
    console.log(movies.length);

    movies.map((movie) => {
        if(movie.poster_path){
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-lg-2 col-md-4 col-sm-6 col-6');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card h-100 text-white');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"movie.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('target','_blank');
            moviePage.setAttribute('data-id',movie.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + movie.poster_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = movie.title;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);

            const rating = document.createElement('h6');
            rating.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#0085ca" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>`+" "+ movie.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h6');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.title;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function trendMov(data){
    movieSec.innerHTML = '';
    const movies = data.results;

    const header =document.createElement('h2');
    header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085ca" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>`+" "+ "Trending";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    console.log(movies);
    console.log(movies.length);

    movies.map((movie) => {
        if(movie.poster_path){
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-lg-2 col-md-4 col-sm-6 col-6');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card h-100 text-white');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"movie.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('target','_blank');
            moviePage.setAttribute('data-id',movie.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + movie.poster_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = movie.title;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);

            const rating = document.createElement('h6');
            rating.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#0085ca" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>`+" "+ movie.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h6');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.title;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function homeAct(data){
    movieSec.innerHTML = '';
    const actors = data.results;

    const header =document.createElement('h2');
    header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085ca" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>`+" "+ "Actor";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);

    actors.map((actor) => {
        if(actor.profile_path){
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-lg-2 col-md-4 col-sm-6 col-6');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card h-100 text-white');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"actor.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('target','_blank');
            moviePage.setAttribute('data-id',actor.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + actor.profile_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = actor.name;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);
            
            const bodyTittle = document.createElement('h6');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = actor.name;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function trendAct(data){
    movieSec.innerHTML = '';
    const actors = data.results;

    const header =document.createElement('h2');
    header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085ca" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>`+" "+ "Trending";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    
    actors.map((actor) => {
        if(actor.profile_path){
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-lg-2 col-md-4 col-sm-6 col-6');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card h-100 text-white');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"actor.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('target','_blank');
            moviePage.setAttribute('data-id',actor.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + actor.profile_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = actor.name;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);
            
            const bodyTittle = document.createElement('h6');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = actor.name;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function homeTv(data){
    movieSec.innerHTML = '';
    const tvs = data.results;
    console.log(tvs);

    const header =document.createElement('h2');
    header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085ca" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>`+" "+ "TV";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    
    tvs.map((tv) => {
        if(tv.poster_path){
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-lg-2 col-md-4 col-sm-6 col-6');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card h-100 text-white');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"tv.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('target','_blank');
            moviePage.setAttribute('data-id',tv.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + tv.poster_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = tv.name;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);

            const rating = document.createElement('h6');
            rating.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#0085ca" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>`+" "+ tv.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h6');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = tv.name;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function trendTv(data){
    movieSec.innerHTML = '';
    const tvs = data.results;
    console.log(tvs);

    const header =document.createElement('h2');
    header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085ca" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>`+" "+ "Trending";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    
    tvs.map((tv) => {
        if(tv.poster_path){
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-lg-2 col-md-4 col-sm-6 col-6');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card h-100 text-white');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"tv.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('target','_blank');
            moviePage.setAttribute('data-id',tv.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + tv.poster_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = tv.name;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);

            const rating = document.createElement('h6');
            rating.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#0085ca" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>`+" "+ tv.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h6');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = tv.name;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}


function renderMovies(data) {
    const movies = data.results;
    const movieBlock = createMovieContainer(movies, this.tittle);
    movieContainer.appendChild(movieBlock);
    console.log('Data: ',data);
}

function creditMov(data){
    movieSec.innerHTML = '';
    const movies = data.cast;

    const header =document.createElement('h2');
    header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085ca" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>`+" "+ "Movie";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    console.log(movies);
    console.log(movies.length);
    
    movies.map((movie) => {
        if(movie.poster_path){
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-lg-2 col-md-4 col-sm-6 col-6');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card h-100 text-white');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"movie.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('target','_blank');
            moviePage.setAttribute('data-id',movie.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + movie.poster_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = movie.title;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);

            const rating = document.createElement('h6');
            rating.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#0085ca" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>`+" "+ movie.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h6');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.title;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function similarTv(data){
    movieSec.innerHTML = '';
    const tvs = data.results;
    console.log(tvs);

    const header =document.createElement('h2');
    header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0085ca" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>`+" "+ "Similar Shows";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    
    tvs.map((tv) => {
        if(tv.poster_path){
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-lg-2 col-md-4 col-sm-6 col-6');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card h-100 text-white');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"tv.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('target','_blank');
            moviePage.setAttribute('data-id',tv.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + tv.poster_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = tv.name;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);

            const rating = document.createElement('h6');
            rating.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#0085ca" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>`+" "+ tv.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h6');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = tv.name;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}


function createIframe(video) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('class','col-3');
    iframe.src = `https://www.youtube.com/embed/${video.key}`;
    iframe.width = 360;
    iframe.height = 315;
    iframe.allowFullscreen = true;

    return iframe;
}

function createIframe2(video) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('class','col');
    iframe.src = `https://www.youtube.com/embed/${video.key}`;
    iframe.width = 300;
    iframe.height = 500;
    iframe.allowFullscreen = true;

    return iframe;
}

function createVideoTemplate(data) {
    const videos = data.results;
    const length = videos.length > 1 ? 1 : videos.length;
    const iframeContainer = document.createElement('div');


    for (let i = 0; i < length; i++){
        const video = videos[i];//video
        const iframe = createIframe2(video);
        iframeContainer.appendChild(iframe);
        document.getElementById("testing").appendChild(iframeContainer);
    }
}

function createVideo(data) {
    const videos = data.results;
    const length = videos.length > 10 ? 10 : videos.length;
    const iframeContainer = document.createElement('div');
    iframeContainer.setAttribute('class','card-group');

    const iframeRow = document.createElement('div');
    iframeRow.setAttribute('class','row flex-row flex-nowrap');
    iframeContainer.appendChild(iframeRow);

    for (let i = 0; i < length; i++){
        const video = videos[i];//video
        const iframe = createIframe(video);
        iframeRow.appendChild(iframe);
        document.getElementById("testing2").appendChild(iframeContainer);
    }
}

//Event Delegation
document.onclick = function(event) {
    const target = event.target;
    $(document).on('click','.clickToGetId',function(){
        id = $(this).attr('data-id');
        sessionStorage.setItem('id',id);
    })
}
