$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "line": 2,
  "name": "Economic Application",
  "description": "",
  "id": "economic-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Validate the application login successfully",
  "description": "",
  "id": "economic-application;validate-the-application-login-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User opens Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enter username and password and login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "validate user login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_opens_Chrome_browser()"
});
formatter.result({
  "duration": 11847221600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enter_username_and_password_and_login()"
});
formatter.result({
  "duration": 5117680800,
  "error_message": "org.apache.poi.EmptyFileException: The supplied file was empty (zero bytes long)\r\n\tat org.apache.poi.util.IOUtils.peekFirstNBytes(IOUtils.java:74)\r\n\tat org.apache.poi.util.IOUtils.peekFirst8Bytes(IOUtils.java:57)\r\n\tat org.apache.poi.poifs.filesystem.FileMagic.valueOf(FileMagic.java:135)\r\n\tat org.apache.poi.openxml4j.opc.internal.ZipHelper.verifyZipHeader(ZipHelper.java:175)\r\n\tat org.apache.poi.openxml4j.opc.internal.ZipHelper.openZipStream(ZipHelper.java:209)\r\n\tat org.apache.poi.openxml4j.opc.ZipPackage.\u003cinit\u003e(ZipPackage.java:98)\r\n\tat org.apache.poi.openxml4j.opc.OPCPackage.open(OPCPackage.java:324)\r\n\tat org.apache.poi.util.PackageHelper.open(PackageHelper.java:37)\r\n\tat org.apache.poi.xssf.usermodel.XSSFWorkbook.\u003cinit\u003e(XSSFWorkbook.java:295)\r\n\tat com.qa.util.ExcelDataProvider.getStringData(ExcelDataProvider.java:25)\r\n\tat com.qa.Pages.LoginPage.ValidLogin(LoginPage.java:54)\r\n\tat com.qa.stepDefinitions.LoginSteps.user_enter_username_and_password_and_login(LoginSteps.java:36)\r\n\tat ✽.When User enter username and password and login(MyApplication.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.validate_user_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Validate the invalid user not logged in",
  "description": "",
  "id": "economic-application;validate-the-invalid-user-not-logged-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User opens Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User enter invalid username and password and login",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "validate user not able to logged",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_opens_Chrome_browser()"
});
formatter.result({
  "duration": 10137432900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enter_invalid_username_and_password_and_login()"
});
formatter.result({
  "duration": 6107526500,
  "error_message": "org.apache.poi.EmptyFileException: The supplied file was empty (zero bytes long)\r\n\tat org.apache.poi.util.IOUtils.peekFirstNBytes(IOUtils.java:74)\r\n\tat org.apache.poi.util.IOUtils.peekFirst8Bytes(IOUtils.java:57)\r\n\tat org.apache.poi.poifs.filesystem.FileMagic.valueOf(FileMagic.java:135)\r\n\tat org.apache.poi.openxml4j.opc.internal.ZipHelper.verifyZipHeader(ZipHelper.java:175)\r\n\tat org.apache.poi.openxml4j.opc.internal.ZipHelper.openZipStream(ZipHelper.java:209)\r\n\tat org.apache.poi.openxml4j.opc.ZipPackage.\u003cinit\u003e(ZipPackage.java:98)\r\n\tat org.apache.poi.openxml4j.opc.OPCPackage.open(OPCPackage.java:324)\r\n\tat org.apache.poi.util.PackageHelper.open(PackageHelper.java:37)\r\n\tat org.apache.poi.xssf.usermodel.XSSFWorkbook.\u003cinit\u003e(XSSFWorkbook.java:295)\r\n\tat com.qa.util.ExcelDataProvider.getStringData(ExcelDataProvider.java:25)\r\n\tat com.qa.Pages.LoginPage.inValidLogin(LoginPage.java:68)\r\n\tat com.qa.stepDefinitions.LoginSteps.user_enter_invalid_username_and_password_and_login(LoginSteps.java:69)\r\n\tat ✽.When User enter invalid username and password and login(MyApplication.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.validate_user_not_able_to_logged()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Navigation.feature");
formatter.feature({
  "line": 1,
  "name": "Navigation",
  "description": "",
  "id": "navigation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Navigation Bar Test",
  "description": "",
  "id": "navigation;navigation-bar-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User opens Chrome browser and enter URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Home link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should successfully move to Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Find a Job link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should successfully move to jobs page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Job alerts link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should successfully move to newalert page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Search recruiters link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should successfully move to employers page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Jobs blog link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should successfully move to careers page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "NavigationSteps.user_opens_Chrome_browser_and_enter_URL()"
});
formatter.result({
  "duration": 11136830700,
  "status": "passed"
});
formatter.match({
  "location": "NavigationSteps.user_clicks_on_Home_link()"
});
formatter.result({
  "duration": 31409700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.183)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-VLPS9VUP\u0027, ip: \u0027192.168.43.115\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.183, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ABC\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:55101}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9f053090c3bcbc1b562423ed9d4f52b8\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Home\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.qa.util.MyUIUtils.click(MyUIUtils.java:43)\r\n\tat com.qa.Pages.NavigationPage.click_HomeLink(NavigationPage.java:39)\r\n\tat com.qa.stepDefinitions.NavigationSteps.user_clicks_on_Home_link(NavigationSteps.java:33)\r\n\tat ✽.When User clicks on Home link(Navigation.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NavigationSteps.user_should_successfully_move_to_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigationSteps.user_clicks_on_Find_a_Job_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigationSteps.user_should_successfully_move_to_jobs_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigationSteps.user_clicks_on_Job_alerts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigationSteps.user_should_successfully_move_to_newalert_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigationSteps.user_clicks_on_Search_recruiters_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigationSteps.user_should_successfully_move_to_employers_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigationSteps.user_clicks_on_Jobs_blog_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigationSteps.user_should_successfully_move_to_careers_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigationSteps.user_should_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Registration.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Registration of user",
  "description": "I want to use this template for my feature file",
  "id": "registration-of-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Verify user registration with valid data",
  "description": "",
  "id": "registration-of-user;verify-user-registration-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User open chrome browser and navigate to application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Click on Create account link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter title",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Enter First name",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Enter Last name",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Enter Email id",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Enter Password",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Enter Confirm Password",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Check Terms and condition",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Submit the registration",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Verify registration successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.user_open_chrome_browser_and_navigate_to_application()"
});
