import mock from "@/fake-db/mock.js"
import jwt from 'jsonwebtoken'

const data =
  {
    "status": true,
    "menu": [
        {
        "mhash": "d0102d462eb3e21373b8f1d9ac220491a9c213cef28000083477cf7a",
        "name": "MEAT PIZZAS",
        "picture": "https://www.megabitepizza.com/images/products/1adc8ad05a9e5d05f537945a09b410d70fd0e64b4b2417363a0d9d47.jpg",
        "products": [
          {
            "order": "1",
            "phash": "bca08c5daeb91227171f251086465b914e461650a16e0e40841a31d6",
            "name": "Bacon Cheese Burger",
            "description": "Mozzarella,Chipotle Sauce*,Ground Beef , Bacon, Mushrooms, Red Onions,Cheddar, ",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/bca08c5daeb91227171f251086465b914e461650a16e0e40841a31d6.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.4900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "19.7400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "22.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "19.7400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "2",
            "phash": "7d880ceb1e29f81956e58f60e3d57e27d040065de94f7d425cce47e4",
            "name": "Beef & Blue Cheese",
            "description": "Tomato Sauce, Mozzarella,Ground Beef , Blue Cheese Drizzle",
            "calorie": "314",
            "picture": "https://www.megabitepizza.com/images/products/7d880ceb1e29f81956e58f60e3d57e27d040065de94f7d425cce47e4.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "12.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "15.9900",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "18.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "15.9900",
                "code": "F6"
              }
            ]
          },
          {
            "order": "3",
            "phash": "6c908597e8a5ccfea861a7a07f299b83d00275e3bad47898bd0dab6b",
            "name": "Canadian",
            "description": "Tomato Sauce, Mozzarella,Capicola *, Ground Beef , Bacon, Mushrooms, Red Onions.",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/6c908597e8a5ccfea861a7a07f299b83d00275e3bad47898bd0dab6b.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "23.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "4",
            "phash": "67e0138eb410c6b1e998f7cc771104075f45130d84b219d9d43773d9",
            "name": "Capicola",
            "description": "Tomato Sauce, Mozzarella, Capicola *, Mushrooms",
            "calorie": "275",
            "picture": "https://www.megabitepizza.com/images/products/67e0138eb410c6b1e998f7cc771104075f45130d84b219d9d43773d9.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "13.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "17.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "20.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "17.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "5",
            "phash": "016734579573da0229f755fbefc53887071cb25da336c946a92bfe98",
            "name": "Carnivore",
            "description": "Tomato Sauce, Mozzarella, Ground Beef, Pepperoni, Ham, Salami, Italian Sausage",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/016734579573da0229f755fbefc53887071cb25da336c946a92bfe98.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "15.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "18.9900",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "21.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "18.9900",
                "code": "F6"
              }
            ]
          },
          {
            "order": "6",
            "phash": "46cce548bfe749c1851644d628c1dbf7af4a4a6cab5538d38a70495b",
            "name": "Classic Italian",
            "description": "Tomato Sauce, Mozzarella, Capicola *, Italian Sausage, Salami, Mushrooms, Green Peppers",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/46cce548bfe749c1851644d628c1dbf7af4a4a6cab5538d38a70495b.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "23.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "7",
            "phash": "b636c62c3903cdb40c8722c5898a0a3e0de6b70455361a1b205dbf55",
            "name": "Hawaiian",
            "description": "Tomato Sauce, Extra Mozzarella, Ham, Pineapple",
            "calorie": "214",
            "picture": "https://www.megabitepizza.com/images/products/b636c62c3903cdb40c8722c5898a0a3e0de6b70455361a1b205dbf55.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "13.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "17.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "20.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "17.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "8",
            "phash": "27e9f7ccb0215fb6c7ede83cee9a473a54f956aea4af753049bc2378",
            "name": "Hot & Sweet",
            "description": "Chipotle Sauce*, Mozzarella Cheese,Ham, Pepperoni, Bacon, Pineapple",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/27e9f7ccb0215fb6c7ede83cee9a473a54f956aea4af753049bc2378.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.4900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "19.7400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "22.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "19.7400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "9",
            "phash": "d4d590fb08cb8aa47db139cce365e2195d8d74f611d47ed507c2e423",
            "name": "Meat Lovers",
            "description": "Tomato Sauce, Mozzarella, Pepperoni, Ham, Bacon,Italian Sausage,Cheddar",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/d4d590fb08cb8aa47db139cce365e2195d8d74f611d47ed507c2e423.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "15.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "18.9900",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "21.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "18.9900",
                "code": "F6"
              }
            ]
          },
          {
            "order": "10",
            "phash": "6a2e2cfc8a0669f100e90d7eeeac60284227f6cfbeea2a2e3027631f",
            "name": "Monster",
            "description": "Tomato Sauce, Mozzarella, Bacon, Chorizo Sausage, Pepperoni, Red Onions, Green Peppers",
            "calorie": "392",
            "picture": "https://www.megabitepizza.com/images/products/6a2e2cfc8a0669f100e90d7eeeac60284227f6cfbeea2a2e3027631f.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "15.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "18.9900",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "21.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "18.9900",
                "code": "F6"
              }
            ]
          },
          {
            "order": "11",
            "phash": "a876175364e352c51ae6c6b84410e869d2998b75df89ca59670f1549",
            "name": "Pepperoni",
            "description": "Tomato Sauce, Extra Mozzarella, Double Pepperoni",
            "calorie": "275",
            "picture": "https://www.megabitepizza.com/images/products/a876175364e352c51ae6c6b84410e869d2998b75df89ca59670f1549.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "13.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "17.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "20.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "17.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "12",
            "phash": "0d6198a9905abdbf3ed61dae82005cb102efc1e1c8c660ffbb3c0fde",
            "name": "Philly Steak",
            "description": "Alfredo Sauce*, Mozzarella,Steak *, Green Peppers, Mushrooms, Red Onions, Italian Cheese Blend*",
            "calorie": "361",
            "picture": "https://www.megabitepizza.com/images/products/0d6198a9905abdbf3ed61dae82005cb102efc1e1c8c660ffbb3c0fde.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "18.4900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "22.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "25.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "22.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "13",
            "phash": "9b45409ff5f325f44212664f8174fe817405a590adcd1da0ee7a7ebb",
            "name": "Sausage Mushroom",
            "description": "Tomato Sauce, Mozzarella, Italian Sausage, Mushrooms, Red Onions,Ricotta, Italian Cheese Blend*",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/9b45409ff5f325f44212664f8174fe817405a590adcd1da0ee7a7ebb.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "23.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "14",
            "phash": "f35846b4544ca3436d7d194148a9e3fd103b7a33389d7cd61ca47af0",
            "name": "Supreme",
            "description": "Tomato Sauce, Mozzarella, Capicola *, Italian Sausage, Mushrooms, Black Olives, Red Onions",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/f35846b4544ca3436d7d194148a9e3fd103b7a33389d7cd61ca47af0.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "23.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F6"
              }
            ]
          }
        ]
      },
      {
        "mhash": "4df922ac5cea3f6ea5e73bc62ded9454293f06c82300d24a9e16979a",
        "name": "CHICKEN PIZZAS",
        "picture": "https://www.megabitepizza.com/images/products/4df922ac5cea3f6ea5e73bc62ded9454293f06c82300d24a9e16979a.jpg",
        "products": [
          {
            "order": "1",
            "phash": "de751dee668756f6a6d922354f6ba24b95d7384974dcb7831091b445",
            "name": "BBQ Chicken",
            "description": " Mozzarella,BBQ Sauce*,Grilled Chicken *, Red Peppers, Red Onions,BBQ Sauce Drizzle",
            "calorie": "345",
            "picture": "https://www.megabitepizza.com/images/products/de751dee668756f6a6d922354f6ba24b95d7384974dcb7831091b445.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "17.4900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.9900",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "24.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.9900",
                "code": "F6"
              }
            ]
          },
          {
            "order": "2",
            "phash": "a5bfe078e2d4741c03d5449c17bf98f7969bd40ddc651040813edbd4",
            "name": "Buffalo Chicken",
            "description": "Tomato Sauce, Mozzarella, Grilled Chicken *marinated with Hot Buffalo Sauce, Red Peppers, Cheddar, Blue Cheese Drizzle,",
            "calorie": "345",
            "picture": "https://www.megabitepizza.com/images/products/a5bfe078e2d4741c03d5449c17bf98f7969bd40ddc651040813edbd4.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "23.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "3",
            "phash": "843f612b0aeb5b82aeb327ccb85e718d2e59ba3599560686a735d472",
            "name": "Chicken Alfredo",
            "description": "Mozzarella,Alfredo Sauce*, Spinach, Grilled Chicken *, Roasted Red Peppers, Red Onions,Italian Cheese Blend*, Alfredo sauce drizzle",
            "calorie": "361",
            "picture": "https://www.megabitepizza.com/images/products/843f612b0aeb5b82aeb327ccb85e718d2e59ba3599560686a735d472.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "18.4900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "22.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "25.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "22.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "4",
            "phash": "5377a2d44ab69a1f9da03030eb00f84d9e7823ff17a08cfbe5d1827b",
            "name": "Chicken Pesto",
            "description": "Mozzarella, Pesto Sauce* ,Sun-Dried Tomatoes*,Grilled Chicken *,Roasted Red Peppers, Mushrooms, Black Olives",
            "calorie": "392",
            "picture": "https://www.megabitepizza.com/images/products/5377a2d44ab69a1f9da03030eb00f84d9e7823ff17a08cfbe5d1827b.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "18.4900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "22.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "25.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "22.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "5",
            "phash": "abe6ed424ee2da457a4b092124631f74bb46b0c3a4e30158d0885e74",
            "name": "Chipotle Chicken",
            "description": " Mozzarella,Chipotle Sauce* ,Grilled Chicken *, Roasted Red Peppers, Red Onions,",
            "calorie": "367",
            "picture": "https://www.megabitepizza.com/images/products/abe6ed424ee2da457a4b092124631f74bb46b0c3a4e30158d0885e74.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "17.4900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.9900",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "24.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.9900",
                "code": "F6"
              }
            ]
          },
          {
            "order": "6",
            "phash": "af8f8e36996e41a3ed30c3563b9f9d9862db9718e26ebad1b0bf836a",
            "name": "Spicy Chicken",
            "description": "Tomato Sauce, Mozzarella, Grilled Chicken *, Red Peppers, Green Peppers, Banana Peppers",
            "calorie": "293",
            "picture": "https://www.megabitepizza.com/images/products/af8f8e36996e41a3ed30c3563b9f9d9862db9718e26ebad1b0bf836a.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "23.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F6"
              }
            ]
          }
        ]
      },
      {
        "mhash": "c1f838195c210050e54ad29061fe6bfd0d870206d57f7b230ee2cad9",
        "name": "VEGGIE PIZZAS",
        "picture": "https://www.megabitepizza.com/images/products/63a98cf7d2e894c364be4baf2c3e8f128ccc4fa3027cd246857aab80.jpg",
        "products": [
          {
            "order": "1",
            "phash": "fe20b735847bf83122fb0424723febd4abb430d786c880b7a13d5a91",
            "name": "Artichoke",
            "description": "Tomato Sauce, Mozzarella, Sun-Dried Tomatoes*,Artichoke Hearts,Roasted Garlic, Black Olives, Feta Cheese, ",
            "calorie": "275",
            "picture": "https://www.megabitepizza.com/images/products/fe20b735847bf83122fb0424723febd4abb430d786c880b7a13d5a91.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "23.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "2",
            "phash": "17c28b01877a64f613d4798f6f6d523936ff26067950d01e4fba5bc2",
            "name": "Cheese Pizza",
            "description": "Tomato Sauce, Loaded with Extra Mozzarella",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/17c28b01877a64f613d4798f6f6d523936ff26067950d01e4fba5bc2.jpg",
            "sizes": [
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "17.2400",
                "code": "F6"
              },
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "13.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "17.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "20.4900",
                "code": "F4"
              }
            ]
          },
          {
            "order": "3",
            "phash": "57e8b431a31b6744c9f6fa361a9a5b73acf06a4e7a63ba1ed455f222",
            "name": "Italian Six Cheese",
            "description": "Tomato Sauce,Extra mozzarella, Italian Cheese Blend*, Cheddar,Feta Cheese",
            "calorie": "301",
            "picture": "https://www.megabitepizza.com/images/products/57e8b431a31b6744c9f6fa361a9a5b73acf06a4e7a63ba1ed455f222.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "23.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "4",
            "phash": "c4d6993b8601232e98b68e9c56224d833c25ff40e3dcc28cb46570ec",
            "name": "Macaroni & Cheese",
            "description": "Alfredo Sauce*, Mozzarella,Fresh Garlic, Macaroni ,Cheddar",
            "calorie": "350",
            "picture": "https://www.megabitepizza.com/images/products/c4d6993b8601232e98b68e9c56224d833c25ff40e3dcc28cb46570ec.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.4900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "19.7400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "22.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "19.7400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "5",
            "phash": "6a96e2186f06a6ba504b4a211f7f055cabb55a6f5da4c3d8a1be92ca",
            "name": "Mushroom",
            "description": "Alfredo Sauce*, Mozzarella, Mushrooms, Ricotta",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/6a96e2186f06a6ba504b4a211f7f055cabb55a6f5da4c3d8a1be92ca.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "13.4900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "16.7400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "19.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "16.7400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "6",
            "phash": "bccf0f5c34725f0db1501da1d61ccf24eed9adf07c989406fc0c9a8b",
            "name": "Pesto Pizza",
            "description": "Tomato Sauce, Mozzarella,Cherry Tomatoes, Roasted garlic, Pesto Drizzle.",
            "calorie": "242",
            "picture": "https://www.megabitepizza.com/images/products/bccf0f5c34725f0db1501da1d61ccf24eed9adf07c989406fc0c9a8b.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "12.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "15.9900",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "18.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "15.9900",
                "code": "F6"
              }
            ]
          },
          {
            "order": "7",
            "phash": "16e203cc0fef55ea77faefe563e31ec03add65fc93ef582aca255dff",
            "name": "Potato Pizza",
            "description": "Tomato Sauce, Mozzarella, Sun-Dried Tomatoes*,Roasted Potato, Green Peppers, Red Onions, Italian Cheese blend*",
            "calorie": "325",
            "picture": "https://www.megabitepizza.com/images/products/16e203cc0fef55ea77faefe563e31ec03add65fc93ef582aca255dff.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "17.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "21.4900",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "24.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "21.4900",
                "code": "F6"
              }
            ]
          },
          {
            "order": "8",
            "phash": "a99c21baa0f4d967129643fe8889834b95007f2e53a362664e3e8d7d",
            "name": "Primavera",
            "description": "Tomato Sauce, Mozzarella, Artichoke Hearts, Fresh Garlic, Mushrooms, Roasted Red Peppers, Red Onions, Black Olives",
            "calorie": "250",
            "picture": "https://www.megabitepizza.com/images/products/a99c21baa0f4d967129643fe8889834b95007f2e53a362664e3e8d7d.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "18.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "21.9900",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "24.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "21.9900",
                "code": "F6"
              }
            ]
          },
          {
            "order": "9",
            "phash": "a83f07e49567528788b090b3e426f328e5a354d6df8f0175827de64f",
            "name": "Spinach Alfredo",
            "description": "Alfredo Sauce*, Mozzarella,Spinach, Roasted Red Peppers, Caramelized Onions, Italian Cheese Blend*, Alfredo Sauce Drizzle",
            "calorie": "295",
            "picture": "https://www.megabitepizza.com/images/products/a83f07e49567528788b090b3e426f328e5a354d6df8f0175827de64f.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "17.4900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.9900",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "24.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.9900",
                "code": "F6"
              }
            ]
          },
          {
            "order": "10",
            "phash": "a8657ed99f4e10dca78975f784efabf3d6c6b23cf2e925e51451fa49",
            "name": "The Tuscan",
            "description": "Tomato Sauce, Mozzarella, Sun-Dried Tomatoes*, Spinach, Roasted Red Peppers, Feta Cheese, Pesto Drizzle.",
            "calorie": "290",
            "picture": "https://www.megabitepizza.com/images/products/a8657ed99f4e10dca78975f784efabf3d6c6b23cf2e925e51451fa49.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "16.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "23.4900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "20.2400",
                "code": "F6"
              }
            ]
          },
          {
            "order": "11",
            "phash": "e1626e86b23f7a7292cb7417a6d1c8aa3e5d33a234207817688fa000",
            "name": "Veggie Garden",
            "description": "Tomato Sauce, Mozzarella, Mushrooms, Green Peppers, Red Peppers, Red Onions, Cherry Tomatoes.",
            "calorie": "250",
            "picture": "https://www.megabitepizza.com/images/products/e1626e86b23f7a7292cb7417a6d1c8aa3e5d33a234207817688fa000.jpg",
            "sizes": [
              {
                "name": "Medium 12\"",
                "default_select": "0",
                "price": "15.9900",
                "code": "F2"
              },
              {
                "name": "Large 14\"",
                "default_select": "0",
                "price": "18.9900",
                "code": "F3"
              },
              {
                "name": "X-Large 16\"",
                "default_select": "1",
                "price": "21.9900",
                "code": "F4"
              },
              {
                "name": "Caliuflower 10\"",
                "default_select": "0",
                "price": "18.9900",
                "code": "F6"
              }
            ]
          }
        ]
      },
      {
        "mhash": "ee339b851c6cf521dfda01da18924b5573279646f6b05c5753c66d43",
        "name": "SIDE DISHES",
        "picture": "https://www.megabitepizza.com/images/products/71b53aec3d2780a5fe2178edf76a279b9a1f8e459da790fa418e927c.jpg",
        "products": [
          {
            "order": "1",
            "phash": "9fba129bad6f7edaac9c0ad105b631859110858de04ea4d9cb8e5984",
            "name": "Rolls",
            "description": "Chipotle Chicken Parmesan, Hot Dog, or Spinach. Served with your choice of dipping sauce.",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/9fba129bad6f7edaac9c0ad105b631859110858de04ea4d9cb8e5984.jpg",
            "sizes": [
              {
                "name": "Regular",
                "default_select": "1",
                "price": "7.0000",
                "code": "F5"
              }
            ]
          },
          {
            "order": "2",
            "phash": "f290758d099dc1ef269f26b32ac165c4430deb896209890479c53d60",
            "name": "Garlic Cheese Sticks",
            "description": "Garlic and Cheese Finger sticks served with your choice of dipping sauce.",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/f290758d099dc1ef269f26b32ac165c4430deb896209890479c53d60.jpg",
            "sizes": [
              {
                "name": "Regular",
                "default_select": "1",
                "price": "7.0000",
                "code": "F5"
              }
            ]
          },
          {
            "order": "3",
            "phash": "078187a7f1691317e8a63e8a5319e8a0ba34fc5c2277bdf9bc5f6a80",
            "name": "Dipping Sauces",
            "description": "BBQ, Blue Cheese, Marinara, Honey Garlic, Garlic Ranch, Honey Mustard, Hot, or Chipotle.",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/078187a7f1691317e8a63e8a5319e8a0ba34fc5c2277bdf9bc5f6a80.jpg",
            "sizes": [
              {
                "name": "Regular",
                "default_select": "1",
                "price": "0.7500",
                "code": "F5"
              }
            ]
          }
        ]
      },
      {
        "mhash": "91b205e78e47545028f1f9021762ca40b123470a81685c708f4fe685",
        "name": "BEVERAGES",
        "picture": "https://www.megabitepizza.com/images/products/91b205e78e47545028f1f9021762ca40b123470a81685c708f4fe685.jpg",
        "products": [
          {
            "order": "1",
            "phash": "c8ae6d5b8b1f6067b3e50f2329a8453c8e0794ffd40aa4132da4a252",
            "name": "Water",
            "description": "Bottle of water",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/c8ae6d5b8b1f6067b3e50f2329a8453c8e0794ffd40aa4132da4a252.jpg",
            "sizes": [
              {
                "name": "Regular",
                "default_select": "1",
                "price": "1.9500",
                "code": "F5"
              }
            ]
          },
          {
            "order": "2",
            "phash": "93f5904518a0aaeb40c462613e804b557cacb05601ef6f250dee5e14",
            "name": "2L Pop",
            "description": "POP 2L Bottle",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/93f5904518a0aaeb40c462613e804b557cacb05601ef6f250dee5e14.jpg",
            "sizes": [
              {
                "name": "Regular",
                "default_select": "1",
                "price": "3.9000",
                "code": "F5"
              }
            ]
          },
          {
            "order": "3",
            "phash": "f54317941da46839062c64da6dbe27b6629f74d75a29c05f7ea9054d",
            "name": "Pop (Can)",
            "description": "",
            "calorie": "0",
            "picture": "https://www.megabitepizza.com/images/products/f54317941da46839062c64da6dbe27b6629f74d75a29c05f7ea9054d.jpg",
            "sizes": [
              {
                "name": "Regular",
                "default_select": "1",
                "price": "1.9500",
                "code": "F5"
              }
            ]
          }
        ]
      }
    ],
    "deal": [
      {
        "order": "11",
        "phash": "31f4bd80bc52388020a12d2ff9c2fe027e7c5ac9e52828796513c7ac",
        "name": "2 X-Large up 3 Toppings",
        "promo_picture": "any5toppings.jpg",
        "description": "",
        "picture": "https://www.megabitepizza.com/images/products/31f4bd80bc52388020a12d2ff9c2fe027e7c5ac9e52828796513c7ac.jpg",
        "calorie": "0"
      },
      {
        "order": "2",
        "phash": "a6e62d893c7a45535ffc04c48e993df25893394ebddaf9edbef9063a",
        "name": "Any Medium 5 Toppings",
        "promo_picture": "any5toppings.jpg",
        "description": "Create Your Own 5 Toppings",
        "picture": "https://www.megabitepizza.com/images/products/a6e62d893c7a45535ffc04c48e993df25893394ebddaf9edbef9063a.jpg",
        "calorie": "0"
      },
      {
        "order": "3",
        "phash": "49ec66c7927a8028c8400d9e01ca6e2bb33148e9b8c110a5d66e8e37",
        "name": "Any Large 5 Toppings",
        "promo_picture": "any5toppings.jpg",
        "description": "Create Your Own 5 Toppings",
        "picture": "https://www.megabitepizza.com/images/products/49ec66c7927a8028c8400d9e01ca6e2bb33148e9b8c110a5d66e8e37.jpg",
        "calorie": "0"
      },
      {
        "order": "4",
        "phash": "e5bef77e8a1f0c70cdd495ea05a90bbbb4d69e2b1fa13c651b7e19ed",
        "name": "Any X-Large 5 Toppings",
        "promo_picture": "any5toppings.jpg",
        "description": "Create Your Own 5 Toppings",
        "picture": "https://www.megabitepizza.com/images/products/e5bef77e8a1f0c70cdd495ea05a90bbbb4d69e2b1fa13c651b7e19ed.jpg",
        "calorie": "0"
      },
      {
        "order": "5",
        "phash": "7866afe91a8e535ddf1996cc1eff3a75a3fae94d35cda3acdfb01b99",
        "name": "2 Medium up 5 Toppings",
        "promo_picture": "any5toppings2pizzas.jpg",
        "description": "",
        "picture": "https://www.megabitepizza.com/images/products/7866afe91a8e535ddf1996cc1eff3a75a3fae94d35cda3acdfb01b99.jpg",
        "calorie": "0"
      },
      {
        "order": "7",
        "phash": "46572045e5c4295b2b5539d395f175e976fb08a62f5edd78865b6487",
        "name": "2 Large up 5 Toppings",
        "promo_picture": "any5toppings2pizzas.jpg",
        "description": "",
        "picture": "https://www.megabitepizza.com/images/products/46572045e5c4295b2b5539d395f175e976fb08a62f5edd78865b6487.jpg",
        "calorie": "0"
      },
      {
        "order": "9",
        "phash": "5f2b3a8498ebaa78ff5f6c05eaf2c3ae71284c87c2f1f5209ecef963",
        "name": "2 X-Large up 5 Toppings",
        "promo_picture": "any5toppings2pizzas.jpg",
        "description": "",
        "picture": "https://www.megabitepizza.com/images/products/5f2b3a8498ebaa78ff5f6c05eaf2c3ae71284c87c2f1f5209ecef963.jpg",
        "calorie": "0"
      },
      {
        "order": "6",
        "phash": "25a52eebeb2bfd6e537f5f37df0693d315587711023a8fbd36b6a30c",
        "name": "3 Medium up to 5 Toppings",
        "promo_picture": "any5toppings3pizzas.jpg",
        "description": "",
        "picture": "https://www.megabitepizza.com/images/products/25a52eebeb2bfd6e537f5f37df0693d315587711023a8fbd36b6a30c.jpg",
        "calorie": "0"
      },
      {
        "order": "8",
        "phash": "671203332f47dd18abf603f32166299af4d6bf5248ba8f56172fa7c9",
        "name": "3 Large up 5 Toppings",
        "promo_picture": "any5toppings3pizzas.jpg",
        "description": "",
        "picture": "https://www.megabitepizza.com/images/products/671203332f47dd18abf603f32166299af4d6bf5248ba8f56172fa7c9.jpg",
        "calorie": "0"
      },
      {
        "order": "10",
        "phash": "5b852478db81d38df8d2516427fa0c2fb149ab3bd10fc0718618ff71",
        "name": "3 X-Large up 5 Toppings",
        "promo_picture": "any5toppings3pizzas.jpg",
        "description": "",
        "picture": "https://www.megabitepizza.com/images/products/5b852478db81d38df8d2516427fa0c2fb149ab3bd10fc0718618ff71.jpg",
        "calorie": "0"
      },
      {
        "order": "1",
        "phash": "130f481b7d1a08bfd413adf06444c9df08d1cfbd9a215f401a141606",
        "name": "LARGE PEPPERONI $10.99",
        "promo_picture": "pepperoni.jpg",
        "description": "",
        "picture": "https://www.megabitepizza.com/images/products/130f481b7d1a08bfd413adf06444c9df08d1cfbd9a215f401a141606.jpg",
        "calorie": "0"
      }
    ]
  }


const jwtConfig = {
  "secret"   : "dd5f3089-40c3-403d-af14-d0c228b05cb4",
  "expireTime": 8000
}

mock.onGet("/api/menu").reply(() => {
  return [200, data];
});
