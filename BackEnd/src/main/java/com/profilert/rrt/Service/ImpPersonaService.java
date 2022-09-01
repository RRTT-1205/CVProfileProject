package com.profilert.rrt.Service;

import com.profilert.rrt.Entidad.Persona;
import com.profilert.rrt.Interface.IPersonaService;
import com.profilert.rrt.Repositorio.IPersonaRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService {
    @Autowired IPersonaRepositorio ipersonarepositorio;

    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = ipersonarepositorio.findAll();
        return persona; 
    }

    @Override
    public void savePersona(Persona persona) {
        ipersonarepositorio.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        ipersonarepositorio.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = ipersonarepositorio.findById(id).orElse(null);
        return persona;
    }

    
        
}
