package com.example.backend.startup;

import com.example.backend.person.Person;
import com.example.backend.person.PersonRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class PersonPopulator implements CommandLineRunner {

    private final PersonRepository personRepository;

    public PersonPopulator(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Person p1 = new Person();
        p1.setName("Peter Müller");
        personRepository.saveAndFlush(p1);

        Person p2 = new Person();
        p2.setName("Erika Hess");
        personRepository.saveAndFlush(p2);
    }
}
