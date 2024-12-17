import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { questionId, userAnswer }: { questionId: keyof typeof answers; userAnswer: string } = body;

  const answers = {
    1: "SELECT * FROM pessoa;",
    2: "SELECT nome FROM clientes;",
    3: "INSERT INTO produtos (nome, preco) VALUES ('nome_do_produto', valor_preco);",
    4: "UPDATE produtos SET preco = 20 WHERE id = 5;",
    5: "DELETE FROM clientes WHERE cidade = 'São Paulo';",
    6: "SELECT * FROM produtos WHERE preco > 50;",
    7: "SELECT COUNT(*) FROM clientes;",
    8: "SELECT * FROM pessoa ORDER BY nome ASC;",
    9: "SELECT DISTINCT cidade FROM clientes;",
    10: "ALTER TABLE produtos RENAME COLUMN preco TO valor;",
  };

  const correctAnswer = answers[questionId];
  if (!correctAnswer) {
    return NextResponse.json({ message: "Questão não encontrada" }, { status: 404 });
  }

  // Normalização avançada para SQL
  const normalize = (str: string) =>
    str
      .trim()
      .toUpperCase()
      .replace(/\s+/g, " ") // Substitui múltiplos espaços por um único espaço
      .replace(/\s*([=><!]+)\s*/g, " $1 ") // Garante um espaço ao redor dos operadores =, >, <, !=, etc.
      .replace(/\s*\(\s*/g, "(") // Remove espaços extras após parênteses de abertura
      .replace(/\s*\)\s*/g, ")") // Remove espaços extras antes de parênteses de fechamento
      .replace(/VALUES\s*\(.*?\)/i, "VALUES (PLACEHOLDER)"); // Substitui o conteúdo de VALUES por um placeholder

  const isCorrect = normalize(userAnswer) === normalize(correctAnswer);

  return NextResponse.json({ isCorrect });
}
