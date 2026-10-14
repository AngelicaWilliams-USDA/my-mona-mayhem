<!-- l10n-sync: source-file="03-agent-mode.md" -->
# Parte 3: Construa o Jogo com Fluxos de Trabalho Agênticos

---

Nesta parte, o Copilot passa do planejamento à implementação. Em vez de escrever código linha por linha, você descreve o que deseja e deixa o Copilot executar o trabalho nos arquivos que precisa alterar.

## Tarefa 1: Conecte a Batalha

<!-- track:vscode:start -->
1. Mude para o modo **Agent** no Copilot Chat.
2. Insira este prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Retorne o Copilot CLI ao fluxo padrão de programação (ou permaneça no modo autopilot se quiser que o Copilot continue até você interrompê-lo).
2. Se for útil, mencione o arquivo da página para fornecer mais contexto: `@src/pages/index.astro`
3. Insira este prompt:
<!-- track:cli:end -->

   > Adicione JavaScript do lado do cliente à página de batalha que:
   > 1. Obtenha os dois nomes de usuário dos campos de entrada quando o botão Battle for clicado
   > 2. Valide que ambos estão preenchidos (mostre um erro caso contrário)
   > 3. Busque os dados de contribuições dos dois usuários em paralelo na nossa API
   > 4. Renderize os gráficos de contribuições como grades coloridas — cada dia é um quadrado colorido com a paleta do GitHub
   > 5. Mostre um emblema VS entre os dois usuários
   > 6. Exiba o nome de usuário, o total de contribuições e o intervalo de datas de cada usuário
   > 7. Trate os estados de carregamento e os erros
   > 8. Também inicie a batalha ao pressionar Enter nos campos de entrada.
   > 9. Use por enquanto a interface simples que já está estruturada.
   >
   > Use interfaces TypeScript para a estrutura dos dados de contribuições.

<!-- track:vscode:start -->
3. Deixe o Agent Mode trabalhar na implementação em `index.astro`.
4. Revise as alterações propostas na visualização de diff antes de aceitá-las.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Deixe o Copilot CLI trabalhar na implementação em `src/pages/index.astro`.
5. Use `/diff` para inspecionar as alterações geradas e depois aprove-as.
<!-- track:cli:end -->

## Tarefa 2: Teste a Batalha

> **⚠️ Não está vendo as mudanças?** Se a página de batalha não tiver sido atualizada, pare o servidor de desenvolvimento (`Ctrl+C`) e reinicie com `npm run dev`, depois atualize o navegador.

1. Insira `octocat` e `torvalds` como os dois nomes de usuário e clique em **Battle**.
2. Você deve ver ambos os gráficos de contribuição renderizados lado a lado com grids coloridos.
3. Teste os casos de erro:
   - Deixe um ou ambos os campos vazios e clique em Battle — você deve ver um erro de validação.
   - Insira um nome de usuário inválido — o app deve exibir um erro da API.
4. Teste pressionando **Enter** em qualquer campo de entrada — deve disparar a batalha assim como clicar no botão.

## Tarefa 3: Itere com o Copilot

Se algo não estiver totalmente correto, dê feedback de acompanhamento diretamente ao Copilot. Por exemplo:

- *"Os quadrados de contribuição estão muito grandes, deixe-os com 12x12px"*
- *"Adicione uma dica ao passar o cursor mostrando a data e a contagem de contribuições"*
- *"O estado de carregamento precisa de uma animação pulsante"*

<!-- track:vscode:start -->
O Agent Mode lida com alterações em múltiplos arquivos e iterações de forma natural. Cada prompt de acompanhamento se baseia no contexto anterior, permitindo que você refine a implementação de forma incremental sem recomeçar do zero.
<!-- track:vscode:end -->

<!-- track:cli:start -->
As sessões do Copilot CLI mantêm o histórico, então cada prompt de acompanhamento se baseia no anterior. Use `/session` ou `/context` para inspecionar o contexto que o Copilot mantém e `/review` após uma iteração maior se quiser uma revisão extra em busca de bugs ou melhorias.
<!-- track:cli:end -->

## Dicas para Esta Parte

- **Seja específico sobre o que você quer** — requisitos claros levam a resultados melhores.
- **Divida tarefas grandes em prompts menores** se o Copilot sair do rumo.
- **Revise as alterações antes de aceitar** — é mais rápido inspecionar o código gerado do que reescrevê-lo depois.
- **Teste o aplicativo imediatamente após cada etapa de implementação** para que os problemas fiquem restritos à etapa atual.

## ✅ Parte 3 Concluída

Você aprendeu a:

- Usar o Copilot para **trabalhos de implementação em múltiplos arquivos**
- **Iterar nos resultados** com prompts de acompanhamento direcionados
- Lidar com o **ciclo completo de uma funcionalidade** — implementação, revisão, testes e refinamento
