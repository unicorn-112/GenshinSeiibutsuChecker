package com.artifact.score.artifactscoreapi.dto;

public class CalculateResponse {
    private double score;
    private String rank;

    public CalculateResponse(double score, String rank) {
        this.score = score;
        this.rank = rank;
    }

    public double getScore() { return score; }
    public String getRank() { return rank; }
}