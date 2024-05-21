# Armazenamento de Dados

Todos os dados que circulam por essa aplicação serão armazenados no **Local Storage**.
Para visualizar estes dados o usuário deverá:

<ul>
    <li>1° Passo: Acessar as ferramentas do desenvolvedor em seu navegador.</li>
    <li>2° Passo: Entrar na aba "Aplicações".</li>
    <li>3° Passo: Acessar o  "Local storage".</li>
    <li>4° Passo: Clicar no armazenamento referente aos dados da aplicação</li>
</ul>

<h3>Local Storage</h3>

<ul>
        <li>Os dados são salvos no navegador e persistem mesmo se a página for fechada o recarregada.</li>
        <li>Os dados não possuem tempo de expiração.</li>
        <li>Capacidade máxima de 10mb.</li>
        <li>Todos os dados serão salvos em formato de texto.</li>
        <li>Os dados salvos não são acessíveis na guia anônima.</li>
</ul>
<hr>

<h3>Banco de Dados</h3>

Essa aplicação usa a simulação de 3 banco de dados no Local Storage, são eles:

<ul>
        <li>listaUsuarios</li>
        <li>listaProjetos</li>
        <li>listaCargos</li>
</ul>

<h4>listaUsuários</h4>

Armazena os dados da entidade Usuário. Os dados são:

<ul>
        <li>Nome</li>
        <li>Cargo</li>
        <li>Email (Chave primária)</li>
        <li>Senha (Criptografada)</li>
        <li>Hard Skills (Valor)</li>
        <li>Soft Skills (Valor)</li>
        <li>Projetos que está participando</li>
        <li>Objetivo</li>
        <li>Sobre Mim</li>
        <li>Especialidade</li>
</ul>

<h4>listaProjetos</h4>

Armazena os dados da entidade Projeto. Os dados são:

<ul>
        <li>Nome (Chave primária)</li>
        <li>Descrição</li>
        <li>Gestor</li>
        <li>Participantes</li>
        <li>Skills</li>
        <li>Vagas</li>
</ul>

<h4>listaCargos</h4>

Armazena os dados da entidade Cargo. Os dados são:
**(Na versão inicial do sistema os cargos disponíveis são: Desenvolvedor, Gestor, RH e Design)**

<ul>
        <li>Nome (Chave primária)</li>
        <li>Hard Skills (Nome)</li>
</ul>

<h4>Usuário conectado</h4>

Alem dos banco de dados já citados o Local Storage também irá armazenar os dados do usário que está atualmente conectado no sistema. Os dados são:

<ul>
        <li>Nome</li>
        <li>Cargo</li>
        <li>Email</li>
        <li>Token de acesso (Chave primária)</li>
</ul>