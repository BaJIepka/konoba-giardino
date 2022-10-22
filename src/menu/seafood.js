import i18n from './i18n'

export default {
  name: i18n('Морски плодови', 'Seafood', 'Морепродукты', 'Frutti di mare'),
  code: 'seafood',
  img: require('@/assets/img/categories/seafood/_seafood.jpg'),
  divs: [
    {
      name: i18n('All', 'All', 'Всё', 'All'),
      items: [
        {
          name: i18n('Koktel od gambora', 'Shrimp coctail', 'Коктейль из креветок', 'Coctail di gamberetti'),
          description: i18n(
            '200 gram',
            '200 gram',
            '200 грамм',
            ''
          ),
          price: 12.00
        },
        {
          name: i18n('Kamenice', 'Oysters', 'Устрицы', 'Ostriche'),
          description: i18n(
            '1 piece',
            '1 piece',
            '1 штука',
            ''
          ),
          price: 5.00
        },
        {
          name: i18n('San Zak', 'Saint Jacques', 'Сан Жак', 'Sain Jacues'),
          description: i18n(
            '1 piece',
            '1 piece',
            '1 штука',
            ''
          ),
          price: 6.00
        },
        {
          name: i18n('Vongole', 'Clams', 'Молюски', 'Vongole'),
          description: i18n(
            '500 gram',
            '500 gram',
            '500 грамм',
            ''
          ),
          price: 20.00
        },
        {
          name: i18n('Muslje', 'Mussels', 'Мидии', 'Cozze'),
          description: i18n(
            '700 gram',
            '700 gram',
            '700 грамм',
            ''
          ),
          price: 14.00
        },
        {
          name: i18n('Miks vongole i muslje', 'Mix clams and mussels', 'Микс из мидий и молюсков', 'Mescolare vongole e cozze'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 20.00
        },
        {
          name: i18n('Miks muslje i kozice', 'Mix mussels and shrimps', 'Микс из мидий и креветки', 'Mescolare cozze e gamberetti'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 20.00
        },
        {
          name: i18n('Miks po zelji', 'Mix as you wish', 'Микс морепродуктов на ваш выбор', 'Mescolare'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 30.00
        },
        {
          name: i18n('Salata od tunjevine', 'Tuna salad', 'Салат с тунцом', 'Insalata di tonno'),
          description: i18n(
            '250 gram',
            '250 gram',
            '250 грамм',
            ''
          ),
          price: 12.00
        },
        {
          name: i18n('Mijesana salata od morskih plodova', 'Mixed seafood salad', 'Салат из морепродуктов', 'Insalata di mare mista'),
          description: i18n(
            '250 gram',
            '250 gram',
            '250 грамм',
            ''
          ),
          price: 11.00
        },
        {
          name: i18n('Salata od hobotnice', 'Octipus salad', 'Салат с осминогом', 'Insalata di polpo'),
          description: i18n(
            '250 gram',
            '250 gram',
            '250 грамм',
            ''
          ),
          price: 16.00
        },
        {
          name: i18n('Crni rizoto sa sipom', 'Black risotto with cuttlefish', 'Черное ризотто с масом каракатицы', 'Risotto al nero di seppia'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм',
            ''
          ),
          price: 12.00
        },
        {
          name: i18n('Rizoto sa gamborima', 'Risotto with prawns', 'Ризотто с креветками', 'Risotto ai gamberetti'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм',
            ''
          ),
          price: 16.00
        },
        {
          name: i18n('Hobotnica na zaru', 'Grilled octopus', 'Жареный осминог', 'Polpo alla griglia'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм',
            ''
          ),
          price: 23.00
        },
        {
          name: i18n('Zapecena hobotnica', 'Roasted octopus', 'Запеченный осминог', 'Polpo al forno'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм',
            ''
          ),
          price: 26.00
        },
        {
          name: i18n('Orada', 'Gilthead sea bream', 'Дорадо', 'Orata'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 45.00
        },
        {
          name: i18n('Brancin', 'Sea bass', 'Си бас', 'Branzino'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 45.00
        },
        {
          name: i18n('Zubatac', 'Dentex', 'Зубатка', 'Dentice'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 45.00
        },
        {
          name: i18n('Barbun', 'Surmullet', 'Барбун', 'Triglia'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 45.00
        },
        {
          name: i18n('Rumbac', 'Turbot', 'Тюрбо', 'Rombo chiodato'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 45.00
        },
        {
          name: i18n('List', 'Flounder', 'Камбала', 'Passera di mare'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 45.00
        },
        {
          name: i18n('San pijer', 'San pierre', 'Сан-Пъер', 'San Pietro'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 57.00
        },
        {
          name: i18n('Skarpina', 'Skarpina', 'Скарпина', 'Scorpaena scrofa'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 57.00
        },
        {
          name: i18n('Grdoba cista', 'Deformity', 'Морской черт', 'Rana pescartice'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 57.00
        },
        {
          name: i18n('Riblja plata', 'Mixed fish platter', 'Рыбное ассорти', 'Piatto di pesce'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 55.00
        },
        {
          name: i18n('Riblja plata', 'Mixed fish platter', 'Рыбное ассорти', 'Piatto di pesce'),
          description: i18n(
            '1500 gram',
            '1500 gram',
            '1500 грамм',
            ''
          ),
          price: 75.00
        },
        {
          name: i18n('Riblja plata «Gardino»', 'Mixed fish platter «Gardino»', 'Рыбное ассорти «Жардино»', 'Piatto di pesce «Giardino»'),
          description: i18n(
            '1000 gram',
            '1000 gram',
            '1000 грамм',
            ''
          ),
          price: 65.00
        },
        {
          name: i18n('Losos file', 'Salmon', 'Лосось', 'Filetto di salmone'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм',
            ''
          ),
          price: 14.00
        },
        {
          name: i18n('Pesikan file', 'Shark', 'Акула', 'Squalo'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм',
            ''
          ),
          price: 14.00
        },
        {
          name: i18n('Tuna file', 'Tuna', 'Тунец', 'Tonno'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм',
            ''
          ),
          price: 16.00
        },
        {
          name: i18n('Sabljarka file', 'Swordfish', 'Рыба-меч', 'Pesce spada'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм',
            ''
          ),
          price: 16.00
        },
        {
          name: i18n('Lignje na zaru', 'Grilled squid', 'Кальмары на гриле', 'Calamari alla griglia'),
          description: i18n(
            '350 gram Grilled squid, boiled potatoes and swiss chard',
            '350 gram',
            '350 грамм Кальмары гриль, отварной картофель и сфекла',
            ''
          ),
          price: 15.00
        },
        {
          name: i18n('Montenegro lignje', 'Squids «Montenegro»', 'Кальмары «Монтенегро»', 'Calamari «Montenegro»'),
          description: i18n(
            '350 gram Stuffed with cheese and smoked ham',
            '350 gram Calamari rippeni prosciutto a formaggio',
            '350 грамм Кальмары фаршированные копченой ветчиной и сыром',
            ''
          ),
          price: 18.00
        },
        {
          name: i18n('Karaljevske lignje', 'Kings squid', 'Королевские кальмары', 'Сalamaro reale'),
          description: i18n(
            '350 gram Lignje punjene sa gamborima',
            '350 gram Calamari ripieni di gamberetti',
            '350 грамм Кальмары фаршированные креветками',
            ''
          ),
          price: 18.00
        },
        {
          name: i18n('Przene lignje', 'Fried squid', 'Жаренные кальмары', 'Сalamaro fritti'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм',
            ''
          ),
          price: 13.00
        },
        {
          name: i18n('Gambori na zaru', 'Grilled prawns', 'Креветки на гриле', 'Gamberoni alla grilia'),
          description: i18n(
            '350 gram',
            '350 gram',
            '350 грамм',
            ''
          ),
          price: 22.00
        },
        {
          name: i18n('Gambori na buzaru', 'Prawns in wine sauce', 'Креветки в винном соусе', 'Gamberi alla busara'),
          description: i18n(
            '500 gram',
            '500 gram',
            '500 грамм',
            ''
          ),
          price: 45.00
        },
        {
          name: i18n('Gambori na spizu', 'Skewers of prawns', 'Шашлык из креветок', 'Spiedini di gamberi'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм',
            ''
          ),
          price: 22.00
        },
        {
          name: i18n('Skampi na zaru', 'Grilled shrimps', 'Жаренные креветки', 'Scampii alla grilia'),
          description: i18n(
            '300 gram',
            '300 gram',
            '300 грамм',
            ''
          ),
          price: 22.00
        }
      ]
    }
  ]
}
