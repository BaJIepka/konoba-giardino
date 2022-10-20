import i18n from './i18n'

export default {
  name: i18n('Пића', 'Drinks', 'Напитки', 'Bevande'),
  code: 'drinks',
  img: require('@/assets/img/categories/drinks/_drinks.jpeg'),
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
      price: 3.00,
      img: require('@/assets/img/categories/drinks/nescafe.png')
    },
    {
      name: i18n('Ledena kafa', 'Ice coffe', 'Ice coffe', 'Ice coffe'),
      description: i18n('',
        '',
        '',
        ''
      ),
      price: 4.00,
      img: require('@/assets/img/categories/drinks/ice-coffe.png')
    },
    {
      name: i18n('Topla cokolada', 'Hot chocolate', 'Горячий шоколад', 'Hot chocolate'),
      description: i18n('',
        '',
        '',
        ''
      ),
      price: 3.00,
      img: require('@/assets/img/categories/drinks/hot-chocolate.jpg')
    },
    {
      name: i18n('Caj', 'Tea', 'Чай', 'Tea'),
      description: i18n('',
        '',
        '',
        ''
      ),
      price: 1.50,
      img: require('@/assets/img/categories/drinks/tea.jpg')
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
      price: 3.00,
      img: require('@/assets/img/categories/drinks/orange-bottle.jpg')
    },
    {
      name: i18n('Cijed narandza', 'Natural orange juice', 'Свежевыжатый апельсиновый сок', 'Natural orange juice'),
      description: i18n('200 ml',
        '200 ml',
        '200 ml',
        ''
      ),
      price: 4.50,
      img: require('@/assets/img/categories/drinks/orange-juice.jpg')
    },
    {
      name: i18n('Limunada', 'Lemonade', 'Лимонад', 'Lemonade'),
      description: i18n('200 ml',
        '200 ml',
        '200 ml',
        ''
      ),
      price: 3.50,
      img: require('@/assets/img/categories/drinks/limonade.jpg')
    },
    {
      name: i18n('Cola/Fanta/Sprite', 'Cola/Fanta/Sprite', 'Cola/Fanta/Sprite', 'Cola/Fanta/Sprite'),
      description: i18n('250 ml',
        '250 ml',
        '250 ml',
        ''
      ),
      price: 3.00,
      img: require('@/assets/img/categories/drinks/colafantasprite.jpg')
    },
    {
      name: i18n('Schweppes tonic, bitter', 'Schweppes tonic, bitter', 'Schweppes tonic, bitter', 'Schweppes tonic, bitter'),
      description: i18n('330 ml',
        '330 ml',
        '330 ml',
        ''
      ),
      price: 3.00,
      img: require('@/assets/img/categories/drinks/schweppes.jpg')
    },
    {
      name: i18n('Limenke (Cola, Fanta, Bravo)', 'Limenke (Cola, Fanta, Bravo)', 'Limenke (Cola, Fanta, Bravo)', 'Limenke (Cola, Fanta, Bravo)'),
      description: i18n('330 ml',
        '330 ml',
        '330 ml',
        ''
      ),
      price: 3.00,
      img: require('@/assets/img/categories/drinks/colafantasprite.jpg')
    },
    {
      name: i18n('Red Bull', 'Red Bull', 'Red Bull', 'Red Bull'),
      description: i18n('330 ml',
        '330 ml',
        '330 ml',
        ''
      ),
      price: 5.00,
      img: require('@/assets/img/categories/drinks/redbull.jpg')
    },
    // voda
    {
      name: i18n('Gazirana voda', 'Mineral water', 'Минеральная вода', 'Mineral water'),
      description: i18n(
        '1000 ml',
        '1000 ml',
        '1000 ml',
        ''
      ),
      price: 4.50,
      img: require('@/assets/img/categories/drinks/knjazmilosh1000.jpg')
    },
    {
      name: i18n('Gazirana voda', 'Mineral water', 'Минеральная вода', 'Mineral water'),
      description: i18n(
        '250 ml',
        '250 ml',
        '250 ml',
        ''
      ),
      price: 2.00,
      img: require('@/assets/img/categories/drinks/knjazmilosh1000.jpg')
    },
    {
      name: i18n('Negazirana voda', 'Mineral water', 'Вода', 'Natural water'),
      description: i18n(
        '1000 ml',
        '1000 ml',
        '1000 ml',
        ''
      ),
      price: 4.50,
      img: require('@/assets/img/categories/drinks/rosa1000.jpg')
    },
    {
      name: i18n('Negazirana voda', 'Mineral water', 'Вода', 'Natural water'),
      description: i18n(
        '250 ml',
        '250 ml',
        '250 ml',
        ''
      ),
      price: 2.00,
      img: require('@/assets/img/categories/drinks/rosa1000.jpg')
    }
  ]
}
