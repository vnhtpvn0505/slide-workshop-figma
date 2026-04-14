import React from 'react';
import { CheckCircle2, XCircle, ChevronRight, FileText, Image as ImageIcon, Link, GitMerge, MessageSquare, Cpu, Sliders, Rocket, Zap, Smartphone, Layout, AppWindow, Network, PieChart, ArrowDown, ArrowRight, Pencil, Layers, PenTool, Sparkles, Wrench, Brain, Play } from 'lucide-react';

const getFeatureIcon = (title) => {
  const t = title.toLowerCase();
  
  // Vibe Design
  if (t.includes('nội dung')) return <FileText size={48} color="#A259FF" strokeWidth={1.5} />;
  if (t.includes('hình ảnh')) return <ImageIcon size={48} color="#0ACF83" strokeWidth={1.5} />;
  if (t.includes('url')) return <Link size={48} color="#1ABCFE" strokeWidth={1.5} />;
  if (t.includes('sơ đồ')) return <GitMerge size={48} color="#F24E1E" strokeWidth={1.5} />;
  
  // Vibe Coding
  if (t.includes('mô tả') || t.includes('prompt')) return <MessageSquare size={48} color="#A259FF" strokeWidth={1.5} />;
  if (t.includes('generate')) return <Cpu size={48} color="#1ABCFE" strokeWidth={1.5} />;
  if (t.includes('chỉnh sửa')) return <Sliders size={48} color="#0ACF83" strokeWidth={1.5} />;
  if (t.includes('thực hiện')) return <Rocket size={48} color="#F24E1E" strokeWidth={1.5} />;
  
  return <Zap size={48} color="#9747FF" strokeWidth={1.5} />;
};

const getOutputIcon = (id) => {
  switch (id) {
    case 'mobile': return <Smartphone size={40} color="#0ACF83" strokeWidth={1.5} />;
    case 'layout': return <Layout size={40} color="#F24E1E" strokeWidth={1.5} />;
    case 'window': return <AppWindow size={40} color="#A259FF" strokeWidth={1.5} />;
    case 'sitemap': return <Network size={40} color="#1ABCFE" strokeWidth={1.5} />;
    case 'image': return <ImageIcon size={40} color="#F24E1E" strokeWidth={1.5} />;
    case 'chart': return <PieChart size={40} color="#0ACF83" strokeWidth={1.5} />;
    default: return <Zap size={40} color="#9747FF" strokeWidth={1.5} />;
  }
};

const SlideRenderer = ({ slide }) => {
  if (slide.type === 'title') {
    return (
      <div className="slide-content text-center">
        <h1 className={`slide-title ${slide.gradientTitle ? 'gradient-text' : ''}`}>
          {slide.title}
        </h1>
        {slide.subtitle && <p className="slide-subtitle" style={{ whiteSpace: 'pre-line' }}>{slide.subtitle}</p>}
      </div>
    );
  }

  if (slide.type === 'section') {
    return (
      <div className="slide-content text-center">
        <div className="section-badge" style={{ backgroundColor: 'transparent', borderColor: 'var(--text-secondary)' }}>SECTION</div>
        <h1 className="slide-title">{slide.title}</h1>
        {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
      </div>
    );
  }

  if (slide.type === 'list') {
    return (
      <div className="slide-content">
        <h2 className="slide-title small">{slide.title}</h2>
        <ul className="slide-list">
          {slide.items.map((item, idx) => (
            <li key={idx} className="slide-list-item">
              <ChevronRight className="list-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (slide.type === 'features') {
    return (
      <div className="slide-content">
        <h1 className="slide-title">{slide.title}</h1>
        {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
        
        <div className="features-grid" style={slide.isFlow ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginTop: '3rem' } : { gridTemplateColumns: slide.features.length === 4 ? `repeat(4, 1fr)` : `repeat(auto-fit, minmax(280px, 1fr))` }}>
          {slide.features.map((feature, idx) => {
            const hasDesc = !!feature.description;
            const cardStyle = !hasDesc ? { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '1.5rem', minHeight: '220px', flex: 1, animationDelay: `${idx * 0.2}s`, animationFillMode: 'both' } : { flex: 1, animationDelay: `${idx * 0.2}s`, animationFillMode: 'both' };
            const card = (
              <div 
                key={idx} 
                className={`feature-card ${slide.isFlow ? 'step-fade-in' : ''}`} 
                style={cardStyle}
              >
                <div className="icon-wrapper" style={{ marginBottom: hasDesc ? '1.5rem' : '0' }}>
                  {getFeatureIcon(feature.title)}
                </div>
                <h3 className="feature-title" style={{ marginBottom: hasDesc ? '1rem' : '0' }}>{feature.title}</h3>
                {hasDesc && <p className="feature-description">{feature.description}</p>}
              </div>
            );

            if (slide.isFlow && idx < slide.features.length - 1) {
              return (
                <React.Fragment key={idx}>
                  {card}
                  <div className="flow-arrow step-fade-in" style={{ animationDelay: `${idx * 0.2 + 0.1}s`, animationFillMode: 'both' }}>
                    <ArrowRight size={32} color="rgba(255, 255, 255, 0.3)" />
                  </div>
                </React.Fragment>
              );
            }
            return card;
          })}
        </div>

        {slide.outputs && (
          <div className="diagram-flow" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <div className="flow-arrow">
              <ArrowDown size={32} color="rgba(255, 255, 255, 0.4)" />
            </div>
            <div className="outputs-grid" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {slide.outputs.map((out, idx) => (
                <div key={idx} className="output-node" style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                }}>
                  {getOutputIcon(out.id)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (slide.type === 'comparison') {
    return (
      <div className="slide-content">
        <h1 className="slide-title small">{slide.title}</h1>
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                {slide.headers.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slide.rows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (slide.type === 'pro-cons') {
    return (
      <div className="slide-content">
        <h1 className="slide-title small">{slide.title}</h1>
        <div className="pro-cons-grid">
          <div className="pro-list ghost-panel">
            <h3 className="panel-title pro"><CheckCircle2 size={24} /> NÊN DÙNG</h3>
            <ul>
              {slide.pros.map((pro, idx) => (
                <li key={idx}>{pro}</li>
              ))}
            </ul>
          </div>
          <div className="cons-list ghost-panel">
            <h3 className="panel-title con"><XCircle size={24} /> KHÔNG NÊN</h3>
            <ul>
              {slide.cons.map((con, idx) => (
                <li key={idx}>{con}</li>
              ))}
            </ul>
          </div>
          {slide.footer && (
            <div className="pro-cons-footer-box">
              {slide.footer}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (slide.type === 'evolution') {
    return (
      <div className="slide-content text-center">
        <h1 className="slide-title">{slide.title}</h1>
        
        <div className="evolution-timeline" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', marginTop: '4rem', gap: '1rem' }}>
          {slide.steps.map((step, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="timeline-card feature-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 2, flex: 1, animation: `slideFadeIn 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards ${idx * 0.3}s`, opacity: 0, padding: '2rem 1.5rem', minHeight: '260px' }}>
                  
                  <div className="node-text" style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{step.year}</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{step.name}</div>
                  </div>

                  <div className="apps-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'flex-start', alignItems: 'center' }}>
                    {step.apps && step.apps.map((app, appIdx) => (
                      <div key={appIdx} className={`app-icon app-${app.style}`}>
                        {app.name}
                      </div>
                    ))}
                  </div>

                </div>

                {idx < slide.steps.length - 1 && (
                  <div className="timeline-connector" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', animation: `slideFadeIn 0.5s ease forwards ${idx * 0.3 + 0.15}s`, opacity: 0 }}>
                    <ArrowRight size={32} color="rgba(255,255,255,0.4)" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  if (slide.type === 'role-shift') {
    return (
      <div className="slide-content text-center">
        <h1 className="slide-title">{slide.title}</h1>
        
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '2rem', marginTop: '4rem', padding: '0 2rem' }}>
          {/* Before */}
          <div className="feature-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left', padding: '3rem', border: '2px dashed rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.3)' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <Wrench size={48} color="#aaa" />
            </div>
            <h2 style={{ fontSize: '2rem', color: '#ccc', marginBottom: '2rem' }}>{slide.before.label}</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {slide.before.items.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '1rem', color: '#aaa', fontSize: '1.2rem', lineHeight: 1.5 }}>
                  <XCircle size={24} color="#666" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 2s infinite' }}>
            <ArrowRight size={64} color="var(--accent-color)" />
          </div>

          {/* After */}
          <div className="feature-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left', padding: '3rem', border: '2px solid var(--accent-color)', background: 'linear-gradient(180deg, rgba(162, 89, 255, 0.1) 0%, rgba(0,0,0,0) 100%)', boxShadow: '0 0 40px rgba(162, 89, 255, 0.2)' }}>
            <div style={{ background: 'var(--accent-color)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: '0 0 20px var(--accent-color)' }}>
              <Brain size={48} color="#fff" />
            </div>
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem' }}>{slide.after.label}</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {slide.after.items.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '1rem', color: '#fff', fontSize: '1.2rem', lineHeight: 1.5 }}>
                  <CheckCircle2 size={24} color="var(--accent-color)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (slide.type === 'demo') {
    return (
      <div className="slide-content text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="slide-title" style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{slide.title}</h1>
        <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '2rem' }}>
          {slide.app}
        </div>

        <div style={{ display: 'flex', gap: '2rem', width: '100%', maxWidth: '1200px', alignItems: 'stretch' }}>
          {/* Player */}
          <div className="demo-player-container" style={{
            flex: slide.demoSteps ? '1.5' : '1',
            position: 'relative',
            aspectRatio: slide.demoSteps ? 'auto' : '16/9',
            minHeight: slide.demoSteps ? '400px' : 'auto',
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 100px rgba(162, 89, 255, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, border-color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.borderColor = 'var(--accent-color)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}
          >
            <div className="demo-glass-overlay" style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
              pointerEvents: 'none'
            }} />

            {slide.samplePrompt && (
              <div style={{
                position: 'absolute', top: '2.5rem', left: '50%', transform: 'translateX(-50%)',
                width: '85%', background: 'rgba(30, 30, 30, 0.7)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px', padding: '1.2rem 1.5rem',
                display: 'flex', gap: '1rem', alignItems: 'flex-start', zIndex: 10,
                boxShadow: '0 15px 35px rgba(0,0,0,0.5)', borderLeft: '4px solid var(--accent-color)'
              }}>
                <Sparkles color="var(--accent-color)" size={28} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ color: '#eee', fontSize: '1.05rem', fontStyle: 'italic', textAlign: 'left', lineHeight: 1.6 }}>
                  {slide.samplePrompt}
                </div>
              </div>
            )}
            
            <div className="play-button" style={{
              width: slide.demoSteps ? '80px' : '100px',
              height: slide.demoSteps ? '80px' : '100px',
              borderRadius: '50%',
              background: 'var(--accent-color)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 30px var(--accent-color)',
              animation: 'pulse 2s infinite',
              marginBottom: '1.5rem',
              paddingLeft: '6px' // visually center the play triangle
            }}>
              <Play size={slide.demoSteps ? 36 : 48} color="#fff" fill="#fff" />
            </div>

            <p style={{ fontSize: '1.1rem', color: '#fff', maxWidth: '80%', textAlign: 'center', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              {slide.desc}
            </p>
          </div>

          {/* Steps List */}
          {slide.demoSteps && (
            <div className="demo-steps-container" style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              textAlign: 'left'
            }}>
              {slide.demoSteps.map((step, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  animation: `slideFadeIn 0.5s ease forwards ${idx * 0.2 + 0.3}s`,
                  opacity: 0
                }}>
                  <div style={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {step.title}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {step.detail}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="slide-content">
      <h1 className="slide-title text-center">{slide.title}</h1>
    </div>
  );
};

export default SlideRenderer;
