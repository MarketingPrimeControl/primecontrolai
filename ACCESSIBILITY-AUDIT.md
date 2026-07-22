# Auditoria de acessibilidade — Prime Control AI

Data: 21/07/2026
Referência: WCAG 2.2, nível AA

## Escopo validado

- Página principal do Prime Control AI
- LP enxuta de campanha
- IA para Qualidade e Experiência
- IA para Serviços SAP
- IA para Hiperautomação
- Página de confirmação de contato

## Resultado

- Um `h1` por página e estrutura semântica com `main`, `nav`, `header` e `footer`.
- Imagens com texto alternativo, inclusive marca e elementos informativos.
- Botões e controles com nomes acessíveis; navegação principal e mega menu operáveis por teclado.
- Alvos interativos principais com pelo menos 44 px.
- Estados de foco visíveis e suporte a `prefers-reduced-motion`.
- Campos do HubSpot preservados com fonte mínima de 16 px nos inputs, evitando zoom involuntário no iOS.
- Menu principal ajustado para 14 px em desktop e 13 px em notebooks.
- Rodapé ajustado para 14 px em textos e links; metadados com no mínimo 12 px.

## Contraste das combinações principais

| Primeiro plano | Fundo | Razão | Resultado |
|---|---:|---:|---|
| `#AEBBD3` | `#020D27` | 9,96:1 | AA/AAA |
| `#DBE3F7` | `#03102D` | 14,65:1 | AA/AAA |
| `#65718A` | `#FFFFFF` | 4,90:1 | AA |
| `#60708D` | `#F5F7FC` | 4,67:1 | AA |
| `#FFFFFF` | `#3456D8` | 6,05:1 | AA |
| `#8998BA` | `#020D27` | 6,67:1 | AA |

## Observações de manutenção

- Não reduzir textos de navegação e rodapé abaixo dos valores definidos nesta versão.
- Manter ícones com rótulo acessível quando não houver texto visível.
- Revalidar contraste sempre que a paleta ou a opacidade de fundos mudar.
- Testar teclado, zoom de 200% e leitores de tela após integrações futuras do HubSpot.
