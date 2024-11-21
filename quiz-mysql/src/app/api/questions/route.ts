import { NextResponse } from "next/server";

export async function GET() {
  const questions = [
    {
      id: 1,
      question: "Como exibir todos os registros da tabela `pessoa`?",
    },
    {
      id: 2,
      question: "Como selecionar apenas os nomes da tabela `clientes`?",
    },
    // {
    //   id: 3,
    //   question: "Como inserir um novo registro na tabela `produtos` com os campos `nome` e `preco`?",
    // },
    // {
    //   id: 4,
    //   question: "Como atualizar o campo `preco` para 20 na tabela `produtos` onde o `id` é 5?",
    // },
    // {
    //   id: 5,
    //   question: "Como deletar registros da tabela `clientes` onde a cidade é 'São Paulo'?",
    // },
    // {
    //   id: 6,
    //   question: "Como selecionar todos os produtos cujo preço é maior que 50?",
    // },
    // {
    //   id: 7,
    //   question: "Como contar quantos clientes existem na tabela `clientes`?",
    // },
    // {
    //   id: 8,
    //   question: "Como ordenar os registros da tabela `pessoa` pelo campo `nome` em ordem alfabética?",
    // },
    // {
    //   id: 9,
    //   question: "Como selecionar registros únicos do campo `cidade` na tabela `clientes`?",
    // },
    // {
    //   id: 10,
    //   question: "Como renomear a coluna `preco` para `valor` na tabela `produtos`?",
    // },
  ];

  return NextResponse.json(questions);
}
