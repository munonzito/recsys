<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">
                Conclusiones y Trabajo Futuro
            </h2>
            
            <div class="max-w-5xl mx-auto space-y-6">
                <div class="bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl">
                    <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-6 rounded-2xl">
                        <div class="flex items-center gap-3 mb-5">
                            <span class="text-3xl">💡</span>
                            <h3 class="text-2xl font-bold">Resumen</h3>
                        </div>
                        <div class="space-y-3">
                            <div 
                                v-for="(punto, index) in resumen" 
                                :key="index"
                                class="bg-white/20 backdrop-blur-sm p-4 rounded-lg flex items-start gap-3"
                                :style="{ animationDelay: `${index * 0.1}s` }"
                            >
                                <div class="w-8 h-8 bg-preuai-green rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                                    {{ index + 1 }}
                                </div>
                                <p class="text-white/90 text-sm leading-relaxed">{{ punto }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-6 rounded-xl">
                    <div class="flex items-center gap-3 mb-5">
                        <span class="text-3xl">🔮</span>
                        <h3 class="text-2xl font-bold">Trabajo Futuro</h3>
                    </div>
                    <div class="grid md:grid-cols-3 gap-4">
                        <div 
                            v-for="(futuro, index) in trabajoFuturo" 
                            :key="index"
                            class="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                            :style="{ animationDelay: `${(resumen.length + index) * 0.1}s` }"
                        >
                            <div class="flex items-center justify-center mb-3">
                                <div class="w-12 h-12 bg-gradient-to-br from-primary-purple to-secondary-purple rounded-xl flex items-center justify-center text-2xl">
                                    {{ futuro.icono }}
                                </div>
                            </div>
                            <h4 class="text-base font-bold text-center mb-2">{{ futuro.titulo }}</h4>
                            <p class="text-white/80 text-xs text-center leading-relaxed">{{ futuro.descripcion }}</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-preuai-green/10 border border-preuai-green/30 p-5 rounded-xl">
                    <div class="flex items-center justify-center gap-4">
                        <span class="text-4xl">🚀</span>
                        <p class="text-lg font-bold text-center">
                            Este trabajo identifica un problema fundamental y propone una 
                            <span class="relative whitespace-nowrap inline-block mx-1">
                                <span class="absolute bg-white -left-0.5 -top-0.5 -bottom-0.5 -right-0.5 -rotate-1"></span>
                                <span class="relative text-secondary-purple px-0.5">solución elegante, práctica y probada</span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
const resumen = [
    'La competencia miope de los creadores, causada por la asimetría de información, degrada el bienestar del usuario en las plataformas.',
    'La plataforma puede (y debe) intervenir para solucionar esto, guiando a los creadores hacia usuarios desatendidos.',
    'Mecanismos como UIR, SMT, y HMT, basados en re-ponderación adaptativa de la importancia del usuario, son efectivos.',
    'HMT demostró ser una solución práctica, estable y de alto impacto tanto en simulaciones como en un entorno de producción masivo.'
];

const trabajoFuturo = [
    {
        icono: '📊',
        titulo: 'Análisis Contextual',
        descripcion: 'Analizar más a fondo los pros y contras de cada mecanismo para diferentes contextos'
    },
    {
        icono: '💰',
        titulo: 'Restricciones de Presupuesto',
        descripcion: 'Incorporar restricciones de presupuesto de la plataforma en el modelo'
    },
    {
        icono: '⚖️',
        titulo: 'Garantías de Equidad',
        descripcion: 'Asegurar explícitamente la equidad (fairness) no solo para usuarios sino también para creadores'
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

.animate-fade-in > div > div > div > div {
    animation: fade-in 0.6s ease-out backwards;
}
</style>
