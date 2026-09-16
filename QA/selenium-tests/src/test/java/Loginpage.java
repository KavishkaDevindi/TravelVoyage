// package tests;

// import org.openqa.selenium.By;
// import org.openqa.selenium.WebDriver;
// import org.openqa.selenium.chrome.ChromeDriver;
// import org.testng.Assert;
// import org.testng.annotations.AfterMethod;
// import org.testng.annotations.BeforeMethod;
// import org.testng.annotations.Test;
// import org.openqa.selenium.WebElement;

// public class Loginpage {

//     WebDriver driver;

//     @BeforeMethod
//     public void setUp() {
//         driver = new ChromeDriver();
//         driver.manage().window().maximize();
//         driver.get("http://localhost:5173/login");
//     }

//     @Test
//     public void loginWithValidCredentials() {

//         Assert.assertTrue(
//                 driver.getCurrentUrl().contains("/"),
//                 "User was not redirected after login"
//         );
//     }

//     @AfterMethod
//     public void tearDown() {
//         driver.quit();
//     }
// }