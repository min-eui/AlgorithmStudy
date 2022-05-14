package baekjoon;

import java.util.Scanner;

public class B2753 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int leafYear = sc.nextInt();
		
		if(((leafYear % 4 == 0)&&(leafYear % 100 != 0))||(leafYear % 400 == 0)){
			System.out.println("1");
		}else if((leafYear % 4 == 0)||(leafYear % 400 != 0)){
			System.out.println("0");
		}

	}

}
