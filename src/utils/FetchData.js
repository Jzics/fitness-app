export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '95dd9dd5e3msh172ef2555bdbab6p1b2527jsne788161337f6',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
