# Create callback

## Context and Objectives

Now that we've seen how to use already existing code that expect a callback, let's do the reverse.
For programs, like video games for example, when a user push a button, we get what we call a _user input_.
Then, once we have that input in hand, we have to react to it, often with a callback.

## Write "Prettier" code

Sometimes, manually format code is a real pain, for example, we don't want to see that:

```js
const user = {lastName:'Elton',firstName:"John", address:
  {city: "London"}
  }
```

but instead we want that:

```js
const user = { lastName: "Elton", firstName: "John", address: { city: "London" } };
```

From now on you have access to _Prettier_ which will help you to format the code (given it is correct code with "bad" formating).
To use it, open you VSCode command palet with `cmd + shift + p` and search for `Format document`.

## Specs

In this exercise you have to code a `getInput` function.

In the `src/index.js` file, your function is imported then called like this:

```javascript
const log = (text) => console.log(text);
​
getInput({user: "John", key: "arrow_up"}, log);
```

You are given the `log` callback function which aim to print the key used by the user in the terminal.

Code the `getInput` function in the `src/getInput.js` file.

This function must take two parameters:
- 1st parameter: a user input, formed like this `{ user: <name>, key: <the_pressed_key> }`.
- 2nd parameter: a callback function.

You can do whatever you want with the user input, then pass the user input `key` to the callback.

### Try your code

Don't hesitate to run your code with `node src/index.js`.

> There is no traps, this exercise just check that you understand the callback syntax.
