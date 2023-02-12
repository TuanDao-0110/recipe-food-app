import AddRecipe from "../pages/add-recipe/AddRecipe";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import {  render, screen } from "@testing-library/react";


test('check all elment', async () => {
    render(
        <AddRecipe />
        , { wrapper: BrowserRouter })
    // 1. get element
    const header = screen.getByText('add recipes')
    const submitBtn = screen.getByText('submit new recipes')
    const moreStepBtn = screen.getByText('more step +')
    const removeStepBtn = screen.getByText('remove step -')
    const stepLabel = screen.getAllByLabelText(/step/i)
    // 2. check those button exist ?
    expect(submitBtn).toBeTruthy()
    expect(header).toBeTruthy()
    expect(moreStepBtn).toBeTruthy()
    expect(removeStepBtn).toBeTruthy()
    expect(stepLabel).toBeTruthy()

})

test('add new step success', async () => {
    render(<AddRecipe />, { wrapper: BrowserRouter })
    const moreStepBtn = screen.getByText('more step +')

    // 1. counter number of step before click 
    expect(screen.getAllByLabelText(/step/i)).toHaveLength(3)
    // 2. check new step add 
    await userEvent.click(moreStepBtn)
    // 3. get total new steps 
    expect(screen.getAllByLabelText(/step/i)).toHaveLength(4)
})

test('remove  step', async () => {
    render(<AddRecipe />, { wrapper: BrowserRouter })
    const moreStepBtn = screen.getByText('remove step -')

    // 1. counter number of step before click 
    expect(screen.getAllByLabelText(/step/i)).toHaveLength(3)
    // 2. check new step add 
    await userEvent.click(moreStepBtn)
    // 3. get total new steps 
    expect(screen.getAllByLabelText(/step/i)).toHaveLength(2)
})

test('add new Ingrdient', async () => {
    render(<AddRecipe />, { wrapper: BrowserRouter })
    const moreIngredient = screen.getByText('more ingredients +')
    expect(moreIngredient).toBeTruthy()
    // 1. counter number of ingredient before click 
    const unitLabel = screen.getAllByText(/quantity/i)
    expect(unitLabel).toHaveLength(2)
    // 2. click add new ingedient 
    await userEvent.click(moreIngredient)
    // 3. new ingredient step added
    expect(screen.getAllByText(/quantity/i)).toHaveLength(3)
})
test('remove new Ingrdient', async () => {
    render(<AddRecipe />, { wrapper: BrowserRouter })
    const removeIngredient = screen.getByText('remove ingredients -')
    expect(removeIngredient).toBeTruthy()
    // 1. counter number of ingredient before click 
    const unitLabel = screen.getAllByText(/quantity/i)
    expect(unitLabel).toHaveLength(2)
    // 2. click add new ingedient 
    await userEvent.click(removeIngredient)
    // 3. new ingredient step added
    expect(screen.getAllByText(/quantity/i)).toHaveLength(1)
})

