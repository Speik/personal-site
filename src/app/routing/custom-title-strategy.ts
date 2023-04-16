import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { BASE_APP_TITLE, APP_TITLE_DETAILS } from './declarations';

@Injectable({ providedIn: 'root' })
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  public override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    const resultTitle = this.getResultTitle(title);

    this.title.setTitle(resultTitle);
  }

  private getResultTitle(currentPageTitle: Optional<string>): string {
    if (!currentPageTitle) {
      return `${BASE_APP_TITLE} | ${APP_TITLE_DETAILS}`;
    }

    return `${BASE_APP_TITLE} - ${currentPageTitle} | ${APP_TITLE_DETAILS}`;
  }
}
