Feature('Create Todos')

Before(async (I, Todos02Page) => {
    Todos02Page.goto()
})

/**
 * Happy Path tests
 */
Scenario('Create a new todo item', async (I, Todos03Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create a todo "foo"')
  Todos03Page.enterTodo('foo')

  I.say('Then I see the new todo on my list')
  Todos03Page.seeNumberOfTodos(1)

  I.saveScreenshot('create-todo-item.png')
})

Scenario('Create multiple todo items', async (I, Todos03Page) => {
  I.say('Given I have an empty todo list')

  I.say('When I create todos "foo", "bar" and "baz"')
  Todos03Page.enterTodo('foo')
  Todos03Page.enterTodo('bar')
  Todos03Page.enterTodo('baz')

  I.say('Then I have these 3 todos on my list')
  Todos03Page.seeNumberOfTodos(3)

  I.saveScreenshot('create-multiple-todo-items.png')
})

/**
 * Edge cases
 */
Scenario('Text input field should be cleared after each item', async (I, Todos03Page) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a new todo')
  Todos03Page.enterTodo('foo')

  I.say('Then I see that the input field has been cleared')
  Todos03Page.seeEmptyTodoInput()
})

Scenario('Text input should be trimmed', async (I, Todos03Page) => {
  I.say('Given I have an empty todo list')
  I.say('When I enter a todo with whitespace around the text')
  Todos03Page.enterTodo('       Todo with lots of whitespace around       ')

  I.say('Then I see the trimmed text of the todo in the list')
  await Todos03Page.seeNthTodoEquals(1, 'Todo with lots of whitespace around')
})


Scenario('New todos should be added to the bottom of the list', async (I, Todos03Page) => {
  throw new Error('Implement this test')
})


Scenario('Footer should be visible when adding TODOs', async (I, Todos03Page) => {
  throw new Error('Implement this test')
})


