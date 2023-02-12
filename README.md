# Recipes food app 
1. The app is used to get food recipe which allow user can get cooking recipe.
2. User can also add their cooking recipe. 
---
# Teachnology:
1. front end: REACT JS 
2. UI: Tailwind CSS, 
3. back end: Json Server npm.
4. Testing: Jest, Cypress
---
#  Recipes function
1. review cooking recipes. 
2. add vs delete recipes. 
3. cooking recipes show all the information about:
    1. cooking time.
    2. food nutrition. 
    3. where the food come from. 
    4. material require.
4. searching function by country, author, food's name. 
---
# Start app: 

1. front end terminal:

```
npm start

```

2. back end terminal:

```
npm run server

```
3. use con use 1 comment line to run both back end and font end server. 

```
npm run dev
```
4. Unit testing

```
npm run test
```
5. E2E testing
```
npm run cypress:open
```
## Remember to run both terminal in seperate terminal. 
---
# application features: 

1. add food recipe 
    1. by name, 
    2. by country, 
    3. by cooking time,
    4. cooking step, 
    5. nutrition inside, 
    6. material required, 

<img width="1143" alt="Screenshot 2022-12-19 at 13 07 25" src="https://user-images.githubusercontent.com/75282610/208412538-a4ed03ab-6f10-4481-a7c2-58111a1c28d0.png">
    
<img width="1104" alt="Screenshot 2022-12-19 at 13 08 28" src="https://user-images.githubusercontent.com/75282610/208412680-0a8af62e-ea4e-483c-ab9d-a9b6388e26ce.png">

2. review and searching for food by name, author or country: 

<img width="1111" alt="Screenshot 2022-12-19 at 13 09 40" src="https://user-images.githubusercontent.com/75282610/208412873-e2595d76-59fc-40ee-bef3-7ec321506832.png">


3. food recipe can be viewed in details throught pop-up or delete: 

<img width="933" alt="Screenshot 2022-12-19 at 13 11 16" src="https://user-images.githubusercontent.com/75282610/208413188-f0f880bd-22af-407c-88a6-d5240f83e9a1.png">


<img width="336" alt="Screenshot 2022-12-19 at 13 11 34" src="https://user-images.githubusercontent.com/75282610/208413239-654ee009-3949-4083-aaad-374202ebb7b9.png">

## Unit Testing 

1. Tesing all App and button exists and work 
```mermaid
graph LR;
    Testing All the Button Exist in App --> render
    render --> BrowserRouter
    BrowserRouter --> App
    App --> homeBtn
    App --> addRouterButton
    App --> recipeRouteButton
    App --> findoutBtn
    homeBtn --> expect(homeBtn).toBeTruthy()
    addRouterButton --> expect(addRouterButton).toBeTruthy()
    recipeRouteButton --> expect(recipeRouteButton).toBeTruthy()
    findoutBtn --> expect(findoutBtn).toBeTruthy()
    homeBtn --> userEvent.click(homeBtn)
    recipeRouteButton --> userEvent.click(recipeRouteButton)
    addRouterButton --> userEvent.click(addRouterButton)
    findoutBtn --> userEvent.click(findoutBtn)

```
2. Test fetching 

```mermaid
sequenceDiagram
    participant handleGetAllRecipe
    participant hanldeGetAllRecipe
    participant axios
    participant BASE_URL
    participant RECIPES
    
    handleGetAllRecipe->hanldeGetAllRecipe: calls hanldeGetAllRecipe()
    hanldeGetAllRecipe->axios: calls axios with url=${BASE_URL}/${RECIPES}
    axios->hanldeGetAllRecipe: returns mockData or mockError
    hanldeGetAllRecipe->handleGetAllRecipe: returns result or alerts mockError
    
    participant handleGetAllCoutriesInfo
    participant COUNTRY_URL_ALL
    
    handleGetAllCoutriesInfo->handleGetAllCoutriesInfo: calls handleGetAllCoutriesInfo()
    handleGetAllCoutriesInfo->axios: calls axios with url=${COUNTRY_URL_ALL}
    axios->handleGetAllCoutriesInfo: returns mockData or mockError
    handleGetAllCoutriesInfo->handleGetAllCoutriesInfo: returns result or alerts mockError

```
3. Test add Recipes Component
```mermaid
sequenceDiagram
    participant Test as Test
    participant React as React
    participant AddRecipe as AddRecipe

    Test ->> React: render(<AddRecipe />, { wrapper: BrowserRouter })

    Test ->> Test: check all element
    Test ->> React: const header = screen.getByText('add recipes')
    Test ->> React: const submitBtn = screen.getByText('submit new recipes')
    Test ->> React: const moreStepBtn = screen.getByText('more step +')
    Test ->> React: const removeStepBtn = screen.getByText('remove step -')
    Test ->> React: const stepLabel = screen.getAllByLabelText(/step/i)

    Test ->> Test: check those button exist ?
    Test ->> React: expect(submitBtn).toBeTruthy()
    Test ->> React: expect(header).toBeTruthy()
    Test ->> React: expect(moreStepBtn).toBeTruthy()
    Test ->> React: expect(removeStepBtn).toBeTruthy()
    Test ->> React: expect(stepLabel).toBeTruthy()

    Test ->> Test: add new step success
    Test ->> React: const moreStepBtn = screen.getByText('more step +')
    Test ->> React: expect(screen.getAllByLabelText(/step/i)).toHaveLength(3)
    Test ->> Test: check new step add 
    Test ->> React: await userEvent.click(moreStepBtn)
    Test ->> React: expect(screen.getAllByLabelText(/step/i)).toHaveLength(4)

    Test ->> Test: remove step
    Test ->> React: const removeStepBtn = screen.getByText('remove step -')
    Test ->> React: expect(screen.getAllByLabelText(/step/i)).toHaveLength(3)
    Test ->> Test: check step removed
    Test ->> React: await userEvent.click(removeStepBtn)
    Test ->> React: expect(screen.getAllByLabelText(/step/i)).toHaveLength(2)

    Test ->> Test: add new Ingrdient
    Test ->> React: const moreIngredient = screen.getByText('more ingredients +')
    Test ->> React: expect(moreIngredient).toBeTruthy()
    Test ->> React: const unitLabel = screen.getAllByText(/quantity/i)
    Test ->> React: expect(unitLabel).toHaveLength(2)
    Test ->> Test: click add new ingedient 
    Test ->> React: await userEvent.click(moreIngredient)
    Test ->> React: expect(screen.getAllByText(/quantity/i)).toHaveLength(3)

    Test ->> Test: remove new Ingrdient
    Test ->> React: const removeIngredient = screen.getByText('remove ingredients -')
    Test ->> React: expect(removeIngredient).toBeTruthy()
    Test ->> React: const unitLabel = screen.getAllByText(/quantity/i)
    Test ->> React: expect(unitLabel).toHaveLength(2)
    Test ->> Test: click removeIngredient
    Test ->> React: await userEvent.click(removeIngredient)
    Test ->> React: expect(screen.getAllByText(/quantity/i)).toHaveLength(1)
```
4. Test all recipes list using 'msw' for testing server
1. [x] use 'msw' for testing server. 
2. [x] check all element show when server success load
3. [x] check if server error
4. [x] test details button, when it click, i can render those food recipes. 

## E2E Testing
1. Input test: 

```mermaid

sequenceDiagram
    participant User
    participant Test
    participant App

    User->>Test: Run test
    Test->>App: Visit "http://localhost:3000/add"
    Test->>App: Get 'h1' element
    Test->>App: Check if the text of 'h1' is 'add recipes'
    Test->>App: Get first 'input' element
    Test->>App: Type 'name of the food' in first 'input' element
    Test->>App: Get second 'input' element
    Test->>App: Type 'food author' in second 'input' element
    Test->>App: Get 'select' element
    Test->>App: Select 'Japan' from 'select'
    Test->>App: Check if the value of 'select' is 'Japan'
    Test->>App: Get 'more ingredients +' element
    Test->>App: Click on 'more ingredients +'
    Test->>App: Get 'label' elements with text 'unit'
    Test->>App: Check if the length of 'label' elements with text 'unit' is 2
```

2. Router:
```mermaid
sequenceDiagram
    participant User
    participant Test
    participant App

    User->>Test: Run test
    Test->>App: Visit "http://localhost:3000/"
    Test->>App: Get 'button' element
    Test->>App: Check if the text of 'button' is 'let find out'
    Test->>App: Click on 'button'
    Test->>App: Check URL
    Test->>App: Check if the URL is 'http://localhost:3000/recipe_list'
    Test->>App: Get 'recipe list' element
    Test->>App: Click on 'recipe list'
    Test->>App: Check URL
    Test->>App: Check if the URL is 'http://localhost:3000/recipe_list'
    Test->>App: Get 'add recipe' element
    Test->>App: Click on 'add recipe'
    Test->>App: Check URL
    Test->>App: Check if the URL is 'http://localhost:3000/add'
```