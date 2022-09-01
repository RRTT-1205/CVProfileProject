package com.profilert.rrt.Interface;

import com.profilert.rrt.Entidad.Persona;
import java.util.List;

public interface IPersonaService {

    //Traer Lista de Personas(Desde Persona)
    public List<Persona> getPersona();

    //Guardar Persona
    public void savePersona(Persona persona);

    //Eliminar
    public void deletePersona(Long id);

    //Buscar
    public Persona findPersona(Long id);

}
