exports.handler = async function(event, context) {
  // Simulando um banco de dados
  const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "You Don't Know JS", author: "Kyle Simpson" },
    { id: 3, title: "Eloquent JavaScript", author: "Marijn Haverbeke" }
  ];

  console.log("Houve uma requisição!");

  return {
    statusCode: 200,
    body: JSON.stringify(books),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
};
