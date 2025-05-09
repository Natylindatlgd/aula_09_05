const livroOriginal = {
    titulo: "Aventuras na Floresta",
    autor: "João Silva",
    ano: 2020,
    preco: 50
  };
  
  // Criando uma cópia do livro e alterando o título
  const novoLivro = {
    ...livroOriginal,
    titulo: "Mistérios na Montanha" // novo título
  };
  
  console.log(novoLivro);
  