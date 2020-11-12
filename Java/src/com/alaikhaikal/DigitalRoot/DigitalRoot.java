package com.alaikhaikal.DigitalRoot;

public class DigitalRoot {
    public static void main(String[] args) {
        System.out.println(digital_root(942));
    }

    public static int digital_root(int n) {
        int result = 0;

        String number = Integer.toString(n);

        // save each number to char array
        char[] separateNumber = new char[number.length()];

        for (int i = 0; i < number.length(); i++) {
            separateNumber[i] = number.charAt(i);
        }

        for (char i : separateNumber) {
            result += Character.getNumericValue(i);
        }

        if (result > 9) {
            return digital_root(result);
        }

        return result;
    }
}
