const getData = (directory, file) => {
  return fetch(`https://www.dnd5eapi.co/api/${directory}/${file}`)
  .then(response => interpretResponse(response))
}

const interpretResponse = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(`There was an error: ${response.status} ${response.statusText}`)
  }
}

export { getData }