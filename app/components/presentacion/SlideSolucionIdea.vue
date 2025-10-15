<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">
                La Solución: 
                <span class="relative whitespace-nowrap inline-block mx-1">
                    <span class="absolute bg-white -left-1 -top-0.5 -bottom-0.5 -right-1 -rotate-1"></span>
                    <span class="relative text-secondary-purple px-1">Intervenir para Guiar</span>
                </span>
            </h2>
            
            <div class="max-w-5xl mx-auto space-y-6">
                <div class="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-6 rounded-xl">
                    <div class="flex items-start gap-4">
                        <div class="w-16 h-16 bg-gradient-to-br from-primary-purple to-secondary-purple rounded-xl flex items-center justify-center flex-shrink-0 text-3xl">
                            💡
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-3">La Idea Central</h3>
                            <p class="text-white/90 text-lg leading-relaxed">
                                Si los creadores se agrupan en torno a usuarios "populares", la plataforma debe 
                                hacer que los usuarios "desatendidos" parezcan más atractivos. ¿Cómo? 
                                <span class="font-bold text-preuai-green">Aumentando su importancia percibida.</span>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl">
                    <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-6 rounded-2xl">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">⚖️</span>
                            <h3 class="text-2xl font-bold">El Mecanismo</h3>
                        </div>
                        <p class="text-white/90 text-lg leading-relaxed">
                            La plataforma asigna un <span class="font-bold text-white">peso de importancia w(x)</span> 
                            a cada usuario (o grupo de usuarios).
                        </p>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-4 gap-3">
                    <div 
                        v-for="(paso, index) in pasos" 
                        :key="index"
                        class="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl hover:bg-white/15 transition-all duration-300"
                        :style="{ animationDelay: `${(index + 2) * 0.15}s` }"
                    >
                        <div class="w-10 h-10 bg-gradient-to-br from-preuai-green to-preuai-correct-green rounded-lg flex items-center justify-center font-bold text-lg mb-3 mx-auto">
                            {{ index + 1 }}
                        </div>
                        <p class="text-white/90 text-sm text-center leading-relaxed">{{ paso }}</p>
                    </div>
                </div>
                
                <div class="bg-white/5 border border-white/30 p-5 rounded-xl text-center">
                    <p class="text-white/70 text-sm mb-2">Visualización del efecto:</p>
                    <p class="text-lg font-bold">
                        🎯 Centro con peso bajo → Creadores se redistribuyen → 👥 Usuarios extremos atendidos
                    </p>
                </div>
            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
const pasos = [
    'Plataforma observa qué usuarios están siendo mal atendidos',
    'Aumenta el peso w(x) de esos usuarios desatendidos',
    'Este peso modifica la utilidad que los creadores perciben',
    'Creadores ahora tienen incentivo para moverse hacia usuarios ignorados'
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
