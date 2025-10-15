<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">
                Agenda de la Presentación
            </h2>
            
            <div class="max-w-4xl mx-auto space-y-4">
                <div 
                    v-for="(item, index) in agendaItems" 
                    :key="index"
                    class="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-xl hover:bg-white/15 transition-all duration-300"
                    :style="{ animationDelay: `${index * 0.1}s` }"
                >
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-gradient-to-br from-primary-purple to-secondary-purple rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-lg">
                            {{ index + 1 }}
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">{{ item.titulo }}</h3>
                            <p class="text-white/80 text-sm leading-relaxed">{{ item.descripcion }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
const agendaItems = [
    {
        titulo: 'Contexto',
        descripcion: 'La Economía de Creadores y sus Desafíos'
    },
    {
        titulo: 'Problema',
        descripcion: '¿Por qué el bienestar del usuario se degrada?'
    },
    {
        titulo: 'Estado del Arte y Contribución',
        descripcion: '¿Qué se ha hecho y qué aporta este paper?'
    },
    {
        titulo: 'Solución Propuesta',
        descripcion: 'El juego C³ y los mecanismos de intervención'
    },
    {
        titulo: 'Evaluación',
        descripcion: 'Experimentos Offline y Online'
    },
    {
        titulo: 'Conclusiones y Discusión',
        descripcion: 'Resultados y trabajo futuro'
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
