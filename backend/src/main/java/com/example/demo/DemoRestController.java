package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/demos")
public class DemoRestController {

    private final DemoService demoService;

    public DemoRestController(DemoService demoService) {
        this.demoService = demoService;
    }

    @GetMapping
    public List<Demo> getAll() {
        return demoService.findAll();
    }

    @PostMapping
    public void post(Demo demo) {
        demoService.save(demo);
    }
}
