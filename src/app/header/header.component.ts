import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
  }

  paginaInicial(){
    this.router.navigate(['']);
  }

  paginaCarrinho(){
    this.router.navigate(['carrinho']);
  }

  paginaContato(){
    this.router.navigate(['contato']);
  }

}
