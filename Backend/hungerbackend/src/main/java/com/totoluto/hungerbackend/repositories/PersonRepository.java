package com.totoluto.hungerbackend.repositories;

import com.totoluto.hungerbackend.objects.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;

@Repository
public interface PersonRepository extends CrudRepository<Person, Integer> {
    @Query("update Person p set p.name = :name, p.nationality = :nationality, p.favoriteweapon = :favoriteweapon, p.birthdate = :birthdate, p.kd = :kd, p.sector = :sector, p.alive = :alive WHERE p.id = :personId")
    void updatePerson(@Param("personId") int id, @Param("name") String name, @Param("nationality") String nationality, @Param("favoriteweapon") String favoriteweapon, @Param("birthdate") Date birthdate, @Param("kd") float kd, @Param("sector") int sector, @Param("alive") boolean alive);
}
