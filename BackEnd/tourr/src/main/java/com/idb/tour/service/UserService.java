package com.idb.tour.service;

import com.idb.tour.model.User;

import com.idb.tour.dto.Response;

public interface UserService extends BaseService<User, Long> {

    Response<String> login(User user);
}
