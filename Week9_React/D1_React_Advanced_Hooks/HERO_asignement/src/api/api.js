const key = 'S72wc5HpmSlthpEE9Qp7kCVFTBgDLkIB';
const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';

// Fonction pour obtenir les informations de la ville
export const getCityWeather = async (city) => {
  const query = `?apikey=${apiKey}&q=${city}`;

  try {
    const response = await fetch(baseUrl + query);
    if (!response.ok) {
      throw new Error('Problème lors de la récupération des données');
    }
    const data = await response.json();
    return data[0]; //=
  } catch (error) {
    console.error('Erreur API:', error);
    throw error;
  }
};
