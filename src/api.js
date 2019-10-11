const api = async (path) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const response = await fetch(proxyUrl + path)
  if (response.ok) {
    return response.json()
  } else {
    const error = Error(await response.text())
    error.statusText = response.statusText
    error.status = response.status
    throw error
  }
}

const path = 'https://latelier.co/data/cats.json';


const getCats = () => api(path)

export default { getCats };
