package com.artifact.score.artifactscoreapi.dto;

import jakarta.validation.constraints.Min;

public class CalculateRequest {
    @Min(0)
    private double baseStat;
    @Min(0)
    private double criRate;
    @Min(0)
    private double criDmg;

    public double getBaseStat() { return baseStat; }
    public void setBaseStat(double baseStat) { this.baseStat = baseStat; }
    public double getCriRate() { return criRate; }
    public void setCriRate(double criRate) { this.criRate = criRate; }
    public double getCriDmg() { return criDmg; }
    public void setCriDmg(double criDmg) { this.criDmg = criDmg; }
}