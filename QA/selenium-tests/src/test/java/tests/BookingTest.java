// package tests;

// import org.openqa.selenium.By;
// import org.openqa.selenium.WebDriver;
// import org.openqa.selenium.chrome.ChromeDriver;
// import org.testng.Assert;
// import org.testng.annotations.AfterMethod;
// import org.testng.annotations.BeforeMethod;
// import org.testng.annotations.Test;

// public class BookingTest {

// WebDriver driver;

// @BeforeMethod
// public void setUp() {
//     driver = new ChromeDriver();
//     driver.manage().window().maximize();
//     driver.get("http://localhost:5173/bookings");
// }

// Test Case 1: Create booking with valid data
// @Test
// public void createBooking() {

//     driver.findElement(By.name("fullname"))
//             .sendKeys("your-test-name");

//     driver.findElement(By.name("email"))
//             .sendKeys("your-test-email");

//     driver.findElement(By.name("phonenumber"))
//             .sendKeys("your-test-phonenumber");

//     driver.findElement(By.name("destination"))
//             .sendKeys("your-test-destination");

//     driver.findElement(By.id("date"))
//             .sendKeys("your-test-date");

//     driver.findElement(By.id("guests"))
//             .sendKeys("your-test-guests");

//     driver.findElement(By.name("payment method"))
//             .sendKeys("your-test-paymentmethod");

//     driver.findElement(By.cssSelector("button[type='submit']"))
//             .click();

//     // Booking page should still be open after successful submission
//     Assert.assertTrue(
//             driver.getCurrentUrl().contains("/bookings"),
//             "Booking was not created successfully"
//     );
// }

// Test Case 2: Try to create booking with empty fields
// @Test
// public void createBookingWithEmptyFields() {

//     // Leave all fields empty
//     driver.findElement(By.cssSelector("button[type='submit']"))
//             .click();

//     // Check that the form does not leave the booking page
//     Assert.assertTrue(
//             driver.getCurrentUrl().contains("/bookings"),
//             "Empty booking was submitted"
//     );

//     // Check that required fields are still empty
//     String fullName = driver.findElement(By.name("full-name"))
//             .getAttribute("value");

//     String email = driver.findElement(By.name("email"))
//             .getAttribute("value");

//     Assert.assertTrue(
//             fullName.isEmpty(),
//             "Full Name field should be empty"
//     );

//     Assert.assertTrue(
//             email.isEmpty(),
//             "Email field should be empty"
//     );
// }

// @AfterMethod
// public void tearDown() {
//     driver.quit();
// }

// }
