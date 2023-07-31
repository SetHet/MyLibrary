module.exports = { getBooks }

const books = {
  data: [
    {
      id: '001',
      name: 'Patata frita, 5 mejores formas',
      imgURL: ''
    },
    {
      id: '002',
      name: 'Como forjar',
      imgURL: ''
    },
    {
      id: '003',
      name: 'Expresiones graciosas en Orbiton Five',
      imgURL: ''
    }
  ]
}

function getBooks (req, res) {
  res.json(books)
}
