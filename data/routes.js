export default function Routes(logged) {
  return [
    {
      label: 'Inicio',
      path: '/',
      logged: 'visible',
      desktop: true,
      mobile: true,
      includes: ['primary']
    },
    {
      label: 'Documentación',
      path: '/documentation',
      logged: 'visible',
      desktop: true,
      mobile: true,
      includes: ['primary'],
    },
    {
      label: 'Components',
      path: '/components',
      logged: 'visible',
      desktop: true,
      mobile: true,
      includes: ['sidenav'],
      childs: [
        {
          label: 'Botones',
          path: '/buttons',
          logged: 'visible',
          desktop: true,
          mobile: true
        },
        {
          label: 'Alertas',
          path: '/alerts',
          logged: 'visible',
          desktop: true,
          mobile: true
        }
      ]
    }
  ];
}