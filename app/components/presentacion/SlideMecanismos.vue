<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">
                Tres Formas de Intervenir
            </h2>
            
            <div class="grid lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                <div 
                    v-for="(mecanismo, index) in mecanismos" 
                    :key="index"
                    class="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-5 rounded-xl hover:bg-white/15 hover:scale-105 transition-all duration-300"
                    :style="{ animationDelay: `${index * 0.15}s` }"
                >
                    <div class="flex items-center justify-center gap-3 mb-4">
                        <div class="w-14 h-14 bg-gradient-to-br from-primary-purple to-secondary-purple rounded-xl flex items-center justify-center text-3xl">
                            {{ mecanismo.icono }}
                        </div>
                    </div>
                    <h3 class="text-xl font-bold text-center mb-3">{{ mecanismo.nombre }}</h3>
                    <div class="bg-white/5 p-4 rounded-lg mb-3">
                        <p class="text-sm text-white/70 mb-2 font-semibold">Cómo funciona:</p>
                        <p class="text-white/90 text-sm leading-relaxed">{{ mecanismo.como }}</p>
                    </div>
                    <div class="bg-preuai-green/10 border border-preuai-green/30 p-4 rounded-lg">
                        <p class="text-sm text-white/70 mb-2 font-semibold">En simple:</p>
                        <p class="text-white/90 text-sm leading-relaxed italic">"{{ mecanismo.simple }}"</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-6 bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl max-w-4xl mx-auto">
                <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-5 rounded-2xl">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                            🏆
                        </div>
                        <div>
                            <p class="text-white/90 text-base leading-relaxed">
                                <span class="font-bold text-preuai-green">HMT</span> es especialmente práctico porque 
                                solo requiere cambiar un parámetro en el sistema (el tamaño del top-K).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
const mecanismos = [
    {
        icono: '💰',
        nombre: 'UIR',
        como: 'Se multiplica directamente la recompensa post-matching por el peso w(x).',
        simple: 'Si produces contenido para este usuario desatendido, te pago más'
    },
    {
        icono: '🎲',
        nombre: 'SMT',
        como: 'Se ajusta la temperatura del Softmax en el matching. Un peso w(x) más alto hace la selección "más suave" o aleatoria dentro del top-K.',
        simple: 'Para este usuario desatendido, le daré una oportunidad a más creadores de tu lista de finalistas'
    },
    {
        icono: '📏',
        nombre: 'HMT',
        como: 'Se ajusta el número de candidatos K en el top-K. Un peso w(x) más alto aumenta K.',
        simple: 'Para este usuario desatendido, en lugar de mirar a los 20 mejores, miraré a los 50 mejores'
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
