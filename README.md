# Prime Control AI

Site institucional e landing pages de campanha do Prime Control AI.

## Estrutura

- `/`: experiência principal.
- `/ia-qualidade/`: IA aplicada à Qualidade e Experiência.
- `/ia-servicos-sap/`: IA aplicada a Serviços SAP.
- `/ia-hiperautomacao/`: IA aplicada à Hiperautomação.
- `/campanha-form-hero/`: variante de campanha com formulário na primeira dobra.
- `/campanha-form-contexto/`: variante de campanha com contexto antes do formulário.
- `/obrigado/`: confirmação de conversão.
- `/assets/`: identidade visual e imagens utilizadas pelas páginas.
- `styles.css` e `script.js`: estilos e interações da página principal.
- `campaign.css` e `campaign.js`: estilos e interações compartilhados pelas campanhas.

## Execução local

Use `npm run dev` e acesse `http://127.0.0.1:4173/`.

A prévia HTTP reproduz as URLs públicas limpas. Por exemplo, a página de Qualidade abre como `/ia-qualidade/`, sem exibir `index.html`. O arquivo `index.html` continua existindo internamente em cada pasta porque é o documento padrão usado por hospedagens estáticas.

O `vercel.json` também padroniza URLs sem extensão e com barra final no ambiente publicado.

## Build

Use `npm run build` para gerar a versão estática em `dist/`.

## Formulários

Os formulários públicos utilizam os embeds do HubSpot e direcionam para a rota `/obrigado/` após a conversão.
