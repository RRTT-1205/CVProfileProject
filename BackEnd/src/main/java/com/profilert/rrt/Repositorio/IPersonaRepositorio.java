package com.profilert.rrt.Repositorio;

import com.profilert.rrt.Entidad.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepositorio extends JpaRepository<Persona, Long> {
    
    
}
