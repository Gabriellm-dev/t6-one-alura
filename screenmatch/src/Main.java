import br.com.alura.screenmatch.modelos.CalculadoraDeTempo;
import br.com.alura.screenmatch.modelos.Movie;
import br.com.alura.screenmatch.modelos.Serie;

public class Main {
    public static void main(String[] args) {
        Movie movie = new Movie();

        movie.setName("O poderoso chefão");
        movie.setPublicationYear(1970);
        movie.setDurationInMinutes(180);

        movie.displaysTechnicalSheet();
        movie.rate(8);
        movie.rate(5);
        movie.rate(10);

        System.out.println("Total de avaliações: " + movie.getTotalReviews());
        System.out.println(movie.takeMedia());


        Serie lost = new Serie();
        lost.setName("Lost");
        lost.setPublicationYear(2000);
        lost.displaysTechnicalSheet();
        lost.setTemporadas(10);
        lost.setEpisodiosPorTemporada(10);
        lost.setMinutosPorEpisodio(50);
        System.out.println("Duração para maratonar lost: " + lost.getDurationInMinutes());

        CalculadoraDeTempo calculadoraDeTempo = new CalculadoraDeTempo();

        calculadoraDeTempo.inclui(movie);
        System.out.println(calculadoraDeTempo.getTempoTotal());

    }
}
