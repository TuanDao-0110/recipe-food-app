import axios from "axios"
import { BASE_URL, COUNTRY_URL_ALL, COUNTRY_URL_FLAG, RECIPES } from "./ultilities"
export const handleGetCountryFlag = async (countryName) => {
    try {
        const { data } = await axios({
            url: `${COUNTRY_URL_FLAG}${countryName}`
        })
        const { flag } = data[0]
        return flag
    } catch (error) {
        console.log(error)
    }
}
export const handleGetAllCoutriesInfo = async () => {
    try {
        const { data } = await axios({
            url: `${COUNTRY_URL_ALL}`
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

export const hanldeGetAllRecipe = async () => {
    try {
        const { data, status } = await axios({
            url: `${BASE_URL}/${RECIPES}`
        })
        return data
    } catch (error) {
        console.log(error)
    }
}
export const handlePostNewRecipe = async (newRecipe, navigate) => {
    let newData = JSON.stringify(newRecipe)
    console.log(newData)
    try {
        const { data, status } = await axios({
            url: `${BASE_URL}/${RECIPES}`,
            method: 'post',
            data: newData,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (status === 201) {
            alert('add success')
            navigate('/recipe_list')
        }
    } catch (error) {
        alert('add new receipt failt')
        console.log(error)
    }
}

export const handleDelete = async (id) => {
    try {
        const { data, status } = await axios({
            url: `${BASE_URL}/${RECIPES}/${id}`,
            method: 'delete'
        })
        if (status === 200) {
            alert(`delete id: ${id} success`)
            window.location.reload()
        }
    } catch (error) {
        console.log(error)
    }
}