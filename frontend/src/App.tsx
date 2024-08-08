const App = () => {
  return (
    <>
      <main className="max-w-2xl mx-auto flex px-4 gap-8">
        <div className="py-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold uppercase mb-8">
            <span className="text-5xl">URL To Video</span><br />
            <span className="bg-gradient-to-br from-emerald-500 to-sky-500 bg-clip-text text-transparent">Powered by AI</span>
          </h1>
          <form className="grid gap-2">
            <input type="url" name="url" className="bg-transparent border-2 rounded-full text-white px-4 py-2" placeholder="https://..." />
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-full" type="submit">Generate Video</button>
          </form>
        </div>

        <div className="py-4">
          <div className="bg-gray-200 w-[240px] h-[380px] text-gray-200 rounded-2xl p-8">A</div>
        </div>
      </main>
    </>
  )
}

export default App