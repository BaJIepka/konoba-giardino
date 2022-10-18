import i18n from './i18n'

export default {
  name: i18n('Салате', 'Salads', 'Салаты', ''),
  code: 'salads',
  img: require('@/assets/img/categories/salads/_salads.jpg'),
  items: [
    {
      name: i18n('Paradajz', 'Tomato', 'Помидоры', 'Pomodoro'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Krastavac', 'Cucumber', 'Огурцы', 'Certiolo'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Zelena salata', 'Lettuce', 'Зеленый салат', 'Lattuga'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Kupus', 'Cabbage', 'Капуста', 'Cavolo'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Mjesana salata', 'Mixed salad', 'Смешанный салат', 'Insalata mista '),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Tarator salata', 'Tarator salad', 'Салатор салат', 'Insalata tarator'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 5.00
    },
    {
      name: i18n('Vitaminska salata', 'Vitamin salad', 'Витаминный салат', 'Insalata ricca di vitamina'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Sopska', 'Mix salad with cheese', 'Шопский салат', 'Insalata «Sopska»'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 4.50
    },
    {
      name: i18n('Grcka', 'Greek salad', 'Греческий салат', 'Insalata greca'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 5.00
    },
    {
      name: i18n('Capreze', 'Mozzarela with tomatos', 'Монцарелла с помидорами', 'Caprese con pomodoro e mazzarella'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 9.00
    },
    {
      name: i18n('Basta', 'Garden salad', 'Домашний салат', 'Insalata giardino'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 8.00
    },
    {
      name: i18n('Cezar', 'Ceasar salad', 'Цезарь', 'Insalata Ceasar'),
      description: i18n('250 gram',
        '250 gram',
        '250 грамм',
        ''
      ),
      price: 11.00
    }
  ]
}
