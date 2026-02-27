# 🖌️ Tapir Pinturas — Landing Page

Site institucional e de captação de clientes para **Tapir de Souza**, pintor profissional com mais de 30 anos de experiência em Porto Alegre e Grande Porto Alegre.

---

## 📋 Sobre o Projeto

Landing page moderna, responsiva e otimizada para SEO, desenvolvida para apresentar os serviços de pintura profissional e converter visitantes em clientes via WhatsApp.

## 🚀 Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura da página |
| [Tailwind CSS](https://tailwindcss.com/) (CDN) | Estilização utilitária |
| CSS customizado (`styles.css`) | Animações e estilos globais |
| Google Fonts (Inter + Oswald) | Tipografia |
| Material Icons Outlined | Ícones de interface |
| Font Awesome 6 | Ícone WhatsApp |
| JSON-LD (Schema.org) | Dados estruturados para SEO local |

## 📁 Estrutura de Arquivos

```
tapir/
├── index.html          # Página principal
├── styles.css          # Estilos customizados e animações
├── tailwind.config.js  # Configuração do tema Tailwind (cores, fontes, animações)
├── sitemap.xml         # Sitemap para indexação nos buscadores
├── robots.txt          # Diretivas para crawlers
└── imgs/               # Imagens do projeto
    ├── tapir_retrato.png       # Foto principal (Hero)
    ├── massa_corrida.png       # Seção Diferencial
    ├── dois_pintores.png       # Seção Diferencial
    ├── servico_concluido.png   # Seção Contato
    ├── profile-small.jpeg      # Avatar da citação
    └── ...                     # Demais imagens
```

## 🗂️ Seções da Página

1. **Navegação** — Menu fixo com links âncora e botão de orçamento via WhatsApp. Menu responsivo para mobile.
2. **Hero** — Chamada principal com foto do profissional, CTA de orçamento e badge flutuante de qualidade.
3. **Sobre / Stats** — Destaques numéricos: ano de início, anos de experiência e compromisso com o cliente.
4. **Diferencial** — Grid de imagens ao lado de lista de diferenciais técnicos do serviço.
5. **Serviços** — Cards dos serviços oferecidos:
   - Pintura Residencial
   - Massa Corrida Lisa
   - Epóxi e Esmalte Sintético
   - Reparos e Manutenção
   - Consultoria de Cores
6. **Citação** — Frase de impacto do profissional com foto.
7. **Contato** — Informações de contato e botão direto para o WhatsApp.
8. **Rodapé** — Logo e créditos.

## 🎨 Design System

Configurado em `tailwind.config.js`:

| Token | Valor | Uso |
|---|---|---|
| `primary` | `#f97316` (laranja) | Cor de destaque/CTA |
| `primary-dark` | `#c2410c` | Hover dos botões |
| `background-light` | `#f8fafc` | Fundo claro |
| `background-dark` | `#0f172a` | Fundo escuro |
| Fonte principal | Inter | Corpo de texto |
| Fonte display | Oswald | Títulos e cabeçalhos |

O site suporta **modo escuro** (`dark:`), alternado via classe no elemento raiz.

## ✨ Funcionalidades

- ✅ Layout 100% responsivo (mobile-first)
- ✅ Modo escuro / claro
- ✅ Animações de scroll reveal
- ✅ Animação de flutuação suave (Hero e badge)
- ✅ Menu mobile com fechamento ao clicar fora
- ✅ SEO completo: meta tags, Open Graph, Twitter Card, JSON-LD LocalBusiness, Sitemap e Robots.txt

## 📈 SEO Local

O projeto inclui dados estruturados **Schema.org LocalBusiness** com:
- Nome, telefone, área de atuação (Porto Alegre e Grande Porto Alegre)
- Catálogo de serviços oferecidos
- Coordenadas geográficas
- Link canonico e meta tags regionais

## 🔧 Como Executar Localmente

Por ser um projeto estático (sem build step), basta abrir o arquivo no navegador:

```bash
# Opção 1: abrir diretamente
open index.html

# Opção 2: servidor local com Python
python3 -m http.server 3000
# Acesse: http://localhost:3000

# Opção 3: extensão Live Server (VS Code)
# Clique com o botão direito em index.html > "Open with Live Server"
```

## 📞 Contato do Cliente

**Tapir de Souza**
- WhatsApp: [(51) 99886-4100](https://wa.me/5551998864100)
- Área de atuação: Porto Alegre e Região Metropolitana — RS
