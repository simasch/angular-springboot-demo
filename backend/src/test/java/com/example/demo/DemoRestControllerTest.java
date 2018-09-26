package com.example.demo;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class DemoRestControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void getAll() {
        Demo[] demos = testRestTemplate.getForObject("/api/v1/demos", Demo[].class);

        Assert.assertEquals(0, demos.length);
    }

    @Test
    public void save() {
        Demo demo = new Demo();
        demo.setName("Hello");
        testRestTemplate.postForObject("/api/v1/demos", demo, Demo.class);
    }

}
