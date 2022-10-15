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
      items: []
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
      name: i18n('Десерт', 'Dessert', 'Десерт'),
      code: 'desserts',
      img: require('@/assets/img/categories/desserts/_desserts.jpg'),
      items: []
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
      items: []
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
