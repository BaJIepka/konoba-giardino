import i18n from './i18n'

export default {
  name: i18n('Пића', 'Drinks', 'Напитки'),
  code: 'drinks',
  img: require('@/assets/img/categories/starters/_starters.jpg'),
  items: [
    // CAFFE
    {
      name: i18n('Espresso', 'Espresso', 'Espresso', 'Espresso'),
      description: i18n('',
        '',
        '',
        ''
      ),
      price: 1.50
    },
    {
      name: i18n('Espresso milk', 'Espresso milk', 'Espresso milk', 'Espresso milk'),
      description: i18n('',
        '',
        '',
        ''
      ),
      price: 2.00
    },
    {
      name: i18n('Espresso cream', 'Espresso cream', 'Espresso cream', 'Espresso cream'),
      description: i18n('',
        '',
        '',
        ''
      ),
      price: 2.00
    },
    {
      name: i18n('Cappuccino', 'Cappuccino', 'Cappuccino', 'Cappuccino'),
      description: i18n('',
        '',
        '',
        ''
      ),
      price: 2.00
    },
    {
      name: i18n('Nescafe', 'Nescafe', 'Nescafe', 'Nescafe'),
      description: i18n('',
        '',
        '',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Ledena kafa', 'Ice coffe', 'Ice coffe', 'Ice coffe'),
      description: i18n('',
        '',
        '',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Topla cokolada', 'Hot chocolate', 'Горячий шоколад', 'Hot chocolate'),
      description: i18n('',
        '',
        '',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Caj', 'Tea', 'Чай', 'Tea'),
      description: i18n('',
        '',
        '',
        ''
      ),
      price: 1.50

    },

    // soki
    {
      name: i18n('Sok gusti', 'Juice Gusti', 'Juice Gusti', 'Juice Gusti'),
      description: i18n('200 ml',
        '200 ml',
        '200 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Orange juice', 'Orange juice', 'Апельсиновый сок', 'Orange juice'),
      description: i18n('200 ml',
        '200 ml',
        '200 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Cijed narandza', 'Natural orange juice', 'Свежевыжатый апельсиновый сок', 'Natural orange juice'),
      description: i18n('200 ml',
        '200 ml',
        '200 ml',
        ''
      ),
      price: 4.50
    },
    {
      name: i18n('Limunada', 'Lemonade', 'Лимонад', 'Lemonade'),
      description: i18n('200 ml',
        '200 ml',
        '200 ml',
        ''
      ),
      price: 3.50
    },
    {
      name: i18n('Cola/Fanta/Sprite', 'Cola/Fanta/Sprite', 'Cola/Fanta/Sprite', 'Cola/Fanta/Sprite'),
      description: i18n('250 ml',
        '250 ml',
        '250 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Schweppes tonic, bitter', 'Schweppes tonic, bitter', 'Schweppes tonic, bitter', 'Schweppes tonic, bitter'),
      description: i18n('330 ml',
        '330 ml',
        '330 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Limenke (Cola, Fanta, Bravo)', 'Limenke (Cola, Fanta, Bravo)', 'Limenke (Cola, Fanta, Bravo)', 'Limenke (Cola, Fanta, Bravo)'),
      description: i18n('330 ml',
        '330 ml',
        '330 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Red Bull', 'Red Bull', 'Red Bull', 'Red Bull'),
      description: i18n('330 ml',
        '330 ml',
        '330 ml',
        ''
      ),
      price: 5.00
    }
  ]
}
