# Magic Gate

Video Games are awesome. But having to restart a game from the beginning everytime time it is turned off can be quite frustrating. As the saying goes : "_It is not video games that give birth to violence, but lag and corrupted files_". Let's try taking care of the last one !

## Context and objective

You are working as a game developer and thinking about the design of your next game. After designing the main functions of your game and its pseudo-code, you are thinking about the architecture of your database to include a way for your players to leave your game without losing their progress.

You will be working with a [database design tool](https://ondras.zarovi.cz/sql/demo/). To make it compatible with what you have learned so far, go to the **Options** menu, and in the _Database for new designs_ menu select **postgresql** than reload the page. This is important for your design to be properly tested later on.

## Memory Game

### Specs

The **Memory** game, or the "concentration" game, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.

The task is to design a database that allows you to work around the followings functions and specifications :

- The full state of a game should be able to be saved and completely loaded when the game is restarted. That includes :
  - The state of the cards
  - The score of the players
  - Who's turn is it to play

Let's do this step by step.
First,

- Create a table named _*game_state*_
- Add 3 fields respectively named:
  - position
  - discovered
  - player_id
- The types of those columns should respectively be:
  - Varchar
  - Boolean
  - Integer

Secondly,

- Create a table named _players_
- Add 2 fields respectively named:
  - numbers_of_pairs
  - turn
- The types of those columns should respectively be:
  - Integer
  - Boolean

Once you have created both tables, connect a **foreign key** between the row _id_ in the _players_ table and the row _player_id_ in the _*game_state*_ table.

## Tic tac toe

### Specs

Let's do the same thing on a game you have already worked on !

The first two specifications of a _safe state_ allows to load :

- The full state of the game and it's board
- Who's turn is it to play

Digging a bit deeper, how about creating tables to save a leaderboard? A leaderboard keeps record of :

- The number of game won
- The number of game lost
- The number of draw
- Total number of game played

Let's do this step by step.
First,

- Create a table named _*game_state*_
- Add 3 fields respectively named:

  - position
  - current_player_id

- The types of those columns should respectively be:
  - Varchar
  - Integer

Secondly,

- Create a table named _*current_players*_
- Add 2 fields respectively named:
  - player_id
  - turn
- The types of those columns should respectively be:
  - Integer
  - Boolean

Once you have created both tables, connect a **foreign key** between the row _id_ in the _*current_players*_ table and the row _*current_player_id*_ in the _*game_state*_ table.

Thirdly,

- Create a table named _*players*_
- Add 2 fields respectively named:
  - total_victories
  - total_losses
  - total_draws
  - total_games
- The types of those columns should all be integers.

Once you have created both tables, connect a **foreign key** between the row _id_ in the _*players*_ table and the row _*player_id*_ in the _*current_players*_ table.
