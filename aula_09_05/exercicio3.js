const aluno = {
  nome: "JNathalya",
  idade: 17,
  curso: "tds",
  disciplinas: ["back-end", "front-end", "banco-de-dados"]
};

for (let propriedade in aluno) {
  console.log(`${propriedade}: ${aluno[propriedade]}`);
}
