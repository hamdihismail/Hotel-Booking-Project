package src.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import src.models.Home;
import src.services.HomeService;

import java.util.List;

@RestController
@RequestMapping("/homes")
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
