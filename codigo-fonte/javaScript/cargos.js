let __cargos = [
    {
        cargo: 'Desenvolvedor',
        hardSkills: ['JavaScript', 'SQL', 'Python', 'Java', 'TypeScript', 'Bash', 'C#', 'PHP']
    },
    {
        cargo: 'Design',
        hardSkills: ['Photoshop', 'Illustrator', 'Affinity', 'Procreate', 'CorelDRAWN', 'Figma', 'Sketch', 'AdobeXD']
    },
    {
        cargo: 'Gestor',
        hardSkills: ['Gestão de Tempo', 'Gestão de Recursos', 'Gestão de Riscos', 'Controle de Custos', 'Scrum', 'Kanban', 'Asana', 'Trello']
    },
    {
        cargo: 'RH',
        hardSkills: ['Recrutamento e seleção', 'Gestão de Desempenho', 'Legislação Trabalhista', 'Treinamento', 'Diversidade e Inclusão', 'Gestão de Frequência', 'Gestão da Folha', 'Gestão de Benefícios']
    }
];

localStorage.setItem("listaCargos", JSON.stringify(__cargos));