import Header from './components/Header';
import ToolCard from './components/ToolCard';
import './App.css';

function App() {
  const tools = [
    {
      title: "智能图片背景处理",
      description: "精准将图片素材背景统一替换为白灰色系标准 RGB(240,240,240)。",
      url: "https://photo.herrabox.xyz",
    },
    {
      title: "供应商验货系统",
      description: "生成检验报告并支持在线查看及 PDF 下载的内部 QC 协同应用。",
      url: "https://qc.herrabox.xyz",
    }
  ];

  return (
    <>
      <Header />
      <main className="main-content">
        <section className="hero">
          <h2 className="hero-title">工作效率，<br/>由此开始。</h2>
          <p className="hero-subtitle">Howstoday 专属的前端办公工具集合点</p>
        </section>
        
        <section className="tools-grid">
          {tools.map((tool, idx) => (
            <ToolCard 
              key={idx}
              title={tool.title}
              description={tool.description}
              url={tool.url}
            />
          ))}
          <ToolCard 
            title="更多工具"
            description="我们正在开发更多的自动化与效率工具，敬请期待。"
            url="#"
            comingSoon={true}
          />
        </section>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Howstoday. Crafted with precision.</p>
      </footer>
    </>
  );
}

export default App;
