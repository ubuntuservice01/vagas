import React from 'react';
import {createRoot} from 'react-dom/client';
import logo from './assets/logo-twende.png';
import './style.css';
const role=document.body.dataset.role || 'home';
const apps=[{id:'passenger',name:'Passageiro',title:'Para onde vamos?',description:'A tua próxima viagem começa aqui.'},{id:'driver',name:'Motorista',title:'Conduz com a TWENDE',description:'A tua próxima oportunidade começa aqui.'},{id:'admin',name:'Administração',title:'Centro de operações',description:'Gestão da plataforma TWENDE.'}];
const app=apps.find(a=>a.id===role);
function App(){return <main className={role}><header><img src={logo} alt="TWENDE — Vamos juntos."/><span>{app?.name || 'Moçambique'}</span></header><section><small>TWENDE • FASE 1</small><h1>{app?.title || 'Vamos juntos.'}</h1><p>{app?.description || 'Escolhe a interface que pretendes explorar.'}</p>{app?<><article><h2>Em desenvolvimento</h2><p>As funcionalidades operacionais e a autenticação serão disponibilizadas nas próximas fases.</p></article><a href="../../">Voltar à pré-visualização</a></>:<nav>{apps.map(a=><a key={a.id} href={'./apps/'+a.id+'/'}>{a.name} <span>→</span></a>)}</nav>}</section><footer>TWENDE · Moçambique</footer></main>}
createRoot(document.getElementById('root')!).render(<App/>);
