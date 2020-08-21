import fetch, { Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string |number |boolean |null;
}

export class GithubClient {
  static getReposUrl() {
    // You code goes here
  }

  static getRepos() {
    // You code goes here
  }

  static printRepos() {
    // You code goes here
  }

  
  static printRepository() {
    // You code goes here
  }
  
  static getProjectInformations() {
    // You code goes here
  }
}
