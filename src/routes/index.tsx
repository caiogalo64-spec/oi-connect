import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const recursos = [
  { icon: "🧠", title: "Criação de loja com IA", desc: "Gera a estrutura completa da loja a partir de uma conversa, com páginas, menus e fluxo de compra prontos." },
  { icon: "✍️", title: "Copy persuasiva automática", desc: "Títulos, descrições de produto, banners e textos de checkout escritos com foco em conversão e no tom da sua marca." },
  { icon: "📦", title: "Catálogo inteligente", desc: "Importe planilhas ou fotos. A IA organiza, sugere categorias, preços e descrições otimizadas para busca." },
  { icon: "🏬", title: "Multi-loja e multi-tenant", desc: "Cada loja é isolada, segura e com domínio próprio. Você cria uma ou várias, sem misturar dados." },
  { icon: "💳", title: "Pagamentos integrados", desc: "Pix, cartão e boleto com checkout otimizado para celular, pronto para vender no primeiro dia." },
  { icon: "📣", title: "Marketing com IA", desc: "Campanhas de e-mail, carrinho abandonado, posts para redes sociais e promoções baseadas em dados." },
  { icon: "📊", title: "Painel de resultados", desc: "Vendas, ticket médio, origem do tráfego e produtos campeões. A IA explica o que fazer a seguir." },
  { icon: "🔍", title: "SEO desde o início", desc: "Títulos, metadados e URLs amigáveis gerados automaticamente para o Google encontrar sua loja." },
  { icon: "🛡️", title: "Segurança e conformidade", desc: "Certificado SSL, backups automáticos e boas práticas de LGPD aplicadas por padrão." },
];

const passos = [
  { n: "01", title: "Descreva seu negócio", desc: "Nicho, público, estilo e até referências de lojas que você admira." },
  { n: "02", title: "A IA monta a loja", desc: "Layout responsivo, páginas essenciais, categorias e identidade visual alinhada à sua marca." },
  { n: "03", title: "Ajuste no chat", desc: "“Muda o tom para mais jovem”, “cria uma promoção de frete grátis”. Mudanças em segundos." },
  { n: "04", title: "Publique e venda", desc: "Conecte seu domínio, ative o checkout e receba pedidos com Pix, cartão ou boleto." },
];

const nichos = [
  ["👗", "Moda feminina", "Coleções sazonais, looks e cupons de estreia."],
  ["🌿", "Cosméticos naturais", "Rotinas de skincare e kits de presente."],
  ["🐾", "Pet shop", "Assinatura de ração e produtos por porte."],
  ["🏺", "Artesanato", "Peças únicas com histórias de cada criador."],
  ["💪", "Suplementos", "Kits por objetivo e recomendação guiada."],
  ["🎓", "Infoprodutos", "Cursos, e-books e mentorias com checkout direto."],
  ["☕", "Cafés especiais", "Torras, assinaturas mensais e brindes."],
  ["🧸", "Brinquedos", "Lojas sazonais para Natal e Dia das Crianças."],
];

const planos = [
  {
    name: "Start",
    desc: "Para validar sua primeira ideia de loja.",
    price: "49",
    items: ["1 loja", "Até 100 produtos", "Criação com IA (limite mensal)", "Pix e boleto", "Subdomínio FGFY.store"],
    featured: false,
  },
  {
    name: "Pro",
    desc: "Para quem já vende e quer escalar.",
    price: "149",
    items: ["1 loja com domínio próprio", "Produtos ilimitados", "IA completa: layout, copy e catálogo", "Pix, cartão e boleto", "Marketing com IA e e-mails automáticos", "Painel de resultados"],
    featured: true,
  },
  {
    name: "Business",
    desc: "Para agências e operações com várias marcas.",
    price: "399",
    items: ["Até 5 lojas", "Múltiplos usuários e permissões", "Relatórios avançados", "Integrações e API", "Suporte prioritário"],
    featured: false,
  },
];

const faqs = [
  ["Preciso saber programar?", "Não. Você descreve o que quer em português e a IA cria e ajusta a loja. Se quiser personalizar mais, também é possível editar tudo manualmente."],
  ["A IA escreve os textos da minha marca?", "Sim. Você pode informar tom de voz, público e exemplos. Todo texto gerado pode ser revisado e editado antes de publicar."],
  ["Minha loja fica isolada das outras?", "Sim. Cada loja tem seus próprios dados, produtos e clientes, com separação garantida pela arquitetura multi-tenant."],
  ["Posso usar meu próprio domínio?", "Nos planos Pro e Business, sim. No Start você publica com o subdomínio FGFY.store."],
];

const btnPrimary =
  "inline-block rounded-xl bg-gradient-to-br from-violet-700 via-fuchsia-700 to-amber-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-violet-700/30 transition hover:-translate-y-0.5";
const btnGhost =
  "inline-block rounded-xl border border-violet-100 bg-white px-6 py-3.5 font-bold text-slate-900 transition hover:-translate-y-0.5";

function Index() {
  return (
    <div className="min-h-screen bg-[#FAFAFB] text-slate-900 antialiased">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-[#FAFAFB]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <span className="text-xl font-black tracking-tight">
            FGFY<span className="text-violet-700">.store</span>
          </span>
          <nav className="hidden gap-7 text-sm text-slate-600 sm:flex">
            <a href="#como-funciona" className="hover:text-slate-900">Como funciona</a>
            <a href="#recursos" className="hover:text-slate-900">Recursos</a>
            <a href="#planos" className="hover:text-slate-900">Planos</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <a href="#planos" className="text-sm font-bold text-violet-700">Começar</a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="px-5 pb-20 pt-24 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-violet-700">
            Loja virtual + inteligência artificial
          </span>
          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Sua loja online completa,{" "}
            <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">
              criada por IA
            </span>{" "}
            em minutos.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Descreva seu negócio e a FGFY.store monta layout, catálogo, textos persuasivos, pagamentos e campanhas de marketing. Você só revisa e começa a vender.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#planos" className={btnPrimary}>Criar minha loja grátis</a>
            <a href="#como-funciona" className={btnGhost}>Ver como funciona</a>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Sem cartão de crédito para testar · Domínio próprio incluso nos planos pagos
          </p>

          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-xl">
            <div className="flex gap-1.5 border-b border-slate-200 p-3">
              <i className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <i className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <i className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="grid md:grid-cols-2">
              <div className="space-y-2.5 border-slate-200 p-5 text-sm md:border-r">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">Quero uma loja de cosméticos naturais, tom leve e feminino.</div>
                <div className="rounded-xl border border-violet-300 bg-slate-50 p-3">Pronto! Criei a home, 12 produtos com descrições, e-mails de boas-vindas e uma campanha para o Dia das Mães. Quer ajustar a paleta?</div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">Troca o verde por rosa e deixa o botão mais chamativo.</div>
                <div className="rounded-xl border border-violet-300 bg-slate-50 p-3">Feito. Aplicado em todas as páginas.</div>
              </div>
              <div className="space-y-1 p-5 text-sm">
                {[
                  ["Sérum Hidratante", "R$ 89,90", "from-violet-500 to-fuchsia-500"],
                  ["Máscara de Argila", "R$ 59,90", "from-pink-400 to-amber-400"],
                  ["Óleo Corporal Botânico", "R$ 74,90", "from-emerald-400 to-sky-400"],
                ].map(([name, price, grad]) => (
                  <div key={name} className="flex items-center gap-3 border-b border-dashed border-slate-200 py-3">
                    <div className={`h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br ${grad}`} />
                    <div>
                      <strong>{name}</strong>
                      <br />
                      <small className="text-slate-500">{price}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="border-y border-slate-200 bg-white px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <span className="text-sm font-bold uppercase tracking-widest text-violet-700">O problema</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Vender online não deveria exigir um time inteiro.</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Hoje, quem quer uma loja precisa de designer, dev, copywriter, gestor de tráfego e semanas de trabalho. Muita ideia boa morre antes do primeiro clique.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ["Semanas para lançar", "Escolher template, configurar, cadastrar produtos, escrever descrições. Tudo antes de vender um real."],
                ["Textos que não convertem", "Descrição genérica copiada do fornecedor não cria desejo nem confiança na compra."],
                ["Ferramentas soltas", "Loja num lugar, pagamento em outro, e-mail em outro. Nada conversa com nada."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-slate-200 bg-[#FAFAFB] p-6">
                  <h3 className="font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <span className="text-sm font-bold uppercase tracking-widest text-violet-700">Como funciona</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Do pensamento à primeira venda, em quatro passos.</h2>
            <p className="mt-4 text-slate-600">Você conversa com a IA como conversaria com um sócio. Ela executa.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {passos.map((p) => (
                <div key={p.n} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-4xl font-black text-violet-700">{p.n}</div>
                  <h3 className="mt-3 font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section id="recursos" className="border-y border-slate-200 bg-white px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <span className="text-sm font-bold uppercase tracking-widest text-violet-700">Recursos</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Tudo que uma loja precisa, sem montar nada sozinho.</h2>
            <p className="mt-4 text-slate-600">Cada recurso foi pensado para reduzir trabalho manual e aumentar a chance de venda.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recursos.map((r) => (
                <div key={r.title} className="rounded-2xl border border-slate-200 bg-[#FAFAFB] p-6">
                  <span className="text-3xl">{r.icon}</span>
                  <h3 className="mt-3 font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NICHOS */}
        <section className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <span className="text-sm font-bold uppercase tracking-widest text-violet-700">Ideias para começar</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Um clique para o seu nicho. Uma conversa para personalizar.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {nichos.map(([icon, t, d]) => (
                <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="mt-2 font-bold">{t}</h3>
                  <p className="mt-1 text-sm text-slate-600">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FRASE DE IMPACTO */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-violet-700 via-fuchsia-700 to-amber-500 px-8 py-14 text-center text-white">
            <p className="mx-auto max-w-3xl text-2xl font-black md:text-4xl">
              Sua ideia merece uma loja que venda. Não uma que só exista.
            </p>
            <p className="mt-4 opacity-90">FGFY.store — construa, ajuste e venda com a ajuda de IA.</p>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="border-t border-slate-200 bg-white px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <span className="text-sm font-bold uppercase tracking-widest text-violet-700">Planos</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Comece pequeno. Cresça sem trocar de plataforma.</h2>
            <p className="mt-4 text-slate-600">Teste grátis por 14 dias em qualquer plano. Cancele quando quiser.</p>
            <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
              {planos.map((p) => (
                <div
                  key={p.name}
                  className={`relative flex flex-col rounded-2xl border bg-[#FAFAFB] p-7 ${
                    p.featured ? "border-2 border-violet-700 shadow-xl" : "border-slate-200"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-400 px-4 py-1 text-xs font-extrabold text-slate-900">
                      Mais escolhido
                    </span>
                  )}
                  <h3 className="text-xl font-black">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                  <div className="mt-5 text-4xl font-black">
                    R$ {p.price}
                    <small className="text-base font-medium text-slate-500">/mês</small>
                  </div>
                  <ul className="mb-7 mt-6 flex-1 space-y-2 text-sm">
                    {p.items.map((i) => (
                      <li key={i} className="border-b border-slate-200 pb-2">
                        <span className="mr-1 font-bold text-violet-700">✓</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className={p.featured ? btnPrimary + " text-center" : btnGhost + " text-center"}>
                    {p.featured ? "Quero o Pro" : p.name === "Start" ? "Começar grátis" : "Falar com vendas"}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-slate-500">
              Valores ilustrativos para validação. Taxas de transação de cada meio de pagamento são cobradas à parte.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-5 py-20">
          <div className="mx-auto max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-violet-700">Perguntas frequentes</span>
            <h2 className="mb-8 mt-2 text-3xl font-black">Ainda com dúvidas?</h2>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-bold">
                    {q}
                    <span className="text-2xl text-violet-700 group-open:hidden">+</span>
                    <span className="hidden text-2xl text-violet-700 group-open:inline">–</span>
                  </summary>
                  <p className="mt-3 text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-5 py-24 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-violet-700">Sua vez</span>
          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black md:text-5xl">
            A próxima loja de sucesso pode ser a sua.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Crie sua conta, descreva sua ideia e veja a loja tomar forma em minutos.
          </p>
          <div className="mt-8">
            <a href="#planos" className={btnPrimary}>Criar minha loja agora</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-5 py-8 text-sm text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3">
          <span>© 2026 FGFY.store · Todos os direitos reservados</span>
          <span>Termos · Privacidade · Contato</span>
        </div>
      </footer>
    </div>
  );
}
