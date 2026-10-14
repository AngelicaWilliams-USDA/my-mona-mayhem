<!-- l10n-sync: source-file="04-design-vibes.md" -->
# Parte 4: Tema Orientado a Design

---

Nesta parte, você vai usar os ciclos de planejamento e implementação do Copilot para projetar uma transformação completa do tema. Isso é desenvolvimento orientado a design — comece com a visão, itere nos visuais e deixe o Copilot cuidar do trabalho pesado de CSS.

## Tarefa 1: Planeje o Tema Retrô

<!-- track:vscode:start -->
Mude para o modo **Plan** no GitHub Copilot Chat.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Use `/plan` no GitHub Copilot CLI ou pressione **Shift+Tab** até ativar o modo de planejamento.
<!-- track:cli:end -->

Insira este prompt:

> Quero transformar esta página em uma experiência completa de arcade retrô. Planeje uma reformulação visual abrangente que inclua: efeitos de linhas de varredura CRT no fundo, brilho neon no título que pulse como um letreiro neon, emblema VS animado com mudanças de cor em degradê, sobreposição de brilho cintilante nos cartões de resultados dos usuários, animações de entrada flutuante para os campos de entrada, texto de carregamento que alterne entre verde e roxo e efeitos de brilho ao passar o cursor sobre os quadrados de contribuição. Mantenha o fundo escuro (`#0a0a1a`) com cores de destaque verde (`#5fed83`) e roxo (`#8a2be2`). Use um tema escuro com a fonte de jogos retrô Press Start 2P do Google Fonts.

O Copilot vai gerar um plano de implementação detalhado cobrindo todos os efeitos visuais. **Não aceite imediatamente** — revise o plano e itere:

- Sugira ajustes no tempo das animações (por exemplo, *"Deixe a pulsação neon mais lenta, com cerca de 3 segundos"*)
- Pergunte sobre efeitos específicos (por exemplo, *"Como a sobreposição de brilho cintilante funcionará nos cartões?"*)
- Solicite mudanças na abordagem se algo não parecer correto

## Tarefa 2: Implemente o Tema

Quando estiver satisfeito com o plano, peça ao Copilot para implementá-lo.

> Implemente o plano do tema arcade retrô que acabamos de projetar.

O Copilot vai adicionar múltiplas animações CSS, pseudo-elementos e transições na sua folha de estilos. Isso pode incluir:

- `@keyframes` para scanlines, pulso neon, shimmer e efeitos de float-in
- Pseudo-elementos (`::before`, `::after`) para efeitos de sobreposição
- CSS custom properties para as cores do tema
- Estados de transição e hover para elementos interativos

<!-- track:cli:start -->
Depois que as alterações forem aplicadas, use `/diff` para revisar as mudanças de estilo antes de aprová-las.
<!-- track:cli:end -->

## Tarefa 3: Ajuste Fino das Vibes

> **⚠️ Não está vendo as mudanças?** Se o novo tema ou as animações não aparecerem, pare o servidor de desenvolvimento (`Ctrl+C`) e reinicie com `npm run dev`, depois faça uma atualização forçada (`Ctrl+Shift+R`) no navegador.

Mantenha a pré-visualização do navegador aberta e itere no design. Tente prompts como:

> O efeito de linhas de varredura está muito forte, reduza a opacidade para 0.03

> Adicione uma oscilação elétrica sutil ao texto do título

> O emblema VS deve pulsar de forma mais dramática

Isso é **desenvolvimento orientado a design** — você está iterando na saída visual em tempo real. Cada prompt refina a experiência até que fique perfeita. Não se contente com "bom o suficiente" — aperfeiçoe as vibes até que a página pareça pertencer a um gabinete de arcade.

## Tarefa 4: Atualize as Instruções

Suas instruções devem refletir decisões importantes de design para que os prompts posteriores permaneçam alinhados.

<!-- track:vscode:start -->
Peça ao Copilot Chat:

> Adicione uma seção de guia de design ao copilot-instructions.md descrevendo nosso tema arcade retrô: cores, fontes e estilo das animações
<!-- track:vscode:end -->

<!-- track:cli:start -->
Peça ao Copilot CLI:

> Atualize as instruções do repositório com um breve guia de design para o tema arcade retrô: cores, fontes, estilo das animações e a regra de que novas interfaces devem manter a estética neon.
<!-- track:cli:end -->

Faça commit das instruções atualizadas e das mudanças de design quando a página estiver como você deseja.

## ✅ Parte 4 Concluída

**O que você aprendeu:**

- Usar fluxos de planejamento para esboçar um **sistema de design antes da implementação**
- **Iterar no resultado visual** com prompts rápidos de acompanhamento
- **Atualizar as instruções após decisões importantes** para que o Copilot mantenha a identidade visual consistente
