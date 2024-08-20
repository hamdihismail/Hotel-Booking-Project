package org.group19.backend.services;

import org.group19.backend.models.Home;
import org.group19.backend.repository.HomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



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
