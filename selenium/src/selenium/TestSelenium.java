package selenium;

import java.util.Iterator;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;
public class TestSelenium {
	//cambiar el jre a jdk en properties de la libreria jre
    WebDriver driver;
    @BeforeClass
    void setUpClass() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Claudia.Badila\\Downloads\\chromedriver_win32\\chromedriver.exe");
    }
    @AfterClass
    void cleanUpClass() {
        System.clearProperty("webdriver.chrome.driver");
    }
    @BeforeMethod
    void setUpMethod() {
        driver = new ChromeDriver();
        driver.get("http://localhost:3000/");
      // WebElement cookies = driver.findElement(By.id("L2AGLb"));
       // cookies.click();
    }
    @AfterMethod
    void cleanUp() {
        driver.quit();
    }
//    @Test(dataProvider="calcData", dataProviderClass = TestData.class)
//    void calcTest(String input, String expectedResult) {
//        WebElement element = driver.findElement(By.name("q"));
//        element.sendKeys(input);
//        element.submit();
//        WebElement result = driver.findElement(By.id("cwos"));
//        Assert.assertEquals(expectedResult, result.getText());
//    }
    @Test
    void TestApp() {
    	List<WebElement> elements =  driver.findElements(By.tagName("input"));
    	for (WebElement element : elements) {
    		element.sendKeys("dfhgjsf");
		}
    	WebElement element = driver.findElement(By.name("puton"));
    	element.click();
    	
    	String result= driver.getCurrentUrl();
    	 Assert.assertEquals("http://localhost:3000/Login", result);
    }
}