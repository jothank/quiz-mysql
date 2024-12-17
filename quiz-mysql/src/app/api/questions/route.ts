import { NextResponse } from "next/server";

export async function GET() {
  const questions = [
    {
      id: 1,
      question: "Como exibir todos os registros da tabela `pessoa`?",
      example: "Exemplo: SELECT * FROM nome_da_tabela;",
    },
    {
      id: 2,
      question: "Como selecionar apenas os nomes da tabela `clientes`?",
      example: "Exemplo: SELECT coluna FROM nome_da_tabela;",
    },
    {
      id: 3,
      question: "Como inserir um novo registro na tabela `produtos` com os campos `nome` e `preco`?",
      example: "Exemplo: INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES (valor1, valor2);",
    },
    {
      id: 4,
      question: "Como atualizar o campo `preco` para 20 na tabela `produtos` onde o `id` é 5?",
      example: "Exemplo: UPDATE nome_da_tabela SET coluna = valor WHERE condição;",
    },
    {
      id: 5,
      question: "Como deletar registros da tabela `clientes` onde a cidade é 'São Paulo'?",
      example: "Exemplo: DELETE FROM nome_da_tabela WHERE condição;",
    },
    {
      id: 6,
      question: "Como selecionar todos os produtos cujo preço é maior que 50?",
      example: "Exemplo: SELECT * FROM nome_da_tabela WHERE condição;",
    },
    {
      id: 7,
      question: "Como contar quantos clientes existem na tabela `clientes`?",
      example: "Exemplo: SELECT COUNT(*) FROM nome_da_tabela;",
    },
    {
      id: 8,
      question: "Como ordenar os registros da tabela `pessoa` pelo campo `nome` em ordem alfabética?",
      example: "Exemplo: SELECT * FROM nome_da_tabela ORDER BY coluna ASC;",
    },
    {
      id: 9,
      question: "Como selecionar registros únicos do campo `cidade` na tabela `clientes`?",
      example: "Exemplo: SELECT DISTINCT coluna FROM nome_da_tabela;",
    },
    {
      id: 10,
      question: "Como renomear a coluna `preco` para `valor` na tabela `produtos`?",
      example: "Exemplo: ALTER TABLE nome_da_tabela RENAME COLUMN coluna_antiga TO coluna_nova;",
    },
  ];

  return NextResponse.json(questions);
}
