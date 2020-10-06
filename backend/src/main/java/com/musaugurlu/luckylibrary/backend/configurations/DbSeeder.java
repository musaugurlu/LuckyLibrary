/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/3/20, 1:55 PM
 */

package com.musaugurlu.luckylibrary.backend.configurations;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.musaugurlu.luckylibrary.backend.models.*;
import com.musaugurlu.luckylibrary.backend.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.*;

@Component
public class DbSeeder implements CommandLineRunner {

    @Autowired
    BookService bookService;

    @Autowired
    CategoryService categoryService;

    @Autowired
    BranchService branchService;

    @Autowired
    RoleService roleService;

    @Autowired
    PatronService patronService;

    @Override
    public void run(String... args) throws Exception {
        seedBranches();
        seedCategories();
        seedBooks();
        seedRoles();
        seedPatrons();
    }

    private void seedBranches() {
        List<Branch> branches = branchService.findAll();
        if(branches.isEmpty()) {
            Branch mainBranch = new Branch();
            mainBranch.setAddress("303 N Laura St, Jacksonville, FL 32202");
            mainBranch.setName("Main Library");
            mainBranch.setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque massa nunc, malesuada ac venenatis ac, placerat eget urna. Maecenas efficitur ultrices eros, a elementum nunc varius eu. Fusce ullamcorper ante consectetur tortor lacinia, vitae pretium purus rhoncus. Integer tristique aliquet fermentum. Maecenas vel sollicitudin turpis, sed efficitur metus. Praesent auctor lorem a congue iaculis. Nunc vulputate, lacus ut gravida dapibus, elit magna tempor risus, in ultrices enim nulla in nisl. Integer velit eros, efficitur eget massa sed, posuere vehicula dolor. Sed tempor, purus quis varius sagittis, ex mauris interdum tellus, ac rutrum augue sem vel sem. Maecenas vitae orci lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque imperdiet malesuada fringilla. Nam dapibus rhoncus leo, eu malesuada magna.");
            mainBranch.setImgUrl("https://upload.wikimedia.org/wikipedia/commons/9/9a/Jacksonville_Public_%28Main%29_Library.jpg");
            mainBranch.setPhone("904-123-4567");

            branchService.save(mainBranch);
        }
    }

    private void seedCategories() {
        HashMap<String, String> cats = new HashMap<>();
        cats.put("Sci-Fi", "cat-1.png");
        cats.put("Fiction", "cat-2.png");
        cats.put("Non-Fiction", "cat-3.png");
        cats.put("Comic", "cat-4.png");
        cats.put("History", "cat-5.png");
        cats.put("Science", "cat-1.png");
        cats.put("Animation", "cat-2.png");
        cats.put("Technology", "cat-3.png");
        cats.put("Novel", "cat-4.png");
        cats.put("Language", "cat-5.png");

        List<Category> categories = categoryService.findAll();
        if (categories.isEmpty()) {
            for(String cat: cats.keySet()) {
                categoryService.save(new Category(cat, cats.get(cat)));
            }
        }
    }

    private void seedBooks() {
        Optional<Book> b = bookService.findFirstBy();
        if (b.isEmpty()) {
            ObjectMapper dbdata = new ObjectMapper();
            TypeReference<List<Book>> typeReference = new TypeReference<List<Book>>(){};
            InputStream inputStream = TypeReference.class.getResourceAsStream("/db.json");
            List<Category> categories = categoryService.findAll();
            Optional<Branch> branch = branchService.findFirstBy();
            int categoryBound = categories.size() < 10 ? categories.size() : 10;
            try {
                List<Book> books = dbdata.readValue(inputStream,typeReference);
                for (Book book: books) {
                    int catNo = (new Random()).nextInt(categoryBound);
                    int view = (new Random()).nextInt(300);
                    book.setCategory(categories.get(catNo));
                    book.setView(view);
                    if(branch.isPresent()) {
                        book.setBranch(branch.get());
                    }
                    bookService.save(book);
                }
            } catch (IOException e){
                System.out.println("Unable to save users: " + e.getMessage());
            }
        }
    }

    private void seedRoles() {
        Optional<Role> role = roleService.findFirstBy();
        if(role.isEmpty()) {
            roleService.save(new Role(EnumRole.ROLE_ADMIN));
            roleService.save(new Role(EnumRole.ROLE_USER));
        }
    }

    private void seedPatrons() {
        List<Role> roles = roleService.findAll();
        Optional<Patron> patron = patronService.findFirstBy();
        if(patron.isEmpty()) {
            Calendar cal = Calendar.getInstance();
            cal.set(2000, 0, 1);
            
            Patron nPatron = new Patron();
            nPatron.setFirstName("Musa");
            nPatron.setLastName("Ugurlu");
            nPatron.setRoles(roles);
            nPatron.setDateOfBirth(cal.getTime());
            nPatron.setEmail("mu@sa.com");
            nPatron.setPassword(BCrypt.hashpw("Test1234", BCrypt.gensalt()));
            patronService.save(nPatron);
        }
    }
}