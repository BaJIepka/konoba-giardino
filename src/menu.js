import { computed } from 'vue'
import state from '@/state'

const i18n = (sr, en, ru, it) => ({ sr, en, ru, it }[state.lang])
const version = 1

const menu = computed(() => {
  const categories = [
    {
      name: i18n('Стартерс', 'Starters', 'Закуски', ''),
      code: 'starters',
      img: require('@/assets/img/categories/starters/_starters.jpg'),
      items: []
    },
    {
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
    },
    {
      name: i18n('Supa', 'Soups', 'Супы', 'Zuppa'),
      code: 'soups',
      img: require('@/assets/img/categories/soups/_soups.jpg'),
      items: [
        {
          name: i18n('Teleca Corba', 'Veal soup', 'Телятина', 'Zuppa di vitello'),
          description: i18n(
            // 'Направљен од најбољих састојака са најбољих места на свету!!!!!. Гурмани долазе из целог света да пробају',
            // 'Made with the best ingredients from the best places in the world. Gourmets come from all over the world to try it',
            // 'Приготовлено из лучших ингридиентов, собранных из самых лучших мест мира. Гурманы приезжают со всего света, чтобы это попробовать'
          ),
          price: 4.50,
          img: require('@/assets/img/categories/salads/shopskij.jpeg')
        },
        {
          name: i18n('Riblja Corba', 'Fish Soup', 'Рыбный суп', 'Zuppa di pesce'),
          description: i18n(
            // 'Направљен од најбољих састојака са најбољих места на свету. Гурмани долазе из целог света да пробају',
            // 'Made with the best ingredients from the best places in the world. Gourmets come from all over the world to try it',
            // 'Приготовлено из лучших ингридиентов, собранных из самых лучших мест мира. Гурманы приезжают со всего света, чтобы это попробовать'
          ),
          price: 4.50
        }
        // {
        //   name: i18n('Трећа позиција', 'Third position', 'Третья позиция'),
        //   description: i18n(
        //     'Направљен од најбољих састојака са најбољих места на свету. Гурмани долазе из целог света да пробају',
        //     'Made with the best ingredients from the best places in the world. Gourmets come from all over the world to try it',
        //     'Приготовлено из лучших ингридиентов, собранных из самых лучших мест мира. Гурманы приезжают со всего света, чтобы это попробовать'
        //   ),
        //   price: 3.45
        // }
      ]
    },
    {
      name: i18n('Jela od mesa', 'Meat menu', 'Мясо', 'Menu di carne'),
      code: 'meat',
      img: require('@/assets/img/categories/meat/_meat.jpg'),
      items: [
        {
          name: i18n('Beefsteak "Monte Carlo"', 'Beefsteak "Monte Carlo"', 'Стейк из говядины с яйцос', 'Beefsteak "Monte Carlo"'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'
          ),
          price: 22.00
        },
        {
          name: i18n('Beefsteak "Gorgonzola"', 'Beefsteak "Gorgonzola"', 'Стейк из говядины со сметаной', 'Beefsteak "Gorgonzola"'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'
          ),
          price: 24.00
        },
        {
          name: i18n('Beefsteak u sousu od zelenog bibera', 'Beefsteak with green peper sauce', 'Стейк из говядины с соусом из зеленого лука', 'Beefsteak with green peper sauce'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'
          ),
          price: 24.00
        },
        {
          name: i18n('Beefsteak "Havai"', 'Beefsteak "Havai"', 'Стейк из говядины с овощами и ананасом', 'Beefsteak "Havai"'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'
          ),
          price: 22.00
        },
        {
          name: i18n('Beefsteak "Sote Stroganov"', 'Beefsteak "Sote Stroganov"', 'Биф "Строганофф"', 'Beefsteak "Sote Stroganov"'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'),
          price: 24.00
        },
        {
          name: i18n('Beefsteak "Marshal"', 'Beefsteak "Marshal"', 'Стейк из говядины "Маршал', 'Beefsteak "Marshal"'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'
          ),
          price: 28.00
        },
        {
          name: i18n('Beefsteak', 'Beefsteak', 'Стейк из говядины', 'Beefsteak'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'
          ),
          price: 20.00
        },
        {
          name: i18n('Beefsteak sa tartufama', 'Beefsteak with truffles', 'Стейк из говядины с трюфелями', 'Beefsteak with truffles'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'
          ),
          price: 28.00
        },
        {
          name: i18n('Pepper steak', 'Pepper steak', 'Стейк из говядины с соусом из четырех перцев', 'Pepper steak'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'),
          price: 24.00
        },
        {
          name: i18n('Beefsteak "Satobrian"', 'Beefsteak "Satobrian"', 'Стейк из говядины Шатобриан"', 'Beefsteak "Satobrian"'),
          description: i18n(
            '450 gram',
            '450 gram',
            '450 грамм'),
          price: 45.00
        },
        {
          name: i18n('Ramsteak', 'Ramsteak', 'Стейк из говядины "Ромштекс"', 'Ramsteak'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'
          ),
          price: 16.00
        },
        {
          name: i18n('T-Bon steak', 'T-Bon steak', 'Стейк из говядины Т-Бон (на кости)', 'T-Bon steak'),
          description: i18n(
            '450 gram',
            '450 gram',
            '450 грамм'),
          price: 22.00
        },
        {
          name: i18n('Montenegro Steak', 'Montenegro Steak', 'Стейк из говядины "Монтенегро"', 'Montenegro Steak'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм'),
          price: 14.00
        },
        {
          name: i18n('Montenegro file', 'Montenegro file', 'Домашний пршут с сыром', 'Montenegro file'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм'),
          price: 15.00
        },
        {
          name: i18n('Nacionalni steak', 'Nacionalni steak', 'Национальный стейк из говядины', 'Nacionalni steak'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм'
          ),
          price: 16.00
        },
        {
          name: i18n('Jagnetina na zaru', 'Grilled lamb', 'Ягненок на гриле', 'Angello alla griglia'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм'
          ),
          price: 20.00
        },
        {
          name: i18n('Kuvana jagnetina', 'Cooked lamb', 'Вареный ягненок', 'Angello cotto'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм'),
          price: 20.00
        },
        {
          name: i18n('Pecena jagnetina', 'Roast lamb', 'Жареный егненок', 'Arrosto di agnello'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм'
          ),
          price: 22.00
        },
        {
          name: i18n('Teleci kotleti', 'Veal chops grilled', 'Телятина на гриле', 'Barciole di vitello'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'
          ),
          price: 18.00
        },
        {
          name: i18n('Pileci minjon', 'Chicken filet mignon', 'Куриное филе "Миьон"', 'Filleti di polo mignon'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм'),
          price: 18.00
        },
        {
          name: i18n('Cordon bleu', 'Cordon bleu', 'Кордон Блю', 'Cordon bleu'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм'),
          price: 16.00
        },
        {
          name: i18n('Natur snicla', 'Natural shnitzel', 'Шницель', 'Natural shnitzel'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм'),
          price: 12.00
        },
        {
          name: i18n('Becka snicila', 'Schnitzel viennes style', 'Венский шницель', 'Cottolete alla viennese'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм'),
          price: 12.00
        },
        {
          name: i18n('Karadordeva snicla', 'Steak "Karadorde"', 'Карагеоргиев Шницель', 'Bistecca "Karadorde"'),
          description: i18n(
            // 'Направљен од најбољих састојака са најбољих места на свету. Гурмани долазе из целог света да пробају',
            // 'Made with the best ingredients from the best places in the world. Gourmets come from all over the world to try it',
            // 'Приготовлено из лучших ингридиентов, собранных из самых лучших мест мира. Гурманы приезжают со всего света, чтобы это попробовать'
          ),
          price: 15.00
        },
        {
          name: i18n('Piletina grill', 'Chiken on the grill', 'Куриное филе на гриле', 'Carne di maiale'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'
          ),
          price: 11.00
        },
        {
          name: i18n('Vjesalica', 'Pork on the grill', 'Свинина на гриле', 'Carne di maiale'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'),
          price: 12.00
        },
        {
          name: i18n('Raznjici na zaru', 'Grilled skewers', 'Шашлык', 'Spiedini alla griglia'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм'),
          price: 11.00
        },
        {
          name: i18n('Mijesano meso', 'Mixed grill', 'Мясное ассорти гриль', 'Misto di carne'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 35.00
        },
        {
          name: i18n('Specialitet "Gardino"', 'Speciality "Gardino"', ' Фирменное блюдо Жардини', 'Speciality "Gardino"'),
          description: i18n(
            '800 gram',
            '800 gram Ramsteak, medallions of veal, pork, grilled chicken, grilled steak montenegro, garnishing with meat french fries and vegetables',
            '800 грамм Специальное блюдо Жардини (Рамстейк, медальены из свинины, курица на гриле, негушский стейк, картофель фри и офощи',
            '800 gram Bistecca di manzo, medaglioni di vitello, maiale, pollo alla griglia, bistecca alla griglia Montenegra, guarnire la carne la con patatine fritte e verdure fritte'
          ),
          price: 50.00
        }
      ]
    },
    {
      name: i18n('Од кувара', 'From the chef', 'От шефа'),
      code: 'chef',
      img: require('@/assets/img/categories/chef/_chef.jpg'),
      items: []
    },
    {
      name: i18n('Акција', 'Sale', 'Акция'),
      code: 'sale',
      img: require('@/assets/img/categories/starters/_starters.jpg'),
      items: []
    },
    {
      name: i18n('Pizza', 'Pizza', 'Пицца', 'Pizza'),
      code: 'sale',
      img: require('@/assets/img/categories/starters/_starters.jpg'),
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
    },

    {
      name: i18n('Десерт', 'Dessert', 'Десерт'),
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
    },
    {
      name: i18n('Пића', 'Drinks', 'Напитки'),
      code: 'drinks',
      img: require('@/assets/img/categories/starters/_starters.jpg'),
      items: [
        {
          name: i18n('Прва позиција', 'First position', 'Первая позиция'),
          description: i18n(
            'Направљен од најбољих састојака са најбољих места на свету. Гурмани долазе из целог света да пробају',
            'Made with the best ingredients from the best places in the world. Gourmets come from all over the world to try it',
            'Приготовлено из лучших ингридиентов, собранных из самых лучших мест мира. Гурманы приезжают со всего света, чтобы это попробовать'
          ),
          price: 1.23
        },
        {
          name: i18n('Друга позиција', 'Second position', 'Вторая позиция'),
          description: i18n(
            'Направљен од најбољих састојака са најбољих места на свету. Гурмани долазе из целог света да пробају',
            'Made with the best ingredients from the best places in the world. Gourmets come from all over the world to try it',
            'Приготовлено из лучших ингридиентов, собранных из самых лучших мест мира. Гурманы приезжают со всего света, чтобы это попробовать'
          ),
          price: 2.34
        },
        {
          name: i18n('Трећа позиција', 'Third position', 'Третья позиция'),
          description: i18n(
            'Направљен од најбољих састојака са најбољих места на свету. Гурмани долазе из целог света да пробају',
            'Made with the best ingredients from the best places in the world. Gourmets come from all over the world to try it',
            'Приготовлено из лучших ингридиентов, собранных из самых лучших мест мира. Гурманы приезжают со всего света, чтобы это попробовать'
          ),
          price: 3.45
        }
      ]
    },
    {
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
        },
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
  ]

  let i = 0
  for (const categ of categories) {
    for (const item of categ.items) {
      item.id = `${version}.${++i}`
    }
  }
  return categories
})

export default menu
