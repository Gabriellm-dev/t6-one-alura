package br.com.alura.screenmatch.modelos;

public class CalculadoraDeTempo {
    private int tempoTotal;

    public int getTempoTotal() {
        return tempoTotal;
    }

//    public void inclui(Movie m){
//        tempoTotal += m.getDurationInMinutes();
//    }
//
//    public void inclui(Serie s){
//        tempoTotal += s.getDurationInMinutes();
//    }

    public void inclui(Title title){
        this.tempoTotal += title.getDurationInMinutes();
    }
}
