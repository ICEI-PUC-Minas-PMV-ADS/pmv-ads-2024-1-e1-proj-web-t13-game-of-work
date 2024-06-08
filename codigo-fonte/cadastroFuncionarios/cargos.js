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
        hardSkills: ['-', '-', '-', '-', '-', '-', '-', '-']
    },
    {
        cargo: 'RH',
        hardSkills: ['-', '-', '-', '-', '-', '-', '-', '-']
    }
];

localStorage.setItem("listaCargos", JSON.stringify(__cargos));