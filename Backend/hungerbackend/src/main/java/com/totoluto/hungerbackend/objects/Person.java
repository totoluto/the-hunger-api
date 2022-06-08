package com.totoluto.hungerbackend.objects;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Getter
@Setter
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;
    private String nationality;
    private String favoriteweapon;
    private Date birthdate;
    private float kd;
    private int sector;
}
