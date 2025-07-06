import Logo from "./logo";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <Logo />
      </header>
      <main>
        {children}
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export { Layout }
