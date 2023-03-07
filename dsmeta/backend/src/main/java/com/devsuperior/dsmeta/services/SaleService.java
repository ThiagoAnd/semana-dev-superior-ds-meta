package com.devsuperior.dsmeta.services;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {
        //Só acrescentando esse Pageable ele volta de uma forma diferente a lista, LIST quase igual PAGE mas essa tem paginação

        LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

        LocalDate min = minDate.equalsIgnoreCase("") ? today.minusDays(365) : LocalDate.parse(minDate);
        LocalDate max = maxDate.equalsIgnoreCase("") ? today : LocalDate.parse(maxDate);
        return repository.findSales(min, max, pageable);
    }
}
