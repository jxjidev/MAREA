import { criarApp } from './app.js';

const PORTA = process.env.PORT || 3000;
const app = criarApp();

app.listen(PORTA, () => {
  console.log(`API do MAREA escutando na porta ${PORTA}`);
});