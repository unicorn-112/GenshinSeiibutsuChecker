package com.artifact.score.artifactscoreapi.controller;

import com.artifact.score.artifactscoreapi.dto.CalculateRequest;
import com.artifact.score.artifactscoreapi.dto.CalculateResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/artifact")
@CrossOrigin(origins = "*")
public class ArtifactController {

    @PostMapping("/calculate")
    public CalculateResponse calculate(@Valid @RequestBody CalculateRequest request) {
        // 計算ロジック
        double score = request.getBaseStat() + (request.getCriRate() * 2) + request.getCriDmg();
        String rank = (score > 30) ? "S" : "A";

        return new CalculateResponse(score, rank);
    }
}