const theRockMoviesPart = [
        {
          title: "The Mummy Returns",
          releaseYear: 2001,
          imdbRating: 6.4
        },
        {
          title: "The Scorpion King",
          releaseYear: 2002,
          imdbRating: 5.5
        },
        {
          title: "The Rundown",
          releaseYear: 2003,
          imdbRating: 6.7
        },
        {
          title: "Walking Tall",
          releaseYear: 2004,
          imdbRating: 6.3
        },
        {
          title: "Be Cool",
          releaseYear: 2005,
          imdbRating: 5.7
        },
        {
          title: "Doom",
          releaseYear: 2005,
          imdbRating: 5.2
        },
        {
          title: "Gridiron Gang",
          releaseYear: 2006,
          imdbRating: 6.9
        },
        {
          title: "Southland Tales",
          releaseYear: 2006,
          imdbRating: 5.4
        },
        {
          title: "The Game Plan",
          releaseYear: 2007,
          imdbRating: 6.1
        },
            {
              title: "Get Smart",
              releaseYear: 2008,
              imdbRating: 6.5
            },
            {
              title: "Race to Witch Mountain",
              releaseYear: 2009,
              imdbRating: 5.7
            },
            {
              title: "Planet 51",
              releaseYear: 2009,
              imdbRating: 6.0
            },
            {
              title: "Tooth Fairy",
              releaseYear: 2010,
              imdbRating: 5.0
            },
            {
              title: "Faster",
              releaseYear: 2010,
              imdbRating: 6.4
            },
            {
              title: "Fast Five",
              releaseYear: 2011,
              imdbRating: 7.3
            },
            {
              title: "Journey 2: The Mysterious Island",
              releaseYear: 2012,
              imdbRating: 5.8
            },
            {
              title: "Snitch",
              releaseYear: 2013,
              imdbRating: 6.4
            },
            {
              title: "G.I. Joe: Retaliation",
              releaseYear: 2013,
              imdbRating: 5.8
            },
            {
                title: "Pain & Gain",
                releaseYear: 2013,
                imdbRating: 6.4
              },
              {
                title: "Fast & Furious 6",
                releaseYear: 2013,
                imdbRating: 7.1
              },
              {
                title: "Empire State",
                releaseYear: 2013,
                imdbRating: 5.2
              },
              {
                title: "Hercules",
                releaseYear: 2014,
                imdbRating: 6.0
              },
              {
                title: "Furious 7",
                releaseYear: 2015,
                imdbRating: 7.1
              },
              {
                title: "San Andreas",
                releaseYear: 2015,
                imdbRating: 6.0
                },
              {
                title: "Central Intelligence",
                releaseYear: 2016,
                imdbRating: 6.3
                },
                {
                title: "Moana",
                releaseYear: 2016,
                imdbRating: 7.6
                },
                {
                title: "The Fate of the Furious",
                releaseYear: 2017,
                imdbRating: 6.7
                },
                {
                title: "Baywatch",
                releaseYear: 2017,
                imdbRating: 5.5
                },
                {
                title: "Jumanji: Welcome to the Jungle",
                releaseYear: 2017,
                imdbRating: 6.9
                },
                {
                title: "Rampage",
                releaseYear: 2018,
                imdbRating: 6.1
                },
                {
                title: "Skyscraper",
                releaseYear: 2018,
                imdbRating: 5.8
                },
                {
                title: "Fighting with My Family",
                releaseYear: 2019,
                imdbRating: 7.1
                },
                {
                title: "Hobbs & Shaw",
                releaseYear: 2019,
                imdbRating: 6.4
                },
                {
                title: "Jumanji: The Next Level",
                releaseYear: 2019,
                imdbRating: 6.7
                }
                
                ,
                {
                title: "Jungle Cruise",
                releaseYear: 2021,
                imdbRating: 6.6
                }
                ,
                {
                title: "Red Notice",
                releaseYear: 2021,
                imdbRating: 6.3
                }
                ,
                {
                title: "Black Adam",
                releaseYear: 2022,
                imdbRating: 6.3
                }
      ];


// Loop through the array and create the HTML structure for each movie
theRockMoviesPart.forEach((movie, i) => {
    const movieRow = `
      <tr>
        <th scope="row">${i + 1}</th>
        <td>${movie.releaseYear}</td>
        <td>${movie.title}</td>
        <td>${movie.imdbRating}</td>
      </tr>
    `;
  
    // Append the created HTML structure to the table
    newRockList.insertAdjacentHTML('beforeend', movieRow);
  });