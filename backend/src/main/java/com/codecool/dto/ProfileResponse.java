package com.codecool.dto;

import java.sql.Timestamp;

public record ProfileResponse(
   Timestamp registrationDate,
   String username,
   String email
) {}
