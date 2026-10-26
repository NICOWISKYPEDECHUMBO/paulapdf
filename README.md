# Guia Pronta

Renomeador de guias PDF que funciona no navegador. Adicione arquivos, selecione um grupo, revise os nomes identificados, informe a data e baixe os PDFs renomeados. Vários arquivos são baixados em ZIP. O conteúdo original é preservado.

## Colocar no GitHub Pages

1. Crie um repositório chamado `guia-pronta` na sua conta.
2. Extraia este ZIP e envie seu conteúdo para a raiz do repositório, incluindo a pasta `vendor`. O `index.html` deve ficar na raiz.
3. Nas configurações de Pages do repositório, escolha publicar pela branch `main`, pasta raiz (`/`).
4. Aguarde o GitHub disponibilizar o endereço do site.

Não é necessário compilar nem instalar Node.js para usar a versão hospedada. A disponibilidade do Pages depende do plano e da visibilidade do repositório.

## Uso e privacidade

- Selecione apenas as guias do grupo desejado ou use Selecionar todos.
- Digite a data como deseja vê-la no nome, por exemplo `10.09.2026` ou `10 de setembro`. Barras são trocadas por pontos.
- Confira os nomes reconhecidos. Quando necessário, corrija ou preencha manualmente.
- Clique em Definir data e renomear e depois em Baixar selecionados.
- Remova arquivos da lista ou limpe tudo para um novo lote. Recarregar a página também apaga a lista.
- PDFs são processados no navegador, sem envio dos documentos para um servidor. Não envie suas guias médicas para o repositório do GitHub.
- OCR e fontes carregam recursos externos e exigem internet. Os arquivos da aplicação usam PDF.js, Tesseract.js e JSZip.
- Não há limite fixo de arquivos ou renomeações; memória e desempenho do computador limitam lotes grandes.

## Validação

OCR e extração foram verificados no exemplo fornecido, assim como formatação de data e tratamento de nomes duplicados. A interface e o download ainda não foram verificados de ponta a ponta no navegador. Outros modelos de guia e digitalizações ruins podem exigir correção manual.
