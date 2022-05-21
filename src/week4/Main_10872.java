package week4;

import java.util.Scanner;

public class Main_10872 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		int a = 0;
		int b = 1;
		a = scanner.nextInt();
		
		//a의 팩토리얼 
		for (int i = 1; i <= a; i++) {
			 
			b = b*i;
			if(i==a) {
				break;
			}
		
		}
		
		System.out.println(b);
		
	}

}
