package com.example.backend.person;

import com.example.backend.person.Person;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PersonRestControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    public void getAll() {
        Person[] persons = testRestTemplate.getForObject("/api/v1/persons", Person[].class);

        Assert.assertEquals(0, persons.length);
    }

    @Test
    public void save() {
        Person person = new Person();
        person.setName("Hello");
        testRestTemplate.postForObject("/api/v1/demos", person, Person.class);
    }

}
