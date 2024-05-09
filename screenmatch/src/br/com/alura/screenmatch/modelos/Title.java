package br.com.alura.screenmatch.modelos;

public class Title {

    private String name;
    private int publicationYear;
    private boolean includedInThePlan;
    private double sumOfRating;
    private int totalReviews;
    private int durationInMinutes;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPublicationYear() {
        return publicationYear;
    }

    public void setPublicationYear(int publicationYear) {
        this.publicationYear = publicationYear;
    }

    public boolean isIncludedInThePlan() {
        return includedInThePlan;
    }

    public void setIncludedInThePlan(boolean includedInThePlan) {
        this.includedInThePlan = includedInThePlan;
    }

    public double getSumOfRating() {
        return sumOfRating;
    }

    public void setSumOfRating(double sumOfRating) {
        this.sumOfRating = sumOfRating;
    }

    public void setTotalReviews(int totalReviews) {
        this.totalReviews = totalReviews;
    }

    public int getDurationInMinutes() {
        return durationInMinutes;
    }

    public void setDurationInMinutes(int durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
    }

    public int getTotalReviews(){
        return totalReviews;
    }

    public void displaysTechnicalSheet(){
        System.out.println("Nome do filme: " + name);
        System.out.println("Ano de lançamento: " + publicationYear);
        System.out.println("Duração em minutos: "+ durationInMinutes);
        System.out.println("Incluído no plano: " + includedInThePlan);
    }

    public void rate(double grade){
        sumOfRating += grade;
        totalReviews ++;
    }

    public double takeMedia(){
        return sumOfRating / totalReviews;
    }
}
