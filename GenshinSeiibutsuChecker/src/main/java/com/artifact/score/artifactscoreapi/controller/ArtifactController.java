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
     long baseStat = Math.round(request.getBaseStat() * 10);
     long criRate = Math.round(request.getCriRate() * 10);
     long criDmg = Math.round(request.getCriDmg() * 10);

     long score10 = baseStat + (criRate * 2) + criDmg;

     double roundedScore = score10 / 10.0;

     return new CalculateResponse(roundedScore);
    }
}