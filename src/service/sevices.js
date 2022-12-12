import axios from "axios"
import { BASE_URL, COUNTRY_URL_ALL, COUNTRY_URL_FLAG, RECIPES } from "./ultilities"
export const handleGetCountryFlag = async (countryName) => {
    try {
        const data = await axios({
            url: `${COUNTRY_URL_FLAG}${countryName}`
        })
        const { flag } = data
        return flag
    } catch (error) {
        console.log(error)
    }
}
export const handleGetAllCoutriesInfo = async () => {
    try {
        const data = await axios({
            url: `${COUNTRY_URL_ALL}`
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

export const hanldeGetAllRecipe = async () => {
    try {
        const data = await axios({
            url: `${BASE_URL}/${RECIPES}`
        })
        return data
    } catch (error) {
        console.log(error)
    }
}
export const handlePostNewRecipe = async (newRecipe, navigate) => {
    try {
        const data = await axios({
            url: `${BASE_URL}/${RECIPES}`,
            method: 'post',
            data: newRecipe
        })
        if (data) {
            alert('add success')
            navigate('/recipe_list')
        }
    } catch (error) {
        alert('add new receipt failt')
        console.log(error)
    }
}