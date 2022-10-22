import i18n from './i18n'

export default {
  name: i18n('Spageti', 'Spagetti', 'Спагетти', 'Spaghetti'),
  code: 'spageti',
  img: require('@/assets/img/categories/spageti/_spageti.jpg'),
  divs: [
    {
      name: i18n('All', 'All', 'Всё', 'All'),
      items: [
        {
          name: i18n('Plodovi mora', 'Seafood', 'Морепродукты', 'Frutti di mare'),
          description: i18n(
            '450 gram',
            '450 gram',
            '450 грамм',
            ''
          ),
          price: 13.00
        },
        {
          name: i18n('Spageti sa gamborima', 'Shpaghetti with prawns', 'Спагетти с креветками', 'Spaghetti con gamberi'),
          description: i18n(
            '450 gram',
            '450 gram',
            '450 грамм',
            ''
          ),
          price: 16.00
        },
        {
          name: i18n('Penne rio mare', 'Tuna with onion', 'Тунец с луком', 'Tonno alla cipole'),
          description: i18n(
            '450 gram',
            '450 gram',
            '450 грамм',
            ''
          ),
          price: 12.00
        },
        {
          name: i18n('Tortelini sa bolognese sauce', 'Tortelini with bolognese sauce', 'Тортелини с соусом болоньезе', 'Ragu alla bolognese'),
          description: i18n(
            '450 gram',
            '450 gram',
            '450 грамм',
            ''
          ),
          price: 12.00
        },
        {
          name: i18n('Lazanja', 'Lasagna', 'Лазанья', 'Lasagna'),
          description: i18n(
            '450 gram',
            '450 gram',
            '450 грамм',
            ''
          ),
          price: 10.00
        },
        {
          name: i18n('Napoletano', 'Napoletano', 'Наполетано', 'Napoletano'),
          description: i18n(
            '450 gram Tomato sauce, spices, onions',
            '450 gram Salsa di pomodoro, spezie, cipolle',
            '450 грамм Томатный соус, специи, лук',
            ''
          ),
          price: 9.00
        },
        {
          name: i18n('Bolognese', 'Bolognese', 'Болоньезе', 'Bolognese'),
          description: i18n(
            '450 gram Tomato sauce, meat, onion',
            '450 gram Salsa di pomodoro, carne, cipolle',
            '450 грамм Томатный соус, мясо, лук',
            ''
          ),
          price: 10.00
        },
        {
          name: i18n('Carbonara', 'Carbonara', 'Карбонара', 'Carbonara'),
          description: i18n(
            '450 gram Bacon, egg, sour cream, onion',
            '450 gram Pancetta, uova, panna acidia, cipolla',
            '450 грамм Бекон, яйца, сметана, лук',
            ''
          ),
          price: 10.00
        },
        {
          name: i18n('Quatro formaggio', 'Four cheeses', 'Четыре сыра', 'Quatro formaggio'),
          description: i18n(
            '450 gram Gorgonzola, mozzarella, gouda, parmesan',
            '450 gram Gorgonzola, mozzarella, gouda, parmigiano',
            '450 грамм Горгонзола, моцарелла, гауда, пармезан',
            ''
          ),
          price: 12.00
        },
        {
          name: i18n('Putanesca', 'Putanesca', 'Путанеска', 'Putanesca'),
          description: i18n(
            '450 gram Salted fish, tuna, olives',
            '450 gram Pesce salato, tonno, olive',
            '450 грамм Соленая рыба, тунец, оливки',
            ''
          ),
          price: 12.00
        }
      ]
    }
  ]
}
