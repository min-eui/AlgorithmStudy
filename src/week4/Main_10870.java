package week4;

import java.util.Scanner;

public class Main_10870 {
	
	public static void main(String[] args) {
	
		Scanner scanner = new Scanner(System.in);
		
		int a = scanner.nextInt();
		
		System.out.println(add(a));
		
	}

	private static int add(int a) {
		
		if(a==0){
			return 0;
		}
		if(a==1) {
			return 1;
		}
		else {
			return add(a-2)+add(a-1);
				
		}
		
	}
	
}
