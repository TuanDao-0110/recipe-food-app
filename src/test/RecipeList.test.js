import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import RecipesList from "../pages/list/RecipesList";
import axios from 'axios';
import { BASE_URL, RECIPES } from "../service/ultilities";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { async } from "q";
import AddRecipe from "../pages/add-recipe/AddRecipe";
import { hanldeGetAllRecipe } from "../service/sevices";
import { act } from "react-dom/test-utils";
// set up temporatory server
const recipeHandler = [
    rest.get('http://localhost:4000/recipes', (req, res, ctx) => {
        return res(ctx.json([
            {
                "id": 1,
                "name": "Chicken Parmesan",
                "author": "Maria Valentina",
                "country": "Italy",
                "description": "A classic Italian dish of breaded chicken topped with tomato sauce and melted mozzarella cheese.",
                "image": "https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg",
                "ingredients": [
                    {
                        "name": "chicken breasts",
                        "quantity": 2,
                        "unit": "pounds"
                    },
                    {
                        "name": "flour",
                        "quantity": 0.5,
                        "unit": "cup"
                    },
                    {
                        "name": "eggs",
                        "quantity": 2,
                        "unit": "whole"
                    },
                    {
                        "name": "bread crumbs",
                        "quantity": 1,
                        "unit": "cup"
                    },
                    {
                        "name": "tomato sauce",
                        "quantity": 1,
                        "unit": "cup"
                    },
                    {
                        "name": "mozzarella cheese",
                        "quantity": 1,
                        "unit": "cup"
                    }
                ],
                "preparation_time": 15,
                "cooking_time": 20,
                "servings": 4,
                "directions": [
                    "Preheat the oven to 400 degrees F.",
                    "Cut the chicken breasts in half lengthwise to create thin cutlets.",
                    "In a shallow dish, combine the flour and some salt and pepper.",
                    "In a separate shallow dish, beat the eggs.",
                    "In a third shallow dish, mix the bread crumbs with some grated Parmesan cheese.",
                    "Dredge each chicken cutlet in the flour mixture, then dip it in the egg mixture, and then coat it with the bread crumb mixture, pressing gently to help the bread crumbs adhere.",
                    "Heat some oil in a large oven-safe skillet over medium-high heat. Add the chicken cutlets and cook until they are golden brown on both sides, about 2 minutes per side.",
                    "Pour the tomato sauce over the chicken and sprinkle with the mozzarella cheese. Transfer the skillet to the oven and bake until the cheese is melted and bubbly, about 10 minutes.",
                    "Serve the chicken Parmesan with a side of pasta or a salad."
                ],
                "nutrition": {
                    "calories": 600,
                    "fat": 30,
                    "carbohydrates": 40,
                    "protein": 40
                }
            },
        ]), ctx.delay(150), ctx.status(201))
    }),
    rest.get('https://restcountries.com/v3.1/name/Italy', (req, res, ctx) => {
        return res(ctx.json([
            {
                "name": {
                    "common": "Italy",
                    "official": "Italian Republic",
                    "nativeName": {
                        "ita": {
                            "official": "Repubblica italiana",
                            "common": "Italia"
                        }
                    }
                },
                "tld": [
                    ".it"
                ],
                "cca2": "IT",
                "ccn3": "380",
                "cca3": "ITA",
                "cioc": "ITA",
                "independent": true,
                "status": "officially-assigned",
                "unMember": true,
                "currencies": {
                    "EUR": {
                        "name": "Euro",
                        "symbol": "€"
                    }
                },
                "idd": {
                    "root": "+3",
                    "suffixes": [
                        "9"
                    ]
                },
                "capital": [
                    "Rome"
                ],
                "altSpellings": [
                    "IT",
                    "Italian Republic",
                    "Repubblica italiana"
                ],
                "region": "Europe",
                "subregion": "Southern Europe",
                "languages": {
                    "ita": "Italian"
                },
                "translations": {
                    "ara": {
                        "official": "الجمهورية الإيطالية",
                        "common": "إيطاليا"
                    },
                    "bre": {
                        "official": "Republik Italia",
                        "common": "Italia"
                    },
                    "ces": {
                        "official": "Italská republika",
                        "common": "Itálie"
                    },
                    "cym": {
                        "official": "Italian Republic",
                        "common": "Italy"
                    },
                    "deu": {
                        "official": "Italienische Republik",
                        "common": "Italien"
                    },
                    "est": {
                        "official": "Itaalia Vabariik",
                        "common": "Itaalia"
                    },
                    "fin": {
                        "official": "Italian tasavalta",
                        "common": "Italia"
                    },
                    "fra": {
                        "official": "République italienne",
                        "common": "Italie"
                    },
                    "hrv": {
                        "official": "talijanska Republika",
                        "common": "Italija"
                    },
                    "hun": {
                        "official": "Olasz Köztársaság",
                        "common": "Olaszország"
                    },
                    "ita": {
                        "official": "Repubblica italiana",
                        "common": "Italia"
                    },
                    "jpn": {
                        "official": "イタリア共和国",
                        "common": "イタリア"
                    },
                    "kor": {
                        "official": "이탈리아 공화국",
                        "common": "이탈리아"
                    },
                    "nld": {
                        "official": "Italiaanse Republiek",
                        "common": "Italië"
                    },
                    "per": {
                        "official": "جمهوری ایتالیا",
                        "common": "ایتالیا"
                    },
                    "pol": {
                        "official": "Republika Włoska",
                        "common": "Włochy"
                    },
                    "por": {
                        "official": "República Italiana",
                        "common": "Itália"
                    },
                    "rus": {
                        "official": "итальянская Республика",
                        "common": "Италия"
                    },
                    "slk": {
                        "official": "Talianska republika",
                        "common": "Taliansko"
                    },
                    "spa": {
                        "official": "República Italiana",
                        "common": "Italia"
                    },
                    "srp": {
                        "official": "Италијанска Република",
                        "common": "Италија"
                    },
                    "swe": {
                        "official": "Republiken Italien",
                        "common": "Italien"
                    },
                    "tur": {
                        "official": "İtalyan Cumhuriyeti",
                        "common": "İtalya"
                    },
                    "urd": {
                        "official": "جمہوریہ اطالیہ",
                        "common": "اطالیہ"
                    },
                    "zho": {
                        "official": "意大利共和国",
                        "common": "意大利"
                    }
                },
                "latlng": [
                    42.83333333,
                    12.83333333
                ],
                "landlocked": false,
                "borders": [
                    "AUT",
                    "FRA",
                    "SMR",
                    "SVN",
                    "CHE",
                    "VAT"
                ],
                "area": 301336.0,
                "demonyms": {
                    "eng": {
                        "f": "Italian",
                        "m": "Italian"
                    },
                    "fra": {
                        "f": "Italienne",
                        "m": "Italien"
                    }
                },
                "flag": "🇮🇹",
                "maps": {
                    "googleMaps": "https://goo.gl/maps/8M1K27TDj7StTRTq8",
                    "openStreetMaps": "https://www.openstreetmap.org/relation/365331"
                },
                "population": 59554023,
                "gini": {
                    "2017": 35.9
                },
                "fifa": "ITA",
                "car": {
                    "signs": [
                        "I"
                    ],
                    "side": "right"
                },
                "timezones": [
                    "UTC+01:00"
                ],
                "continents": [
                    "Europe"
                ],
                "flags": {
                    "png": "https://flagcdn.com/w320/it.png",
                    "svg": "https://flagcdn.com/it.svg",
                    "alt": "The flag of Italy is composed of three equal vertical bands of green, white and red."
                },
                "coatOfArms": {
                    "png": "https://mainfacts.com/media/images/coats_of_arms/it.png",
                    "svg": "https://mainfacts.com/media/images/coats_of_arms/it.svg"
                },
                "startOfWeek": "monday",
                "capitalInfo": {
                    "latlng": [
                        41.9,
                        12.48
                    ]
                },
                "postalCode": {
                    "format": "#####",
                    "regex": "^(\\d{5})$"
                }
            }
        ]), ctx.status(201))
    })
]
const server = setupServer(...recipeHandler)
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.

test('Check all element after calling api success', async () => {
    render(<RecipesList />, { wrapper: BrowserRouter })
    // 1. get header 
    expect(screen.getByText(/total food/i)).toBeTruthy()
    // 2. get load more button
    expect(screen.getByText(/load/i)).toBeTruthy()
    // 3. get all details after fetched API. 
    expect(await screen.findAllByText(/more details/i)).toHaveLength(1)
})
test('check when to click detail button and show detail pop up', async () => {
    render(<RecipesList />, { wrapper: BrowserRouter })
    // 1. get 1 details button and click to show popup with author's name
    const moreDetails = await screen.findAllByText(/more details/i)
    userEvent.click(moreDetails[0])
    const detail = await screen.findByText(/Maria Valentina/i)
    expect(detail).toBeTruthy()
    // 2. close button to disappear author name
    const closeBtn = (await screen.findByText('x'))
    expect(closeBtn).toBeTruthy()
    act(() => {

        userEvent.click(closeBtn)
        const detailNew = screen.findByText(/Maria Valentina/i)
        expect(detailNew).toBeTruthy()
    })
})
afterAll(() => server.close())

test('api fail fetching', async () => {
    // 1. set fail server: 
    // server.use(
    //     rest.get('http://localhost:4000/recipes', (req, res, ctx) => {
    //         return res(ctx.status(500))
    //     })
    // )
    // render(<RecipesList />, { wrapper: BrowserRouter })


    // global.alert = jest.fn()
    // expect(await global.alert('fail')).toBeTruthy()
})