// package tests;

// import org.openqa.selenium.By;
// import org.openqa.selenium.WebDriver;
// import org.openqa.selenium.chrome.ChromeDriver;
// import org.testng.Assert;
// import org.testng.annotations.AfterMethod;
// import org.testng.annotations.BeforeMethod;
// import org.testng.annotations.Test;

// public class RegisterTest {

//     WebDriver driver;

//     @BeforeMethod
//     public void setUp() {
//         driver = new ChromeDriver();
//         driver.manage().window().maximize();
//         driver.get("http://localhost:5173/register");
//     }

    // @Test
    // public void registerWithValidData() {

    //     driver.findElement(By.name("name"))
    //             .sendKeys("your-test-fullname");

    //     driver.findElement(By.name("email"))
    //             .sendKeys("your-test-email");

    //     driver.findElement(By.name("password"))
    //             .sendKeys("your-test-password");

    //     driver.findElement(By.cssSelector("button[type='submit']"))
    //             .click();

    //     Assert.assertTrue(
    //             driver.getCurrentUrl().contains("/"),
    //             "Registration was not successful"
    //     );
    // }

    // @Test
    // public void registerWithEmptyFields() {

    //     driver.findElement(By.cssSelector("button[type='submit']"))
    //             .click();

    //     Assert.assertTrue(
    //             driver.getCurrentUrl().contains("/register"),
    //             "Registration was submitted with empty fields"
    //     );
    // }

    // @Test
    // public void registerWithWrongEmail() {

    //     driver.findElement(By.name("name"))
    //             .sendKeys("your-test-fullname");

    //     driver.findElement(By.name("email"))
    //             .sendKeys("your-test-email");

    //     driver.findElement(By.name("password"))
    //             .sendKeys("your-test-password");

    //     driver.findElement(By.cssSelector("button[type='submit']"))
    //             .click();

    //     Assert.assertTrue(
    //             driver.getPageSource().toLowerCase().contains("Please enter a valid email address"),
    //             "Email validation message was not displayed"
    //     );
    // }

    // @Test
    // public void registerWithWrongPassword() {

    //     driver.findElement(By.name("name"))
    //             .sendKeys("your-test-fullname");

    //     driver.findElement(By.name("email"))
    //             .sendKeys("your-test-email");

    //     driver.findElement(By.name("password"))
    //             .sendKeys("your-test-password");

    //     driver.findElement(By.cssSelector("button[type='submit']"))
    //             .click();

    //     Assert.assertTrue(
    //             driver.getPageSource().toLowerCase().contains("password"),
    //             "Password validation message was not displayed"
    //     );
    // }

//     @Test
//     public void registerWithoutFullName() {

//         driver.findElement(By.name("email"))
//                 .sendKeys("your-test-email");

//         driver.findElement(By.name("password"))
//                 .sendKeys("your-test-password");

//         driver.findElement(By.cssSelector("button[type='submit']"))
//                 .click();

//         System.out.println("Current URL: " + driver.getCurrentUrl()); 
//         System.out.println("Page source contains name: " + driver.getPageSource().toLowerCase().contains("name")); 

//         System.out.println("Page source contains full name required: " + driver.getPageSource().toLowerCase().contains("full name is required")); 
//         Assert.fail("DEBUG TEST");
//     }

//     @AfterMethod
//     public void tearDown() {
//         driver.quit();
//     }
// }

