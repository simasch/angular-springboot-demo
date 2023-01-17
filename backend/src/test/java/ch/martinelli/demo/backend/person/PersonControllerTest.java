package ch.martinelli.demo.backend.person;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PersonControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Test
    void findAll() {
        HttpHeaders headers = createAuthorizationHeader();

        ResponseEntity<Person[]> response = testRestTemplate.exchange("/api/persons",
                HttpMethod.GET,
                new HttpEntity<>(null, headers),
                Person[].class);

        assertThat(response.getBody()).hasSize(2);
    }

    @Test
    @Transactional
    void save() {
        HttpHeaders headers = createAuthorizationHeader();

        Person person = new Person();
        person.setName("Test");

        ResponseEntity<Void> response = testRestTemplate.exchange("/api/persons",
                HttpMethod.POST,
                new HttpEntity<>(person, headers),
                Void.class);

        assertThat(response.getStatusCode().is2xxSuccessful()).isTrue();
    }

    private HttpHeaders createAuthorizationHeader() {
        String token = testRestTemplate.withBasicAuth("user", "pass").postForObject("/api/auth", null, String.class);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + token);
        return headers;
    }
}
