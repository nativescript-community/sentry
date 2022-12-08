package com.nativescript.sentry;

public class ClassExample {
    public static String helloWorld(String message) throws CustomException {
        throw new CustomException(message);
        // return "helloWorld";
    }
}