package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DemoService {

    private final DemoRepository demoRepository;

    public DemoService(DemoRepository demoRepository) {
        this.demoRepository = demoRepository;
    }

    public List<Demo> findAll() {
        return demoRepository.findAll();
    }

    public void save(Demo demo) {
        demoRepository.saveAndFlush(demo);
    }
}
