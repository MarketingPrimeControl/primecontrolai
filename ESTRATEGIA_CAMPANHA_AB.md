# Estratégia de campanha e experimento A/B — Prime Control AI

## Decisão recomendada

Manter a landing page longa em `prime-control-ai/index.html` como a experiência principal do domínio, para construção de marca, descoberta orgânica e uma narrativa completa.

Para mídia paga, foram criadas duas páginas curtas e focadas em uma única conversão:

| Variante | Rota | Formulário | Melhor hipótese de uso |
|---|---|---|---|
| A · Formulário na primeira dobra | `campanha-form-hero/` | Visível já no hero | Busca de alta intenção, remarketing e públicos que já conhecem a Prime Control. |
| B · Formulário após contexto | `campanha-form-contexto/` | Após proposta de valor e arquitetura | LinkedIn, Meta, descoberta de demanda e criativos que precisam explicar a oferta. |

Não há uma posição universalmente vencedora para formulário. A primeira dobra reduz o caminho para quem já chegou pronto para conversar. A versão contextual ganha espaço para explicar uma oferta B2B complexa antes do pedido de contato. Por isso, o teste deve comparar **a mesma promessa, os mesmos campos e a mesma audiência**, alterando somente o momento em que o formulário aparece.

## O que cada página faz

### Variante A — converter intenção já existente

A pessoa vê a proposta, as três frentes de atuação e o formulário no mesmo momento. É a página para anúncios com intenção declarada, como “IA para SAP”, “agentes de IA para QA”, “automação de testes com IA” e remarketing de visitantes qualificados.

Mensagem central: **IA desenhada para a sua operação.**

CTA: **Quero falar sobre IA**

### Variante B — criar convicção antes da conversão

A pessoa entende o papel da Prime Control AI, visualiza os ganhos operacionais e conhece a arquitetura antes de deixar seus dados. É a página indicada para criativos que introduzem a oportunidade, conteúdos de geração de demanda e audiências frias.

Mensagem central: **IA que entende o seu contexto.**

CTA: **Ver possibilidades para minha operação**

## Arquitetura de conversão aplicada

1. **Correspondência entre anúncio e página**: cada criativo deve repetir no título da primeira dobra a mesma frente, benefício ou desafio do anúncio. Não use uma campanha genérica para todos os temas.
2. **Uma ação principal**: ambas as páginas removem menu de navegação, WhatsApp, redes sociais e links externos competitivos. O objetivo é conduzir ao formulário.
3. **Mensagem curta e escaneável**: título, explicação objetiva, três provas de capacidade e um CTA. Conteúdo institucional extenso fica na página principal.
4. **Formulário enxuto e qualificável**: nome, e-mail profissional, empresa e área de interesse. Essa combinação inicia uma conversa sem transformar a página em cadastro longo.
5. **Rastreabilidade desde o clique**: campos ocultos guardam UTMs, `gclid` e `fbclid`. O arquivo `campaign.js` também emite eventos de página, clique, início e envio do formulário para a camada de analytics.
6. **Governança como argumento de venda**: a mensagem não vende IA genérica. Vende contexto, integração, controle e evolução operacional.

## Como rodar o teste corretamente

### Segmentação antes da comparação

Não misture tráfego frio e tráfego de alta intenção na mesma leitura. A posição do formulário interage com o nível de consciência de quem chega.

- **Grupo de alta intenção**: Search não institucional, branded, visitantes recorrentes e remarketing. Inicie com 50% na Variante A e 50% na Variante B.
- **Grupo de descoberta**: LinkedIn, Meta, vídeos, audiências semelhantes e campanhas de conteúdo. Inicie com 50% na Variante B e 50% na Variante A.

Mantenha dentro de cada grupo: mesma oferta, mesma segmentação, mesma janela de conversão, mesmo formulário, mesma mensagem-base e mesma página de agradecimento. Assim, a posição do formulário é a variável que realmente está sendo avaliada.

### Métrica de decisão

A métrica principal não deve ser “envios de formulário” isoladamente. O resultado que importa é:

**Leads qualificados por sessão** e **custo por lead qualificado**.

Use como indicadores de proteção:

- taxa de início e envio do formulário;
- taxa de rejeição e profundidade de rolagem;
- taxa de agendamento ou avanço comercial;
- qualidade por origem, campanha, anúncio e área de interesse.

No HubSpot, inclua propriedades para variante, campanha, origem e página de conversão. Quando o time comercial qualificar um contato, devolva esse status à plataforma de mídia. O Google recomenda usar a meta de “lead qualificado” ou “lead convertido” para otimizar campanhas de leads e oferece enhanced conversions for leads para melhorar a mensuração com dados primários tratados de forma segura.

### Regra para encerrar ou evoluir o teste

Defina a amostra necessária antes de iniciar, usando a conversão atual e a menor melhoria que vale uma mudança de investimento. Evite declarar vencedora uma versão por poucos envios. Se houver ganho de volume, mas queda clara na qualificação, a variante não venceu.

Depois da primeira decisão, o próximo teste pode avaliar apenas um elemento por vez: promessa do hero, texto do CTA, número de campos ou criativo de origem. Não misture mudanças de layout, oferta e formulário no mesmo experimento.

## Implementação antes de publicar

- Substituir o HTML de cada `.lead-form` pelo embed HubSpot, preservando os nomes dos campos e os campos ocultos de origem.
- Configurar uma página de agradecimento exclusiva por variante ou um evento de sucesso com `variant=A/B`.
- Instalar Google tag e eventos de conversão somente após envio bem-sucedido; não considerar clique no botão como lead.
- Conectar `qualified_lead` e `converted_lead` do CRM à mídia para otimização posterior.
- Inserir `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` e `utm_term` no link final de cada anúncio.
- Publicar ambas as rotas no mesmo domínio de exibição usado nos anúncios.
- Validar mobile, carregamento e a chegada das UTMs no HubSpot antes de ativar investimento.

## Referências de pesquisa

- O Google Ads orienta alinhar anúncio, palavras-chave, CTA e landing page, manter a página simples para a ação desejada e posicionar informações importantes no topo. [Google Ads: otimização de anúncios e landing pages](https://support.google.com/google-ads/answer/6238826/optimising-your-ad-and-landing-page?hl=en-GB)
- A documentação do Google também aponta relevância, utilidade, facilidade de navegação, quantidade de links e expectativa criada pelo anúncio como fatores da experiência de landing page. [Google Ads: landing page](https://support.google.com/google-ads/answer/14086?hl=en_us_us)
- Para captura de leads, o Google recomenda configurar “lead qualificado” ou “lead convertido” como objetivo e descreve a mensuração aprimorada para leads. [Google Ads: práticas de enhanced conversions](https://support.google.com/google-ads/answer/14795081?hl=en)
- A HubSpot recomenda uma página com objetivo claro, mensagem e CTA visíveis, prova de confiança e conteúdo conciso; sua orientação de formulários também reconhece que a posição deve considerar a experiência completa, não apenas o topo da página. [HubSpot: landing pages eficazes](https://blog.hubspot.com/blog/tabid/6307/bid/6014/7-habits-of-a-highly-effective-landing-page.aspx?iframe=yes) e [HubSpot: boas práticas de formulários de lead](https://blog.hubspot.com/blog/tabid/6307/bid/28472/The-5-Critical-Components-of-Fantastic-Lead-Capture-Forms.aspx)

