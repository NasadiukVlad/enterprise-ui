import { browser, by, element, promise } from "protractor";

export class AppPage {
  /**
   * Navigate to home page
   */
  navigateTo(): promise.Promise<any> {
    return browser.get("/");
  }

  /**
   * Navigate to home page
   */
  getParagraphText(): promise.Promise<string> {
    return element(by.css("app-root h1")).getText();
  }
}
