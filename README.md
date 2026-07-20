# Prime Control AI

Site institucional e landing pages de campanha do Prime Control AI.

## Estrutura

- `/index.html`: landing page principal.
- `/campanha-form-hero/`: variante de campanha com formulário na primeira dobra.
- `/campanha-form-contexto/`: variante de campanha com contexto antes do formulário.
- `/assets/`: identidade visual e imagens utilizadas pelas páginas.
- `styles.css` e `script.js`: estilos e interações da página principal.
- `campaign.css` e `campaign.js`: estilos e interações compartilhados pelas campanhas.

## Execução local

O projeto é estático. Abra `index.html` diretamente ou sirva a pasta com um servidor HTTP local.

## Formulários

O formulário principal aceita uma URL de integração no atributo `data-endpoint`. Enquanto o endpoint não estiver configurado, o envio utiliza o WhatsApp comercial como fallback.

As variantes de campanha estão preparadas visualmente para receber o formulário definitivo do HubSpot.
