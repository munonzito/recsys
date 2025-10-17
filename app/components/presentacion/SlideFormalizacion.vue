<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-6">
                El Juego de la Competencia de Creadores 
                <span class="relative whitespace-nowrap inline-block mx-1">
                    <span class="absolute bg-white -left-1 -top-0.5 -bottom-0.5 -right-1 -rotate-1"></span>
                    <span class="relative text-secondary-purple px-1">(C³)</span>
                </span>
            </h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                <div 
                    v-for="(componente, index) in componentes" 
                    :key="index"
                    class="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
                    :style="{ animationDelay: `${index * 0.1}s` }"
                >
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 bg-gradient-to-br from-primary-purple to-secondary-purple rounded-lg flex items-center justify-center text-xl">
                            {{ componente.icono }}
                        </div>
                        <h3 class="text-lg font-bold">{{ componente.titulo }}</h3>
                    </div>
                    <p class="text-white/80 text-sm leading-relaxed">{{ componente.descripcion }}</p>
                </div>
            </div>
            
            <div class="mt-6 space-y-4 max-w-6xl mx-auto">
                <!-- Bienestar y Utilidad en la misma fila -->
                <div class="grid md:grid-cols-2 gap-4">
                    <!-- Bienestar del Usuario -->
                    <div class="bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl">
                        <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-5 rounded-2xl">
                            <div class="flex flex-col items-center text-center">
                                <div class="text-3xl mb-3">📊</div>
                                <h3 class="text-base font-bold mb-3">Bienestar del Usuario</h3>
                                <div class="bg-white/10 p-4 rounded-lg mb-3 font-mono text-lg text-white/90 overflow-x-auto w-full">
                                    W(s) = E<sub>x ~ X</sub>[σ(s<sub>x</sub>, x)]
                                </div>
                                <p class="text-white/80 text-xs leading-relaxed">
                                    El bienestar general es la suma de qué tan relevante es el contenido que cada usuario termina viendo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Utilidad del Creador -->
                    <div class="bg-gradient-to-r from-secondary-purple to-preuai-purple p-0.5 rounded-2xl">
                        <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-5 rounded-2xl">
                            <div class="flex flex-col items-center text-center">
                                <div class="text-3xl mb-3">💰</div>
                                <h3 class="text-base font-bold mb-3">Utilidad del Creador</h3>
                                <div class="bg-white/10 p-4 rounded-lg mb-3 font-mono text-lg text-white/90 overflow-x-auto w-full">
                                    u<sub>i</sub>(s) = E<sub>x ∈ X</sub>[R(s<sub>i</sub>, x) · P<sub>i</sub>(s, x)]
                                </div>
                                <p class="text-white/80 text-xs leading-relaxed">
                                    La ganancia de un creador es la recompensa que recibe (R), multiplicada por la probabilidad (P) de que su contenido sea mostrado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comportamiento del Creador -->
                <div class="bg-preuai-green/10 border border-preuai-green/30 p-4 rounded-2xl">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-preuai-green rounded-lg flex items-center justify-center flex-shrink-0 text-xl">
                            🧠
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2">Comportamiento del Creador</h3>
                            <p class="text-white/90 text-sm leading-relaxed">
                                Se asume que los creadores <span class="font-bold">no son genios estratégicos</span>. 
                                Simplemente hacen pequeños cambios locales para ver si su utilidad mejora, un proceso 
                                llamado <span class="font-bold text-preuai-green">Local Better Response (LBR)</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
const componentes = [
    {
        icono: '👥',
        titulo: 'Jugadores',
        descripcion: 'n creadores de contenido'
    },
    {
        icono: '🎬',
        titulo: 'Acciones (sᵢ)',
        descripcion: 'El tipo de contenido que un creador i decide producir (representado como un vector)'
    },
    {
        icono: '⭐',
        titulo: 'Relevancia σ(s,x)',
        descripcion: 'Qué tan bueno es un contenido s para un usuario x'
    },
    {
        icono: '🔗',
        titulo: 'Función de Matching',
        descripcion: 'La plataforma muestra el top-K más relevante, elige uno mediante Softmax'
    },
    {
        icono: '💰',
        titulo: 'Utilidad del Creador uᵢ(s)',
        descripcion: 'Ganancia esperada que depende de la probabilidad de matching y la recompensa'
    },
    {
        icono: '🎯',
        titulo: 'Comportamiento',
        descripcion: 'Local Better Response (LBR): pequeños cambios para mejorar utilidad'
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
