package com.helloworldbankuser.helloworldbankuser.repo;

import com.helloworldbankuser.helloworldbankuser.model.User;
import net.bytebuddy.utility.dispatcher.JavaDispatcher;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

class RepoImplTest {

    RepoImpl repo;
    ArrayList usersList1 = new ArrayList<User>();
    ArrayList usersList2 = new ArrayList<User>();
    ArrayList usersList3 = new ArrayList<User>();


    User user1= new User("timooo","timo","soyTimo","1234","timo@timo.ro");
    User user2= new User("linaaa","lina","soyLina","5678","lina@lina.gr");
    User user3= new User("pedroo","pedro","soyPedro","9012","pedro@pedro.es");

    @BeforeEach
    void initForTest()
    {
        this.repo = new RepoImpl();
        usersList2.add(user1);
        usersList3.add(user1);
        usersList3.add(user2);
        usersList3.add(user3);
        System.out.println("Starting the tests....");
    }

    @Test
    void getAllUsers_Empty_Test() {
        Assert.assertEquals(repo.getAllUsers(), usersList1);
    }
    @Test
    void getAllUsers_One_Test() {
        repo.saveUser(user1);
        Assert.assertEquals(repo.getAllUsers(), usersList2);
    }
    @Test
    void getAllUsers_Multiple_Test() {
        repo.saveUser(user1);
        repo.saveUser(user2);
        repo.saveUser(user3);

        Assert.assertEquals(repo.getAllUsers(), usersList3);
    }

    @Test
    void saveUser_WhenGood_Test() {
        repo.saveUser(user1);

        Assert.assertNotNull(repo.getAllUsers());
    }

    @Test
    void saveUser_WhenNull_Test() {
        Assert.assertNull(repo.saveUser(null));
    }

    @DisplayName("FindById good")
    @Test
    void findById_WhenGood_Test() {
        repo.saveUser(user1);
        User found = repo.findById("timooo");

        Assert.assertEquals(found, user1);
    }

    @Test
    void findById_WhenNotId_Test() {
        User found = repo.findById("timooo");

        Assert.assertNull(found);
    }

    @Test
    void findById_WhenNull_Test() {
        User found = repo.findById(null);

        Assert.assertNull(found);
    }
}