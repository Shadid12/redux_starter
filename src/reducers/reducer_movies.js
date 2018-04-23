export default function(state=null, action) {
  
  let movies = [
    { title: 'Javascript: The Good Parts' },
    { title: 'Harry Potter' },
    { title: 'The Dark Tower' },
    { title: 'Eloquent Ruby' }
  ];

  switch(action.type) {
    default:
      return movies;
    
    case 'MOVIE_SEARCH':
      console.log(action);
      const matches = movies.filter(s => s.title.includes(action.payload));
      return matches;
  }
}