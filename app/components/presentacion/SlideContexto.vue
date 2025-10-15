<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">
                El Ecosistema de las Plataformas de Contenido
            </h2>
            
            <div class="grid gap-6 max-w-5xl mx-auto mb-8">
                <div 
                    v-for="(punto, index) in puntos" 
                    :key="index"
                    class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/15 transition-all duration-300"
                    :style="{ animationDelay: `${index * 0.15}s` }"
                >
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-primary-purple to-secondary-purple rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                            {{ punto.icono }}
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">{{ punto.titulo }}</h3>
                            <p class="text-white/80 text-base leading-relaxed">{{ punto.descripcion }}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white/5 border-2 border-white/30 p-6 rounded-2xl max-w-4xl mx-auto">
                <div class="flex items-center justify-center gap-6">
                    <div class="flex items-center gap-3 text-lg font-bold">
                        <span class="text-3xl">🔄</span>
                        <div class="text-center">
                            <p>Plataforma</p>
                            <p class="text-sm text-white/60">recomienda</p>
                        </div>
                        <span class="text-2xl">→</span>
                        <div class="text-center">
                            <p>Usuario</p>
                            <p class="text-sm text-white/60">interactúa</p>
                        </div>
                        <span class="text-2xl">→</span>
                        <div class="text-center">
                            <p>Creador</p>
                            <p class="text-sm text-white/60">produce</p>
                        </div>
                        <span class="text-2xl">→</span>
                        <span class="text-3xl">🔄</span>
                    </div>
                </div>
            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
const puntos = [
    {
        icono: '💰',
        titulo: 'La Economía de Creadores',
        descripcion: 'Las plataformas online (TikTok, YouTube, etc.) son un campo de batalla económico para los creadores de contenido, que compiten por ingresos y visibilidad.'
    },
    {
        icono: '🎯',
        titulo: 'El Dilema de la Plataforma',
        descripcion: 'El objetivo principal de la plataforma es maximizar el bienestar del usuario (calidad y volumen de interacciones), lo cual está ligado a sus propios ingresos.'
    },
    {
        icono: '🔄',
        titulo: 'El Efecto Bucle',
        descripcion: 'Las estrategias de recomendación de la plataforma influyen en lo que los creadores deciden producir a continuación, alterando el ecosistema de contenido. Este ciclo a menudo se ignora en el diseño de algoritmos.'
    }
];
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out;
}

.animate-fade-in > div > div {
    animation: fade-in 0.6s ease-out backwards;
}
</style>
