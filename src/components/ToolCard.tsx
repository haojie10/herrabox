import './ToolCard.css';

interface ToolCardProps {
  title: string;
  description: string;
  url: string;
  comingSoon?: boolean;
}

export default function ToolCard({ title, description, url, comingSoon }: ToolCardProps) {
  return (
    <a 
      href={comingSoon ? '#' : url} 
      className={`tool-card ${comingSoon ? 'disabled' : ''}`} 
      target={comingSoon ? '_self' : '_blank'} 
      rel="noopener noreferrer"
    >
      <div className="tool-card-content">
        <h2 className="tool-title">{title}</h2>
        <p className="tool-desc">{description}</p>
      </div>
      <div className="tool-action">
        {!comingSoon ? (
          <span className="arrow">↗</span>
        ) : (
          <span className="badge">即将上线</span>
        )}
      </div>
    </a>
  );
}
