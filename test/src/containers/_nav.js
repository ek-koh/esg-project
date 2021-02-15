export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Home',
        to: '/dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['바로가기']
      },
      {
        _name: 'CSidebarNavItem',
        name: '나의 총자산',
        to: '/myasset',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavItem',
        name: '나의 ESG자산',
        to: '/myesg',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'ESG찾기',
        to: '/search',
        icon: 'cil-puzzle'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'About Us',
        to: '/about',
        icon: 'cil-cursor'
      },
      {
        _name: 'CSidebarNavItem',
      },
      {
        _name: 'CSidebarNavItem',
      },
      {
        _name: 'CSidebarNavItem',
      },
      {
        _name: 'CSidebarNavItem',
      },
      {
        _name: 'CSidebarNavItem',
      },
      {
        _name: 'CSidebarNavItem',
      },
      {
        _name: 'CSidebarNavItem',
      },
      {
        _name: 'CSidebarNavItem',
      },
      {
        _name: 'CSidebarNavItem',
      },
      {
        _name: 'CSidebarNavItem',
      },
      {
        _name: 'CSidebarNavItem',
        name: '신한 알파 다운로드',
        href: 'https://play.google.com/store/apps/details?id=com.shinhaninvest.nsmts&hl=ko&gl=US',
        icon: { name: 'cil-cloud-download', class: 'text-white' },
        _class: 'bg-primary text-white',
        target: '_blank'
      },
      {
        _name: 'CSidebarNavItem',
        name: '설정',
        icon: { name: 'cil-settings', class: 'text-white' },
        target: '_blank'
      }
    ]
  }
]