
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transformamos tu negocio en un día con soporte continuo para que vendas sin complicaciones." cta1="Digitaliza Ahora" />
<How step1Title="Contacta WebGo" step1Desc="Consulta gratis para digitalizar tu negocio." step2Title="Diseño Exprés" step2Desc="Creamos tu web en menos de 24 horas." step3Title="Soporte 24/7" step3Desc="Resolución de dudas en cualquier momento." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Eficiemente" subheadline="Transformamos tu negocio online, sin esfuerzo, con resultados garantizados y un enfoque personalizado." beneficiotitulo1="Venta Acelerada" beneficio1="Genera ventas rápidamente online" beneficiotitulo2="Gestión Sencilla" beneficio2="Nos encargamos del sitio web" />
<Services heading="Aumenta Tus Ventas en 24 Horas" description="Asdas digitaliza tu negocio rápidamente, sin complicaciones." services={[{"name":"Desarrollo Web Exprés","icon":"rocket","description":"Web funcional en menos de 24 horas."},{"name":"Optimización SEO","icon":"search","description":"Mejor visibilidad en buscadores."},{"name":"Gestión de Contenidos","icon":"pencil","description":"Contenido atractivo y relevante."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita el proceso de compra."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia permanente para tu negocio."},{"name":"Análisis de Tráfico","icon":"chart-line","description":"Conoce y mejora tu audiencia."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en realidades digitales con excelencia y precisión." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo se especializa en transformar tu negocio tradicional en uno digital. Con nuestros servicios de creación de sitios web y estrategias de marketing online, te ayudamos a llegar a más clientes y aumentar tus ventas en línea."},{"pregunta":"¿Qué beneficios ofrece el servicio de WebGo para aquellos que no tienen tiempo para gestionar un sitio web?","respuesta":"WebGo se encarga de todo, desde el diseño hasta la gestión de tu sitio web, para que puedas centrarte en lo que haces mejor: dirigir tu negocio. Nuestro servicio integral asegura que siempre estés visible y que tu sitio funcione sin problemas."},{"pregunta":"¿Cuál es el costo del servicio de digitalización de ventas de WebGo?","respuesta":"El precio de nuestro servicio básico, que incluye la creación de un sitio web, empieza en $123. Ofrecemos soluciones personalizadas que se adaptan a las necesidades y presupuestos de cada negocio."},{"pregunta":"¿Cómo puedo generar más ventas online si solo vendo por recomendación?","respuesta":"WebGo te ayudará a construir una presencia online sólida para atraer nuevos clientes. Con estrategias de SEO y marketing digital, aumentamos tu visibilidad en Internet, permitiendo que más personas encuentren y confíen en tu negocio."},{"pregunta":"¿Qué hace diferente a WebGo de otras empresas de diseño web?","respuesta":"WebGo se diferencia por ofrecer un enfoque personalizado y completo. No solo diseñamos tu sitio web, sino que también creamos estrategias para llevar tráfico y convertirlo en ventas, asegurando que veas resultados reales y medibles."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio en Santiago" 
                      description="Digitaliza tus ventas con WebGo y deja de depender solo de recomendaciones. Soluciones rápidas para empresarios ocupados."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
