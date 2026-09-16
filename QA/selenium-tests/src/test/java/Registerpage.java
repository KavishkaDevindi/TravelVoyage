// package tests;

// import org.openqa.selenium.By;
// import org.openqa.selenium.WebDriver;
// import org.openqa.selenium.chrome.ChromeDriver;
// import org.testng.Assert;
// import org.testng.annotations.AfterMethod;
// import org.testng.annotations.BeforeMethod;
// import org.testng.annotations.Test;

// public class Registerpage {

//     WebDriver driver;

//     @BeforeMethod
//     public void setUp() {
//         driver = new ChromeDriver();
//         driver.manage().window().maximize();
//         driver.get("http://localhost:5173/register");
//     }

//     @Test
//     public void verifyRegisterPage() {

//         Assert.assertTrue(
//                 driver.getCurrentUrl().contains("/register"),
//                 "Register page was not opened"
//         );
//     }

//     @AfterMethod
//     public void tearDown() {
//         driver.quit();
//     }
// }

