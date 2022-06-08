package com.totoluto.hungerbackend.controllers;

import com.totoluto.hungerbackend.objects.Person;
import com.totoluto.hungerbackend.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin("http://localhost:3000")
public class RestController {

    @Autowired
    private PersonRepository personRepository;

    @GetMapping("/persons")
    public List<Person> getPersons() {
        return (List<Person>) personRepository.findAll();
    }

    @GetMapping("/persons/{id}")
    public Optional<Person> getPerson(@PathVariable int id){
        return personRepository.findById(id);
    }

    @PostMapping("/persons")
    public Person addPerson(@RequestBody Person person){
        List<Person> persons;
        persons = StreamSupport.stream(personRepository
                        .findAll()
                        .spliterator(), false)
                .collect(Collectors.toList());
        person.setId(persons.stream()
                .max((t1, t2) -> Integer.compare(t1.getId(), t2.getId()))
                .get()
                .getId()+1);
        personRepository.save(person);
        return person;
    }

    @DeleteMapping("/persons/{id}")
    public void deletePerson(@PathVariable int id){
        personRepository.deleteById(id);
    }

    @DeleteMapping("/persons")
    public void deletePersons(){
        personRepository.deleteAll();
    }

    @PutMapping("/persons/{id}")
    public void updatePerson(@PathVariable int id, @RequestBody Person change){
        personRepository.updatePerson(id, change.getName(), change.getNationality(), change.getFavoriteweapon(), change.getBirthdate(), change.getKd(), change.getSector());
    }
}
