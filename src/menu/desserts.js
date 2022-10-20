import i18n from './i18n'

export default {
  name: i18n('Десерт', 'Dessert', 'Десерт', 'Dessert'),
  code: 'desserts',
  img: require('@/assets/img/categories/desserts/_desserts.jpg'),
  items: [
    {
      name: i18n('Sladoled', 'Ice cream', 'Мороженное', 'Gelato'),
      description: i18n('150 gram',
        '150 gram',
        '150 грамм',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Vocna salata', 'Fruit salad', 'Фруктовый салат', 'Insalata di fruitta'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Banan split', 'Banana, ice crea, whipped', 'Банана, мороженное, взбитые сливки', 'Banana, gelato, panna montata'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 5.00
    },
    {
      name: i18n('Dardino «Kup»', 'Sladoled, voce, slag', 'Мороженное, фрукты и взбитые сливки', 'Igelato, frutta e panna montata'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 5.00
    },
    {
      name: i18n('Palacinke', 'Pencakes with Nutella ', 'Блины с Nutella', 'Crepe alla nutella'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 5.00
    },
    {
      name: i18n('Dardino «Kolac»', '«Dardino» cake', 'Торт «Джардино»', 'Dolci di casa'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 4.50
    }
  ]
}
