import { ReactNode } from 'react';
import ProjectorHeader from './ProjectorHeader';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="app-container">
      <div className="theater-bg" />
      <div className="film-border-left" />
      <div className="film-border-right" />
      <ProjectorHeader />
      <main className="theater-stage">
        {children}
      </main>
    </div>
  );
}

export default Layout;

