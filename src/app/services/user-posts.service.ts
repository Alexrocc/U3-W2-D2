import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserPostsService {
  Url: string = '../../assets/db.json';

  constructor() {}
  async handleFetch() {
    return await (await fetch(this.Url)).json();
  }
}
