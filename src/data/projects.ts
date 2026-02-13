import rumileafImg from "../assets/rumileaf.png";

export type Project = {
    title: string;
    description: string;
    tech: string;
    demo: string;
    repo?: string;
    image?: string;     // URL de portada (local o externa)
    imageAlt?: string;  // Texto alternativo accesible
  };

  export const projects: Project[] = [
    {
      title: "ANEM-IAX: Diagnóstico Precoz de Anemia con IA",
      description:
        "IA para la detección temprana de anemia en niños menores de cinco años mediante análisis no invasivo de la conjuntiva palpebral, orientada a comunidades con acceso limitado a servicios de salud en el Perú. Desarrollado por Marco Guevara y Luis Cueva – Ingeniería de Sistemas, USS.",
      tech: "IA, Visión por Computadora, Deep Learning, XAI",
      demo: "https://anem-iax-frontend.vercel.app/",
      image:
        "https://media.istockphoto.com/id/1772817347/es/vector/una-joven-sufre-de-mareos-y-anemia-hemoglobina-baja-deficiencia-de-hierro.jpg?s=612x612&w=0&k=20&c=o8H9VQJl4-TQaPIDj0ucZ_3LPv65eRQh0qMTBLJx0no=",
      imageAlt: "Ilustración alusiva a anemia y hemoglobina baja",
    },
    {
      title: "PeruBilletes",
      description:
        "IA que reconoce billetes peruanos de 10, 20, 50 y 100 soles, integrable en ATM, POS y sistemas de gestión de efectivo. Desarrollado por Juan Carlos Arcila Díaz - Ingeniería de Sistemas - USS.",
      tech: "IA, Clasificación de Imágenes, CNN, Computer Vision",
      demo: "https://huggingface.co/spaces/jcarlosad7/perubillete",
      image:
        "https://media.istockphoto.com/id/913109722/es/foto/primer-plano-macro-de-100-billetes-de-soles-peruanos-apilados-junto-a-la-pila-de-50-y-20-soles.jpg?s=170667a&w=0&k=20&c=2U84etjm11752VPkZRyVg5zgEmLBSWrYuxOy5wwvKHs=",
      imageAlt: "Fotografía de billetes peruanos de soles",
    },
    {
      title: "Detección de Severidad de Retinopatía Diabética",
      description:
        "IA para apoyar el diagnóstico de retinopatía diabética mediante deep learning, con interpretación explicable (XAI), que detecta signos tempranos y visualiza regiones relevantes, aportando transparencia clínica. Desarrollada por David Angeles - Ingeniería de Sistemas - USS.",
      tech: "IA, Deep Learning, XAI, Salud Digital, Computer Vision",
      demo: "https://rd-severidad-front-end.vercel.app/",
      image: "https://salauno.com.mx/wp-content/uploads/2022/10/retinopatia-diabetica-foto.jpeg",
      imageAlt: "Fondo clínico alusivo a retinopatía diabética",
    },
    {
    title: "RumiLeaf - Sistema Inteligente para la Detección de Enfermedades en Hojas de Café",
    description:
      "Sistema basado en Inteligencia Artificial y Visión por Computadora para la detección automática de enfermedades en hojas de café. El modelo identifica 14 clases distintas de patologías mediante técnicas de deep learning. Además, integra un chatbot impulsado por la API de Gemini (5 versiones) para brindar orientación técnica y recomendaciones. Desarrollado por Rubi Descalzi Tenorio - Ingeniera de Sistemas - USS.",
    tech: "IA, Deep Learning, Computer Vision, YOLOv8, Gemini API, Agricultura Inteligente",
    demo: "https://rumileaf-desca.vercel.app",
    image: rumileafImg,
    imageAlt: "RumiLeaf - Detección de enfermedades en hojas de café",
    },
  ];
