package com.artifact.score.artifactscoreapi.dto;

public class CalculateResponse {
    private double score;
    
    public CalculateResponse(double score) {
        this.score = score;
    }

    public double getScore() { return score; }
}