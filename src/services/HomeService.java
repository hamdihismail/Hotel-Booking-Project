package src.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import src.Repository.HomeRepository;
import src.models.Home;

import java.util.List;

@Service
public class HomeService {
    
    @Autowired
    private HomeRepository homeRepository;

    public List<Home> getAllHomes() {
        return homeRepository.findAll();
    }

    public Home getHomeById(Long id) {
        return homeRepository.findById(id).orElse(null);
    }

    public Home saveHome(Home home) {
        return homeRepository.save(home);
    }

    public void deleteHome(Long id) {
        homeRepository.deleteById(id);
    }
}
