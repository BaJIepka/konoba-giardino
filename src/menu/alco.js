import i18n from './i18n'

export default {
  name: i18n('Алкохол', 'Alcohol', 'Алкоголь'),
  code: 'alco',
  img: require('@/assets/img/categories/starters/_starters.jpg'),
  items: [
    // beer
    {
      name: i18n('Heineken', 'Heineken', 'Heineken', 'Heineken'),
      description: i18n('330 ml',
        '330 ml',
        '330 ml',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Bavaria', 'Bavaria', 'Bavaria', 'Bavaria'),
      description: i18n('250 ml',
        '250 ml',
        '250 ml',
        ''
      ),
      price: 3.50
    },
    {
      name: i18n('Beck’s', 'Beck’s', 'Beck’s', 'Beck’s'),
      description: i18n('330 ml',
        '330 ml',
        '330 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Nik Gold', 'Nik Gold', 'Nik Gold', 'Nik Gold'),
      description: i18n('330 ml',
        '330 ml',
        '330 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Toceno Nikshichko', 'Toceno Nikshichko', 'Toceno Nikshichko', 'Toceno Nikshichko'),
      description: i18n('500 ml',
        '500 ml',
        '500 ml',
        ''
      ),
      price: 4.00
    },

    // Coktails
    {
      name: i18n('Aperol', 'Aperol', 'Aperol', 'Aperol'),
      description: i18n('100 ml',
        '100 ml',
        '100 ml',
        ''
      ),
      price: 6.00
    },
    {
      name: i18n('Bacardi - Cola', 'Bacardi - Cola', 'Bacardi - Cola', 'Bacardi - Cola'),
      description: i18n('100 ml',
        '100 ml',
        '100 ml',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Campari - Juice', 'Campari - Juice', 'Campari - Juice', 'Campari - Juice'),
      description: i18n('100 ml',
        '100 ml',
        '100 ml',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Vodka - Juice', 'Vodka - Juice', 'Vodka - Juice', 'Vodka - Juice'),
      description: i18n('100 ml',
        '100 ml',
        '100 ml',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Vodka - Tonic', 'Vodka - Tonic', 'Vodka - Tonic', 'Vodka - Tonic'),
      description: i18n('100 ml',
        '100 ml',
        '100 ml',
        ''
      ),
      price: 4.00
    },
    {
      name: i18n('Gin - Tonic', 'Gin - Tonic', 'Gin - Tonic', 'Gin - Tonic'),
      description: i18n('100 ml',
        '100 ml',
        '100 ml',
        ''
      ),
      price: 4.00
    },
    // spirotos
    {
      name: i18n('Martell', 'Martell', 'Martell', 'Martell'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 4.50
    },
    {
      name: i18n('Metaxa', 'Metaxa', 'Metaxa', 'Metaxa'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Stock 84', 'Stock 84', 'Stock 84', 'Stock 84'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 2.00
    },
    {
      name: i18n('Gin', 'Gin', 'Gin', 'Gin'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Tequila', 'Tequila', 'Tequila', 'Tequila'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Vodka Smirnoff', 'Vodka Smirnoff', 'Vodka Smirnoff', 'Vodka Smirnoff'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Bacardi', 'Bacardi', 'Bacardi', 'Bacardi'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 2.00
    },
    // Domaca
    {
      name: i18n('Viljamovka', 'Viljamovka', 'Viljamovka', 'Viljamovka'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 3.00
    },
    {
      name: i18n('Loza «Kruna»', 'Loza «Kruna»', 'Loza «Kruna»', 'Loza «Kruna»'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 2.50
    },
    {
      name: i18n('Loza «Prvijenac»', 'Loza «Prvijenac»', 'Loza «Prvijenac»', 'Loza «Prvijenac»'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 2.50
    },
    {
      name: i18n('Vinjak', 'Vinjak', 'Vinjak', 'Vinjak'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 2.50
    },
    {
      name: i18n('Rum', 'Rum', 'Rum', 'Rum'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 2.50
    },
    {
      name: i18n('Pelinkovac', 'Pelinkovac', 'Pelinkovac', 'Pelinkovac'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 2.50
    },
    // whiskey
    {
      name: i18n('Chivas Regal', 'Chivas Regal', 'Chivas Regal', 'Chivas Regal'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 5.00
    },
    {
      name: i18n('Jack Daniels', 'Jack Daniels', 'Jack Daniels', 'Jack Daniels'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 5.00
    },
    {
      name: i18n('Johnnie Walker', 'Johnnie Walker', 'Johnnie Walker', 'Jack Danielsl'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 3.50
    },
    {
      name: i18n('Ballantine’s', 'Ballantine’s', 'Ballantine’s', 'Ballantine’s'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 3.50
    },
    // Apertives
    {
      name: i18n('Martini', 'Martini', 'Martini', 'Martini'),
      description: i18n('50 ml',
        '50 ml',
        '50 ml',
        ''
      ),
      price: 3.50
    },
    {
      name: i18n('Cinzano', 'Cinzano', 'Cinzano', 'Cinzano'),
      description: i18n('50 ml',
        '50 ml',
        '50 ml',
        ''
      ),
      price: 3.50
    },
    {
      name: i18n('Campari', 'Campari', 'Campari', 'Campari'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 3.50
    },
    {
      name: i18n('Montenegro', 'Montenegro', 'Montenegro', 'Montenegro'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 3.50
    },
    {
      name: i18n('Ramazzotti', 'Ramazzotti', 'Ramazzotti', 'Ramazzotti'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 3.50
    },
    {
      name: i18n('Jagermeister', 'Jagermeister', 'Jagermeister', 'Jagermeister'),
      description: i18n('30 ml',
        '30 ml',
        '30 ml',
        ''
      ),
      price: 3.50
    }
  ]
}