// package tests;

// import org.openqa.selenium.By;
// import org.openqa.selenium.WebDriver;
// import org.openqa.selenium.chrome.ChromeDriver;
// import org.openqa.selenium.WebElement;
// import org.testng.Assert;
// import org.testng.annotations.AfterMethod;
// import org.testng.annotations.BeforeMethod;
// import org.testng.annotations.Test;

// public class LoginTest {

//     WebDriver driver;

//     @BeforeMethod
//     public void setUp() {
//         driver = new ChromeDriver();
//         driver.manage().window().maximize();
//         driver.get("http://localhost:5173/login");
//     }

// //     1. Valid email + valid password
//     @Test
//     public void loginWithValidCredentials() {

//         driver.findElement(By.name("email"))
//                 .sendKeys("your-test-email");

//         driver.findElement(By.name("password"))
//                 .sendKeys("your-test-password");

//         driver.findElement(By.cssSelector("button[type='submit']"))
//                 .click();

//         // User should NOT see an error message
//         Assert.assertFalse(
//                 driver.findElements(By.cssSelector(".error-message")).size() > 0,
//                 "Error message appeared for valid login"
//         );
//     }

//     // 2. Empty email + empty password
//     @Test
//     public void loginWithEmptyFields() {

//         driver.findElement(By.cssSelector("button[type='submit']"))
//                 .click();

//         WebElement errorMessage =
//                 driver.findElement(By.cssSelector(".error-message"));

//         Assert.assertTrue(
//                 errorMessage.isDisplayed(),
//                 "Error message was not displayed"
//         );
//     }

//     // 3. Valid email + wrong password
//     @Test
//     public void loginWithWrongPassword() {

//         driver.findElement(By.name("email"))
//                 .sendKeys("your-test-email");

//         driver.findElement(By.name("password"))
//                 .sendKeys("your-test-password");

//         driver.findElement(By.cssSelector("button[type='submit']"))
//                 .click();

//         WebElement errorMessage =
//                 driver.findElement(By.cssSelector(".error-message"));

//         Assert.assertTrue(
//                 errorMessage.isDisplayed(),
//                 "Error message was not displayed for wrong password"
//         );
//     }

//     // 4. Wrong email + valid password
//     @Test
//     public void loginWithWrongEmail() {

//         driver.findElement(By.name("email"))
//                 .sendKeys("your-test-email");

//         driver.findElement(By.name("password"))
//                 .sendKeys("your-test-password");

//         driver.findElement(By.cssSelector("button[type='submit']"))
//                 .click();

//         WebElement errorMessage =
//                 driver.findElement(By.cssSelector(".error-message"));

//         Assert.assertTrue(
//                 errorMessage.isDisplayed(),
//                 "Error message was not displayed for wrong email"
//         );
//     }

//     // 5. Empty email + password entered
//     @Test
//     public void loginWithoutEmail() {

//         driver.findElement(By.name("password"))
//                 .sendKeys("your-test-password");

//         driver.findElement(By.cssSelector("button[type='submit']"))
//                 .click();

//         WebElement errorMessage =
//                 driver.findElement(By.cssSelector(".error-message"));

//         Assert.assertTrue(
//                 errorMessage.isDisplayed(),
//                 "Error message was not displayed when email was empty"
//         );
//     }

//     // 6. Email entered + empty password
//     @Test
//     public void loginWithoutPassword() {

//         driver.findElement(By.name("email"))
//                 .sendKeys("your-test-email");

//         driver.findElement(By.cssSelector("button[type='submit']"))
//                 .click();

//         WebElement errorMessage =
//                 driver.findElement(By.cssSelector(".error-message"));

//         Assert.assertTrue(
//                 errorMessage.isDisplayed(),
//                 "Error message was not displayed when password was empty"
//         );
//     }

//     @AfterMethod
//     public void tearDown() {
//         driver.quit();
//     }
// }