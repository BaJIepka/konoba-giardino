import i18n from './i18n'

export default {
  name: i18n('Supa', 'Soups', 'Супы', 'Zuppa'),
  code: 'soups',
  img: require('@/assets/img/categories/soups/_soups.jpg'),
  divs: [
    {
      name: i18n('All', 'All', 'Всё', 'All'),
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
    }
  ]
}
