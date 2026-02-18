// ============================================================
// ESTRUTURA DE CATEGORIAS - HEALTHCOMPASS ICONES
// Baseado na biblioteca de 165 ícones em 20 categorias
// ============================================================

const categorias = [
  {
    id: 'saude_geral',
    label: 'Saúde Geral',
    icon: 'healthicons:heart-organ',
    description: 'Ícones para saúde, medicina e bem-estar geral'
  },
  {
    id: 'nutricao_alimentacao',
    label: 'Nutrição e Alimentação',
    icon: 'lucide:apple',
    description: 'Ícones para nutrição, alimentos e dietética'
  },
  {
    id: 'atividade_fisica',
    label: 'Atividade Física',
    icon: 'tabler:run',
    description: 'Ícones para exercícios, esportes e atividades físicas'
  },
  {
    id: 'metas_progresso',
    label: 'Metas e Progresso',
    icon: 'lucide:trophy',
    description: 'Ícones para objetivos, conquistas e acompanhamento'
  },
  {
    id: 'sono_descanso',
    label: 'Sono e Descanso',
    icon: 'lucide:moon',
    description: 'Ícones para sono, descanso e recuperação'
  },
  {
    id: 'bem_estar_mental',
    label: 'Bem-Estar Mental',
    icon: 'lucide:brain',
    description: 'Ícones para saúde mental, emoções e mindfulness'
  },
  {
    id: 'peso_composicao',
    label: 'Peso e Composição',
    icon: 'lucide:weight',
    description: 'Ícones para medições corporais e composição física'
  },
  {
    id: 'hidratacao',
    label: 'Hidratação',
    icon: 'lucide:glass-water',
    description: 'Ícones para água, hidratação e líquidos'
  },
  {
    id: 'suplementacao',
    label: 'Suplementação',
    icon: 'healthicons:medicine-pills',
    description: 'Ícones para vitaminas, suplementos e medicamentos'
  },
  {
    id: 'analises_exames',
    label: 'Análises e Exames',
    icon: 'healthicons:lab-test',
    description: 'Ícones para exames laboratoriais e diagnósticos'
  },
  {
    id: 'sintomas_queixas',
    label: 'Sintomas e Queixas',
    icon: 'healthicons:virus',
    description: 'Ícones para sintomas, doenças e queixas de saúde'
  },
  {
    id: 'habitos_comportamento',
    label: 'Hábitos e Comportamento',
    icon: 'lucide:calendar',
    description: 'Ícones para rotinas, hábitos e comportamentos'
  },
  {
    id: 'comunicacao_suporte',
    label: 'Comunicação e Suporte',
    icon: 'lucide:message-circle',
    description: 'Ícones para chat, suporte e comunicação'
  },
  {
    id: 'documentos_registros',
    label: 'Documentos e Registros',
    icon: 'lucide:file-plus',
    description: 'Ícones para arquivos, documentos e registros'
  },
  {
    id: 'configuracoes',
    label: 'Configurações',
    icon: 'lucide:settings',
    description: 'Ícones para configurações, perfil e preferências'
  },
  {
    id: 'navegacao_interface',
    label: 'Navegação e Interface',
    icon: 'lucide:home',
    description: 'Ícones para navegação do sistema e UI'
  },
  {
    id: 'alimentos_especificos',
    label: 'Alimentos Específicos',
    icon: 'lucide:beef',
    description: 'Ícones para tipos específicos de alimentos'
  },
  {
    id: 'restricoes_alimentares',
    label: 'Restrições Alimentares',
    icon: 'lucide:ban',
    description: 'Ícones para alergias, intolerâncias e restrições'
  },
  {
    id: 'saude_da_mulher',
    label: 'Saúde da Mulher',
    icon: 'healthicons:pregnant',
    description: 'Ícones para saúde feminina, gestação e maternidade'
  },
  {
    id: 'profissionais_especialistas',
    label: 'Profissionais e Especialistas',
    icon: 'healthicons:health-worker',
    description: 'Ícones para médicos, nutricionistas e profissionais de saúde'
  }
];

// ============================================================
// EXPORTAÇÃO
// ============================================================
export default categorias;

// Ou para CommonJS:
// module.exports = categorias;