import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import App from '../App'
import { BrowserRouter, Route, Routes, MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event';


test('Testing all the button exist in App', async () => {
    render(
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    )
    const homeBtn = screen.getByText('home')
    const addRouterButton = (screen.getByText('add recipe'))
    const recipeRouteButton = (screen.getByText('recipe list'))
    const findoutBtn = (screen.getByText('let find out'))
    expect(homeBtn).toBeTruthy()
    expect(addRouterButton).toBeTruthy()
    expect(recipeRouteButton).toBeTruthy()
    expect(findoutBtn).toBeTruthy()

    userEvent.click(homeBtn)
    userEvent.click(recipeRouteButton)
    userEvent.click(addRouterButton)
    userEvent.click(findoutBtn)
})




