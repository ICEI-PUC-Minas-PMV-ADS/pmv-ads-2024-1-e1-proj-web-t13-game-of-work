# Plano de Testes de Software

Pré-requisitos: [Especificação do Projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-game-of-work/blob/5d5bcd6377562cc52487d61166c6877cec1c9da5/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md) e [Projeto de Interface](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-game-of-work/blob/5d5bcd6377562cc52487d61166c6877cec1c9da5/documentos/04-Projeto%20de%20Interface.md). 

Os requisitos para realização dos testes de software são:

- Site publicado na internet;
- Navegador da internet: Chrome, Firefox ou Edge.

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

| Caso de Teste    | CT-01 - Tela Inicial |
|-------------------------------------|----------------------------------------------------------------------------------|
| **Requisitos Associados** | RF- 02: Local de navegação intuitivo sem dificuldade de entendimento;<br>RF- 01: Tela de login, com acesso diferente para cada perfil de usuário.<br> RF-19 O usuário deve conseguir sair de sua conta. |
| **Objetivo do Teste** | Verificar se os cards direcionadores da Página Inicial estão encaminhando para as respectivas páginas corretamente. |
| **Passos** | 1) Acessar o navegador;<br>2) Informar o endereço do site;<br>3) Visualizar a Página Inicial;<br>4) Clicar nos cards da página. |
| **Critérios de êxito** | Todos os cards da Página Inicial devem encaminhar o usuário para as páginas descritas.  |
| **Responsável pela elaboração do caso de Teste** | Brenda Drumond |


| Caso de Teste    | CT-02 - Login |
|:---|:---|
| **Requisitos Associados** | RF- 01: Tela de login, com acesso diferente para cada perfil de usuário.<br> RF-13 Deve permitir que o usuário faça o login na sua conta. |
| **Objetivo do Teste** | Verificar se a validação de login está ocorrendo da maneira correta e verificar se o encaminhamento está ocorrendo para as páginas certas.|
| **Passos** | 1) Acessar o navegador;<br>2) Informar o endereço do site;<br>3) Visualizar a Página de Login;<br>4) Inserir e-mail e senha cadastrados;<br>5) Inserir e-mail e senha cadastrados.;<br>6) Clicar em "Cadastra-se". |
| **Critérios de êxito** | Se já cadastrado, deve direcionar para a Tela Inicial, caso contrário mostrar mensagem de erro. A opção "cadastre-se" deve encaminhar para a página de Cadastro de Funcionários. |
| **Responsável pela elaboração do caso de Teste** | Kayque Fonseca |


|Caso de Teste    | CT-03 - Cadastro Funcionários |
|:---|:---|
| **Requisitos Associados** | RF-02 Local de navegação intuitivo sem dificuldade de entendimento;<br>RF-06 Na ficha do funcionário, deve ter seu objetivo profissional;<br>RF-08 Deve conter um breve resumo sobre o funcionário;<br>RF-04 Na ficha do funcionário, deve ter um local para colocar o nível de cada competência;<br>RF-12 Deve permitir que faça o cadastro de um usuário. |
| **Objetivo do Teste** | Verificar se é possível cadastrar um funcionário. |
| **Passos** | 1) Acessar o navegador;<br>2) Informar o endereço do site;<br>3) Visualizar a página de Cadastro de Funcionários;<br>4) Realizar o cadastro de um "funcionário" |
| **Critérios de êxito** | Mensagens de erro caso as informações inseridas estejam fora do padrão, se todas as informações forem validadas deve exibir uma mensagem de sucesso seguido do direcionamento para a Tela de Login.  |
| **Responsável pela elaboração do caso de Teste** | Kayque Fonseca |


|Caso de Teste    | CT-04 - Tela Perfil |
|:---|:---|
| **Requisitos Associados** | RF-04 Na ficha do funcionário, deve ter um local para colocar o nível de cada competência;<br>RF-05 Na ficha do funcionário, deve ter uma imagem/avatar do mesmo;<br>RF-07 Deve conter área para as formações acadêmicas (fora o conhecimento adquirido técnico);<br>RF-06 Na ficha do funcionário, deve ter seu objetivo profissional;<br>RF-08 Deve conter um breve resumo sobre o funcionário;<br>RF-09 Opção de demonstrar os projetos que o funcionário participou anteriormente;<br>RF-16 Exibir ficha do funcionário;<br>RF-18 O usuário deve poder acessar o seu perfil para visualizar suas competências.|
| **Objetivo do Teste** | Verificar se a Tela Perfil está apresentando as informações cadastradas corretamente, baseado no login cadastrado anteriormente.|
| **Passos** | 1) Acessar o navegador;<br>2) Informar o endereço do site;<br>3) Visualizar a página Login;<br>4) Preencher seus dados e clicar em “Entrar”;<br>5)Visualizar a Página Inicial;<br>6)Clicar no card "Perfil" ou no menu lateral;<br>7)Visualizar a página Perfil e verificar os dados.|
| **Critérios de êxito** | As informações cadastradas devem estar disponibilizadas corretamente na página Perfil. |
| **Responsável pela elaboração do caso de Teste** | Catiane de Souza |


|Caso de Teste    | CT-05 - Cadastro de Projetos |
|:---|:---|
| **Requisitos Associados** | RF-14 Deve permitir que faça o cadastro de um projeto.|
| **Objetivo do Teste** | Cadastrar um novo projeto no sistma |
| **Passos** | 1) Acessar o navegador;<br>2) Informar o endereço do site;<br>3) Visualizar a página Cadastro;<br>4) Clicar no botao "Novo Projeto"<br>5) Preencher os dados do projeto<br>6) Clicar no botão "Criar projeto" |
| **Critérios de êxito** | O projeto deve ser criado e armazenado em "listaProjetos" no localStorage |
| **Responsável pela elaborar do caso de Teste** | Nikolas Victor Mota|

|Caso de Teste    | CT-06 - Tela Projetos |
|:---|:---|
| **Requisitos Associados** | RF-10 Tem que ser possível selecionar os projetos que estão em prioridade por conta de prazo;<br>RF-15 Deve exibir uma lista com os projetos cadastrados;<br>RF-20 Deve exibir uma lista com os projetos cadastrados;<br>RF-21 Deve exibir quais funcionários estão participando de um projeto.|
| **Objetivo do Teste** | Verificar se a Tela Projetos está apresentando as informações corretamente, baseado no cadastro do projeto.|
| **Passos** | 1) Acessar o navegador;<br>2) Informar o endereço do site;<br>3) Visualizar a página Login;<br>4) Preencher seus dados e clicar em “Entrar”;<br>5) Visualizar a Página Inicial;<br>6) Clicar no card "Projetos" ou no menu lateral;<br>7) Visualizar a página Projetos e verificar os dados.|
| **Critérios de êxito** | As informações cadastradas devem estar disponibilizadas corretamente na página Projetos.|
| **Responsável pela elaboração do caso de Teste** | Brenda Drumond |


|Caso de Teste    | CT-07 - Lista Funcionários |
|:---|:---|
| **Requisitos Associados** | RF-04 Na ficha do funcionário, deve ter um local para colocar o nível de cada competência.<br>RF-15 Deve exibir uma lista com os funcionários cadastrados.<br>RF-16 Exibir ficha do funcionário. |
| **Objetivo do Teste** | Exibir uma lista com todos os funcionários cadastrados no sistema e exibir os dados de um funcionário selecionado|
| **Passos** | 1) Acessar o navegador;<br>2) Informar o endereço do site;<br>3) Visualizar a página Lista de Funcionários;<br>4)Clicar em um funcionário na lista |
| **Critérios de êxito** | Ao entrar na página uma lista com todos os funcionários cadastrados deve ser exibida e, ao clilcar em um funcionário, os dados deste funcionário deverão aparecer na tela |
| **Responsável pela elaborar do caso de Teste** | Nikolas Victor Mota|

|Caso de Teste    | CT-08 - Exclusão de Funcionário |
|:---|:---|
| **Requisitos Associados** | RF-11 Deve permitir excluir um funcionário. |
| **Objetivo do Teste** | Excluir os dados do funcionário do sistema|
| **Passos** | 1) Acessar o navegador;<br>2) Informar o endereço do site;<br>3) Visualizar a página Cadastro;<br>4)Clicar no botão "Excluir Funcionário"<br>5)Dar um duplo clique no funcionário selecionado<br>6)Clicar em "Sim" |
| **Critérios de êxito** | Todos os dados do funcionário selecionado devem ser excluídos do sistema |
| **Responsável pela elaborar do caso de Teste** | Nikolas Victor Mota|

|Caso de Teste    | CT-09 - Exclusão de Projeto |
|:---|:---|
| **Requisitos Associados** | RF-03 Deve permitir excluir um projeto. |
| **Objetivo do Teste** | Excluir os dados de um projeto|
| **Passos** | 1) Acessar o navegador;<br>2) Informar o endereço do site;<br>3) Visualizar a página Cadastro;<br>4)Clicar no botão "Excluir Projeto"<br>5)Dar um duplo clique no projeto selecionado<br>6)Clicar em "Sim" |
| **Critérios de êxito** | Todos os dados do projeto selecionado devem ser excluídos do sistema |
| **Responsável pela elaborar do caso de Teste** | Nikolas Victor Mota|

|Caso de Teste    | CT-10 - Alteração de dados de funcionário|
|:---|:---|
| **Requisitos Associados** | RF-17 Deve permitir alteração dos dados de um funcionário. |
| **Objetivo do Teste** | Alterar os dados de um funcionário|
| **Passos** | 1) Acessar o navegador;<br>2) Informar o endereço do site;<br>3) Visualizar a página Cadastro;<br>4)Clicar no botão "Editar Funcionário"<br>5)Dar um duplo clique no funcionário selecionado<br>6)Alterar os dados do funcionário<br>7)Clicar em "Editar" |
| **Critérios de êxito** | Os dados do funcionário devem ser trocados pelos novos dados preenchidos |
| **Responsável pela elaborar do caso de Teste** | Nikolas Victor Mota|

