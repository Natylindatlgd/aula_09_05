const livro = {
    titulo: "diario de um banana",
    autor: "Jeff Kinney",
    ano: 2007,
    resumo: function() {
      return `Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}`;
    }
  };
  
  // Para usar o método resumo, basta chamar:
  console.log(livro.resumo());