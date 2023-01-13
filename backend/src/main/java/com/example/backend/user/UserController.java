package com.example.backend.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/users")
public class UserController {

    @GetMapping("{username}")
    public ResponseEntity<User> get(@PathVariable String username) {
        if (username.equals("user")) {
            return ResponseEntity.ok(new User("Peter Muster"));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
