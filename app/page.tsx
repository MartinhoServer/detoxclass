"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ChevronDown,
  Download,
  Facebook,
  Instagram,
  Menu,
  Play,
  Shield,
  PhoneIcon as WhatsApp,
  X,
  Youtube,
  Clock,
} from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Countdown Timer Component
const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference <= 0) {
        // Timer expired
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Cleanup
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="bg-red-50 p-4 rounded-lg mb-6">
      <div className="flex items-center justify-center mb-2">
        <Clock className="h-5 w-5 text-red-500 mr-2" />
        <h3 className="text-red-500 font-bold">Oferta por tempo limitado!</h3>
      </div>
      <div className="flex justify-center space-x-4 text-center">
        <div className="flex flex-col">
          <div className="bg-white text-red-500 font-bold text-xl md:text-2xl rounded-lg w-14 h-14 flex items-center justify-center shadow-sm">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <span className="text-xs mt-1 text-gray-600">Dias</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-white text-red-500 font-bold text-xl md:text-2xl rounded-lg w-14 h-14 flex items-center justify-center shadow-sm">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <span className="text-xs mt-1 text-gray-600">Horas</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-white text-red-500 font-bold text-xl md:text-2xl rounded-lg w-14 h-14 flex items-center justify-center shadow-sm">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <span className="text-xs mt-1 text-gray-600">Min</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-white text-red-500 font-bold text-xl md:text-2xl rounded-lg w-14 h-14 flex items-center justify-center shadow-sm">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <span className="text-xs mt-1 text-gray-600">Seg</span>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const aboutRef = useRef(null)
  const teacherRef = useRef(null)
  const priceRef = useRef(null)
  const guaranteeRef = useRef(null)
  const faqRef = useRef(null)
  const testimonialsRef = useRef(null)

  // Set countdown to 7 days from now
  const countdownDate = new Date()
  countdownDate.setDate(countdownDate.getDate() + 7)

  // FAQ toggle function
  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  // Purchase notification system
  useEffect(() => {
    // Dados
    const nomes = [
      "Jose",
      "Joao",
      "Antonio",
      "Carlos",
      "Luiz",
      "Maria",
      "Ana",
      "Patricia",
      "Fernanda",
      "Bruno",
      "Eduardo",
      "Gabriel",
      "Juliana",
      "Larissa",
      "Lucas",
      "Daniela",
      "Felipe",
      "Camila",
      "Rodrigo",
      "Beatriz",
      "Rafael",
      "Aline",
      "Marcos",
      "Vanessa",
      "Leonardo",
      "Rafaela",
      "Paulo",
      "Amanda",
      "Gustavo",
      "Claudia",
      "Marcelo",
      "Jéssica",
      "Vinicius",
      "Carla",
      "Matheus",
      "Viviane",
      "André",
      "Tatiane",
      "Renato",
      "Leticia",
      "Alexandre",
      "Flávia",
      "Sérgio",
      "Sabrina",
      "Thiago",
      "Michele",
      "Roberto",
      "Renata",
      "Fernando",
      "Natália",
      "Diego",
      "Tatiana",
      "Jean",
      "Elaine",
      "Fábio",
      "Veronica",
      "Alessandro",
      "Luciana",
      "Cristiano",
      "Elaisa",
      "Vitor",
      "Helena",
      "Wesley",
      "Elaine",
      "Milton",
      "Joana",
      "Éverton",
      "Nicole",
      "Caio",
      "Melissa",
      "Hugo",
      "Emanuelle",
      "Alan",
      "Valéria",
      "Ítalo",
      "Marcela",
      "Leandro",
      "Marina",
      "Jorge",
      "Roberta",
      "Nelson",
      "Tatiane",
      "Danilo",
      "Tainá",
      "Rogério",
      "Ariane",
      "Otávio",
      "Bianca",
      "Alisson",
      "Isabela",
      "Edson",
      "Kelly",
      "Jonas",
      "Caroline",
      "Luan",
      "Iris",
      "Samuel",
      "Marlene",
      "Raul",
      "Andressa",
    ]
    const sobrenomes = [
      "Silva",
      "Santos",
      "Oliveira",
      "Souza",
      "Lima",
      "Pereira",
      "Ferreira",
      "Almeida",
      "Costa",
      "Gomes",
      "Martins",
      "Araujo",
      "Rodrigues",
      "Barbosa",
      "Cardoso",
      "Dias",
      "Rocha",
      "Teixeira",
      "Moreira",
      "Correia",
      "Melo",
      "Nunes",
      "Vieira",
      "Cavalcanti",
      "Freitas",
      "Machado",
      "Ramos",
      "Monteiro",
      "Ribeiro",
      "Batista",
      "Nascimento",
      "Campos",
      "Andrade",
      "Marques",
      "Farias",
      "Fonseca",
      "Pinto",
      "Moura",
      "Borges",
      "Castro",
      "Bezerra",
      "Neves",
      "Coelho",
      "Cunha",
      "Reis",
      "Macedo",
      "Tavares",
      "Xavier",
      "Barros",
      "Antunes",
      "Lopes",
      "Guimarães",
      "Braga",
      "Sales",
      "Aguiar",
      "Assis",
      "Queiroz",
      "Amaral",
      "Peixoto",
      "Pinheiro",
      "Bittencourt",
      "Prado",
      "Rezende",
      "Couto",
      "Soares",
      "Carvalho",
      "Bernardo",
      "Telles",
      "Moraes",
      "Alencar",
      "Figueiredo",
      "Vasconcelos",
      "Pacheco",
      "Severino",
      "Drummond",
      "Brandão",
      "Franco",
      "Galvão",
      "Goulart",
      "Henrique",
      "Lacerda",
      "Lourenço",
      "Maia",
      "Menezes",
      "Mesquita",
      "Muniz",
      "Novaes",
      "Peçanha",
      "Porto",
      "Quevedo",
      "Rezende",
      "Salazar",
      "Siqueira",
      "Toledo",
      "Valente",
      "Varela",
      "Zanetti",
      "Zimmermann",
      "Trindade",
      "Fagundes",
      "Durães",
      "Torres",
    ]
    const produtos = ["Detox Class"]
    const frase = "comprou"

    const min_time = 4
    const max_time = 20

    // Add CSS for notifications
    const style = document.createElement("style")
    style.textContent = `
      .purchase-notification {
        position: fixed;
        bottom: 20px;
        left: 20px;
        background-color: white;
        color: #333;
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        max-width: 300px;
        z-index: 1000;
        font-size: 14px;
        line-height: 1.4;
        border-left: 4px solid #22c55e;
        animation: fadeInOut 4s ease forwards;
        transform: translateY(20px);
        opacity: 0;
      }
      
      .purchase-notification .icon {
        margin-right: 12px;
        color: #22c55e;
        flex-shrink: 0;
      }
      
      @keyframes fadeInOut {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        10% {
          opacity: 1;
          transform: translateY(0);
        }
        90% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(20px);
        }
      }
      
      @media (max-width: 640px) {
        .purchase-notification {
          left: 10px;
          right: 10px;
          max-width: calc(100% - 20px);
        }
      }
    `
    document.head.appendChild(style)

    function showNotification() {
      const nome = nomes[Math.floor(Math.random() * nomes.length)]
      const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)]
      const produto = produtos[Math.floor(Math.random() * produtos.length)]

      const notif = document.createElement("div")
      notif.className = "purchase-notification"

      // Create icon element
      const iconDiv = document.createElement("div")
      iconDiv.className = "icon"
      iconDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`

      // Create text content
      const textDiv = document.createElement("div")
      textDiv.innerHTML = `<strong>${nome} ${sobrenome}</strong> ${frase} <strong>${produto}</strong>`

      // Append elements to notification
      notif.appendChild(iconDiv)
      notif.appendChild(textDiv)

      document.body.appendChild(notif)

      // Remove after animation completes
      notif.addEventListener("animationend", () => notif.remove())

      // Call again after random time
      const next = Math.floor(Math.random() * (max_time - min_time + 1) + min_time)
      setTimeout(showNotification, next * 1000)
    }

    // Start notifications after 4 seconds
    const initialTimer = setTimeout(showNotification, 4000)

    // Cleanup
    return () => {
      clearTimeout(initialTimer)
    }
  }, [])

  // GSAP animations
  useEffect(() => {
    // Hero section animations
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2,
    })

    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.4,
    })

    gsap.from(".hero-cta", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6,
      ease: "back.out(1.7)",
    })

    gsap.from(".hero-image", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.8,
    })

    // Benefits section animations
    gsap.from(".benefit-item", {
      scrollTrigger: {
        trigger: benefitsRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
    })

    // About section animations
    gsap.from(".about-content", {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
    })

    // Teacher section animations
    gsap.from(".teacher-content", {
      scrollTrigger: {
        trigger: teacherRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
    })

    // Price section animations
    gsap.from(".price-content", {
      scrollTrigger: {
        trigger: priceRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
    })

    // Guarantee section animations
    gsap.from(".guarantee-content", {
      scrollTrigger: {
        trigger: guaranteeRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
    })

    // FAQ section animations
    gsap.from(".faq-title", {
      scrollTrigger: {
        trigger: faqRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
    })

    // Testimonials section animations
    gsap.from(".testimonial-item", {
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top 80%",
      },
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 0.8,
    })

    // Button hover animations
    const buttons = document.querySelectorAll(".cta-button")
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
        })
      })
      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
        })
      })
    })

    // WhatsApp button animation
    gsap.to(".animate-bounce", {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

    // Countdown timer animation
    gsap.from(".countdown-timer", {
      scrollTrigger: {
        trigger: priceRef.current,
        start: "top 80%",
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      delay: 0.3,
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.killTweensOf(
        ".hero-title, .hero-subtitle, .hero-cta, .hero-image, .benefit-item, .about-content, .teacher-content, .price-content, .guarantee-content, .faq-title, .testimonial-item, .countdown-timer",
      )
    }
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Headline%20English-yxzzTyhwANNOyPgMgDPk3O2jlOSUPO.png"
              alt="Headline English Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <span className="text-xl font-bold text-gray-800">Headline English</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden z-50">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#"
                  className="text-gray-700 hover:text-green-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-green-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre o Curso
                </Link>
                <Link
                  href="#guarantee"
                  className="text-gray-700 hover:text-green-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Garantia
                </Link>
                <Link
                  href="#price"
                  className="text-gray-700 hover:text-green-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Preço
                </Link>
                <Link
                  href="#faq"
                  className="text-gray-700 hover:text-green-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Perguntas Frequentes
                </Link>
                <Link
                  href="https://pay.hotmart.com/E97153768V?checkoutMode=10&bid=1735001547277"
                  className="cta-button bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-colors w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Iniciar Agora
                </Link>
              </nav>
            </div>
          )}

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-700 hover:text-green-500 transition-colors">
              Início
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-500 transition-colors">
              Sobre o Curso
            </Link>
            <Link href="#guarantee" className="text-gray-700 hover:text-green-500 transition-colors">
              Garantia
            </Link>
            <Link href="#price" className="text-gray-700 hover:text-green-500 transition-colors">
              Preço
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-green-500 transition-colors">
              Perguntas Frequentes
            </Link>
            <Link
              href="https://pay.hotmart.com/E97153768V?checkoutMode=10&bid=1735001547277"
              className="cta-button bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Iniciar Agora
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">
              Destrave sua conversação em Inglês com o <span className="text-green-500">Detox Class</span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-gray-600 mb-8">
              Mais de 1.500 palavras e frases para você dominar a pronúncia e melhorar a conversação em Inglês.
            </p>
            <Link
              href="https://pay.hotmart.com/E97153768V?checkoutMode=10&bid=1735001547277"
              className="hero-cta cta-button inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-lg transition-colors"
            >
              Iniciar Agora
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="hero-image relative w-full max-w-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nova%20logo%201%20Headline%20English-YjOeIX7nuxsi0XCHPh59zptgvV5Igj.png"
                alt="Headline English Logo"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute -bottom-5 -right-5 bg-green-500 text-white p-4 rounded-full shadow-lg">
                <Play className="h-6 w-6 md:h-8 md:w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10 md:mb-16">
            O que você vai aprender com o Detox Class?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Benefit 1 */}
            <div className="benefit-item bg-blue-50 rounded-xl p-8 text-center transition-transform hover:transform hover:scale-105 h-full flex flex-col">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">+1.500 palavras e frases</h3>
              <p className="text-gray-600 flex-grow">
                Desbloqueie sua capacidade de conversação com um vocabulário extenso e prático.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="benefit-item bg-green-50 rounded-xl p-8 text-center transition-transform hover:transform hover:scale-105 h-full flex flex-col">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Play className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Vídeo aulas dinâmicas</h3>
              <p className="text-gray-600 flex-grow">
                Aulas focadas na pronúncia correta, com explicações claras e práticas.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="benefit-item bg-green-50 rounded-xl p-8 text-center transition-transform hover:transform hover:scale-105 h-full flex flex-col">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">PDFs + Áudios para baixar</h3>
              <p className="text-gray-600 flex-grow">
                Material didático completo, disponível para estudo offline a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Course Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="about-content max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">O que é o Detox Class?</h2>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  O <span className="font-semibold">Detox Class</span> foi estruturado para ensinar a pronúncia correta
                  de palavras e frases fundamentais do Inglês, permitindo que você se comunique com confiança em
                  situações reais.
                </p>
                <p className="text-gray-600 mb-6">
                  Utilizamos o <span className="font-semibold">Método Comunicativo</span> de ensino para que você
                  aprenda a pensar em Inglês diretamente, sem depender de traduções mentais, acelerando seu processo de
                  aprendizado.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg flex items-center">
                  <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                    <Play className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Assista ao vídeo do Teacher Joel explicando como o curso foi criado para maximizar seus resultados.
                  </p>
                </div>
              </div>

              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/8-Mc7wcrPf8?si=0NNSmf_PwHdH57eM"
                  title="Teacher Joel explicando o Detox Class"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section ref={teacherRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="teacher-content flex flex-col md:flex-row items-center max-w-4xl mx-auto">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-green-300 rounded-full transform -rotate-6"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Joel%20Souza%20Escorado.JPG-Ay9ZPIL4qsstpwg4P2ptcc5vtIY2kD.jpeg"
                  alt="Teacher Joel"
                  width={300}
                  height={300}
                  className="rounded-full relative z-10 object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Conheça Teacher Joel</h2>
              <p className="text-gray-600 mb-6">
                Teacher Joel Souza é o fundador da Headline English Course e possui mais de 15 anos de experiência no
                ensino da Língua Inglesa.
              </p>
              <p className="text-gray-600 mb-6">
                Ele ajuda seus alunos a se comunicarem diretamente em Inglês, sem depender de traduções mentais, através
                de métodos inovadores e eficazes.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/headline.english?igsh=MW4yajRrYzF6b2tucQ=="
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.youtube.com/@HeadlineEnglish"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/16LK3zpWu2/"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section
        id="price"
        ref={priceRef}
        className="py-16 md:py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="price-content max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12">Preço Especial para Você</h2>

            <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-6 md:p-8 lg:p-12 transform transition-transform hover:scale-105">
              {/* Countdown Timer */}
              <div className="countdown-timer">
                <CountdownTimer targetDate={countdownDate} />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                  <span className="inline-block bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    De R$297,00
                  </span>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    R$120,00
                    <span className="text-sm md:text-lg text-gray-500 font-normal"> à vista</span>
                  </div>
                  <div className="text-gray-500 mt-2">ou 12x de R$11,98</div>
                </div>

                <Link
                  href="https://pay.hotmart.com/E97153768V?checkoutMode=10&bid=1735001547277"
                  className="cta-button bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-lg transition-colors w-full md:w-auto text-center"
                >
                  Garanta seu Acesso Agora
                </Link>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4">Benefícios da Assinatura Anual:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Acesso garantido por 1 ano completo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Mais de 1.500 palavras e frases para multiplicar seu vocabulário</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Atualizações e novos conteúdos durante a vigência da assinatura</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" ref={guaranteeRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="guarantee-content max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Shield className="h-16 w-16 text-green-500 mx-auto" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Garantia Incondicional de 7 dias!</h2>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Se você não ficar satisfeito, devolvemos 100% do seu dinheiro sem burocracia.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Solicite</h3>
                <p className="text-gray-600 text-sm">Entre em contato com nosso suporte dentro do período de 7 dias.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Explique</h3>
                <p className="text-gray-600 text-sm">Conte-nos brevemente o motivo da sua insatisfação.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Receba</h3>
                <p className="text-gray-600 text-sm">Seu reembolso será processado em até 7 dias úteis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={faqRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="faq-title text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            Dúvidas Frequentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleQuestion(0)}
              >
                <span className="font-medium text-lg">Como terei acesso ao curso?</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeQuestion === 0 ? "transform rotate-180" : ""}`}
                />
              </button>

              {activeQuestion === 0 && (
                <div className="p-6 pt-0 text-gray-600 border-t">
                  <p>
                    Após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à plataforma.
                    Basta criar uma senha e começar a estudar imediatamente. Todo o conteúdo estará disponível na área
                    do aluno.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleQuestion(1)}
              >
                <span className="font-medium text-lg">Por quanto tempo terei acesso?</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeQuestion === 1 ? "transform rotate-180" : ""}`}
                />
              </button>

              {activeQuestion === 1 && (
                <div className="p-6 pt-0 text-gray-600 border-t">
                  <p>
                    Você terá acesso ao curso por 1 ano completo a partir da data de ativação. Durante esse período,
                    você poderá acessar todo o conteúdo quantas vezes quiser e também baixar os materiais
                    complementares.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleQuestion(2)}
              >
                <span className="font-medium text-lg">Já estudo inglês, como o Detox Class pode me ajudar?</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeQuestion === 2 ? "transform rotate-180" : ""}`}
                />
              </button>

              {activeQuestion === 2 && (
                <div className="p-6 pt-0 text-gray-600 border-t">
                  <p>
                    O Detox Class é perfeito para quem já tem algum conhecimento em inglês, mas ainda enfrenta
                    dificuldades na pronúncia e na conversação. O curso foca em eliminar os vícios de pronúncia e
                    expandir seu vocabulário com palavras e frases que são realmente utilizadas no dia a dia, ajudando
                    você a se comunicar com mais naturalidade e confiança.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleQuestion(3)}
              >
                <span className="font-medium text-lg">Comecei agora, o Detox Class serve para mim?</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeQuestion === 3 ? "transform rotate-180" : ""}`}
                />
              </button>

              {activeQuestion === 3 && (
                <div className="p-6 pt-0 text-gray-600 border-t">
                  <p>
                    Sim! O Detox Class foi estruturado para atender alunos de todos os níveis. Se você está começando
                    agora, o curso vai te ajudar a construir uma base sólida, com pronúncia correta desde o início,
                    evitando vícios de linguagem comuns entre os brasileiros. As aulas são progressivas e você pode
                    avançar no seu próprio ritmo.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
            O que nossos alunos estão dizendo
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="testimonial-item bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3Dq=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Carlos Silva"
                  width={60}
                  height={60}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold">Carlos Silva</h3>
                  <div className="flex text-green-500">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "O Detox Class mudou completamente minha forma de aprender inglês. Finalmente consigo me comunicar sem
                ficar traduzindo mentalmente!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-item bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Ana Oliveira"
                  width={60}
                  height={60}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold">Ana Oliveira</h3>
                  <div className="flex text-green-500">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "As aulas são dinâmicas e o Teacher Joel explica de um jeito que fica impossível não entender. Minha
                pronúncia melhorou muito!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-item bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Pedro Santos"
                  width={60}
                  height={60}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold">Pedro Santos</h3>
                  <div className="flex text-green-500">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Estudei inglês por anos e nunca consegui me comunicar bem. Com o Detox Class, em apenas 3 meses já
                notei uma diferença enorme!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comece Agora e Destrave sua Conversação!</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de alunos que já transformaram seu inglês com o Detox Class.
          </p>
          <Link
            href="https://pay.hotmart.com/E97153768V?checkoutMode=10&bid=1735001547277"
            className="cta-button inline-block bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Iniciar Agora
          </Link>
          <p className="mt-6 text-sm opacity-80">Acesso imediato após a confirmação do pagamento</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Headline%20English-yxzzTyhwANNOyPgMgDPk3O2jlOSUPO.png"
                alt="Headline English Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-lg font-bold">Headline English</span>
            </div>

            <div className="flex space-x-6">
              <Link
                href="https://www.instagram.com/headline.english?igsh=MW4yajRrYzF6b2tucQ=="
                className="hover:text-green-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/share/16LK3zpWu2/"
                className="hover:text-green-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/@HeadlineEnglish" className="hover:text-green-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://www.tiktok.com/@headlineenglish" className="hover:text-green-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Headline English. Todos os direitos reservados.
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Termos de Serviço
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <Link
          href="https://api.whatsapp.com/send/?phone=5592992770779&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20Detox%20Class%21%21&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 group"
          aria-label="Contato via WhatsApp"
        >
          <WhatsApp className="h-8 w-8 text-white" />
          <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">
            Fale conosco!
          </span>
        </Link>
      </div>
    </main>
  )
}
