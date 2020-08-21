# Marathon

You want to build an application which store the data of every marathon.

## 1. Create the table schema which can store all this data

After you gathered data about some marathons, you settled on some information which seem to be the most important to keep track of:

- the name of the race.
- the date when the race started.
- the name of the runner.
- the bib of the runner.
- the final position of the runner.
- the runner racing time.

Create the table schema which can store all this data !

## 2. Write a bunch of `INSERT` queries

Here some data we will need in the next queries:

- At least 2 races: "New York City Marathon - Women", and "New York City Marathon - Men" in 2019
- Some runners with a bib greater than 100.
- Some runners with a bib less than 100.
- Some runners who ran the course in less 2:30:00.
- Some runners who ran the course in less 2:15:00.
- A runner named "Koen Naert".

## 3. Select some data

- Select all runners for the `"New York City Marathon - Women"` edition 2019.
- Select the name of the top 3 runners of the `"New York City Marathon - Men"` edition 2019.
- Select runners who ran the course in:

  - less than 2:15:00 and didn't start in the 100 first runners
    **OR**
  - less than 2:30:00 if they started in the 100 firsts.

    > We would like to have the data sorted first by runners who started in the first 100, followed by the others.
    > We would also like to have them sorted by overlap time.

- **BONUS**: Find runners (bib, name, and position) who made a better time than "Koen Naert". We would like to have the fastest runner returned first.
