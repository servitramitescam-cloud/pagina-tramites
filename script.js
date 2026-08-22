// Manejo del formulario de contacto
const form = document.querySelector('.contacto-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const nombre = form.querySelector('input[type="text"]').value;
    const correo = form.querySelector('input[type="email"]').value;
    const telefono = form.querySelector('input[type="tel"]').value;
    const mensaje = form.querySelector('textarea').value;
    
    // Validar campos
    if (nombre && correo && mensaje) {
        // Crear el mensaje de WhatsApp
        const textoWhatsApp = encodeURIComponent(
            `Hola SERVITRAMITES,\n\nMi nombre es: ${nombre}\nMi correo es: ${correo}\nMi teléfono: ${telefono}\n\nMensaje:\n${mensaje}`
        );
        
        // Redirigir a WhatsApp
        window.open(`https://wa.me/573238593254?text=${textoWhatsApp}`, '_blank');
        
        // Limpiar formulario
        form.reset();
        
        alert('¡Mensaje enviado! Pronto nos pondremos en contacto contigo.');
    } else {
        alert('Por favor completa todos los campos requeridos.');
    }
});

// Efecto de scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observer a elementos de servicios y trámites
document.querySelectorAll('.servicio-card, .tramite-item').forEach(el => {
    observer.observe(el);
});

// Agregar animación CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .servicio-card, .tramite-item {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Cambiar color de navbar en scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

console.log('✅ SERVITRAMITES - Gestión Empresarial 360 cargado correctamente');
console.log('📞 Teléfono: +57 3238593254');
console.log('📧 Correo: servitramitescam@gmail.com');