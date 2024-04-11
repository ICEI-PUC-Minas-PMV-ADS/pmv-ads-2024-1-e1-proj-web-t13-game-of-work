# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Nome </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">...</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>...</td>
</tr>
</tbody>
</table>


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Gestor de Projetos</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">É o responsável pela montagem da equipe, tem a necessidade de saber todas as habilidades que o projeto precisa, e quais funcionários as têm, para melhor distribui-los.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> 1 - Ficha de cada funcionário de claro entendimento.<td>  
</tr>2 - Acesso único de gestor com todas as informações necessárias.</tr> 
3 - Possibilidade de alterar as fichas dos funcionários, possibilitando inserir observações. 
4 - Acesso a todos os projetos na sua gestão.
5 - Possibilidade de análise das fichas dos funcionários e de alocação nos projetos.
</tr>
</tbody>
</table>

|Perfil 01: Gestor de Projetos| |
|--------------------|---------------------------|
| Descrição: | É o responsável pela montagem da equipe, tem a necessidade de saber todas as habilidades que o projeto precisa, e quais funcionários as têm, para melhor distribui-los. |
| Necessidades: | 


## Histórias de Usuários

Com base na análise dos perfis foram identificadas as seguintes histórias de usuários:

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Gestor de Projetos | Poder criar uma equipe com as competências necessários para seu sucesso.| Para que o projeto esteja sendo conduzido pela as melhores opções e os mais confiáveis profissionais, gerando resultados positivos. |
| Funcionário | Quero receber recomendações de projetos com base nas minhas competências. | Para desenvolvimento profissional. |
| Funcionário | Poder analisar os projetos da empresa e ver o que o mercado está pedindo de competência atualmente. | Para poder estar sempre por dentro do mercado e me desenvolver de forma a adquirir oportunidade nos projetos mais importantes e grandes da empresa. |
| RH | Quero cadastrar os funcionários e suas competências. | Para manter o controle sobre as informações dos funcionários. |


## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|--------------------|---------------------------|----------------------------------|
| RF- 01 | Tela de login, com acesso diferente para cada perfil de usuário. | ALTA | 
| RF- 02 | Local de navegação intuitivo sem dificuldade de entendimento. | ALTA | 
| RF- 03 | Área de observações para os gestores colocarem informações úteis para o projeto. | MÉDIA | 
| RF-04 | Na ficha do funcionário, deve ter um local para colocar o nível de cada competência. | ALTA | 
| RF-05 | Na ficha do funcionário, deve ter uma imagem/avatar do mesmo. | BAIXA | 
| RF-06 | Na ficha do funcionário, deve ter seu objetivo profissional. | BAIXA | 
| RF-07 | Deve conter área para as formações acadêmicas (fora o conhecimento adquirido técnico). | MÉDIA | 
| RF-08 | Deve conter um breve resumo sobre o funcionário. | BAIXA | 
| RF-09 | Opção de demonstrar os projetos que o funcionário participou anteriormente. | MÉDIA | 
| RF-10 | Tem que ser possível selecionar os projetos que estão em prioridade por conta de prazo. | MÉDIA | 
| RF-11 | Acessibilidade para dispositivos mobile. | BAIXA | 
| RF-12 | Deve permitir que faça o cadastro de um usuário. | ALTA | 
| RF-13 | Deve permitir que o usuário faça o login na sua conta. | ALTA | 
| RF-14 | Deve permitir que faça o cadastro de um projeto. | ALTA | 
| RF-15 | Deve exibir uma lista com os funcionários cadastrados. | ALTA | 
| RF-16 | Exibir ficha do funcionário. | ALTA | 
| RF-17 | O sistema deve permitir a associação de um funcionário a uma matrícula. | MÉDIA | 

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------------------|---------------------------|----------------------------------|
| RNF-01 | A aplicação deve ter a utilização de cores não tão fortes para não incomodar a vista. | ALTA | 
| RNF- 02 | A aplicação deve poder alternar entre modo claro e modo escuro. | BAIXA | 
| RNF-03 | O site deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox e Microsoft Edge. | ALTA | 
| RNF-04 | A aplicação deve conter menus com transições diferentes de abertura. | MÉDIA | 
| RNF-05 | Os dados devem ser armazenados conforme a Lei Geral de Proteção de Dados | ALTA | 
| RNF-06 | Adaptabilidade para que o sistema comporte manutenções e atualizações. | ALTA | 
| RNF-07 | Perfis de acesso limitados e definidos para seu grupo de usuário. | ALTA | 

**Prioridade: Alta / Média / Baixa. 

