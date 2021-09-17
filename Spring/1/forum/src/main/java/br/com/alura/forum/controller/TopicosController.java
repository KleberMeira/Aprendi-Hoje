package br.com.alura.forum.controller;

import java.net.URI;
import java.util.Arrays;
import java.util.List;

import br.com.alura.forum.controller.form.TopicoForm;
import br.com.alura.forum.repository.CursoRepository;
import br.com.alura.forum.repository.TopicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.alura.forum.controller.dto.TopicoDto;
import br.com.alura.forum.modelo.Curso;
import br.com.alura.forum.modelo.Topico;

import javax.validation.Valid;

@RestController
@RequestMapping("/topicos")
public class TopicosController {

	@Autowired
	private TopicoRepository topicoRepository;

	@Autowired
	private CursoRepository cursoRepository;

	@GetMapping
	public List<TopicoDto> lista(String nomeCurso) {
		if(nomeCurso == null){
			List<Topico> topicos = topicoRepository.findAll();
			return TopicoDto.converter(topicos);
		}else {
			List<Topico> topicos = topicoRepository.findByCurso_Nome(nomeCurso);
			return TopicoDto.converter(topicos);
		}
	}

	@PostMapping
	public void cadastrar(@RequestBody TopicoForm form){
	    Topico topico =	form.converter(cursoRepository);
		topicoRepository.save(topico);
	}


	@GetMapping("/{id}")
	public TopicoDto detalhar( @PathVariable("id") Long id){
		Topico topico = topicoRepository.getOne(id);
		return new TopicoDto(topico);
	}




}
