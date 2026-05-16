const upcoming = [
  'A focused coming-soon landing page for family, projects, and updates',
  'A clean custom-domain landing page for the April Moyer site',
  'A flexible foundation that can grow when the full site is ready',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-12">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
          Coming soon
        </p>
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          April Moyer
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
          A personal website for April Moyer is being prepared.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {upcoming.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20"
            >
              <p className="text-sm leading-6 text-slate-200">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-sky-300/20 bg-sky-300/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Domain</p>
          <p className="mt-2 text-2xl font-semibold text-white">aprilmoyer.com</p>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            The official home for April Moyer is coming soon. This page is ready to keep the domain
            active while the full site content is prepared.
          </p>
        </div>
      </section>
    </main>
  )
}
