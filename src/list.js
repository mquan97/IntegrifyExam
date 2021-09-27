function getList() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => { return data.json() })
}

function getPerson(number) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
    .then(data =>  data.json() )
}

export { getList, getPerson } 