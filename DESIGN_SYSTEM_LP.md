# Design System da Landing Page Prime Control AI

**Versão:** 1.0  
**Escopo:** landing page, apresentação executiva e futuros desdobramentos do Prime Control AI  
**Princípio visual:** tecnologia presente, sólida e controlada

## 1. Direção estética

A landing page utiliza uma linguagem **dark tech editorial**. O azul profundo estabelece autoridade; o branco frio cria pausas de leitura; o azul elétrico representa inteligência em atividade; o laranja funciona como pulso pontual de energia e conversão.

O gesto visual proprietário é o **sistema em órbita**: núcleos, linhas, grades, nós e fluxos demonstram contexto sendo organizado. Esses elementos nunca devem competir com o texto.

### Personalidade

- tecnológica sem futurismo genérico;
- corporativa sem rigidez excessiva;
- elegante sem parecer distante;
- precisa sem excesso de informação;
- dinâmica sem sacrificar leitura e performance.

## 2. Tokens de cor

| Token | Valor | Papel |
|---|---:|---|
| `--midnight` | `#00173A` | Fundo institucional e áreas de autoridade. |
| `--ink` | `#06102D` | Fundo de máxima profundidade. |
| `--navy` | `#1E3973` | Planos intermediários e cards escuros. |
| `--blue` | `#3051CA` | CTA primário, links e seleção. |
| `--electric` | `#5876FF` | Sinais, nós, foco e estados ativos. |
| `--lavender` | `#DFE2F9` | Texto e destaques suaves em fundos escuros. |
| `--mist` | `#E6ECF5` | Divisórias e superfícies secundárias. |
| `--surface` | `#F5F7FB` | Seções editoriais claras. |
| `--white` | `#FFFFFF` | Texto de alto contraste e formulário. |
| `--orange` | `#F36F21` | Acento de marca e CTA de conversão. |
| `--text` | `#0A1837` | Texto principal em fundo claro. |
| `--muted` | `#66718A` | Texto secundário. |
| `--success` | `#16A866` | Confirmação e estados de sucesso. |

### Proporção visual

- 55% azul profundo e quase preto;
- 30% branco e superfícies claras;
- 12% azuis funcionais e lavanda;
- até 3% laranja.

### Gradientes

- Hero: `radial-gradient` azul sobre `linear-gradient` de midnight para ink.
- Núcleos: azul médio no ponto de luz, finalizando em azul profundo.
- Destaque textual: branco com transição suave para lavanda ou azul de baixa saturação.
- Laranja: apenas em linhas curtas, pontos, pequenos ícones ou um CTA dominante.

## 3. Tipografia

### Famílias

- **Titillium Web:** títulos, statements, números, nomes de soluções e infográficos.
- **Manrope:** corpo, navegação, formulários, rótulos e metadados.

### Escala digital

| Papel | Desktop | Mobile | Diretriz |
|---|---:|---:|---|
| Hero | `54–86px` | `43–58px` | Peso 300; destaques em 600. |
| Display | `48–88px` | `43–60px` | Entrelinha de 0,93 a 0,98. |
| Título de bloco | `26–39px` | `23–32px` | Peso 500 ou 600. |
| Corpo destacado | `17–18px` | `15–16px` | Máximo de 68–72 caracteres. |
| Corpo | `12–16px` | `12–15px` | Entrelinha de 1,55 a 1,70. |
| Eyebrow | `8–10px` | `8–10px` | Caixa alta e tracking amplo. |

### Escala para PowerPoint 16:9

| Papel | Tamanho recomendado |
|---|---:|
| Título de capa | 54–68 pt |
| Título de slide | 38–52 pt |
| Statement principal | 46–60 pt |
| Subtítulo | 22–28 pt |
| Corpo | 17–22 pt |
| Fonte e metadado | 9–12 pt |

## 4. Grid

### Web

- Container: `min(1440px, calc(100vw - 8vw))`.
- Margem lateral desktop: 4% da viewport.
- Grid principal: 12 colunas.
- Tablet: 6 colunas.
- Mobile: 1 a 4 colunas, conforme o componente.
- Escala base: 4px.
- Ritmo principal: 8px.
- Gutter entre cards: 12–28px.
- Separação entre grandes colunas: 6–9vw.

### Seções

- Seção regular: `clamp(110px, 8vw, 145px)`.
- Seção compacta: `clamp(96px, 7vw, 125px)`.
- Mobile: 84–90px.

### PowerPoint

- Canvas: 16:9, 1280 × 720 px.
- Margens seguras: 64–76 px.
- Grid: 12 colunas.
- Gutter: 20–24 px.
- Área útil recomendada: 1136 × 592 px.
- Alinhamentos estruturais devem se repetir entre slides, ainda que as composições alternem entre 5/7, 6/6 e 7/5.

## 5. Geometria

- Botões principais em formato pill, com altura mínima de 48px.
- Cards com cantos retos ou discretamente arredondados.
- Círculos reservados para núcleos, estados, órbitas e ícones de ação.
- Bordas de 1px, normalmente translúcidas.
- Linhas são estruturais: conectam, separam ou indicam progressão.
- Formas decorativas devem ficar atrás da leitura e usar baixa opacidade.

## 6. Profundidade e textura

- Grain global muito sutil: opacidade aproximada de 0,025 a 0,045.
- Blurs restritos a menus, núcleos e planos tecnológicos.
- Sombras profundas em elementos de conversão ou controle, nunca em todos os cards.
- Superfícies escuras usam contraste por luminosidade e borda, não por múltiplas cores.
- Fundos orbitais devem receber máscara ou gradiente para desaparecer antes de alcançar blocos de texto.

## 7. Componentes

### Cabeçalho

- Fixo e transparente no topo.
- Após rolagem: fundo `rgba(0,15,42,.86)`, blur e borda inferior sutil.
- Navegação curta para evitar rotas de fuga.
- CTA claro com alto contraste.

### Hero

- Grid assimétrico, com texto em aproximadamente 58% e visual em 42%.
- Título com no máximo três movimentos de leitura.
- Infográfico sincronizado com o termo variável do título.
- Quatro estados: negócio, QA, SAP e Hiperautomação.
- Intervalo de quatro segundos e pausa em interação.

### Infográficos orbitais

- Núcleo central com marca ou produto.
- Uma ou duas órbitas.
- Três ou quatro nós periféricos.
- Linhas finas e pontos de sinal.
- Rótulos curtos, sempre legíveis sem depender de animação.

### Cards de evidência

- Um número dominante.
- Fonte e ano no topo.
- Interpretação em texto curto.
- Link de fonte em nível terciário.
- Um card pode receber preenchimento azul para criar hierarquia.

### Tabs de soluções

- Três abas horizontais no desktop.
- Indicador ativo por linha laranja fina.
- Conteúdo associado com painel de contexto e matriz de produtos.
- Em mobile, rolagem horizontal das abas e cards em coluna única.

### Tabela comparativa

- Primeira coluna: critério.
- Segunda: alternativa genérica.
- Terceira: Prime Control AI, com fundo azul translúcido.
- Em mobile, cada linha vira um bloco vertical com rótulos explícitos.

### Formulário

- Superfície branca sobre seção azul profunda.
- Labels permanentes.
- Campos com 52px de altura.
- Erros próximos ao campo.
- CTA laranja em largura total.
- Confirmação substitui o formulário após o envio.

### FAQ

- Lista editorial, sem cards pesados.
- Divisórias finas.
- Controle circular com símbolo de expansão.
- Posicionado depois do formulário para reduzir objeções sem retardar a conversão principal.

## 8. Movimento

| Movimento | Duração | Uso |
|---|---:|---|
| Microinteração | 180–320ms | Hover, foco e pequenos deslocamentos. |
| Reveal | 700–900ms | Entrada de títulos, cards e blocos. |
| Troca do hero | 4s por estado | Sincronização entre palavra e infográfico. |
| Órbita | 20–30s | Movimento ambiental de baixa atenção. |
| Stagger | 50–90ms | Sequências de cards e listas. |

Curva padrão: `cubic-bezier(.2,.72,.2,1)`.

### Acessibilidade de movimento

- Respeitar `prefers-reduced-motion`.
- Não depender de animação para comunicar conteúdo.
- Pausar carrosséis durante hover, foco ou interação.
- Evitar grandes deslocamentos e flashes.

## 9. Responsividade

### 1000px

- Cabeçalho passa para menu mobile.
- Hero vira uma coluna.
- Grids 7/5 e 6/6 passam para uma coluna.
- Formulário e conteúdo deixam de ser sticky.

### 800px

- Stack de compatibilidade vira fluxo vertical.
- Tabela comparativa vira blocos empilhados.
- CTAs de apoio passam para coluna.

### 700px

- Container lateral de 18px.
- Títulos usam `clamp` específico para evitar quebras ruins.
- Cards ficam em uma coluna, com exceções de logos em 2 × 2.
- Elementos orbitais são reduzidos e afastados da leitura.
- Botão fixo de voltar ao topo é reduzido para 48px.

## 10. Acessibilidade

- Contraste mínimo WCAG AA.
- Um único `h1`.
- Hierarquia coerente de headings.
- Áreas interativas com pelo menos 44 × 44px.
- Navegação completa por teclado.
- Foco laranja visível.
- `aria-label`, `aria-current`, `aria-hidden` e regiões de status aplicados conforme o comportamento.
- Formulário com `label`, instruções, mensagens de erro e confirmação.

## 11. Redação visual

### Tom

Direto, confiante, técnico e orientado a impacto. A mensagem deve funcionar para liderança e para profissionais que operam ou avaliam as soluções.

### Preferir

- desafios;
- contexto;
- operação;
- prioridade;
- controle;
- integração;
- evidência;
- valor mensurável.

### Evitar

- superlativos sem prova;
- promessas absolutas;
- travessões usados como fórmula de texto;
- excesso de jargão;
- a palavra “problema” quando “desafio”, “cenário” ou “contexto” comunicam melhor;
- frases que pareçam geradas por IA.

## 12. Tecnologia e manutenção

Os tokens ficam centralizados em `:root`. Layouts macro usam CSS Grid; agrupamentos internos usam Flexbox. O JavaScript controla estados interativos, mas o conteúdo permanece disponível no HTML. A estrutura não depende de framework e pode ser integrada a um CMS ou migrada para componentes sem alterar o sistema visual.

### Arquivos de referência

- `index.html`: conteúdo, semântica, metadados e componentes.
- `styles.css`: tokens, grids, responsividade, movimento e estados.
- `script.js`: interações, formulário, UTMs e eventos.
- `../DESIGN.md`: sistema digital institucional da Prime Control.
- `ESTRATEGIA_LP.md`: estratégia de posicionamento, narrativa e conversão desta landing page.

## 13. Checklist de consistência

- O container segue a mesma largura em todas as seções?
- Títulos e textos iniciam em alinhamentos recorrentes?
- O laranja permanece pontual?
- Fundos tecnológicos desaparecem antes de interferir na leitura?
- Cada card tem uma função clara?
- O CTA prioritário é inequívoco?
- A hierarquia funciona sem animação?
- O mobile preserva contraste, ritmo e ordem narrativa?
- A apresentação em slides mantém os mesmos tokens, margens e relação entre texto e sistema visual?

