<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-6">
                User Importance Reweighting
                <span class="relative whitespace-nowrap inline-block mx-1">
                    <span class="absolute bg-white -left-1 -top-0.5 -bottom-0.5 -right-1 -rotate-1"></span>
                    <span class="relative text-gray-900 px-1">(UIR)</span>
                </span>
            </h2>
            
            <div class="max-w-6xl mx-auto space-y-5 overflow-y-auto max-h-[85vh]">
                <!-- Fórmula Base -->
                <div class="bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl" :style="{ animationDelay: '0s' }">
                    <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-5 rounded-2xl">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="text-2xl">📐</span>
                            <h3 class="text-xl font-bold">Fórmula Original</h3>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                            <p class="text-lg font-mono font-bold text-white">
                                u<sub>i</sub>(s) = E<sub>x ∈ X</sub>[R(s<sub>i</sub>, x) · P<sub>i</sub>(s, x)]
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Fórmula Modificada -->
                <div class="bg-gradient-to-r from-red-600/30 to-red-500/20 p-0.5 rounded-2xl border-2 border-red-500/50" :style="{ animationDelay: '0.1s' }">
                    <div class="bg-gradient-to-br from-red-950/40 to-red-900/20 p-5 rounded-2xl">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="text-2xl">💰</span>
                            <h3 class="text-xl font-bold">Con UIR: El Cambio</h3>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                            <p class="text-lg font-mono font-bold text-white">
                                u<sub>i</sub>(s) = E<sub>x ∈ X</sub>[<span class="text-red-300 font-bold">w(x)</span> · R(s<sub>i</sub>, x) · P<sub>i</sub>(s, x)]
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Parámetros en Grid -->
                <div class="grid md:grid-cols-2 gap-4">
                    <!-- u_i(s) -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-red-500 p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.2s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">📊</div>
                            <h4 class="text-base font-bold text-white">u<sub>i</sub>(s): Utilidad del Creador</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            La ganancia que percibe el creador i. Este es el valor que queremos aumentar mediante w(x).
                        </p>
                    </div>

                    <!-- w(x) -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-red-400 p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.3s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-red-400 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">⚖️</div>
                            <h4 class="text-base font-bold text-white">w(x): Peso de Importancia</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            <span class="font-bold">El cambio clave.</span> Es el multiplicador que aumenta si x es un usuario importante/desatendido.
                        </p>
                    </div>

                    <!-- R(s_i, x) -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-yellow-500 p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.4s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-gray-900">💵</div>
                            <h4 class="text-base font-bold text-white">R(s<sub>i</sub>, x): Recompensa Base</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            La recompensa base que la plataforma paga al creador por una interacción exitosa.
                        </p>
                    </div>

                    <!-- P_i(s, x) -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-blue-400 p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.5s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">🎲</div>
                            <h4 class="text-base font-bold text-white">P<sub>i</sub>(s, x): Probabilidad de Matching</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            La probabilidad de que el contenido del creador sea elegido para este usuario.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
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
</style>
