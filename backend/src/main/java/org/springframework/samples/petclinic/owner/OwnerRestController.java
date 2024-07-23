package org.springframework.samples.petclinic.owner;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/rest")
public class OwnerRestController {

	private final OwnerRepository owners;

	public OwnerRestController(OwnerRepository clinicService) {
		this.owners = clinicService;
	}

	@GetMapping("/owners")
	private List<Owner> findListForOwnersLastName(String lastName) {
		return lastName != null ? owners.findByLastName(lastName) : owners.findAll();
	}

	@PostMapping("/owners/new")
	public void processCreationForm(@Valid Owner owner) {
		this.owners.save(owner);
	}

}
