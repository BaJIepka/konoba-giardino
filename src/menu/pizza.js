import i18n from './i18n'

export default {
  name: i18n('Pizza', 'Pizza', 'Пицца', 'Pizza'),
  code: 'pizza',
  img: require('@/assets/img/categories/pizza/_pizza.jpeg'),
  items: [
    {
      name: i18n('Margherita', 'Margherita', 'Маргарита', 'Margherita'),
      description: i18n('450 gram Sauce, cheese, olives',
        '450 gram Salsa, formaggio, olive',
        '450 грамм Соус, сыр, оливки',
        ''
      ),
      price: 8.00
    },
    {
      name: i18n('Napoletano', 'Napoletano', 'Неаполетано', 'Napoletano'),
      description: i18n('450 gram Sauce, cheese, eff, olives',
        '450 gram Salsa, formaggio, uovo, olive',
        '450 грамм Соус, сыр, яйца, оливки',
        ''
      ),
      price: 8.50
    },
    {
      name: i18n('Marinara', 'Marinara', 'Маринара', 'Marinara'),
      description: i18n('450 gram Sauce, ham, cheese, olives',
        '450 gram Sugo, prosciutto, formaggio, olive',
        '450 грамм Соус, ветчина, сыр, оливки',
        ''
      ),
      price: 9.00
    },
    {
      name: i18n('Funghi', 'Funghi', 'Фунги', 'Funghi'),
      description: i18n('450 gram Sauce, mushrooms, cheese, olives',
        '450 gram Sugo, funghi, formaggio, olive',
        '450 грамм Соус, сыр, оливки',
        ''
      ),
      price: 9.00
    },
    {
      name: i18n('Capricciosa', 'Capricciosa', 'Капричеза', 'Capricciosa'),
      description: i18n('450 gram Sauce, ham, mushrooms, cheese, olives',
        '450 gram Sugo, prosciutto, formaggio, olive',
        '450 грамм Соус, ветчина, грибы, сыр, оливки',
        ''
      ),
      price: 9.00
    },
    {
      name: i18n('Siciliana', 'Siciliana', 'Сицилиана', 'Siciliana'),
      description: i18n('450 gram Sauce, ham, peppers, pepperoni, olives',
        '450 gram Sugo, prosciutto, pepe, peperoncino, olive',
        '450 грамм Соус, ветчина, перец, пепперони, оливки',
        ''
      ),
      price: 10.00
    },
    {
      name: i18n('Cattaro', 'Cattaro', 'Катаро', 'Cattaro'),
      description: i18n('450 gram Sauce, ham, cheese,tuna, peppers, olives',
        '450 gram Sugo, prosciutto, formaggio, tonno, pepe, olive',
        '450 грамм Соус, ветчина, сыр, тунец, сладкий перец, оливки',
        ''
      ),
      price: 10.00
    },
    {
      name: i18n('Della cassa', 'Della cassa', 'Деля каса', 'Della cassa'),
      description: i18n('450 gram Sauce, ham, mushrooms, cheese, eggs, olives',
        '450 gram Sugo, prosciutto, funghi, formaggio, uova, olive',
        '450 грамм Соус, ветчина,грибы, сыр, яйца, оливки',
        ''
      ),
      price: 11.00
    },
    {
      name: i18n('Parma', 'Parma', 'Парма', 'Parma'),
      description: i18n('450 gram Sauce, ham, mushrooms, smoked ham, sour cream, olives',
        '450 gram Sugo, prosciutto, funghi, panna accida, olive',
        '450 грамм Соус, ветчина,грибы, сыр, копченная ветчина, сметана, оливки',
        ''
      ),
      price: 12.00
    },
    {
      name: i18n('Vegetariana', 'Vegetariana', 'Вегетариана', 'Vegetariana'),
      description: i18n('450 gram Sauce, cheese,vegetables, olives',
        '450 gram Sugo, formaggio, verdure, olive',
        '450 грамм Соус, сыр, овощи, оливки',
        ''
      ),
      price: 11.00
    },
    {
      name: i18n('Hawai', 'Hawai', 'Гаваи', 'Hawai'),
      description: i18n('450 gram Sauce, cheese, pineapple',
        '450 gram Sugo, formaggio, ananas',
        '450 грамм Соус, сыр, ананас',
        ''
      ),
      price: 10.00
    },
    {
      name: i18n('Quattro formaggio', 'Quattro formaggio', 'Четыре сыра', 'Quattro formaggio'),
      description: i18n('450 gram Sauce, four kinds of cheese',
        '450 gram Sugo, quattro formaggio',
        '450 грамм Соус, четыре вида сыра',
        ''
      ),
      price: 12.00
    },
    {
      name: i18n('Quattro stagioni', 'Quattro stagioni', 'Четыре сезона', 'Quattro stagioni'),
      description: i18n('450 gram Sauce, ham, cheese, eggs, artichokes, mushrooms, olives',
        '450 gram Sugo, prosciutto, formaggio, uova, carciofi, funghi, olive',
        '450 грамм Соус, ветчина, сыр, яйца, артишоки, грибы, оливки',
        ''
      ),
      price: 12.00
    },
    {
      name: i18n('Calzone', 'Calzone', 'Кальцоне', 'Calzone'),
      description: i18n('450 gram Sauce, ham, cheese, mushrooms, sour cream',
        '450 gram Sugo, prosciutto, formaggio, funghi, panna accida',
        '450 грамм Соус, ветчина, сыр, грибы, сметана',
        ''
      ),
      price: 11.00
    },
    {
      name: i18n('Western', 'Western', 'Вестерн', 'Western'),
      description: i18n('450 gram Sauce, ham, bacon, beans, sausage, olives',
        '450 gram Sugo, formaggio, prosciutto, pancetta, fagioli, salsiccia, olive',
        '450 грамм Соус, ветчина, сыр, бекон, фасоль, колбаса, оливки',
        ''
      ),
      price: 12.00
    },
    {
      name: i18n('Frutti di mare', 'Frutti di mare', 'Frutti di mare', 'Frutti di mare'),
      description: i18n('450 gram Sauce, calamari, mussels, tuna, cheese, olives',
        '450 gram Sugo, calamari, cozze, tonno, formaggio, olive',
        '450 грамм Соус, кальмары, мидии, тунец,  сыр, оливки',
        ''
      ),
      price: 12.00
    },
    {
      name: i18n('Pescatore', 'Pescatore', 'Пескаторе', 'Pescatore'),
      description: i18n('450 gram Sauce, calamari, mussels,gambor, cheese, olives',
        '450 gram Sugo, calamari, cozze, gamberertti, formaggio, olive',
        '450 грамм Соус, кальмары, мидии, креветк,  сыр, оливки',
        ''
      ),
      price: 12.00
    },
    {
      name: i18n('Montenegro', 'Montenegro', 'Монтенегро', 'Montenegro'),
      description: i18n('450 gram Sauce, cheese, smoked ham, anchovies, olives',
        '450 gram Sugo, formaggio, prosciutto, olive',
        '450 грамм Соус, сыр, копченная ветчина, анчоусы, оливки',
        ''
      ),
      price: 12.00
    },
    {
      name: i18n('Giardino', 'Giardino', 'Жардино', 'Giardino'),
      description: i18n('450 gram Sauce, cheese, salted fish, onions, chili, olives',
        '450 gram Salca, formaggio, pesce salato, cipolle, peperoncini, olive',
        '450 грамм Соус, сыр, соленая рыба, лук, перец, оливки',
        ''
      ),
      price: 12.00
    }
  ]
}
