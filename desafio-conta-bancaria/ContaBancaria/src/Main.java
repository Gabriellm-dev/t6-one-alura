import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        String name, tipoConta;
        double saldo;
        int opc = 0;

        //inicializar dados dos clientes
        System.out.print("Digite seu nome completo: ");
        name = sc.next();
        System.out.print("Digite o tipo da conta: ");
        tipoConta = sc.next();
        System.out.print("Digite o saldo atual: ");
        saldo = sc.nextDouble();

        System.out.println("************************");
        System.out.println("Nome do cliente: " + name);
        System.out.println("Tipo conta: " + tipoConta);
        System.out.println("Saldo Atual: " + saldo);
        System.out.println("************************");

        //menu de opções
        String menu = """
                ** Digite sua opção **
                1 - Consultar saldo.
                2 - Transferir valor.
                3 - Receber valor.
                4 - Sair.
                """;
        while (opc != 4){
            System.out.println(menu);
            opc = sc.nextInt();

            if (opc == 1 ){
                System.out.println("Saldo atual: " + saldo);
            }
        }

        //visualização do saldo
        //envia valor
        // recebe valor

        sc.close();
    }

}
