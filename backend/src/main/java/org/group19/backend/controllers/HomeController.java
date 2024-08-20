package org.group19.backend.controllers;

import org.group19.backend.models.Home;
import org.group19.backend.services.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/homes")
public class HomeController {
    
    @Autowired
    private HomeService homeService;

    @GetMapping
    public List<Home> getAllHomes() {
        return homeService.getAllHomes();
    }

    @GetMapping("/{id}")
    public Home getHomeById(@PathVariable Long id) {
        return homeService.getHomeById(id);
    }

    @PostMapping
    public Home createHome(@RequestBody Home home) {
        return homeService.saveHome(home);
    }

    @DeleteMapping("/{id}")
    public void deleteHome(@PathVariable Long id) {
        homeService.deleteHome(id);
    }
}
