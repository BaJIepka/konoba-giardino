import i18n from './i18n'

export default {
  name: i18n('Стартерс', 'Starters', 'Закуски', ''),
  code: 'starters',
  img: require('@/assets/img/categories/starters/_starters.jpg'),
  divs: [
    {
      name: i18n('All', 'All', 'Всё', 'All'),
      items: []
    }
  ]
}
