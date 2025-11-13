export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <section className="scene">
        <div className="scene__backlight" />
        <div className="scene__sky">
          <div className="scene__sun" />
          <div className="scene__cloud scene__cloud--left" />
          <div className="scene__cloud scene__cloud--right" />
        </div>
        <div className="scene__window">
          <div className="scene__frame scene__frame--left" />
          <div className="scene__frame scene__frame--right" />
          <div className="scene__frame scene__frame--top" />
          <div className="scene__frame scene__frame--bottom" />
          <div className="scene__frameBar scene__frameBar--vertical" />
          <div className="scene__frameBar scene__frameBar--horizontal" />
        </div>
        <div className="child">
          <div className="child__body">
            <div className="child__glow" />
            <div className="child__collar" />
          </div>
          <div className="child__arm">
            <div className="child__hand" />
          </div>
          <div className="child__head">
            <div className="child__eye child__eye--left" />
            <div className="child__eye child__eye--right" />
            <div className="child__pupil child__pupil--left" />
            <div className="child__pupil child__pupil--right" />
            <div className="child__tear child__tear--left" />
            <div className="child__tear child__tear--right" />
            <div className="child__cheek child__cheek--left" />
            <div className="child__cheek child__cheek--right" />
            <div className="child__hair child__hair--left" />
            <div className="child__hair child__hair--right" />
            <div className="child__hair child__hair--crown" />
          </div>
        </div>
        <div className="parrot">
          <div className="parrot__wing parrot__wing--left" />
          <div className="parrot__wing parrot__wing--right" />
          <div className="parrot__tail" />
          <div className="parrot__beak" />
          <div className="parrot__eye" />
        </div>
        <div className="scene__dust scene__dust--1" />
        <div className="scene__dust scene__dust--2" />
        <div className="scene__dust scene__dust--3" />
        <div className="scene__dust scene__dust--4" />
      </section>
    </main>
  );
}
