
import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "O futuro da mobilidade elétrica no Brasil",
      excerpt: "Análise do cenário atual e perspectivas de crescimento dos veículos elétricos no mercado brasileiro.",
      image: "/images/blog-1.jpg",
      date: "25 Mai 2023",
      author: "Ana Silva",
      category: "Tendências"
    },
    {
      id: 2,
      title: "Guia completo de carregadores para frotas corporativas",
      excerpt: "Descubra as melhores práticas e soluções para eletrificar frotas empresariais com baixo custo operacional.",
      image: "/images/blog-2.jpg",
      date: "12 Abr 2023",
      author: "Carlos Santos",
      category: "Guias"
    },
    {
      id: 3,
      title: "Tecnologias de carregamento rápido e ultrarrápido",
      excerpt: "Entenda as diferenças entre tecnologias e como escolher a solução ideal para suas necessidades.",
      image: "/images/blog-3.jpg",
      date: "03 Mar 2023",
      author: "Marcela Rocha",
      category: "Tecnologia"
    },
  ];

  return (
    <section id="blog" className="section bg-dark">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl mb-6 md:mb-0 animated-element">
            <h2 className="section-title">Blog</h2>
            <p className="text-white/70">
              Novidades e conteúdos sobre mobilidade elétrica e transformação energética
            </p>
          </div>
          
          <a
            href="/blog"
            className="flex items-center text-hyper-blue hover:text-hyper-green transition-colors animated-element"
            aria-label="Ver todas as publicações do blog"
          >
            Ver todas as publicações
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-darker border border-border/40 rounded-xl overflow-hidden hover:border-hyper-blue/30 transition-all group animated-element"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={`Imagem de capa do post: ${post.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-hyper-blue/90 text-white text-xs px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-xs text-white/60 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-3.5 w-3.5 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-hyper-green transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm font-medium text-hyper-blue hover:text-hyper-green transition-colors"
                  aria-label={`Ler mais sobre: ${post.title}`}
                >
                  Ler mais
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
